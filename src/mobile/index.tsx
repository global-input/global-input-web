import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import * as globalInput from 'global-input-react';////global-input-react////
import { useMobile } from './useMobile';

import { DisplayConnectQRCode, DisplaySettingsEditor, DisplayParing } from './popupWindow';

import appIcon from './images/app-icon.png';
interface DisplayMobileConnectProps {
    label?: string;
}
export const useConnectToMobile = (initData: globalInput.InitData | (() => globalInput.InitData), onFieldChange?: (field: globalInput.FormField, history) => void) => {
    const [connect, setConnect] = useState(false);

    const DisplayMobileConnect: React.FC<DisplayMobileConnectProps> = useCallback(({ label }) => {
        const enableConnect = () => setConnect(true);
        const disableConnect = () => setConnect(false);

        if (connect) {
            return (<DisplayConnect initData={initData} onFieldChange={onFieldChange} close={disableConnect} />);
        }
        else {
            return (<DisplayConnectButton initData={initData} onFieldChange={onFieldChange} onClick={enableConnect} label={label} />);
        }
    }, [setConnect, connect, onFieldChange, initData]);

    return { DisplayMobileConnect };
};

interface DisplayConnectButtonProps {
    initData: globalInput.InitData | (() => globalInput.InitData);
    onFieldChange?: (field: globalInput.FormField, history) => void;
    onClick: () => void;
    label?: string;

}


const DisplayConnectButton: React.FC<DisplayConnectButtonProps> = ({ initData, onFieldChange, onClick, label = 'Connect' }) => {
    const mobile = useMobile(initData, false);
    const history = useHistory();


    onFieldChange && mobile.setOnchange(({ field }) => {
        onFieldChange(field, history);
    });
    if (mobile.isConnected) {
        return null;
    }
    return (<Button onClick={onClick}>
        <Image src={appIcon} alt="global input app icon" />{label}</Button>);
};


interface DisplayConnectProps {
    initData: globalInput.InitData | (() => globalInput.InitData);
    onFieldChange?: (field: globalInput.FormField, history) => void;
    close: () => void;
}
enum PAGES {
    CONNECT_QR,
    SETTINGS,
    PAIRING
}



const DisplayConnect: React.FC<DisplayConnectProps> = ({ initData, onFieldChange, close }) => {
    const [page, setPage] = useState(PAGES.CONNECT_QR);
    const editSettings = useCallback(() => setPage(PAGES.SETTINGS), []);
    const pairing = useCallback(() => setPage(PAGES.PAIRING), []);
    const connectQR = useCallback(() => setPage(PAGES.CONNECT_QR), []);
    switch (page) {
        case PAGES.CONNECT_QR:
            return (<DisplayConnectQRCode close={close} editSettings={editSettings} initData={initData} onFieldChange={onFieldChange} />);
        case PAGES.SETTINGS:
            return (<DisplaySettingsEditor close={close} back={connectQR} pairing={pairing} />);
        case PAGES.PAIRING:
            return (<DisplayParing />);
        default:
            return null;
    }
}

const Button = styled.button`
    text-decoration: none;
    font-size: 11px;
    border-radius: 4px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;
    padding: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color:#EEEEEE;
    margin-left:20px;
    display:flex;
    visibility: ${props => props.hide ? 'hidden' : 'visible'};
`;

const Image = styled.img`
    margin-right: 5px;
`;
