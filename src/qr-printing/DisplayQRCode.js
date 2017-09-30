import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {textValues,images} from  "../configs";

import {CodeDataRenderer} from "global-input-react";
import ReactMarkdown from "react-markdown";

import {styles} from "./styles";

export default class DisplayQRCode extends Component{

  render(){
    if(!this.props.senders || this.props.senders.length===0){
          return(
            <div style={styles.qrServiceContainer}>

                  <div style={styles.qrcodeContainer}>
                    <CodeDataRenderer service={this.props.service}  config={this.props.config} level="H" size="300"/>
                  </div>

            </div>



          );
    }
    else{
        console.log("----qr senders-:"+this.props.senders)
          return null;
    }

  }
}
