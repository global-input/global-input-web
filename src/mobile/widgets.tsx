import React, { useEffect } from 'react';
import styled from 'styled-components';
import {Tabs} from './tabs';
import {PAGES} from './pages';
import {ConnectQR, PairingQR} from 'global-input-react';////global-input-react////

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
        min-height:70px;
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
`;
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
    justify-content:flex-start;
    align-items:center;
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
    top:-40px;
    right:0;
    @media screen and (min-width:280px){
        top:-30px;
        right:-15px;
    }
    @media screen and (min-width:500px){
        top:-25px;
        right:-25px;
    }
    @media screen and (max-width:550px) and (max-height:550px){
        position:relative;
        align-self:flex-start;
    }
    @media screen and (min-width:250px) and (max-height:550px){
        position:relative;
        align-self:flex-end;
        top:-20px;
    }




    &:before {
        content: "×";
    }
    &: hover{
        transform: translateY(-3px);
        box-shadow: 0 0 50px #ffff;
    }
`;



export const ConnectWidget=({mobile})=>{
        const {page,setPage,errorMessage,onSaveSettings,loadSettings,isConnected,isShowWidget,setShowWidget,isConnectionDenied,
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
                    <Tabs  page={page} setPage={setPage}/>
                </TopBar>
                <Content>
                    {page===PAGES.CONNECT_QR &&(<ConnectQR mobile={mobile}/>)}
                    {page===PAGES.PAIRING && (<PairingQR mobile={mobile}/>)}
                    {page===PAGES.SETTINGS && (<SettingsEditor saveSettings={onSaveSettings} loadSettings={loadSettings}/>)}
                    {message && (<ErrorMessage>{message}</ErrorMessage>)}
                </Content>
            </Container >
        );
    };

export const ConnectWindow=({mobile})=>{
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

export const ConnectButton=({mobile,label='Connect'})=>{
        const {setShowWidget, isConnected, isShowWidget}=mobile;
        if(isConnected || isShowWidget){
                return null;
        }

        return (<BigButton onClick={()=>setShowWidget(true)}>{label}</BigButton>);
};
