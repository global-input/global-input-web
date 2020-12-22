import { useState, useCallback } from 'react';

import {useGlobalInputApp} from 'global-input-react';////global-input-react////
import type {InitData,ConnectOptions} from 'global-input-react';////global-input-react////

////main////


import * as storage from './storage';

import {PAGES} from './pages';

export const useMobile = (initData: InitData | (() => InitData), showWidgetOnStart=false) => {
    const [isShowWidget, setShowWidget] = useState(showWidgetOnStart);
    const [configId, setConFigId] = useState(1);
    const [page,setPage]=useState(PAGES.CONNECT_QR);
    const connectionSettings = storage.loadConnectionSettings();
    const connectOptions: ConnectOptions = {
        url: connectionSettings.url,////use your own server"
        apikey: connectionSettings.apikey,
        securityGroup: connectionSettings.securityGroup
    };
    const mobile = useGlobalInputApp({
        initData, options:connectOptions, codeAES: connectionSettings.codeKey
    }, isShowWidget, configId);
    ////dev-test codeData
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
    const loadSettings=useCallback(()=>connectionSettings,[connectionSettings]);
    return {...mobile,isShowWidget,onSaveSettings,loadSettings,page,setPage,setShowWidget};
};
