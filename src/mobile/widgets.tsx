import React, { useEffect } from 'react';
import styled from 'styled-components';
import {ConnectQR, PairingQR} from 'global-input-react';////global-input-react////

import {WidgetState, MobileData} from './commons';


import settingsImage from './images/settings.png';
import connectImage from './images/connect.png';
import disconnectImage from './images/disconnect.png';
import pairingImage from './images/pairing.png';

import {SettingsEditor} from './settingsEditor';



const Button = styled.button`
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

const BigButton = styled(Button)`
    border-width:0;
    font-size: 15px;
`;
const DarkButton = styled(BigButton)`
        background-color:rgb(208, 226, 247);

`;

const Container = styled.div`

        flex-direction: column;
        justify-content: flex-center;
        align-items: flex-start;
        background-color: white;
        margin: 0;
        padding:0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        display: flex;
        -moz-box-shadow: 3px 3px 5px #535353;
        -webkit-box-shadow: 3px 3px 5px #535353;
        box-shadow: 3px 3px 5px #535353;
        background-color:rgb(74, 93, 126);
        padding-bottom:10px;
        @media only screen and (min-width:500px){
                padding-left:10px;
                padding-right:10px;

        }
`;

const TopBar = styled.div`
        display: flex;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        flex-direction: row;
        align-items:flex-start;
        justify-content: space-between;
        width: 100%;
        align-items: flex-end;
        padding-top:10px;

        background-color:rgb(74, 93, 126);

`;
const Content = styled.div`
        flex-direction: column;
        justify-content: flex-center;
        align-items: center;
        margin: 0;
        padding:0;
        display: flex;
        width:100%;
        overflow:scroll;
        background-color:white;
`;
const PopupGlass = styled.div`
        display: flex;
        margin: 0;
        padding: 0;
        position: fixed;
        z-index:10;
        width: 100vw;
        flex-direction: column;
        justify-content:flex-start;
        align-items: center;
        top:0;
        left:0;
        @media screen and (min-height:520px) and (min-width:520px){
            top:20px;
        }
        @media screen and (min-height:580px) {
            top:30px;
        }
        @media screen and (min-height:600px) {
            top:60px;
        }

        @media screen and (min-height:700px) {
            top:150px;
        }








`;
// @media screen and (min-height:530px){
//     top:0;
//     height:100vh;
//     justify-content: center;
// }

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

const PopUpWindow=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:relative;

`;
export const CloseIcon=styled.button`
    position:absolute;
    cursor:pointer;
    color: #ffff;
    border: 1px solid #AEAEAE;
    border-radius:50%;

    background: red;
    font-size: 40px;
    line-height:0;
    font-weight: bold;
    display: inline-block;

    padding: 11px 3px;
    width:45px;
    height:45px;
    top:-25px;
    right:-25px;

    @media screen and (max-height:590px){
        position:relative;
        align-self:flex-end;
        top:-40px;
    }
    @media screen and (max-width:490px){
        right:-0;
    }




    &:before {
        content: "×";
    }
    &: hover{
        transform: translateY(-3px);
        box-shadow: 0 0 50px #ffff;
    }
`;


const TabContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    height:100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    align-items: flex-end;
`;
const TabBase=styled.div`
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border-width:0px;
        margin-right:10px;
        margin-left:10px;
        padding:5px;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        @media only screen and (min-width:300px){
            min-width:50px;
        }

        @media only screen and (min-width:300px){
            min-width:50px;
        }
        @media only screen and (min-width:320px){
            min-width:60px;
        }
        @media only screen and (min-width:360px){
            min-width:70px;
        }
        @media only screen and (min-width:400px){
            min-width:80px;
        }
        @media only screen and (min-width:600px){
            min-width:90px;
        }
        @media only screen and (min-width:700px){
            min-width:100px;

        }

`;
const ActiveTab=styled(TabBase)`
    background-color:white;
`;
const Tab=styled(TabBase).attrs({
    as:`button`
})`
margin-bottom:10px;
cursor:pointer;
background-color:#DDDDDD;
&: hover{
    transform: translateY(-3px);
    box-shadow: 0 0 50px #ffff;
}
`;



const TabText=styled.div`
    color:rgb(21,53,232);
    font-size:8px;
    @media only screen and (min-width:280px){
        font-size:10px;
    }
    @media only screen and (min-width:400px){
        font-size:12px;
    }

