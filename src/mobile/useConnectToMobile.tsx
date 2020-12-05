import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useMobile, InitData, OnchangeFunction } from './useMobile';
import { PopupMain } from './popupWindow';
import appIcon from './images/app-icon.png';



interface MobileConnectProps {
    label?: string;
}

export const useConnectToMobile = (initData: InitData | (() => InitData), onchange: OnchangeFunction) => {
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
    onchange: OnchangeFunction;
    onClick: () => void;
    label?: string;

}


const DisplayConnectButton: React.FC<DisplayConnectButtonProps> = ({ initData, onchange, onClick, label = 'Connect' }) => {
    const mobile = useMobile(initData, false);
    onchange && mobile.setOnchange(onchange);
    if (mobile.isConnected) {
        return null;
    }
    return (<Button onClick={onClick}>
        <Image src={appIcon} alt="global input app icon" />{label}</Button>);
};




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
