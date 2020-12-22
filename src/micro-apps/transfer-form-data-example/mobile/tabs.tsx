import React from 'react';
import styled from 'styled-components';
import settingsImage from './images/settings.png';
import connectImage from './images/connect.png';
import pairingImage from './images/pairing.png';
import closeImage from './images/close.png';
import {PAGES} from './pages';

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
        @media only screen and (min-width:320px){
            min-width:50px;
        }
        @media only screen and (min-width:400px){
            min-width:70px;
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
})``;
const ConnectIcon=styled.img.attrs({
    src:connectImage,
    alt:'Connect'
})`

`;

const PairingIcon=styled.img.attrs({
    src:pairingImage,
    alt:'Pair'
})``;

const CloseIcon=styled.img.attrs({
    src:closeImage,
    alt:'Close'
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
export const CloseTab=({onClose}) =>(
    <Tab  onClick={onClose}>
        <CloseIcon/>
        <TabText>Close</TabText>
    </Tab>
)


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
