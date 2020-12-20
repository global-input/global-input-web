import React, { useState, useCallback } from 'react';
import * as storage from './storage';
import { useMobile, InitData } from './useMobile';
import {
    BigButton,
} from './buttons';

import {TopBar,PopupContent,PopupWindow,disableBodyScroll,enableBodyScroll} from './popupWindow'

import {Tabs,PAGES,CloseTab} from './tabs';
import {SettingsEditor} from './settingsEditor';
interface MobileConnectProps {
    label?: string;
}

export const useConnectToMobile = (initData: InitData | (() => InitData), initialConnect: boolean = true) => {
    const [connect, setConnect] = useState(initialConnect);
    const [configId, setConFigId] = useState(1);
    const [page,setPage]=useState(PAGES.CONNECT_QR);
    const mobile = useMobile(initData, connect, configId);
    const openWindow = useCallback(() => {
            disableBodyScroll();
            setConnect(true);
    }, []);
    const closeWindow = useCallback(() => {
        setConnect(false);
        enableBodyScroll();
    }, []);
    const loadSettings=useCallback(()=>storage.loadConnectionSettings(),[]);
    const {disconnect}=mobile;
    const onSaveSettings=useCallback((settings)=>{
        if (storage.saveConnectionSettings(settings)) {
            setPage(PAGES.PAIRING);
        }
        else {
            setPage(PAGES.CONNECT_QR);
        }
        setConFigId(configId => configId + 1);
        disconnect();
    },[disconnect]);


    const {PairingQR,ConnectQR,isConnected,isConnectionDenied, isError, isReady,isDisconnected,isLoading}=mobile;

    const ConnectToMobile:React.FC<MobileConnectProps> = useCallback(({ label = 'Connect' }) => {
        if (mobile.isConnected) {
            return null;
        }
        if (connect) {
            return (
            <PopupWindow>
                    <TopBar>
                        <Tabs  page={page} setPage={setPage}/>
                        <CloseTab onClose={closeWindow}/>
                    </TopBar>
                    <PopupContent>
                        {page===PAGES.CONNECT_QR && (<ConnectQR/>)}
                        {page===PAGES.PAIRING && (<PairingQR/>)}
                        {page===PAGES.SETTINGS && (<SettingsEditor saveSettings={onSaveSettings} loadSettings={loadSettings}/>)}
                    </PopupContent>
            </PopupWindow >
            );
        }
        else {
            return (<BigButton onClick={openWindow}>{label}</BigButton>);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isConnected,isConnectionDenied, isError, isReady,isDisconnected,isLoading, connect, page, closeWindow, onSaveSettings, loadSettings, openWindow]);

    return { mobile, ConnectToMobile };
};
