import React, { useCallback, useState } from 'react';

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


export const useMobile = (initData: globalInput.InitData | (() => globalInput.InitData), connect?: boolean) => {
    const connectionSettings = storage.loadConnectionSettings();
    const history = useHistory();
    const options: globalInput.ConnectOptions = {
        url: connectionSettings.url,////use your own server"
        apikey: connectionSettings.apikey,
        securityGroup: connectionSettings.securityGroup
    };

    const initDataEnriched = addPageContent(initData);
    const mobile = globalInput.useGlobalInputApp({
        initData: initDataEnriched, options, codeAES: connectionSettings.codeKey
    }, connect);

    const sendInitData = mobile.sendInitData;
    mobile.sendInitData = (initData) => {
        const initDataEnriched = addPageContent(initData);
        sendInitData(initDataEnriched);
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
        id: "mobile-encryption-example",
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
const addPageContent = (initData: globalInput.InitData | (() => globalInput.InitData)): globalInput.InitData => {
    if (typeof initData === 'function') {
        initData = initData();
    }
    const fields = [...initData.form.fields];
    if (initData.id === 'website-home') {
        fields.push(FIELDS.encryption);
        fields.push(FIELDS.transferForm);
        fields.push(FIELDS.secondScreen);
        fields.push(FIELDS.game);
        fields.push(FIELDS.sendMessage);
        fields.push(FIELDS.contentTransfer);
    }
    else {
        fields.push(FIELDS.home);
    }
    const form = { ...initData.form, fields };
    return { ...initData, form };
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


interface MobileConnectProps {
    initData: globalInput.InitData;
    onNotConnected?: React.ReactNode;
}
export const MobileConnect: React.FC<MobileConnectProps> = ({ initData, onNotConnected }) => {
    const [connect, setConnect] = useState(globalInput.getGlobalInputState().isConnected);
    const mobile = useMobile(initData, connect);


    mobile.setOnFieldChange(field => {

    });


    const enableConnect = useCallback(() => setConnect(true), []);
    const disableConnect = useCallback(() => setConnect(false), []);

    const qrCodeLabel = (
        <div style={styles.labelContainer}>
            <div></div>
            <div style={styles.label}>
                Scan with <a href="https://globalinput.co.uk/global-input-app/get-app" rel="noreferrer" target="_blank"> Global Input App</a>
            </div>
            <button style={styles.closeButton} onClick={disableConnect}>☓</button>
        </div>
    );



    return (
        <>
            {(!connect) && (
                <div style={styles.buttonContainer}>
                    <button style={styles.connect} onClick={enableConnect}> Connect</button>
                </div>

            )}
            {(!connect) && onNotConnected}
            {connect && (!mobile.isConnected) && (<div style={styles.qrCode}><mobile.ConnectQR label={qrCodeLabel} /></div>)}
        </>
    );

}
const styles = {
    qrCode: {
        display: "flex",
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "white"
    },
    buttonContainer: {
        flex: 'display',
        flexDirection: 'row' as 'row',
        justifyContent: 'flex-start',
        width: "100%"
    },
    connect: {
        textDecoration: "none",
        fontSize: 15,
        borderRadius: 8,
        color: "#4281BD",
        backgroundColor: "white",
        whiteSpace: "nowrap" as 'nowrap',
        padding: 10,
        minWidth: 120,
        marginLeft: 20,
        marginTop: 20,
        display: "flex",
        flexDirection: "row" as 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        paddingTop: 20,
        color: "#A9C8E6", //#4880ED
    },
    labelContainer: {
        display: "flex",
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between',
        width: "100%"
    },
    closeButton: {
        backgroundColor: "white",
        borderWidth: 0,
        marginRight: 20,
        color: "#4880ED"
    }


}

export type { FormField, FieldValue } from 'global-input-react';////global-input-react////
