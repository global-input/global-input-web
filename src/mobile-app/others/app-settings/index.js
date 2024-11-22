import React, { useState, useEffect } from 'react';
import { createMessageConnector } from 'global-input-message';


import { styles } from "./styles";
import { QRCodeView } from "../../qr-code-view";


import settingsTextConfig from "../../configs/settingsTextConfig";
import menusConfig from "../../configs/menusConfig";


import EditorWithTabMenu from "../../components/menu/EditorWithTabMenu";
import CheckBoxButton from "../../components/buttons/CheckBoxButton";

import TextInputField from "../../components/input/TextInputField";


import { appdata, store } from "../../store";

const ACT_TYPE = {
  MAIN: 1,
  EXPORT_AS_QR_CODE: 2
}
const getStateFromProps = () => {
  const appLoginTimeout = "" + (appdata.getAppLoginTimeout() / 1000);


  const preserveSession = appdata.getPreserveSession();
  const proxyURL = appdata.getProxyURL();
  const apikey = appdata.getApikey();
  const securityGroup = appdata.getSecurityGroup();
  const actType = ACT_TYPE.MAIN;
  return { loginTimeoutOnBackground: appLoginTimeout, errorMessage: "", preserveSession, proxyURL, apikey, actType, securityGroup };
}
const Others = ({ onBack }) => {
  const [compData, setCompData] = useState(() => getStateFromProps());

  const setLoginTimeoutOnBackground = (loginTimeoutOnBackground) => setCompData({ ...compData, loginTimeoutOnBackground });
  const setProxyURL = proxyURL => setCompData({ ...compData, proxyURL });
  const setAPIKey = apikey => setCompData({ ...compData, apikey });
  const setSecurityGroup = securityGroup => setCompData({ ...compData, securityGroup });
  const onError = errorMessage => setCompData({ ...compData, errorMessage });
  const onCancel = () => onBack();
  const toExportAsQRCode = () => setCompData({ ...compData, actType: ACT_TYPE.EXPORT_AS_QR_CODE });
  const toMain = () => setCompData({ ...compData, actType: ACT_TYPE.MAIN });
  const updateLoginTimeoutBackground = () => {
    var loginTimeoutOnBackground = compData.loginTimeoutOnBackground.trim();
    var loginTimeoutOnBackgroundValue = parseInt(loginTimeoutOnBackground) * 1000;
    appdata.setAppLoginTimeout(loginTimeoutOnBackgroundValue);
  };
  const updatePreserveSession = () => {
    var preserveSession = compData.preserveSession;
    if (preserveSession && appdata.getPreserveSession()) {
      return null;
    }
    if ((!preserveSession) && (!appdata.getPreserveSession())) {
      return null;
    }
    appdata.setPreserveSession(preserveSession);
  };

  const isLoginTimeoutBackgroundChanged = () => {
    var loginTimeoutOnBackground = compData.loginTimeoutOnBackground.trim();
    if (!loginTimeoutOnBackground.length) {
      return false;
    }
    var appLoginTimeout = appdata.getAppLoginTimeout() / 1000;
    var loginTimeoutOnBackgroundValue = parseInt(loginTimeoutOnBackground);
    if (loginTimeoutOnBackgroundValue === appLoginTimeout) {
      return false;
    }
    return true;
  }
  const isUpdatePreserveSessionChanged = () => {
    var preserveSession = compData.preserveSession;
    if (preserveSession && appdata.getPreserveSession()) {
      return false;
    }
    if ((!preserveSession) && (!appdata.getPreserveSession())) {
      return false;
    }
    return true;
  };
  const isWebSocketURLChanged = () => compData.proxyURL !== appdata.getProxyURL();

  const isAPIKeyChanged = () => compData.apikey !== appdata.getApikey();

  const isSecurityGroupChanged = () => compData.securityGroup !== appdata.getSecurityGroup();

  const isSettingsChanged = () => {
    return (isLoginTimeoutBackgroundChanged() ||
      isUpdatePreserveSessionChanged() ||
      isWebSocketURLChanged() ||
      isAPIKeyChanged() || isSecurityGroupChanged());
  };
  const updateProxyURL = () => appdata.setProxyURL(compData.proxyURL);
  const updateAPIKey = () => appdata.setApiKey(compData.apikey);
  const updateSecurityGroup = () => appdata.setSecurityGroup(compData.securityGroup);


  const saveSettings = () => {
    if (isLoginTimeoutBackgroundChanged()) {
      updateLoginTimeoutBackground();
    }
    if (isUpdatePreserveSessionChanged()) {
      updatePreserveSession();
    }
    if (isWebSocketURLChanged()) {
      updateProxyURL();
    }
    if (isAPIKeyChanged()) {
      updateAPIKey();
    }
    if (isSecurityGroupChanged()) {
      updateSecurityGroup();
    }
  };



  useEffect(() => {
    const ubsubsribe = store.subscribe(() => {
      setCompData(getStateFromProps());
    });
    return () => {
      ubsubsribe();
    }
  }, []);
  const renderErrorMessage = () => {
    if (compData.errorMessage) {
      return (
        <div style={styles.inputContainer}>
          <span style={styles.errorMessage}>{compData.errorMessage}</span>
        </div>
      );
    }
    else {
      return null;
    }
  };
  const renderMain = () => {
    var menuItems = [{
      menu: menusConfig.back.menu,
      onPress: onBack
    }];
    if (isSettingsChanged()) {
      menuItems.push({
        menu: menusConfig.save.menu,
        onPress: saveSettings
      });
    }

    menuItems.push({
      menu: menusConfig.qrcode.menu,
      onPress: toExportAsQRCode
    });


    return (
      <EditorWithTabMenu title={settingsTextConfig.title}
        menuItems={menuItems} selected={menusConfig.eye.menu}>
        {renderErrorMessage()}

        <div style={styles.settingItem}>
          <span style={styles.itemTitle}>{settingsTextConfig.timeOutLogin.title}</span>
          <span style={styles.itemText}>{settingsTextConfig.timeOutLogin.content}</span>
          <div style={styles.inputContainer}>
            <TextInputField
              placeholder={settingsTextConfig.timeOutLogin.placeholder}
              value={compData.loginTimeoutOnBackground}
              secureTextEntry={false}
              onChangeTextValue={setLoginTimeoutOnBackground}
              
            />
          </div>
        </div>
        <div style={styles.settingItem}>
          <span style={styles.itemTitle}>{settingsTextConfig.preserveSession.title}</span>
          <span style={styles.itemText}>{settingsTextConfig.preserveSession.content}</span>
          <div style={styles.checkboxContainer}>
            <span style={styles.optionLabel}>{settingsTextConfig.preserveSession.label}</span>
            <CheckBoxButton value={compData.preserveSession}
              display={menusConfig.checkbox.options} onChanged={preserveSession => {
                setCompData({ ...compData, preserveSession });
              }} />
          </div>

        </div>
        <div style={styles.settingItem}>
          <span style={styles.itemTitle}>{settingsTextConfig.datatransfer.title}</span>
          <span style={styles.itemText}>{settingsTextConfig.datatransfer.content}</span>
          <div style={styles.inputContainer}>
            <TextInputField
              placeholder={settingsTextConfig.datatransfer.placeholder}
              value={compData.proxyURL}
              secureTextEntry={false}
              onChangeTextValue={setProxyURL}
              
            />
          </div>
          <span style={styles.itemText}>{settingsTextConfig.datatransfer.contentApiKey}</span>
          <div style={styles.inputContainer}>
            <TextInputField
              placeholder={settingsTextConfig.datatransfer.apiplaceholder}
              value={compData.apikey}
              secureTextEntry={false}
              onChangeTextValue={setAPIKey}
              
            />
          </div>


          <span style={styles.itemText}>{settingsTextConfig.datatransfer.securityGroup.content}</span>
          <div style={styles.inputContainer}>
            <TextInputField
              placeholder={settingsTextConfig.datatransfer.securityGroup.placeholder}
              value={compData.securityGroup}
              secureTextEntry={false}
              onChangeTextValue={setSecurityGroup}

            />
          </div>

        </div>



      </EditorWithTabMenu>

    );
  };
  const renderQRCode = () => {
    var connector = createMessageConnector();
    var pairingData = connector.buildPairingData({
      proxyURL: appdata.getProxyURL(),
      apiKey: appdata.getApikey(),
      securityGroup: appdata.getSecurityGroup()
    });

    var menuItems = [{}, {
      menu: menusConfig.ok.menu,
      onPress: toMain
    }, {}];
    return (
      <QRCodeView title={settingsTextConfig.datatransfer.qrcode.title}
        help={settingsTextConfig.datatransfer.qrcode.help}
        help2={settingsTextConfig.datatransfer.qrcode.help2}
        qrcodeContent={pairingData}
        menuItems={menuItems} />
    )
  };

  if (compData.actType === ACT_TYPE.EXPORT_AS_QR_CODE) {
    return renderQRCode();
  }
  else {
    return renderMain();
  }
};

export default Others;