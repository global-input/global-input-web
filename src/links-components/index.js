import React from 'react';
import {config} from '../configs';

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
      TransferFormDataGitHub:props=>{
        const {A}=props.theme;
        return(<A href={config.links.TransferFormGigHub.url}>{props.children}</A>);
      },

};

export const examplesLinks={
      TransferFormData:props=>{
            const {Link}=props.theme;
            return(<Link to={config.paths.examples.transferForm.path}>{props.children}</Link>);
      },
      SecondScreen:props=>{
            const {Link}=props.theme;
            return(<Link to={config.paths.examples.mediaPlayer.path}>{props.children}</Link>);
      },
      ContentTransfer:props=>{
            const {Link}=props.theme;
            return(<Link to={config.paths.examples.contentTransfer.path}>{props.children}</Link>);
      },

}
