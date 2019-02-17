import React from "react";
import {styles} from "./styles";
import {LinkItem} from '../../components';
import "./styles.css";
var textContent={
    title:"Mobile Authentication",
    authentication:{
            demo:{
              url:"https://www.youtube.com/watch?v=jLIIrlEoQXM",
              linkText:"Watch demo"
            },
            tutorial:{
              url:"https://www.youtube.com/watch?v=7-vavraSj-s",
              linkText:"Watch tutorial"
            },
            whitepaper:{
              url:"https://www.linkedin.com/pulse/security-strategy-business-applications-dilshat-hewzulla/",
              linkText:"Read Whitepaper"
            },
            chromeExtension:{
              url:"https://chrome.google.com/webstore/detail/global-input-app/hcklienddlealndjnakkagefaelhnjkp",
              linkText:"Install Chrome Extension"
            }

      },


};

var images={
    video:{
        icon:require('./play-icon.png'),
        hover:require('./play-icon-hover.png')
    },
    paper:{
        icon:require('./paper.png'),
        hover:require('./paper-hover.png')
    },
    extension:{
      icon:require('./extension-icon.png'),
      hover:require('./extension-hover.png')
    }

}


export default class AuthenticationDeviceSection extends React.Component{

  render(){
      return(
        <div style={styles.card}>
            <div style={styles.title}>{textContent.title}</div>
            <div style={styles.content}>
                      <LinkItem href={textContent.authentication.demo.url}
                        image={images.video.icon}
                        imageHover={images.video.hover}
                        imageStyle={styles.iconStyle}>
                            {textContent.authentication.demo.linkText}
                      </LinkItem>
                      <LinkItem href={textContent.authentication.tutorial.url}
                        image={images.video.icon}
                        imageHover={images.video.hover}
                        imageStyle={styles.iconStyle}>
                            {textContent.authentication.tutorial.linkText}
                      </LinkItem>
                      <LinkItem href={textContent.authentication.whitepaper.url}
                        image={images.paper.icon}
                        imageHover={images.paper.hover}
                        imageStyle={styles.iconStyle}>
                            {textContent.authentication.whitepaper.linkText}
                      </LinkItem>
                      <LinkItem href={textContent.authentication.chromeExtension.url}
                        image={images.extension.icon}
                        imageHover={images.extension.hover}
                        imageStyle={styles.iconStyle}>
                            {textContent.authentication.chromeExtension.linkText}
                      </LinkItem>
            </div>
        </div>);


  }

}
