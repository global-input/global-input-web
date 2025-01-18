import React, {useState, useRef, useEffect} from 'react';
import {createMessageConnector} from 'global-input-message';
import Switch from "react-switch";
import {styles, deviceDetector} from './styles';

import {appdata, globalInputSettings} from '../store';
import TabMenu  from '../components/menu/TabMenu';
import IconButton from '../components/buttons/IconButton';



import eyeTextConfig from '../configs/eyeTextConfig';
import menusConfig from '../configs/menusConfig';




import {Scanner} from 'global-input-scanner';

import {logger} from 'global-input-logging';




let ScannerComponent=Scanner;




const initialState = {
  message: '',
  content: '',
  inputActive: true
};

const openBrowser = data => {
  if (
    data.content &&
    data.content.startsWith &&
    (data.content.startsWith('http://') || data.content.startsWith('https://'))
  ) {
    window.open(data.content,'_blank');    
  }
};
const  parseAppLaunchURL=(url)=>{
  if (!url || !(url.startsWith('http://') || url.startsWith('https://')) || !url.includes('global-input-app/mobile-app')) {
    return { code: null, session: null };
  }
  const params = new URLSearchParams(url);
  const code = params.get('code');
  const session = params.get('session');
  
  return { code, session, url:params.get('url') };

}
const sendAppLaunchedEvent = (url, session, code) => {    
  const newUrl = new URL(url + "/global-input/app/launched");
  if (session) newUrl.searchParams.append('session', session);
  if (code) newUrl.searchParams.append('code', code);


  fetch(newUrl.toString())
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);          
      })
      .catch((error) => {
          logger.error('Error in sendAppLaunchedEvent:'+url, error);
      });
};



