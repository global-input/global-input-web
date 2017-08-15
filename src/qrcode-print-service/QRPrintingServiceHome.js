import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

import QRCodePrintService from "./QRCodePrintService";
import {textValues} from  "../configs";
import {images} from "../configs";
import {ShowServiceLink,ServiceIntroduction,DisplayBlockText} from "../components";
import QRCodePrintServiceSource from "../source-codes/QRCodePrintService";
import QRCodePrintServiceSummary from "../source-codes/QRCodePrintServiceSummary";



export default class QRPrintingServiceHome extends Component{
  render(){

    return (
            <div className="serviceContainer">
                    <ServiceIntroduction title={textValues.qrcode.title} content={textValues.qrcode.content1}/>
                    <ShowServiceLink serviceURI={textValues.qrcode.link.uri} linkText={textValues.qrcode.link.text}/>
                    <Route path={textValues.qrcode.link.uri} component={DisplayService}/>
                </div>
      )
    }
}

class DisplayService extends Component{
  render(){
    return(
       <div>
        <QRCodePrintService/>
        <DisplayBlockText content={textValues.qrcode.content2}/>
        <QRCodePrintServiceSource/>
        <DisplayBlockText content={textValues.qrcode.content3}/>
        <QRCodePrintServiceSummary/>
      </div>
    );

  }
}
