import { createMessageConnector } from "global-input-message";
////globa_input_connector////
import * as appStore from "../store";

import deviceInputTextConfig from "../configs/deviceInputTextConfig";

import ACT_TYPE from './ACT_TYPE';
import {logger} from 'global-input-logging';

const onOutputMessageReceived = message => {
    logger.log("onOutputMessageReceived:" + message);
};
export const connect = ({ codedata, globalInputConnector, setAction, onDeviceConnected, onDisconnected, onInput }) => {
    const loadingMessage = [...deviceInputTextConfig.connector.connecting];
    if (codedata && codedata.url) {
        loadingMessage.push(deviceInputTextConfig.connector.connectMessage + ":" + codedata.url);
    }
    else {
        loadingMessage.push(deviceInputTextConfig.connector.connectMessage + "...");
    }
    setAction(action => ({
        ...action,
        actionType: ACT_TYPE.LOADING,
        title: deviceInputTextConfig.connector.title,
        message: loadingMessage
    }));
    if (globalInputConnector.current) {
        globalInputConnector.current.disconnect();
    }
    const onRegistered = () => {

        setAction(action => ({
            ...action,
            actionType: ACT_TYPE.LOADING,
            title: deviceInputTextConfig.connector.title,
            message: deviceInputTextConfig.connector.permission
        }));
    };
    const onRegisterFailed = message => {
        var reason = deviceInputTextConfig.registerFailed.message;
        if (message && message.reason) {
            reason = reason + ": " + message.reason;
        }
        else {
            if (codedata) {
                reason += " The Websocket URL: " + codedata.url;
            }
        }
        setAction(action => ({ ...action, actionType: ACT_TYPE.ERROR, message: reason }));
    };
    const onReceiverDisconnected = () => {
        onDisconnected();
        logger.log("application disconnected......");
        disconnect({ globalInputConnector });
    };
    const onInputPermissionResult = message => {
        const setErrorMessage = (title, message) => {
            setAction(action => ({ ...action, actionType: ACT_TYPE.ERROR, title, message }));
        };        
        if (!message.allow) {
            let reason = deviceInputTextConfig.permissionDenied.message;
            if (message && message.reason) {
                reason = message.reason;
                if (reason === 'The session does not exist') {
                    reason = deviceInputTextConfig.permissionDenied.sessionDoesNotExists;                    
                }
            }
            appStore.removeCodeDataFromHistory(codedata);            
            setErrorMessage(deviceInputTextConfig.registerFailed.title, reason);
            return;
        }
        if (!message.initData) {
            setErrorMessage(deviceInputTextConfig.initDataMissing.title, deviceInputTextConfig.initDataMissing.message);
            return;
        }
        var initData = message.initData;
        if (!initData.dataType) {
            initData.dataType = "form";
        }
        if (!initData.action) {
            initData.action = "input";
        }
        onDeviceConnected(initData);
    };
    const onError = error => {
        if(error?.indexOf('refused-to-connect')>=0){
            appStore.removeCodeDataFromHistory(codedata);
        }
        const reason = error;
        
        setAction(action => ({ ...action, actionType: ACT_TYPE.ERROR, message: reason }));
    }


    globalInputConnector.current = createMessageConnector();
    var options = globalInputConnector.current.buildOptionsFromInputCodedata(codedata, {
        onInputPermissionResult,
        onRegistered,
        onReceiverDisconnected,
        onInput,
        onRegisterFailed,
        onError,
        onOutputMessageReceived
    });
    const codeAES = appStore.globalInputSettings.getCodeAES();
    if (codeAES) {
        globalInputConnector.current.setCodeAES(codeAES);
    }
    if (!options.securityGroup) {
        options.securityGroup = appStore.globalInputSettings.getSecurityGroup();
    }
    const client = appStore.globalInputSettings.getClient();


    if (client) {
        options.client = client;
    }
    else {
        options.client = "ginput_" + globalInputConnector.current.client
        appStore.globalInputSettings.setClient(options.client);
    }

    globalInputConnector.current.connect(options);////connect////
};
export const disconnect = ({ globalInputConnector }) => {
    if (globalInputConnector.current) {
        globalInputConnector.current.disconnect();
        globalInputConnector.current = null;
    }
};






export const sendFieldToDevice = ({ globalInputConnector, field, index }) => {
    if (globalInputConnector.current) {        
        if(index===undefined || index===null|| index<0 ){
            globalInputConnector.current.sendInputMessage(field.value, index,field.id);
        }
        else{
            globalInputConnector.current.sendInputMessage(field.value, index);
        }
    }
};
export const getPairingData = ({ globalInputConnector }) => {
    if (globalInputConnector.current) {
        return globalInputConnector.current.buildPairingData({
            proxyURL: appStore.globalInputSettings.getProxyURL(),
            apiKey: appStore.globalInputSettings.getApiKey(),
            securityGroup: appStore.globalInputSettings.getSecurityGroup(),
            codeAES: appStore.globalInputSettings.getCodeAES()
        })


    }


};
