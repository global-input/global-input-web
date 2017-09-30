import React, {Component} from 'react'
import {textValues,images} from  "../configs";


import ReactMarkdown from "react-markdown";



import {styles} from "./styles";



export default class DisplayQRPrintingTitle extends Component{

  render(){
    if(this.props.render){
      return(
        <div style={styles.serviceTitle}>{textValues.qrcode.title}</div>
      );
    }
    else{
      return null;
    }


  }
}
