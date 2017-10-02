import React, {Component} from 'react'
import QRCode from "qrcode.react";
import "../components/styles/index.css";
import {textValues,images} from  "../configs";

import {CodeDataRenderer} from "global-input-react";
import ReactMarkdown from "react-markdown";

import {styles} from "./styles";

export default class DisplayQRCode extends Component{

  render(){
    if(this.props.render){
          return(
            <div style={styles.qrCodeContainer}>
                    <CodeDataRenderer service={this.props.service}  config={this.props.config} level="H" size="300"/>
            </div>



          );
    }
    else{
          return null;
    }

  }
}