`;


const SettingsIcon=styled.img.attrs({
    src:settingsImage,
    alt:'Settings'
})`
display:none;
@media screen and (min-height:530px){
        display:block;
}
`;
const PairingIcon=styled.img.attrs({
        src:pairingImage,
        alt:'Pair'
    })`
    display:none;
    @media screen and (min-height:530px){
            display:block;
    }
    `;

const ConnectIcon=styled.img.attrs({
    src:connectImage,
    alt:'Connect'
})`
display:none;
@media screen and (min-height:530px){
        display:block;
}
`;



const DisconnectIcon=styled.img.attrs({
        src:disconnectImage,
        alt:'Disconnect'
    })`
    `;




interface TabProps{
        widgetState:WidgetState;
        setWidgetState:(widgetState:WidgetState)=>void;
}
const SettingsTab:React.FC<TabProps>=({widgetState,setWidgetState})=>{
    if(widgetState===WidgetState.SETTINGS){
        return (<ActiveTab>
            <SettingsIcon/>
            <TabText>Settings</TabText>
        </ActiveTab>);
    }
    else{
        return  (
        <Tab  onClick={()=>setWidgetState(WidgetState.SETTINGS)}>
                <SettingsIcon/>
                <TabText>Settings</TabText>
        </Tab>);
    }
}


const ConnectTab:React.FC<TabProps>=({widgetState,setWidgetState})=>{
    if(widgetState===WidgetState.CONNECT_QR){
        return (<ActiveTab>
            <ConnectIcon/>
            <TabText>Connect</TabText>
        </ActiveTab>);
    }
    else{
        return  (
        <Tab  onClick={()=>setWidgetState(WidgetState.CONNECT_QR)}>
                <ConnectIcon/>
                <TabText>Connect</TabText>
        </Tab>);
    }
};


const PairingTab:React.FC<TabProps>=({widgetState,setWidgetState})=>{
    if(widgetState===WidgetState.PAIRING){
        return (<ActiveTab>
            <PairingIcon/>
            <TabText>Pair</TabText>
        </ActiveTab>);
    }
    else{
        return  (
        <Tab onClick={()=>setWidgetState(WidgetState.PAIRING)}>
                <PairingIcon/>
                <TabText>Pair</TabText>
        </Tab>);
    }
};


const Tabs:React.FC<TabProps>=(props)=>(
    <TabContainer>
                <ConnectTab {...props}/>
                <SettingsTab {...props}/>
                <PairingTab  {...props}/>
    </TabContainer>
);

interface ConnectWidgetProps{
       mobile:MobileData;
}
export const ConnectWidget:React.FC<ConnectWidgetProps>=({mobile})=>{
        const {widgetState,setWidgetState,errorMessage,onSaveSettings,loadSettings,isConnected,isShowWidget,isConnectionDenied,
                isError}=mobile;
        if (isConnected) {
            return null;
        }
        if(!isShowWidget){
            return null;
        }
        let message =isConnectionDenied && "You can only use one mobile app per session. Disconnect to start a new session.";
        if (isError) {
                message = errorMessage;
        }

        return(
            <Container>
                <TopBar>
                    <Tabs  widgetState={widgetState} setWidgetState={setWidgetState}/>
                </TopBar>
                <Content>
                    {widgetState===WidgetState.CONNECT_QR &&(<ConnectQR mobile={mobile}/>)}
                    {widgetState===WidgetState.PAIRING && (<PairingQR mobile={mobile}/>)}
                    {widgetState===WidgetState.SETTINGS && (<SettingsEditor saveSettings={onSaveSettings} loadSettings={loadSettings}/>)}
                    {message && (<ErrorMessage>{message}</ErrorMessage>)}
                </Content>
            </Container >
        );
    };

export const ConnectWindow:React.FC<ConnectWidgetProps>=({mobile})=>{
        const {isConnected,isShowWidget}=mobile;
        useEffect(()=>{
                let scrollDisabled=false;
                if (isShowWidget && (!isConnected)) {
                        document.body.style.overflow = 'hidden';
                        scrollDisabled=true;
                }
                return ()=>{
                        if(scrollDisabled){
                                scrollDisabled=false;
                                document.body.style.overflow = 'unset';
                        }
                }
        },[isConnected, isShowWidget]);
        if ((!isShowWidget)||isConnected) {
                return null;
        }

        return(
                <PopupGlass>
                        <PopUpWindow>
                                <ConnectWidget mobile={mobile}/>
                                <CloseIcon onClick={()=>mobile.setShowWidget(false)}/>
                        </PopUpWindow>
                </PopupGlass>
        );

};

const ConnectLabel=styled.div`
     padding-left:5px;
     font-size:12px;
     @media screen and (min-width:250px){
             font-size:20px;
     }
`;

interface ButtonProps{
        label?:string;
        skin?:string;
        mobile:MobileData;
}
export const ConnectButton:React.FC<ButtonProps>=({mobile,label='Connect', skin})=>{
        const {setShowWidget, isConnected, isShowWidget}=mobile;
        if(isConnected || isShowWidget){
                return null;
        }
        if(skin==='white'){
                return (<BigButton onClick={()=>setShowWidget(true)}>{label}</BigButton>);
        }
        return (<DarkButton onClick={()=>setShowWidget(true)}>
                <ConnectIcon/>
                       <ConnectLabel>{label}</ConnectLabel>
                </DarkButton>
        );
};






export const DisConnectButton:React.FC<ButtonProps>=({mobile,label='Disconnect',skin})=>{
        const {isConnected,isConnectionDenied, isDisconnected, restart}=mobile;
        if(isConnected || isConnectionDenied || isDisconnected){
                if(skin==='white'){
                        return (<BigButton onClick={()=>restart()}>{label}</BigButton>);
                }
                else{
                        return(
                        <DarkButton onClick={()=>restart()}>
                        <DisconnectIcon/>
                               <ConnectLabel>{label}</ConnectLabel>
                        </DarkButton>   );
                }
        }
        else{
                return null;
        }
};


interface WhenProps{
        mobile:MobileData;
}
export const WhenConnected:React.FC<WhenProps> = ({mobile,children})=>{
     if(mobile.isConnected){
             return (<>{children}</>);
     }
     else{
             return null;
     }
}