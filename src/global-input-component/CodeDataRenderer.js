import React, {Component} from 'react';
import QRCode from "qrcode.react";



export   default class CodeDataRenderer extends Component {
  render() {
      var {connector,type, level, size}=this.props;
      var codedata=null;
      if(type==="input"){
          codedata=connector.buildInputCodeData();
      }
      else if(type==="apikey"){
          codedata=connector.buildAPIKeyCodeData();
      }
      else if(type==="securityGroup"){
          codedata=connector.buildSecurityGroupCodeData();
      }
      else if(type==="codeAES"){
          codedata=connector.buildCodeAESCodeData();
      }
      else{
        console.error("type is not passed in");
          return null;
      }
      console.log("*****"+type+" code[["+codedata+"]]");
      return(
         <QRCode value={codedata} level={level} size={size}/>
      );
  }
}
