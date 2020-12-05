import React, { useState, useCallback } from 'react';

import { useMobile, InitData, OnchangeFunction } from './useMobile';
import { ConnectButton, PopupWindow, SettingsButton } from './layout';
import { ParingApp } from './pairingApp';
import { SettingsEditor } from './settingsEditor';



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
    return (<ConnectButton onClick={onClick} />);
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
    return (<PopupWindow left={left} close={close} >
        <ConnectQR />
    </PopupWindow >);
};


const PopupParingCode = ({ back, close }) => {
    return (<PopupWindow close={close} title='Scan To Pair'>
        <ParingApp back={back} />
    </PopupWindow >);
};


const PopupSettingsEditor = ({ back, close, pairing }) => (
    <PopupWindow close={close} title='Settings'>
        <SettingsEditor back={back} pairing={pairing} />
    </PopupWindow >
);
