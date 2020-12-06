import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import closeIcon from './images/close.png';
import appIcon from './images/app-icon.png';
import settingsIcon from './images/settings.png';
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

const PopupContent = styled.div`
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


const TopBar = styled.div`
        display: flex;
        margin:0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding:5px;
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



const TopItem = styled.div`
    margin:0;
    padding: 0;
`;

const Image = styled.img`
    margin-right: 5px;
`;








const Title = styled.div`
        font-family: Avenir;
        color: #5291CD;
        font-size: 20px;
        font-weight: 100;
        white-space: nowrap;
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
    display:flex;
`;





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







interface ConnectProps {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    label?: string;
}

export const ConnectButton: React.FC<ConnectProps> = ({ onClick, label = 'Connect' }) => (
    <Button onClick={onClick}>
        <Image src={appIcon} alt="Connect" />{label}
    </Button>
);

export const SettingsButton: React.FC<ConnectProps> = ({ onClick }) => (
    <Button onClick={onClick}>
        <Image src={settingsIcon} alt="settings" />Settings
    </Button>
);

export const BackButton: React.FC<ConnectProps> = ({ onClick }) => (
    <Button onClick={onClick}>
        Back
    </Button>
);

export const SaveButton: React.FC<ConnectProps> = ({ onClick }) => (
    <Button onClick={onClick}>
        Save
    </Button>
);

interface PopupWindowProps {
    close: () => void;
    left?: React.ReactNode;
    title?: React.ReactNode;
    modal?: boolean;
}
export const PopupWindow: React.FC<PopupWindowProps> = ({ left, title, children, close, modal = false }) => {
    const popup = useRef(null);
    const onClose = () => (!modal) && close();


    useClickedOutside(popup, onClose);
    return (
        <PopupContainer>
            <PopupContent ref={popup}>
                <TopBar>
                    <TopItem>{left}</TopItem>
                    <Title>{title}</Title>
                    <TopItem>
                        {(!modal) && (<Button onClick={onClose}>
                            <Image src={closeIcon} alt="Close" />
                                Close
                        </Button>)}
                    </TopItem>
                </TopBar>
                <PopupBody>
                    {children}
                </PopupBody>
            </PopupContent>
        </PopupContainer>
    );
};


export const Form = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:flex-start;
    align-items:flex-start;
    padding:10px;
`;




const Field = styled.div`
    position: relative;
    margin: 20px auto;
    width:100%;

`;
const Input = styled.input`
    display: block;
    line-height: 2em;
    margin: 0;
    padding-left: 10px;
    width: 100%;
    font-size: medium;
    border: 1px solid #f4f4f4;
    background-color: #f4f4f4;
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: 500;
    &:focus {
        border: 1px solid #2c7ac9;
    }
    &:placeholder-shown + .control-label {
        visibility: hidden;
        z-index: -1;
        transition: 0.2s ease-in-out;

    }
    &:not(:placeholder-shown) + .control-label,
    .form-control:focus:not(:placeholder-shown) + .control-label {
        visibility: visible;
        z-index: 1;
        opacity: 1;
        transform: translateY(-5px);
        transition: 0.2s ease-in-out transform;
    }

`;
const Label = styled.label.attrs(props => ({
    className: "control-label"

}))`
    display: block;
    position: absolute;
    opacity: 0;
    bottom: 1.9rem;
    color: #5d5d5d;
    transition: 0.2s ease-in-out transform;
    font-size: 12px;
`;


export const Footer = styled.div`
        display: flex;
        margin:0;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
`;


interface InputFieldProps {
    id: string;
    onChange: (value: string) => void;
    label: string;

}
export const InputField = ({ id, onChange, label, value }) => {
    return (<Field>
        <Input id={id}
            onChange={evt => {
                onChange(evt.target.value)
            }}
            value={value}
            placeholder={label} />
        <Label htmlFor={id}>{label}</Label>
    </Field>
    );
}

const ScanLabel = styled.div`
font-size: 14px;
color:#4880ED`;
const ScanLabelA = styled.a``;


export const scanQRCodeLabel = (<ScanLabel>
    Scan with <ScanLabelA href="https://globalinput.co.uk/global-input-app/get-app" rel="noopener noreferrer" target="_blank"> Global Input App</ScanLabelA>
</ScanLabel>)