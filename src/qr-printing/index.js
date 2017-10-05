import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {CodeDataRenderer} from "global-input-react";
import ReactMarkdown from "react-markdown";
import "bootstrap/dist/css/bootstrap.min.css";
import {textValues,images} from  "../configs";
import {DisplayBlockText,ShowImage,DownloadApp,ContactUsButton} from "../components";

import {TopMenu} from "../menu";
import DisplayIntroduction from "./DisplayIntroduction";
import DisplayQRCode from "./DisplayQRCode";
import DisplayForm from "./DisplayForm";
import QRCodeToPrint from "./QRCodeToPrint";
import DisplayQRPrintingTitle from "./DisplayQRPrintingTitle";
import PasswordPrintingIntroduction from "./PasswordPrintingIntroduction";


import {styles} from "./styles";
import {globalStyles} from "../components/styles";
import {config} from "../configs";
import "./styles/index.css";
export  class QRPrinting extends Component {
  constructor(props){
      super(props);
      this.state={size:300,level:"H", content:"", label:""};
  }
  isSendersConnected(){
      return this.state.senders && this.state.senders.length>0;
  }


  setSize(size){
    this.setState(Object.assign({},this.state,{size}));
  }
  setSenders(sender, senders){
    this.setState(Object.assign({}, this.state,{senders:senders}));
  }
  onLevelItemsSelected(selected){
              this.setLevel(selected);
  }
  setLevel(level){
        this.setState(Object.assign({},this.state,{level}));
  }
  setLabel(label){
    this.setState(Object.assign({},this.state,{label}));
  }
  setContent(content){
    this.setState(Object.assign({},this.state,{content}));
  }
  printQRCode(){
      window.print();
  }
  buildGlobalInputConfig(){
    return {
          url:config.url,
          apikey:config.apikey,
          securityGroup:config.securityGroup,
          scrollToOnConnected:"createQRCodeForm",
          onSenderConnected:this.setSenders.bind(this),
          onSenderDisconnected:this.setSenders.bind(this),
          initData:{
            action:"input",
            dataType:"qrcode",


            form:{
              "title": "QR Code Printing",
              fields:[{
                        label:"Label",
                        operations:{
                            onInput:this.setLabel.bind(this)
                        }


                      },{
                         label:"Content",
                         operations:{
                           onInput:this.setContent.bind(this)
                         }

                      },{
                         label:"Size",
                         operations:{
                           onInput:this.setSize.bind(this)
                         },
                         value:300,
                         type:"range",
                         minimumValue:100,
                         maximumValue:1000,
                         step:10

                      },{
                        label:"Level",
                        operations:{
                          onInput:this.onLevelItemsSelected.bind(this)
                        },
                        type:"list",
                        selectType:"single",
                        value:"H",
                        items:[
                          {value:"L", label:"L"},
                          {value:"M", label:"M"},
                          {value:"Q", label:"Q"},
                          {value:"H", label:"H"}
                        ]
                      },
                      {
                         label:"Print",
                         type:"button",
                         operations:{
                            onInput:this.printQRCode.bind(this)
                         }

                      }]
                  }
         }


    };
  }
  render() {
    var config=this.buildGlobalInputConfig();
    const senderConnected=this.isSendersConnected();
    var renderQRCondeToPrint=false;
    if(senderConnected && this.state.content){
      renderQRCondeToPrint=true;
    }


    return (
      <div className="container">
          <div style={globalStyles.headerSection}>
             <div className="notForPrinting headerContainer">
                    <TopMenu selected="qrprinting"/>
                    <DownloadApp actionText={textValues.qrcode.qrscan} render={!senderConnected}/>
                    <DisplayQRCode config={config} service={this} senders={this.state.senders} render={!senderConnected}/>
                    <DisplayQRPrintingTitle render={senderConnected}/>
                    <DisplayIntroduction/>
            </div>



              <div id="createQRCodeForm" style={styles.serviceContainer}>
                <QRCodeToPrint content={this.state.content} label={this.state.label} level={this.state.level}
                size={this.state.size} render={renderQRCondeToPrint}/>
                <DisplayForm content={this.state.content}  setContent={this.setContent.bind(this)}
                    label={this.state.label} level={this.state.level}
                    size={this.state.size}
                    setLabel={this.setLabel.bind(this)}
                    setSize={this.setSize.bind(this)} printQRCode={this.printQRCode.bind(this)}
                    setLevel={this.setLevel.bind(this)} render={senderConnected}/>
              </div>
          </div>

            <div className="homeContainer">
                  <PasswordPrintingIntroduction/>
           </div>



          <ContactUsButton/>
      </div>
            );
  }
}
