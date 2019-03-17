import React from 'react';
import {config} from '../configs';
import {WhiteRoundButton,BlueRoundButton,ImageExternalLink} from '../page-components/round-buttons';
import ButtonsContainer from '../page-components/buttons-container';

const images={
      appStore:require("./images/app-store.png"),
      playStore:require("./images/play-store.png"),
}
export const externalsLinks={
      listForinstallChromeExtension:[{href:config.links.chromeExtension.url, linkText:"Install Chrome Extension"}],
      InstallChromeExtension:props=>{
              const {ListLinks}=props.theme;
              return(
                  <ListLinks items={externalsLinks.listForinstallChromeExtension}/>
              );
      },
      SupportedWebsites:props=>{
            const {A}=props.theme;
            return(<A href={config.links.chromeExtension.websites}>{props.children}</A>);
      },
      listForWatchVideos:[{href:config.links.authenticationDemo.url, linkText:"Watch Demo Video"},{href:config.links.tutorialP1.url, linkText:"Watch Tutorial Video"}],
      WatchAuthenticationVideos: props=>{
          const {ListLinks}=props.theme;
          return(<ListLinks items={externalsLinks.listForWatchVideos}/>);
      },
      AuthenticationDemoVideo:props=>{
                  const {A}=props.theme;
                  return(<A href={config.links.authenticationDemo.url}>{props.children}</A>);
      },
      WordPressPlugin:props=>{
                  const {A}=props.theme;
                  return(<A href={config.links.wordpressPlugin.url}>{props.children}</A>);
      },
      AuthenticationWhitePaper:props=>{
        const {A}=props.theme;
        return(<A href={config.docs.security}>{props.children}</A>);
      },
      MobileOperationWhitePaper:props=>{
        const {A}=props.theme;
        return(<A href={config.docs.smartphoneoperateonapplications}>{props.children}</A>);
      },
      TransferFormDataGitHub:props=>{
        const {A}=props.theme;
        return(<A href={config.links.TransferFormGigHub.url}>{props.children}</A>);
      },
      DownloadGIAButtons:props=>(
        <ButtonsContainer>
            <ImageExternalLink image={images.appStore} href={config.links.appdownload.appStore}/>
            <ImageExternalLink image={images.playStore} href={config.links.appdownload.playStore}/>
        </ButtonsContainer>
      )

};

export const examplesLinks={
      TransferFormData:props=>{
            const {Link}=props.theme;
            return(<Link to={config.paths.examples.transferForm.path}>{props.children}</Link>);
      },
      ContentTransfer:props=>{
            const {Link}=props.theme;
            return(<Link to={config.paths.examples.contentTransfer.path}>{props.children}</Link>);
      },
      listForgameControlExample:[{path:config.paths.examples.gameControl.path, linkText:"Mobile Game Control Example"}],
      MobileGameControlExample:props=>{
                  const {ListLinks}=props.theme;
                  return(<ListLinks items={examplesLinks.listForgameControlExample}/>);
      },
      SecondScreen:props=>{
            const {Link}=props.theme;
            return(<Link to={config.paths.examples.mediaPlayer.path}>{props.children}</Link>);
      },
      listForMediaPlayerExample:[{path:config.paths.examples.mediaPlayer.path, linkText:"Media Application Example"}],
      SecondScreenList:props=>{
        const {ListLinks}=props.theme;
        return(<ListLinks items={examplesLinks.listForMediaPlayerExample}/>);
      },


};


export const pagesLinks={
          buttons:{
                LearnMoteWhiteButton:props=>(<WhiteRoundButton to={config.paths.learnMore.path}>{props.children}</WhiteRoundButton>),
                GetAppButton:props=>(<BlueRoundButton to={config.paths.getAppScreen.path}>{props.children}</BlueRoundButton>),
                MobileAuthentication:props=>(<WhiteRoundButton to={config.paths.mobileAuthentication.path}>{props.children}</WhiteRoundButton>),
          }



};
