import React, { useEffect } from 'react';
import styled from 'styled-components';
import {Tabs, CloseTab} from './tabs';
import {PAGES} from './pages';
import {
        BigButton,
    } from './buttons';

import {SettingsEditor} from './settingsEditor';

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
        background-color:rgba(51, 204, 255,0.3);
`;
const Content = styled.div`
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





export const ConnectWidget=({mobile,isAllowClose=false})=>{
        const {page,setPage,ConnectQR,PairingQR,errorMessage,onSaveSettings,loadSettings,isConnected,isShowWidget,setShowWidget,isConnectionDenied,
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
                    {isAllowClose && (<CloseTab onClose={()=>setShowWidget(false)}/>)}
                </TopBar>
                <Content>
                    {page===PAGES.CONNECT_QR &&(<ConnectQR/>)}
                    {page===PAGES.PAIRING && (<PairingQR/>)}
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
                        <ConnectWidget mobile={mobile} isAllowClose={true}/>
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