const GlobalInputEye =  ({
  toHelpScreen,
  menuItems,
  toImportProtectedEncryptionKey,
  toImportNotProtectedEncryptionKey,
  toGlobalInput,
  toImportSettingsData,
}) => {
  
  const lastCodeDataProcessed = useRef(null);
  const [data, setData] = useState(initialState);

  const setContentAndMessage = (content, message) =>
    setData({...data, content, message});

  const setInputActive = inputActive => setData({...data, inputActive});

  const copyContentToClipboard = () => {    
    navigator.clipboard.writeText(data.content);
    setContentAndMessage('', '');
  };

  

  const isDisplayMessage = () => {
    return data.message || data.content;
  };
  const clearContentAndMessage = () => {
    setContentAndMessage(null, null);
  };


  const onCodeDataReceived = async code => {
    if ( (!code) || (code.length === 0) ) {
      return;
    }
    
    for(let i=0;i<code.length;i++){                      
        if(!code[i].rawValue){
          logger.log("no data in the qr code:"+i);
            continue;
        }
        const codedata = code[i].rawValue;    
        const  currentTime = new Date().getTime();
        if (lastCodeDataProcessed.current) {
            if (currentTime - lastCodeDataProcessed.current.lastTime < 2000) {
                return;                
            }            
         }    
        lastCodeDataProcessed.current = {
            lastTime: currentTime,
            codedata,
        };
        if (!data.inputActive) {
            setContentAndMessage(codedata, eyeTextConfig.inputDisabled.display);
            return;
        }        
        if (appdata.isActiveEncryptionKeyEncryptedMessage(codedata)) {
          try{      
            const decryptedContent = await appdata.decryptCodeDataWithAnyEncryptionKey(codedata);
            if (decryptedContent) {
                  setContentAndMessage(decryptedContent, eyeTextConfig.password.success);
            } else {
              setContentAndMessage(codedata, eyeTextConfig.password.failed);
            }
          }catch(error){
            setContentAndMessage(codedata, eyeTextConfig.password.failed);
            logger.error("error in decrypting the content:",error);

          }
            return;
        } else if (appdata.isProtectedMasterEncryptionKey(codedata)) {
            toImportProtectedEncryptionKey(codedata);
            return;
        } else if (appdata.isMasterEncryptionKeyCodedata(codedata)) {
            const encryptionKeyToBeImported = appdata.decryptExportedEncryptionKey(codedata);
            if (encryptionKeyToBeImported) {
                toImportNotProtectedEncryptionKey(encryptionKeyToBeImported);
                return;
            }
        }
        const launchData=parseAppLaunchURL(codedata);
        if (launchData.url && launchData.session && launchData.code) {
          setContentAndMessage("Please scan the QR Code displayed", "Global Input App Launched");
          try{
          sendAppLaunchedEvent(launchData.url, launchData.session, launchData.code);
          }
          catch(error){
            logger.error("error in sending app launched event:"+launchData.url,error);
          }
          return;
        }
        const connector = createMessageConnector();
        const codeAES = globalInputSettings.getCodeAES();
        const options = {
            onInputCodeData: toGlobalInput,
            onPairing: toImportSettingsData,
            onError: message => {
                setContentAndMessage(codedata, eyeTextConfig.inputDisabled.display);
            },
        };
        if (codeAES) {
            options.codeAES = codeAES;
        }
        connector.processCodeData(codedata, options);
      }
  };

  const renderHeader = () => {
    if (isDisplayMessage()) {
      return null;
    }
    var title = eyeTextConfig.title.enabled;
    if (!data.inputActive) {
      title = eyeTextConfig.title.disabled;
    }
    var textToDisplay = eyeTextConfig.looking.disabled;
    if (data.inputActive) {
      textToDisplay = eyeTextConfig.looking.enabled;
    }
    var headerStyle = styles.header;
    var titleContainer = styles.titleContainer;
    var helpContainer = styles.helpContainer;
    var titleText = styles.titleText;

    if (deviceDetector.isLandscapeMode()) {
      headerStyle = styles.headerLandscape;
      titleContainer = styles.titleContainerLandscape;
      helpContainer = styles.helpContainerLandscape;
      if (deviceDetector.isLandScapeScreenWidthSmall()) {
        titleText = styles.titleTextSmall;
      }
    }

    return (
      <div style={headerStyle}>
        <div style={titleContainer}>
          <span style={titleText}>
            {title}
          </span>
          <div style={styles.buttonContainer}>
            
            <Switch onChange={setInputActive} checked={data.inputActive} />
          </div>
        </div>
        <div style={styles.lookingContainer}>
          <span style={styles.lookingText}>
            {textToDisplay}
          </span>
        </div>
        <div style={helpContainer}>
          <IconButton
            label={menusConfig.help.menu.label}
            image={menusConfig.help.menu.image}
            onPress={toHelpScreen}
          />
        </div>
      </div>
    );
  };

  const renderDisplayCodeDataContent = () => {
    if (isDisplayMessage()) {
      var title = data.message;
      var content = data.content;
      if (!title) {
        title = 'Code Data';
      } else if (!content) {
        content = data.content;
        title = 'Error Message';
      }
      var codeDisplayContent = styles.codeDisplayContent;
      if (deviceDetector.isLandscapeMode()) {
        codeDisplayContent = styles.codeDisplayContentLandscape;
      }

      return (
        <div style={styles.codeDisplayContainer}>
          <div style={codeDisplayContent}>
            <div style={styles.codeDisplayHeader}>
              <span style={styles.codeDisplayTitle}>{title}</span>
            </div>
            <div style={styles.codeDisplayCodeContent}>
              
                <span style={styles.codeDisplayText}>{content}</span>
              
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  


  useEffect(() => {
    // Get the query parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const session = params.get('session');
    const code = params.get('code');
    const url = params.get('url');
    

    if(url && session && code){
      const decodedUrl = decodeURIComponent(url); // Decode the URL
      console.log(decodedUrl);
      try{
      sendAppLaunchedEvent(decodedUrl, session, code);    
      }
      catch(error){
        logger.error("error in sending app launched event:"+url,error);
      }
    }
}, []);  

if (isDisplayMessage()) {
    const orgMenuItems = menuItems;
    menuItems = [
      {
        menu: menusConfig.dismiss.menu,
        onPress: clearContentAndMessage,
      },        
      orgMenuItems[orgMenuItems.length - 1],
      {
        menu: menusConfig.clipboardCopy.menu,
        onPress: copyContentToClipboard,
      },

    ];
    if (
      data.content &&
      data.content.startsWith &&
      (data.content.startsWith('http://') ||
        data.content.startsWith('https://'))
    ) {
      menuItems.splice(1, 0, {
        menu: menusConfig.visitUrl.menu,
        onPress: () => openBrowser(data),
      });
    }
}
const onError = (error) => {
  setContentAndMessage('Error:'+error, 'Error:'+error);
};


////processCodeData////
return (
  <div style={styles.container}>
    <ScannerComponent
    onScan={onCodeDataReceived}
    onError={onError}
    allowMultiple={true}
    scanDelay={1000}
    components={{ audio:false}}
    // constraints={{ facingMode: 'environment' }}
    // containerStyle={{ width: '100%' }}
    // videoStyle={{ width: '100%' }}
  />
    {renderHeader()}

    {renderDisplayCodeDataContent()}

    <TabMenu
      menuItems={menuItems}
      selected={menusConfig.eye.menu}
      transparent={true}
    />
  </div>
);
  
};

export default GlobalInputEye;