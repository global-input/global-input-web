import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useMobile, InitData, FormField } from './useMobile';
import { SettingsEditor } from './settingsEditor';


import closeIcon from './images/close.png';
import settingsIcon from './images/settings.png';



interface ConnectQRProps {
    close: () => void;
    editSettings: () => void;
    initData: InitData | (() => InitData);
    onFieldChange: (field: FormField, history) => void;
}
export const DisplayConnectQRCode = ({ close, editSettings, initData, onFieldChange }) => {
    const popup = useRef(null);
    const mobile = useMobile(initData, true);
    const history = useHistory();
    useClickedOutside(popup, close);

    onFieldChange && mobile.setOnchange(({ field }) => {
        onFieldChange(field, history);
    });
    if (mobile.isConnected) {
        return null;
    }
    const { ConnectQR } = mobile;


    return (
        <PopupContainer>
            <PopupWindow ref={popup}>
                <TopBar>
                    <Button onClick={editSettings}>
                        <Image src={settingsIcon} alt="Settings" />
                Settings</Button>
                    <LeftButtonContainer>
                        <Button onClick={close}>
                            <Image src={closeIcon} alt="Close" />
            Close</Button>
                    </LeftButtonContainer>
                </TopBar>
                <ConnectQR />
            </PopupWindow>
        </PopupContainer>
    );


};


export const DisplaySettingsEditor = ({ back, close, pairing }) => {
    const popup = useRef(null);
    useClickedOutside(popup, close);
    return (
        <PopupContainer>
            <PopupWindow ref={popup}>
                <TopBar>
                    <LeftButtonContainer>
                    </LeftButtonContainer>
                    <Title>Settings</Title>
                    <Button onClick={close}>
                        <Image src={closeIcon} alt="Close" />
                    Close</Button>
                </TopBar>
                <PopupBody>
                    <SettingsEditor back={back} pairing={pairing} />
                </PopupBody>
            </PopupWindow>
        </PopupContainer>
    );
};

export const DisplayParing = () => {
    return null;
};


const useClickedOutside = (element, onClicked) => {
    useEffect(() => {
        const handleClick = (evt) => {
            if (element.current && (!element.current.contains(evt.target))) {
                onClicked();
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [onClicked, element]);
};


const PopupContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0;
        padding: 0;
        position: fixed;
        top: 90px;
        left: 0;
        z-index:200;
`;

const PopupWindow = styled.div`
        flex-direction: column;
        justify-content: flex-center;
        align-items: flex-start;
        background-color: white;
        margin: 0;
        padding:0;
        border: 3px solid #f1f1f1;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        display: flex;
        min-width: 350px;
        min-height: 350px;

`;
const ErrorMessage = styled.div`
        color: red;
        font-size: 11;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        max-width:  350px;
        max-height: 100px;
        overflow: scroll;
`;

const TopBar = styled.div`
        display: flex;
        margin:0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding-left:10px;
        padding-right:10px;
        padding-bottom:10px;
        padding: 10px;
        background: #f1f1f1;
`;
const PopupBody = styled.div`
        flex-direction: column;
        justify-content: flex-center;
        align-items: flex-start;
        margin: 0;
        padding:0;
        display: flex;
        width:100%;
`;



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
`;

const Image = styled.img`
    margin-right: 5px;
`;




const LeftButtonContainer = styled.div`
    min-width: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;




const Title = styled.div`
        font-family: Avenir;
        color: #5291CD;
        font-size: 20px;
        font-weight: 100;
        white-space: nowrap;
`;
