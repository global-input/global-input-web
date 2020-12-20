import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import closeIcon from './images/close.png';
import settingsImage from './images/settings.png';
import connectImage from './images/connect.png';
import pairingImage from './images/pairing.png';
const PopupGlass = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height:100vh;
        margin: 0;
        padding: 0;
        position: fixed;
        top:0;
        left:0;
        z-index:10;

`;

const PopupContainer = styled.div`
        flex-direction: column;
        justify-content: flex-center;
        align-items: flex-start;
        background-color: white;
        margin: 0;
        padding:0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        display: flex;
        max-height:80vh;
        -moz-box-shadow: 3px 3px 5px #535353;
    -webkit-box-shadow: 3px 3px 5px #535353;
    box-shadow: 3px 3px 5px #535353;

`;
const PopupContainer2=styled(PopupContainer)`
    width:90%;
    max-width:450px;
    max-width:90vh;
    over-flow:scroll;
`;


export const TopBar = styled.div`
        display: flex;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        flex-direction: row;
        align-items:flex-start;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        min-height:60px;
        background-color:rgb(220,220,220);

`;
export const PopupContent = styled.div`
        flex-direction: column;
        justify-content: flex-center;
        align-items: center;
        margin: 0;
        padding:0;
        display: flex;
        width:100%;
        margin-top:10px;
        overflow:scroll;
`;



export const TopItem = styled.div`
    margin:0;
    padding: 0;
`;









export const Title = styled.div`
        font-family: Avenir;
        color: #5291CD;
        font-weight: 100;
        white-space: nowrap;
        font-size: 14px;
        margin-left:20px;
`;
export const Button = styled.button`
    text-decoration: none;
    font-size: 11px;
    border-radius: 8px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;

    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color:#EEEEEE;
    display:flex;
    min-width:50px;

    max-width: 200px;
    margin-left:5px;
    margin-right:5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;

    &: hover{


        transform: translateY(-3px);
        box-shadow: 0 0 50px #ffff;
    }

`;
export const BigButton = styled(Button)`
    border-width:0;
    font-size: 15px;
`;





const useClickedOutside = (element, onClicked) => {
    useEffect(() => {
        const handleClick = (evt) => {
            if (element.current && (!element.current.contains(evt.target))) {
                console.log("-----outclicked");
                onClicked();
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [onClicked, element]);
};


export const Tabs=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    height:100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;
const Tab=styled.div`
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        height:90%;
        border-width:0px;
        margin-right:10px;
        padding:5px;
`;
const ActiveTab=styled(Tab)`
background-color:white;
height:100%;

`;


const TabText=styled.div`
    color:rgb(21,53,232);
    font-size:8px;
`;


const SettingsIcon=styled.img.attrs({
    src:settingsImage,
    alt:'Settings',
})``;
const ConnectIcon=styled.img.attrs({
    src:connectImage,
    alt:'Connect',
})``;

const PairingIcon=styled.img.attrs({
    src:pairingImage,
    alt:'Pair',
})``;

export const SettingsTab=({onClick})=>(
    <Tab as='button' onClick={onClick}>
        <SettingsIcon/>
        <TabText>Settings</TabText>
    </Tab>
);

export const ActiveConnectTab=()=>(
    <ActiveTab>
           <ConnectIcon/>
           <TabText>Connect</TabText>
    </ActiveTab>
);

export const PairingTab=({onClick})=>(
    <Tab as='button' onClick={onClick}>
    <PairingIcon/>
    <TabText>Pair</TabText>
</Tab>


);



export const CloseButton=styled.input.attrs({
    type:'image',
    name:'close',
    alt:'Close',
    src:closeIcon
})`
margin-right:5px;
`;




interface PopupWindowProps {
    onClose: () => void;
}
export const PopupWindow: React.FC<PopupWindowProps> = ({ children, onClose}) => {
    const popup = useRef(null);
    useClickedOutside(popup, onClose);
    return (
        <PopupGlass>
            <PopupContainer ref={popup}>
                {children}
            </PopupContainer>
        </PopupGlass>
    );
};

export const PopupWindow2: React.FC<PopupWindowProps> = ({ children, onClose}) => {
    const popup = useRef(null);
    useClickedOutside(popup, onClose);
    return (
        <PopupGlass>
            <PopupContainer2 ref={popup}>
                {children}
            </PopupContainer2>
        </PopupGlass>
    );
};

export const Form = styled.div`
    display:flex;
    flex-direction:column;
    width:95%;
    justify-content:flex-start;
    align-items:flex-start;
    padding:10px;
    max-width:80vw;
`;




export const Field = styled.div`
    position: relative;
    width:100%;
    padding-top:15px;

`;
export const Input = styled.input`
    display: block;
    line-height: 2em;
    margin: 0;
    padding-left: 10px;
    width: 100%;
    font-size: medium;
    border: 2px solid rgb(230,230,230);
    background-color: rgb(249,249,249);
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
    width:100%;
`;
export const Label = styled.label.attrs(props => ({
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
export const InputField = ({ id, onChange, label, placeholder,value }) => {
    return (<Field>
        <Input id={id}
            onChange={evt => {
                onChange(evt.target.value)
            }}
            value={value}
            placeholder={placeholder} />
        <Label htmlFor={id}>{label}</Label>
    </Field>
    );
}


const Help=styled.div`
        margin-top:5px;
        font-family: Avenir;
        color: rgb(53,116,230);
        white-space: wrap;
        font-size: 10px;
        max-height:80px;
        overflow:scroll;
`;

export const WebSocketServer=styled.a.attrs({
    target:'_blank',
    rel: 'noopener noreferrer',
    href:'https://github.com/global-input/global-input-node',

})`
color: rgb(53,116,230);
text-decoration:none;
margin-left:5px;
`;



export const SettingsHelp=()=>(
    <>
<Help>
            Proxy URL and API Key are used for connecting to
            <WebSocketServer>WebSocket servers</WebSocketServer> that provide connectivity between your mobile app and the application.
            You can install your own <WebSocketServer>WebSocket servers</WebSocketServer> in an insecure environment thanks to the end-to-end encryption that can make the messages readable only to your mobile app.
            </Help>
            <Help>

            Security Group is used by the applications to verify the incoming connection in the same way that API Key is used by a server application to identify client applications.
            If you change this value, you need to pair your mobile app.
            </Help>
            <Help>

            The Code Key is used by the application to encrypt the content of the QR Code being displayed for mobile apps to scan to connect to your extension.
            If you change this value, you need to pair your mobile app so it can decrypt the content of the QR code.
            </Help>

</>
);

export const disableBodyScroll=()=>{
    document.body.style.overflow = 'hidden'
}
export const enableBodyScroll=()=>{
    document.body.style.overflow = 'unset'
}
