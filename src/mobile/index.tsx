import React, { useCallback, useState } from 'react';

import * as globalInput from 'global-input-react';////global-input-react////

import appIcon from './app-icon.png';

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


export const useMobile = (initData: globalInput.InitData | (() => globalInput.InitData), initialConnect: boolean = true) => {
    const [connect, setConnect] = useState(initialConnect);

    const connectionSettings = storage.loadConnectionSettings();
    const history = useHistory();

    const enableConnect = useCallback(() => setConnect(true), []);
    const disableConnect = useCallback(() => setConnect(false), []);
    const toggleConnect = useCallback(() => setConnect(connect => !connect), []);


    const options: globalInput.ConnectOptions = {
        url: connectionSettings.url,////use your own server"
        apikey: connectionSettings.apikey,
        securityGroup: connectionSettings.securityGroup
    };

    const initDataEnriched = addPageContent(initData);
    const mobile = globalInput.useGlobalInputApp({
        initData: initDataEnriched, options, codeAES: connectionSettings.codeKey
    }, connect);


    const sendInitData = (initData) => {
        const initDataEnriched = addPageContent(initData);
        mobile.sendInitData(initDataEnriched);
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



    const ConnectQR: React.FC<globalInput.ConnectQRProps> = ({ label }) => {
        if (!connect) {
            return null;
        }
        if (mobile.isConnected) {
            return null;
        }
        return (
            <div style={styles.qrContainer}>
                <div style={styles.qrCode}>
                    <mobile.ConnectQR label={label} />
                </div>
            </div>
        );
    };

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

    return {
        ...mobile, ControlledContainer, disconnectButton, setOnFieldChange, sendInitData, ConnectQR, enableConnect, disableConnect,
        toggleConnect, connect
    };
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
    silent?: boolean;
    notEnabled?: React.ReactNode;
}


export const MobileConnect: React.FC<MobileConnectProps> = ({ initData, silent = true }) => {
    const mobile = useMobile(initData, false);
    mobile.setOnFieldChange(field => { });
    if (silent) {
        return null;
    }
    const qrCodeLabel = (
        <div style={styles.labelContainer}>
            <div></div>
            <div style={styles.label}>
                Scan with <a href="https://globalinput.co.uk/global-input-app/get-app" rel="noopener noreferrer" target="_blank"> Global Input App</a>
            </div>
            <div>
                <button onClick={mobile.disableConnect}>Close</button>
            </div>
        </div>

    );
    if ((!mobile.connect) && (!mobile.isConnected)) {
        return (
            <div style={styles.buttonContainer}>
                <button style={styles.connectButton} onClick={mobile.enableConnect}>
                    <img src={appIcon} alt="global input app icon" />
            Connect
            </button>
            </div>

        )
    }
    else {
        return (<mobile.ConnectQR label={qrCodeLabel} />);
    }
}
const styles = {
    qrContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 30,
        position: "absolute",
        zIndex: 100,


    } as React.CSSProperties,
    qrCode: {
        display: "flex",
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "white",
        border: "1px solid blue"
    },
    buttonContainer: {
        flex: 'display',
        flexDirection: 'row' as 'row',
        justifyContent: 'flex-start',
        width: "100%"
    },
    connectButton: {
        textDecoration: "none",
        fontSize: 11,
        borderRadius: 8,
        color: "#4281BD",
        backgroundColor: "white",
        whiteSpace: "nowrap" as 'nowrap',
        padding: 5,
        minWidth: 20,
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
        width: "100%",
        alignItems: 'flex-end'
    },
    closeButton: {
        backgroundColor: "white",
        borderWidth: 0,
        marginRight: 20,
        color: "#4880ED"
    }


}

export type { FormField, FieldValue } from 'global-input-react';////global-input-react////
