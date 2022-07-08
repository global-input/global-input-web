
import React from 'react';
import styled from 'styled-components';
import { config } from '../configs';
import backgroundImage from './images/background.svg';
import appIcon from './images/app-icon.png';
import extensionIcon from './images/extension.png';
import moduleIcon from './images/module.png'
import webStore from './images/web-store.png';
import fireFoxAddOn from './images/firefox-addons.png';
import appStore from './images/app-store.png';
import playStore from './images/play-store.png';
import jsModule from './images/js-module.png';
import reactModule from './images/react-module.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color:white;
  background-color: rgb(97,136,204);
  min-height:100vh;
  @media (min-width: 600px) and (max-width: 1600px){
    background-color: white;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

`;

export const Content=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width:90%;
    margin-top:50px;
    flex:1;


    @media only screen and (min-width:1000px){
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
`;




export const Card=styled.div`
        padding: 15px 5px 5px 5px;
         margin-top:50px;
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
         align-items: center;
         background-color: #FFFFFF;
         color: #5291CD;
         width: 100%;
         min-height: 300px;
         max-width: 400px;
         border-radius: 5px;

         @media only screen and (min-width:1000px){
            margin-left:20px;
            margin-right:20px;

         }
         @media only screen and (min-width:1200px){
            margin-left:50px;
            margin-right:50px;

         }


         `;

const Icon=styled.img`
    margin-top:10px;
`;
export const AppIcon=styled(Icon).attrs({
    src:appIcon,
    alt:"Global Input App Icon"
})``;
export const ExtensionIcon=styled(Icon).attrs({
    src:extensionIcon,
    alt:"Browser Extension"
})``;

export const ModuleIcon=styled(Icon).attrs({
    src:moduleIcon,
    alt:"Modules"
})``;





export const CardTitle=styled.div`
        font-size: 20px;
        margin-top:20px;
`;
export const CardContent=styled.div`
    width:90%;
    flex:1;
    font-size: 14px;
    margin-top:20px;
`
export const CardFooter=styled.div`
    width:90%;
    display:flex;
    flex-direction:column;
    margin-bottom:30px;
    justify-content:space-between;
    align-items:center;
    height:110px;
    margin-top:20px;
    @media only screen and (min-width:360px){
        flex-direction:row;
        height:auto;
    }

`;


const AppStoreImage= styled.img.attrs({
   src: appStore,
   alt:'App Store'
})``;

const PlayStoreImage= styled.img.attrs({
    src: playStore,
    alt:'Play Store'
 })``;

 const WebStoreImage= styled.img.attrs({
    src: webStore,
    alt:'Web Store'
 })``;
 const FirefoxImage= styled.img.attrs({
    src: fireFoxAddOn,
    alt:'Firefox Add-ons'
 })``;
 const JSModuleImage= styled.img.attrs({
    src: jsModule,
    alt:'JavaScript Module'
 })``;

 const ReactImage= styled.img.attrs({
    src: reactModule,
    alt:'React'
 })``;









const ButtonLink=styled.a.attrs({
    target:'_blank',
    rel:`noopener noreferrer`
})`
    margin: 0;
`;

export const AppStoreButton=()=>(
    <ButtonLink href={config.links.appdownload.appStore}>
        <AppStoreImage/>
    </ButtonLink>
);
export const PlayStoreButton=()=>(
    <ButtonLink href={config.links.appdownload.playStore}>
        <PlayStoreImage/>
    </ButtonLink>
);

export const WebStoreButton=()=>(
    <ButtonLink href={config.links.chromeExtension.url}>
        <WebStoreImage/>
    </ButtonLink>
);

export const FirefoxButton=()=>(
    <ButtonLink href={config.links.firefox.url}>
        <FirefoxImage/>
    </ButtonLink>
);

export const JSModuleButton=()=>(
    <ButtonLink href={config.links.jsExtension.url}>
        <JSModuleImage/>
    </ButtonLink>
);

export const ReactModuleButton=()=>(
    <ButtonLink href={config.links.reactJSExtension.url}>
        <ReactImage/>
    </ButtonLink>
);
