import { createMessageConnector } from "../global-input-message";
////globa_input_connector////
import { appdata } from '../store';
import { deviceInputTextConfig } from "../configs";

import ACT_TYPE from './ACT_TYPE';

const onOutputMessageReceived = message => {
    console.log("onOutputMessageReceived:" + message);
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
        console.log("application disconnected......");
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
    const codeAES = appdata.getCodeAES();
    if (codeAES) {
        globalInputConnector.current.setCodeAES(codeAES);
    }
    if (!options.securityGroup) {
        options.securityGroup = appdata.getSecurityGroup();
    }
    const client = appdata.getClient();


    if (client) {
        options.client = client;
    }
    else {
        options.client = "ginput_" + this.connector.client
        appdata.setClient(options.client);
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
            proxyURL: appdata.getProxyURL(),
            apiKey: appdata.getApikey(),
            securityGroup: appdata.getSecurityGroup(),
            codeAES: appdata.getCodeAES()
        })


    }


};
