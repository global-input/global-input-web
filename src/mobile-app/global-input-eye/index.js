import React, {useState, useRef, useEffect, useCallback} from 'react';
import {createMessageConnector} from 'global-input-message';
import Switch from "react-switch";
////globa_input_eye////
import {styles, deviceDetector} from './styles';

import {appdata, globalInputSettings} from '../store';
import TabMenu  from '../components/menu/TabMenu';
import IconButton from '../components/buttons/IconButton';



import eyeTextConfig from '../configs/eyeTextConfig';
import menusConfig from '../configs/menusConfig';



import {
  PendingAuthorizartionView,
  NotAuthorizedView,
} from '../camera-not-authorized';

import {Scanner} from '../tests';

import {logger} from '../logging';






const initialState = {
  message: '',
  content: '',
  inputActive: true,
  modal: '',
  modaldata: {},
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

const GlobalInputEye =  ({
  toHelpScreen,
  isAuthorized,
  isAuthorizationChecked,
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

  const copyContentToClibboard = () => {    
    navigator.clipboard.writeText(data.content);
    setContentAndMessage('', '');
  };

  const layoutChanged = event => {
    if (event && event.nativeEvent && event.nativeEvent.layout) {
      setData({...data});
    }
  };
  const renderPendingAuthorizartionView = () => {    
    return <PendingAuthorizartionView menuItems={menuItems} />;
  };
  const renderNotAuthorizedView = () => {
    return <NotAuthorizedView menuItems={menuItems} />;
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
        title = 'Eror Message';
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
            <div style={styles.condeDisplayCodeContent}>
              
                <span style={styles.codeDisplayText}>{content}</span>
              
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderCameraView = () => {
    
    
    if (isDisplayMessage()) {            
      menuItems = [
        {
          menu: menusConfig.dismiss.menu,
          onPress: clearContentAndMessage,
        },
        {
          menu: menusConfig.clipboardCopy.menu,
          onPress: copyContentToClibboard,
        },
      ];
      if (
        data.content &&
        data.content.startsWith &&
        (data.content.startsWith('http://') ||
          data.content.startsWith('https://'))
      ) {
        menuItems.splice(1, 0, {
          menu: menusConfig.visiturl.menu,
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
        <Scanner
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
  if (isAuthorized) {
    return renderCameraView();
  } else if (!isAuthorizationChecked) {
    return renderPendingAuthorizartionView();
  } else {
    return renderNotAuthorizedView();
  }
};

export default GlobalInputEye;