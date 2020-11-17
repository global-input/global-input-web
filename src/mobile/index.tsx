import React, { useCallback, useEffect } from 'react';

import * as globalInput from 'global-input-react';////global-input-react////

import { useHistory } from 'react-router-dom';

////main////

import { config } from '../configs';

import * as storage from '../storage';

import { AppContainer, RowCenter, FormContainer, TextButton, QRCodeContainer, DisplayErrorMessage, MessageContainer } from '../app-layout';



interface ControlledContainerProps {
    domain: string;
    title: string;
    notConnected?: React.ReactNode;
    errorMessage?: string;
}


export const useMobile = (initData: globalInput.InitData | (() => globalInput.InitData), autoConnectWhenConnected: boolean = false) => {
    const connectionSettings = storage.loadConnectionSettings();
    const history = useHistory();
    const options: globalInput.ConnectOptions = {
        url: connectionSettings.url,////use your own server"
        apikey: connectionSettings.apikey,
        securityGroup: connectionSettings.securityGroup
    };
    if (typeof initData === 'function') {
        initData = initData();
    }
    useEffect(() => {
        addPageContent(initData);
    });
    let autoConnect = true;
    if (autoConnectWhenConnected) {
        autoConnect = globalInput.getGlobalInputState().isConnected || globalInput.getGlobalInputState().isReady;
    }


    const mobile = globalInput.useGlobalInputApp({
        initData, options, codeAES: connectionSettings.codeKey
    }, autoConnect);

    const sendInitData = mobile.sendInitData;
    mobile.sendInitData = (initData) => {
        addPageContent(initData);
        sendInitData(initData);
    };


    const setOnFieldChange = useCallback((onFieldChange: (field: globalInput.FormField) => void) => {
        mobile.setOnchange(({ field }) => {
            if (handlePageNavigate(field, history)) {
                return;
            }
            onFieldChange(field);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mobile.setOnchange]);

    ////dev-test codeData



    // eslint-disable-next-line react-hooks/exhaustive-deps
    const restart = useCallback(() => mobile.restart(), [mobile.restart]);

    const disconnectButton = (<TextButton onClick={restart} label="Disconnect" />);


    const ControlledContainer: React.FC<ControlledContainerProps> = useCallback(({ domain, title, notConnected, errorMessage, children }) => (
        <AppContainer title={title} domain={domain}>
            {mobile.isConnectionDenied && (
                <FormContainer>
                    <MessageContainer>You can only use one mobile app per session. Disconnect to start a new session.</MessageContainer>
                    <RowCenter>

                        {disconnectButton}
                    </RowCenter>
                </FormContainer>

            )}
            {mobile.isReady && (<QRCodeContainer><mobile.ConnectQR /></QRCodeContainer>)}
            {(mobile.isError || errorMessage) ? (<DisplayErrorMessage errorMessage={errorMessage ? errorMessage : mobile.errorMessage} />) : (mobile.isConnected && children)}
            {(!mobile.isConnected) && notConnected}

        </AppContainer>
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [mobile.isConnectionDenied, mobile.isError, mobile.isConnected, mobile.isReady, mobile.disconnect, mobile.ConnectQR, mobile.errorMessage]);

    return { ...mobile, ControlledContainer, disconnectButton, setOnFieldChange };
};



export const userWithDomainAsFormId = (initData: globalInput.InitData) => {
    if (initData?.form?.domain && initData?.form?.fields?.length) {
        const textFields = initData.form.fields.filter(f => {
            if ((!f.type) || f.type === 'text') {
                if (f.nLines && f.nLines > 1) {
                    return false;
                }
                return true;
            }
            return false;
        });
        if (!textFields.length) {
            return null;
        }
        initData.form.id = `###${textFields[0].id}###@${initData.form.domain}`;
    }
};
const FIELDS = {
    home: {
        id: 'back-to-website-home',
        type: 'button',
        label: 'Home',
        icon: 'home',
        viewId: "row8"
    },
    encryption: {
        id: "mobile-encryption",
        type: "button",
        label: 'Mobile Encryption'
    },
    transferForm: {
        id: "transfer-form-example",
        type: 'button',
        label: 'Transfer Form Data'
    },
    secondScreen: {
        id: 'second-screen-example',
        type: 'button',
        label: 'Second Screen Example'
    },
    game: {
        id: 'game-control-example',
        type: 'button',
        label: 'Mobile Control Example'
    },
    sendMessage: {
        id: 'send-message-example',
        type: 'button',
        label: 'Send Message Example'
    },
    contentTransfer: {
        id: 'content-transfer-example',
        type: 'button',
        label: 'Content Transfer Example'
    }

};
const addPageContent = (initData) => {
    if (initData.id === 'website-home') {
        initData.form.fields.indexOf(FIELDS.encryption) === -1 && initData.form.fields.push(FIELDS.encryption);
        initData.form.fields.indexOf(FIELDS.transferForm) === -1 && initData.form.fields.push(FIELDS.transferForm);
        initData.form.fields.indexOf(FIELDS.secondScreen) === -1 && initData.form.fields.push(FIELDS.secondScreen);
        initData.form.fields.indexOf(FIELDS.game) === -1 && initData.form.fields.push(FIELDS.game);
        initData.form.fields.indexOf(FIELDS.sendMessage) === -1 && initData.form.fields.push(FIELDS.sendMessage);
        initData.form.fields.indexOf(FIELDS.contentTransfer) === -1 && initData.form.fields.push(FIELDS.contentTransfer);

    }
    else {
        initData.form.fields.indexOf(FIELDS.home) === -1 && initData.form.fields.push(FIELDS.home);
    }
}
const handlePageNavigate = (field, history) => {
    switch (field.id) {
        case FIELDS.home.id:
            history.push('/');
            break;
        case FIELDS.encryption.id:
            history.push(config.paths.examples.mobileEncryption.path);
            break;
        case FIELDS.transferForm.id:
            history.push(config.paths.examples.transferForm.path);
            break;
        case FIELDS.secondScreen.id:
            history.push(config.paths.examples.mediaPlayer.path);
            break;
        case FIELDS.game.id:
            history.push(config.paths.examples.gameControl.path);
            break;
        case FIELDS.sendMessage.id:
            history.push(config.paths.examples.sendMessage.path);
            break;
        case FIELDS.contentTransfer.id:
            history.push(config.paths.examples.contentTransfer.path);
            break;


        default:
            return false;
    }
    return true;
};


export type { FormField, FieldValue } from 'global-input-react';////global-input-react////
