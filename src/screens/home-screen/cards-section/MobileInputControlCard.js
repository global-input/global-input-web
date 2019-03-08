import React from "react";
import {styles, images} from "./styles";
import {LinkItem} from '../../../components';
import {pagelinks} from "../../../configs";

var textContent={
    title:"Mobile Input & Control",
    description:"Extends applications to allows users to use smartphones to operate and transfer data securely.",
    whitepaper:{
      url:"https://medium.com/@hewzulla/using-smartphones-to-operate-on-applications-running-on-computers-and-other-devices-e397668149f8",
      linkText:"Read Whitepaper"
    },
    gameExample:{
        linkText:"Game Control Example"
    }

};


export default class MobileInputControlCard extends React.Component{

  render(){
      return(
        <div style={styles.card.get()}>
            <div style={styles.title.get()}>{textContent.title}</div>
            <div style={styles.content.get()}>
              <div style={styles.description}>
                  {textContent.description}
              </div>

              <LinkItem href={textContent.whitepaper.url}
                image={images.paper} textStyle={styles.linkText}>
                    {textContent.whitepaper.linkText}
              </LinkItem>
              <LinkItem to={pagelinks.samples.gameControl.link}
                image={images.demo}
                textStyle={styles.linkText}>
                    {textContent.gameExample.linkText}
              </LinkItem>
            </div>
        </div>);

  }

}
