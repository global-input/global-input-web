import React, {Component} from 'react'
import QRCode from "qrcode.react";

import {createMessageConnector} from "global-input-message";

import "../../components/styles/index.css";


import {config,images} from "../../configs";


import {RenderTextImage,LoadingIcon} from "../../components";
import contentTransferConfig from "./contentTransferConfig";
import {styles} from "./styles";
export default class ContentTransfer extends Component {
  ACT_TYPE={
      INTRODUCTION:1,
      CONNECTING:2,
      CONNECTED:3,
      SENDER_CONNECTED:4
  }
  constructor(props){
      super(props);
      this.state=this.getStateFromProps(this.props);
    }
    componentWillUnmount(){
        this.disconnectGlobalInput();
    }
   componentWillReceiveProps(nextProps){
        //this.setState(this.getStateFromProps(nextProps))
    }
    getStateFromProps(props){
            var action=this.createNewAction();
            return {action, message:null};
    }

    setContent(content){
      this.getContentField().value=content;
      this.setState({action:this.state.action, message:null});
    }
    getContentField(){
      return this.state.action.options.initData.form.fields[0];
    }

    createNewAction(){
      return {
                actType:this.ACT_TYPE.INTRODUCTION,
                qrsize:400,
                connector:null,
                connected:false,
                senders:null,
                options:{
                            url:config.url,
                            apikey:config.apikey,
                            securityGroup:config.securityGroup,
                            initData:{
                                action:"input",
                                dataType:"content",
                                form:{
                                  id:"contentTransfer@globalinput.co.uk",
                                  title:"Live Encrypted Data Transfer",
                                  label:"globalinput",
                                  fields:[{
                                    label:"Content",
                                    id:"content",
                                    value:"",
                                    nLines:10,
                                    operations:{
                                        onInput:this.setContent.bind(this)
                                    },
                                  },{
                                    label:"Finish",
                                    type:"button",
                                    operations:{
                                        onInput:()=>{
                                            this.disconnectGlobalInput();

                                      }
                                   }
                                 }]
                                }
                          },

                          onSenderConnected:this.onSenderConnected.bind(this),
                          onSenderDisconnected:this.onSenderDisconnected.bind(this),
                          onRegistered:(next)=>{
                                  next();
                                  this.onConnected();
                          }
                        }
                  };

    }

    onSenderConnected(sender, senders){
         console.log("Sender Connected");
         var action=this.state.action;
         action.senders=senders;
         action.actType=this.ACT_TYPE.SENDER_CONNECTED;
         this.setState({action});
    }
    onSenderDisconnected(sender,senders){
        console.log("Sender Disconnected");
        console.log("Sender Connected");
        var action=this.state.action;
        action.senders=senders;
        action.actType=this.ACT_TYPE.CONNECTED;
        this.setState({action});
   }
  onConnected(){
    var action=this.state.action;
    action.connected=true;
    action.actType=this.ACT_TYPE.CONNECTED;
    this.setState({action});
  }


  disconnectGlobalInput(){
      var action=this.state.action;
      if(action.connector){
              action.connector.disconnect();
              action.connector=null;
      }
      this.setState(this.getStateFromProps(this.props));
  }
  isSenderConnected(){
    return this.state.action.actType===this.ACT_TYPE.SENDER_CONNECTED && this.state.action.connector;
  }
  sendInputMessage(message, fieldIndex){
    if(this.isSenderConnected()){
       this.state.action.connector.sendInputMessage(message,fieldIndex);
    }
  }



    connectGlobalInput(){
        var action=this.state.action;
        action.connector=createMessageConnector();
        action.actType=this.ACT_TYPE.CONNECTING;
        this.setState({action});
        action.connector.connect(action.options);
    }
    render(){
        var action=this.state.action;
        if(action.actType===this.ACT_TYPE.CONNECTING){
              return this.renderConnecting();
        }
        else if(action.actType===this.ACT_TYPE.CONNECTED && action.connector){
              return this.renderConnected();
        }
        else if(action.actType===this.ACT_TYPE.SENDER_CONNECTED && action.connector){
              return this.renderSenderConnected();
        }

        else{
            return this.renderIntroduction();
        }


    }
    renderConnecting(){
       return(
        <div style={styles.content}>

          <RenderTextImage title={contentTransferConfig.title} content={contentTransferConfig.connecting} image={images.contentTransfer}/>
          <LoadingIcon loading={true}/>
        </div>
      );
    }
    renderIntroduction(){
        return(
          <div style={styles.content}>
            <RenderTextImage title={contentTransferConfig.title} content={contentTransferConfig.content} image={images.contentTransfer}>
            <div style={styles.buttonContainer}>
                  <button type="button" className="btn btn-success" onClick={this.connectGlobalInput.bind(this)}>{contentTransferConfig.startButton}</button>
            </div>

            </RenderTextImage>

          </div>

        );

    }


    renderConnected(){

      var qrCodeContent=this.state.action.connector.buildInputCodeData();

      return(
        <div style={styles.content}>
          <RenderTextImage title={contentTransferConfig.title} content={contentTransferConfig.connected}>
                  <div style={styles.qrCodeContainer}>

                              <QRCode
                                    value={qrCodeContent}
                                    level="H"
                                    size={this.state.action.qrsize}
                                   />
                </div>

                <div style={styles.buttonContainer}>
                      <button type="button" className="btn btn-success" onClick={this.disconnectGlobalInput.bind(this)}>{contentTransferConfig.cancelButton}</button>
                </div>
          </RenderTextImage>

        </div>

      );


    }
    renderCopyButton(contentField){
      if(contentField.value){
        return (
          <div style={styles.button}>
            <button type="button" className="btn btn-success" onClick={()=>{
              document.getElementById("contentTextArea").select();
              document.execCommand("Copy");
              this.setState({action:this.state.action, message:contentTransferConfig.clipboard.copied})
            }}>Copy</button>
          </div>
        );
      }
      else{
        return null;
      }
    }
    renderSenderConnected(){
      var action=this.state.action;

      var contentField=this.getContentField();
          return(
            <div style={styles.content}>
                    <RenderTextImage title={contentTransferConfig.title} content={contentTransferConfig.senderConnected}>
                        <div style={styles.textareaContainer}>
                                <textarea id="contentTextArea" rows={contentField.nLines} cols="100" onChange={(evt) => {
                                 this.setContent(evt.target.value);
                                 this.sendInputMessage(evt.target.value,0);
                               }} value={contentField.value}/>
                        </div>
                        {this.renderMessage()}
                        <div style={styles.buttonContainer}>
                            {this.renderCopyButton(contentField)}
                            <div style={styles.button}>
                              <button type="button" className="btn btn-success" onClick={this.disconnectGlobalInput.bind(this)}>{contentTransferConfig.finishButton}</button>
                            </div>
                        </div>



                    </RenderTextImage>

           </div>

          );


   }
renderMessage(){
  if(this.state.message){
    return(
        <div style={styles.message}>{this.state.message}</div>
    );
  }
  else{
    return null;
  }
}



}
