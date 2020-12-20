import React, { useState, useCallback } from 'react';
import * as storage from './storage';
import { useMobile, InitData, OnchangeFunction } from './useMobile';
import {
    Button,BigButton,
} from './buttons';

import {TopBar,PopupContent,CloseButton,PopupWindow,Footer, disableBodyScroll,enableBodyScroll} from './popupWindow'

import {Tabs,PAGES} from './tabs';
import {Form,ProxyField,APIKeyField,SecurityGroupField,CodeKeyField} from './forms';

import * as mobileSettings from './mobile-ui/settings';
import * as mobilePairing from './mobile-ui/pairing';

interface MobileConnectProps {
    label?: string;
}

export const useMobileConnect = (initData: InitData | (() => InitData), onchange?: OnchangeFunction) => {
    const [connect, setConnect] = useState(false);
    const MobileConnect: React.FC<MobileConnectProps> = useCallback(({ label }) => {
        const openWindow = () => setConnect(true);
        const closeWindow = () =>{
            setConnect(false);
            enableBodyScroll();
        }

        if (connect) {
            disableBodyScroll();
            return (<PopupMain initData={initData} onchange={onchange} closeWindow={closeWindow} />);
        }
        else {
            return (<DisplayConnectButton initData={initData} onchange={onchange} onClick={openWindow} label={label} />);
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
    return (<BigButton onClick={onClick}>{label}</BigButton>);
}



interface PopupMainProps {
    initData: InitData | (() => InitData);
    onchange?: OnchangeFunction;
    closeWindow: () => void;
}


const PopupMain: React.FC<PopupMainProps> = ({ initData, onchange, closeWindow }) => {
    const [page, setPage] = useState(PAGES.CONNECT_QR);
    const editSettings = useCallback(() => setPage(PAGES.SETTINGS), []);
    const pairing = useCallback(() => setPage(PAGES.PAIRING), []);
    const connectQR = useCallback(() => setPage(PAGES.CONNECT_QR), []);
    const onClose=useCallback(() => {
        setPage(PAGES.CONNECT_QR);
        closeWindow();
    }, [closeWindow]);

    return (<PopupWindow onClose={()=>{}}>
        <TopBar>
            <Tabs  page={page} setPage={setPage}/>
            <CloseButton onClick={onClose}/>
        </TopBar>
        <PopupContent>
                {page===PAGES.CONNECT_QR && (<ConnectQRCodeContent initData={initData} onchange={onchange} onClose={onClose}/>)}
                {page===PAGES.PAIRING && (<ParingContent back={onClose}/>)}
                {page===PAGES.SETTINGS && (<SettingsContent close={onClose} back={onClose} pairing={pairing}/>)}

        </PopupContent>
    </PopupWindow >);
};

const ConnectQRCodeContent=({initData,onchange, onClose})=>{
    const mobile = useMobile(initData, true);
    onchange && mobile.setOnchange(onchange);
    if (mobile.isConnected) {
        onClose();
        return null;
    }
    const { ConnectQR } = mobile;
    return (<ConnectQR/>);
}

const ParingContent = ({back}) => {
    const mobile = useMobile(mobilePairing.initData, true);
    mobilePairing.setOnchange({ mobile, back });
    return (<mobile.PairingQR/>);
};


const SettingsContent = ({ back, close, pairing }) => {
    const [setting, setSettings] = useState(() => storage.loadConnectionSettings());
    const [help,setHelp]=useState(null);

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
            <Form>
                <SecurityGroupField onChange={(value) => {
                                setSettings(setting => ({ ...setting, securityGroup: value }));
                                mobile.sendValue(mobileSettings.FIELDS.securityGroup.id, value);
                        }} securityGroup={securityGroup}/>
                <CodeKeyField onChange={(value) => {
                                setSettings(setting => ({ ...setting, codeKey: value }));
                                mobile.sendValue(mobileSettings.FIELDS.codeKey.id, value);
                        }} codeKey={codeKey}/>
                <ProxyField onChange={(value) => {
                                setSettings(setting => ({ ...setting, url: value }));
                                mobile.sendValue(mobileSettings.FIELDS.url.id, value);
                }} url={url}/>
                <APIKeyField onChange={(value) => {
                                setSettings(setting => ({ ...setting, apikey: value }));
                                mobile.sendValue(mobileSettings.FIELDS.apikey.id, value);
                        }} apikey={apikey}/>

                <Footer>
                    <Button onClick={onSave}>Save</Button>
            </Footer>

            </Form>
    )
};
