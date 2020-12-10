import React, { useState, useCallback } from 'react';
import * as storage from './storage';
import { useMobile, InitData, OnchangeFunction } from './useMobile';
import {
    SeeInInActionButton, PopupWindow, SettingsButton,
    Form, InputField, Footer, BackButton, SaveButton,
    scanQRCodeLabel
} from './layout';


import * as mobileSettings from './mobile-ui/settings';
import * as mobilePairing from './mobile-ui/pairing';

interface MobileConnectProps {
    label?: string;
}

export const useMobileConnect = (initData: InitData | (() => InitData), onchange?: OnchangeFunction) => {
    const [connect, setConnect] = useState(false);
    const MobileConnect: React.FC<MobileConnectProps> = useCallback(({ label }) => {
        const enableConnect = () => setConnect(true);
        const disableConnect = () => setConnect(false);

        if (connect) {
            return (<PopupMain initData={initData} onchange={onchange} close={disableConnect} />);
        }
        else {
            return (<DisplayConnectButton initData={initData} onchange={onchange} onClick={enableConnect} label={label} />);
        }
    }, [setConnect, connect, onchange, initData]);

    return { MobileConnect };
};

interface DisplayConnectButtonProps {
    initData: InitData | (() => InitData);
    onchange?: OnchangeFunction;
    onClick: () => void;
    label?: string;

}


const DisplayConnectButton: React.FC<DisplayConnectButtonProps> = ({ initData, onchange, onClick, label = 'Connect' }) => {
    const mobile = useMobile(initData, false);
    onchange && mobile.setOnchange(onchange);
    if (mobile.isConnected) {
        return null;
    }
    return (<SeeInInActionButton onClick={onClick} label={label}/>);
}



enum PAGES {
    CONNECT_QR,
    SETTINGS,
    PAIRING
}
interface PopupMainProps {
    initData: InitData | (() => InitData);
    onchange?: OnchangeFunction;
    close: () => void;
}


const PopupMain: React.FC<PopupMainProps> = ({ initData, onchange, close }) => {
    const [page, setPage] = useState(PAGES.CONNECT_QR);
    const editSettings = useCallback(() => setPage(PAGES.SETTINGS), []);
    const pairing = useCallback(() => setPage(PAGES.PAIRING), []);
    const connectQR = useCallback(() => setPage(PAGES.CONNECT_QR), []);
    switch (page) {
        case PAGES.CONNECT_QR:
            return (<PopupConnectQRCode close={close} editSettings={editSettings} initData={initData} onchange={onchange} />);
        case PAGES.SETTINGS:
            return (<PopupSettingsEditor close={close} back={connectQR} pairing={pairing} />);
        case PAGES.PAIRING:
            return (<PopupParingCode close={close} back={connectQR} />);
        default:
            return null;
    }
};


interface PopupConnectQRCodeProps {
    close: () => void;
    editSettings: () => void;
    initData: InitData | (() => InitData);
    onchange?: OnchangeFunction;

}
const PopupConnectQRCode: React.FC<PopupConnectQRCodeProps> = ({ close, editSettings, initData, onchange }) => {
    const mobile = useMobile(initData, true);
    onchange && mobile.setOnchange(onchange);
    if (mobile.isConnected) {
        return null;
    }
    const { ConnectQR } = mobile;
    const left = (<SettingsButton onClick={editSettings} />);
    return (<PopupWindow left={left} close={close} title={scanQRCodeLabel}>
        <ConnectQR label="" />
    </PopupWindow >);
};


const PopupParingCode = ({ back, close }) => {
    const mobile = useMobile(mobilePairing.initData, true);
    mobilePairing.setOnchange({ mobile, back });

    return (<PopupWindow close={close} title='Scan To Pair'>
        <Form>
            <mobile.PairingQR label="" />
            <Footer>
                <BackButton onClick={back} />
            </Footer>
        </Form>
    </PopupWindow >);
};


const PopupSettingsEditor = ({ back, close, pairing }) => {
    const [setting, setSettings] = useState(() => storage.loadConnectionSettings());
    const mobile = useMobile(mobileSettings.initData(setting));
    const onSave = () => {
        mobile.disconnect();
        if (storage.saveConnectionSettings(setting)) {
            pairing();
        }
        else {
            back();
        }
    };

    mobileSettings.setOnchange({ mobile, setSettings, back, onSave });
    const url = setting.url ? setting.url : '';
    const apikey = setting.apikey ? setting.apikey : '';
    const securityGroup = setting.securityGroup ? setting.securityGroup : '';
    const codeKey = setting.codeKey ? setting.codeKey : '';

    return (
        <PopupWindow close={close} title='Settings'>
            <Form>
                <InputField id="url" label="Proxy URL" value={url} onChange={(value) => {
                    setSettings(setting => ({ ...setting, url: value }));
                    mobile.sendValue(mobileSettings.FIELDS.url.id, value);
                }} />
                <InputField id="apiKey" label="API Key" value={apikey} onChange={(value) => {
                    setSettings(setting => ({ ...setting, apikey: value }));
                    mobile.sendValue(mobileSettings.FIELDS.apikey.id, value);
                }} />
                <InputField id="securityGroup" label="Security Group Key" value={securityGroup} onChange={(value) => {
                    setSettings(setting => ({ ...setting, securityGroup: value }));
                    mobile.sendValue(mobileSettings.FIELDS.securityGroup.id, value);
                }} />
                <InputField id="codeKey" label="Code Key" value={codeKey} onChange={(value) => {
                    setSettings(setting => ({ ...setting, codeKey: value }));
                    mobile.sendValue(mobileSettings.FIELDS.codeKey.id, value);
                }} />
                <Footer>
                    <BackButton onClick={back} />
                    <SaveButton onClick={onSave} />
                </Footer>
            </Form>
        </PopupWindow >
    )
};
