import React from 'react';
import styled from 'styled-components';
import settingsImage from './images/settings.png';
import connectImage from './images/connect.png';
import pairingImage from './images/pairing.png';

export enum PAGES {
    CONNECT_QR,
    SETTINGS,
    PAIRING
}


const TabContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    height:100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;
const TabBase=styled.div`
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        height:90%;
        border-width:0px;
        margin-right:10px;
        padding:5px;
`;
const ActiveTab=styled(TabBase)`
background-color:white;
height:100%;
`;
const Tab=styled(TabBase).attrs({
    as:`button`
})``;



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

const SettingsTab=({page,setPage})=>{
    if(page===PAGES.SETTINGS){
        return (<ActiveTab>
            <SettingsIcon/>
            <TabText>Settings</TabText>
        </ActiveTab>);
    }
    else{
        return  (
        <Tab  onClick={()=>setPage(PAGES.SETTINGS)}>
                <SettingsIcon/>
                <TabText>Settings</TabText>
        </Tab>);
    }
}


const ConnectTab=({page,setPage})=>{
    if(page===PAGES.CONNECT_QR){
        return (<ActiveTab>
            <ConnectIcon/>
            <TabText>Connect</TabText>
        </ActiveTab>);
    }
    else{
        return  (
        <Tab  onClick={()=>setPage(PAGES.CONNECT_QR)}>
                <ConnectIcon/>
                <TabText>Connect</TabText>
        </Tab>);
    }
};


const PairingTab=({page,setPage})=>{
    if(page===PAGES.PAIRING){
        return (<ActiveTab>
            <PairingIcon/>
            <TabText>Pair</TabText>
        </ActiveTab>);
    }
    else{
        return  (
        <Tab onClick={()=>setPage(PAGES.PAIRING)}>
                <PairingIcon/>
                <TabText>Pair</TabText>
        </Tab>);
    }
};


export const Tabs=({page,setPage})=>(
    <TabContainer>
                <ConnectTab page={page} setPage={setPage}/>
                <SettingsTab page={page} setPage={setPage}/>
                <PairingTab  page={page} setPage={setPage}/>
    </TabContainer>
);
