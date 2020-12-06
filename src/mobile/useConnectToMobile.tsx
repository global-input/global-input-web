import React, { useState, useCallback } from 'react';
import {
    ConnectButton, PopupWindow, SettingsButton, Form, InputField,
    Footer, BackButton, SaveButton, scanQRCodeLabel
} from './layout';

import { useMobile, InitData, ConnectQRProps } from './useMobile';

import * as storage from './storage';
interface MobileConnectProps {
    label?: string;
}
enum PAGES {
    CONNECT_QR,
    SETTINGS,
    PAIRING
}

export const useConnectToMobile = (initData: InitData | (() => InitData), initialConnect: boolean = true, modal = false) => {
    const [connect, setConnect] = useState(initialConnect);
    const [configId, setConFigId] = useState(1);
    const enableConnect = useCallback(() => setConnect(true), []);
    const disableConnect = useCallback(() => setConnect(false), []);
    const mobile = useMobile(initData, connect, configId);
    const [page, setPage] = useState(PAGES.CONNECT_QR);
    const editSettings = useCallback(() => setPage(PAGES.SETTINGS), []);
    const pairing = useCallback(() => setPage(PAGES.PAIRING), []);
    const connectQR = useCallback(() => setPage(PAGES.CONNECT_QR), []);
    const { isConnected, ConnectQR, PairingQR, disconnect } = mobile;
    const onSettingChanged = useCallback(() => {
        disconnect();
        setConFigId(configId => configId + 1);
    }, [disconnect]);




    const ConnectToMobile = useCallback(({ label }) => {
        if (!connect) {
            if (isConnected) {
                return null;
            }
            return (<ConnectButton onClick={enableConnect} label={label} />)
        }
        switch (page) {
            case PAGES.CONNECT_QR:
                if (isConnected) {
                    return null;
                }
                return (<PopupConnectQRCode close={disableConnect} editSettings={editSettings} ConnectQR={ConnectQR} modal={modal} />);
            case PAGES.SETTINGS:
                return (<PopupSettingsEditor close={disableConnect} back={connectQR} pairing={pairing} onSettingChanged={onSettingChanged} modal={modal} />);
            case PAGES.PAIRING:
                return (<PopupParingCode close={disableConnect} back={connectQR} PairingQR={PairingQR} modal={modal} />);
            default:
                return null;
        }

    }, [connect, isConnected, disableConnect, editSettings, enableConnect, ConnectQR, PairingQR, connectQR, pairing, page]);

    return { mobile, ConnectToMobile };
};


interface PopupConnectQRCodeProps {
    close: () => void;
    editSettings: () => void;
    ConnectQR: React.FC<ConnectQRProps>;
    modal?: boolean;
}
const PopupConnectQRCode: React.FC<PopupConnectQRCodeProps> = ({ close, editSettings, ConnectQR, modal }) => {
    const left = (<SettingsButton onClick={editSettings} />);
    return (<PopupWindow left={left} close={close} modal={modal} title={scanQRCodeLabel}>
        <ConnectQR label="" />
    </PopupWindow >);
};

const PopupSettingsEditor = ({ close, back, pairing, onSettingChanged, modal }) => {
    const [setting, setSettings] = useState(() => storage.loadConnectionSettings());
    const setURL = (url: string) => setSettings(setting => ({ ...setting, url }));
    const setAPIKey = (apikey: string) => setSettings(setting => ({ ...setting, apikey }));
    const setSecurityGroup = (securityGroup: string) => setSettings(setting => ({ ...setting, securityGroup }));
    const setCodeKey = (codeKey: string) => setSettings(setting => ({ ...setting, codeKey }));

    const url = setting.url ? setting.url : '';
    const apikey = setting.apikey ? setting.apikey : '';
    const securityGroup = setting.securityGroup ? setting.securityGroup : '';
    const codeKey = setting.codeKey ? setting.codeKey : '';
    const onSave = () => {
        onSettingChanged();
        if (storage.saveConnectionSettings(setting)) {
            pairing();
        }
        else {
            back();
        }
    };

    return (<PopupWindow close={close} title='Settings' modal={modal}>
        <Form>
            <InputField id="url" label="Proxy URL" value={url} onChange={(value) => {
                setURL(value);
            }} />
            <InputField id="apiKey" label="API Key" value={apikey} onChange={(value) => {
                setAPIKey(value);
            }} />
            <InputField id="securityGroup" label="Security Group Key" value={securityGroup} onChange={(value) => {
                setSecurityGroup(value);
            }} />
            <InputField id="codeKey" label="Code Key" value={codeKey} onChange={(value) => {
                setCodeKey(value);
            }} />
            <Footer>
                <BackButton onClick={back} />
                <SaveButton onClick={onSave} />
            </Footer>
        </Form>
    </PopupWindow >);
};



const PopupParingCode = ({ back, close, PairingQR, modal }) => {
    return (
        <PopupWindow close={close} title='Scan To Pair' modal={modal}>
            <Form>
                <PairingQR label="" />
                <Footer>
                    <BackButton onClick={back} />
                </Footer>
            </Form>
        </PopupWindow >
    );
};