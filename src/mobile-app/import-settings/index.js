import React, {useState, useEffect} from 'react';
import { styles } from "./styles";

import EditorWithTabMenu from "../components/menu/EditorWithTabMenu";
import TextInputField  from "../components/input/TextInputField";
import DisplayBlockText from "../components/display-text/DisplayBlockText";

import menusConfig from "../configs/menusConfig";
import settingsTextConfig from "../configs/settingsTextConfig";
import { globalInputSettings } from "../store";


const ACT_TYPE = {
    LOADING: 0,
    SHOW_IMPORT_SETTINGS: 1,
    SETTINGS_IMPORTED: 2
};


const importSettings = action => {
    const { securityGroup, codeAES, proxyURL,apiKey } = action;
    let updated = false;
    if (securityGroup) {
        globalInputSettings.setSecurityGroup(securityGroup);
        updated = true;
    }
    if (codeAES) {
        globalInputSettings.setCodeAES(codeAES);
        updated = true;
    }
    if (proxyURL) {
        globalInputSettings.setProxyURL(proxyURL);
        updated = true;
    }
    if (apiKey) {
        globalInputSettings.setApiKey(apiKey);
        updated = true;
    }
    return updated;
};


const isAlreadyPaired = ({ securityGroup, codeAES, proxyURL, apiKey }) => {

    if (securityGroup && securityGroup !== globalInputSettings.getSecurityGroup()) {
        return false;
    }
    if (codeAES && codeAES !== globalInputSettings.getCodeAES()) {
        return false;
    }
    if (proxyURL && proxyURL !== globalInputSettings.getProxyURL()) {
        return false;
    }
    if (apiKey && apiKey !== globalInputSettings.getApiKey()) {
        return false;
    }
    return true;
};


const renderWebSocketURL = ({ action, setAction }) => (
    <div style={styles.inputContainer}>
        <TextInputField
            placeholder={settingsTextConfig.datatransfer.placeholder}
            value={action.proxyURL}
            secureTextEntry={false}
            autoCapitalize={'none'}
            onChangeTextValue={proxyURL => setAction({ ...action, proxyURL })}
        />
    </div>
);

const renderAPIKey = ({ action, setAction }) => (
    <div style={styles.inputContainer}>

        <TextInputField
            placeholder={settingsTextConfig.datatransfer.apiplaceholder}
            value={action.apiKey}
            secureTextEntry={false}
            autoCapitalize={'none'}
            onChangeTextValue={apiKey => setAction({ ...action, apiKey })}
        />
    </div>
);

const renderSecurityGroup = ({ action, setAction }) => (
    <div style={styles.inputContainer}>
        <TextInputField
            placeholder={settingsTextConfig.datatransfer.securityGroupPlaceHolder}
            value={action.securityGroup}
            secureTextEntry={false}
            autoCapitalize={'none'}
            onChangeTextValue={securityGroup => setAction({ ...action, securityGroup })}
        />
    </div>
);

const renderCodeAES = ({ action, setAction }) => (
        <div style={styles.inputContainer}>
            <TextInputField
                placeholder={settingsTextConfig.datatransfer.codeAESPlaceHolder}
                value={action.codeAES}
                secureTextEntry={false}
                autoCapitalize={'none'}
                onChangeTextValue={codeAES => setAction({ ...action, codeAES })}
            />
        </div>
    );

    const renderShowImportSettings = ({ toCameraView, action, setAction, codedata }) => {        
        const onImportSettings = () => {
            if (importSettings(action)) {
                setAction({ ...action, actionType: ACT_TYPE.SETTINGS_IMPORTED });
            }
        };
        let title = settingsTextConfig.serviceData.importSettings.title;
        let content1 = settingsTextConfig.serviceData.importSettings.content;
        let content2 = settingsTextConfig.serviceData.importSettings.content2;
        const menuItems = [{
            menu: menusConfig.back.menu,
            onPress: toCameraView
        }];

        if (isAlreadyPaired(action)) {
            title = settingsTextConfig.serviceData.settingsIdentical.title;
            content1 = settingsTextConfig.serviceData.settingsIdentical.content;
            content2 = null;
        }
        else {
            menuItems.push({ menu: menusConfig.importSingle.menu, onPress: onImportSettings });
        }

        return (
            <EditorWithTabMenu title={title}
                menuItems={menuItems} selected={menusConfig.eye.menu}>
                <DisplayBlockText content={content1} />
                {codedata.proxyURL && renderWebSocketURL({ action, setAction })}
                {codedata.apiKey && renderAPIKey({ action, setAction })}
                {codedata.securityGroup && renderSecurityGroup({ action, setAction })}
                {codedata.codeAES && renderCodeAES({ action, setAction })}
                <DisplayBlockText content={content2} />
            </EditorWithTabMenu>
        );
    };


    const renderSettingsImported = ({ toCameraView }) => {
        var menuItems = [{
            menu: menusConfig.back.menu,
            onPress: toCameraView
        }];
        return (
            <EditorWithTabMenu title={settingsTextConfig.serviceData.settingsImported.title}
                menuItems={menuItems} selected={menusConfig.eye.menu}>
                <DisplayBlockText content={settingsTextConfig.serviceData.settingsImported.content} />
            </EditorWithTabMenu>
        );

    };



    export const ImportSettingsView = ({ codedata,toCameraView}) => {
        const [action, setAction] = useState({ actionType: ACT_TYPE.LOADING });
        useEffect(() => {
            setAction({ ...codedata, actionType: ACT_TYPE.SHOW_IMPORT_SETTINGS });
        }, [codedata]);
        switch (action.actionType) {
            case ACT_TYPE.SHOW_IMPORT_SETTINGS: return renderShowImportSettings({ action, setAction, toCameraView, codedata });
            case ACT_TYPE.SETTINGS_IMPORTED: return renderSettingsImported({ toCameraView });
            default: return null;
        }
    };
    