import React from "react";
import {styles, images} from "./styles";
import {LinkItem} from '../../../components';

var textContent={
    title:"Mobile Authentication",
    authentication:{
            demo:{
              url:"https://www.youtube.com/watch?v=jLIIrlEoQXM",
              linkText:"Watch demo video"
            },
            tutorial:{
              url:"https://www.youtube.com/watch?v=7-vavraSj-s",
              linkText:"Watch tutorial video"
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




export default class AuthenticationDeviceCard extends React.Component{

  render(){
      return(
        <div style={styles.card.get()}>
            <div style={styles.title.get()}>{textContent.title}</div>
            <div style={styles.content.get()}>
                      <LinkItem href={textContent.authentication.demo.url}
                        textStyle={styles.linkText}
                        image={images.watchVideo}>
                            {textContent.authentication.demo.linkText}
                      </LinkItem>



                      <LinkItem href={textContent.authentication.whitepaper.url}
                        image={images.paper}  textStyle={styles.linkText}>
                            {textContent.authentication.whitepaper.linkText}
                      </LinkItem>

                      <LinkItem href={textContent.authentication.chromeExtension.url}
                        image={images.extension}  textStyle={styles.linkText}>
                            {textContent.authentication.chromeExtension.linkText}
                      </LinkItem>

            </div>
        </div>);


  }

}
