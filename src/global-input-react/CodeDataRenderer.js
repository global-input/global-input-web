import React, {Component} from 'react';
import QRCode from "qrcode.react";
import {createMessageConnector} from "global-input-message";
import SendersConnected from "./SendersConnected";
import QRCodeAdjustControl from "./QRCodeAdjustControl";

export   default class CodeDataRenderer extends Component {
    constructor(props){
    super(props);
    this.service=props.service;

    if(this.service.globalInput){
          this.state=this.service.globalInput.state;
    }
    else{
         var that=this;

          var globalInput={
            connector:createMessageConnector(),
            options:Object.assign({},props.config),
            state:{sender:{}, senders:[], connected:false, level:this.props.level, size:this.props.size},
            componentWillUnmount:this.service.componentWillUnmount
          };

          if(!globalInput.state.size){
            globalInput.state.size=300;
          }
          globalInput.state.size=parseInt(globalInput.state.size);


          this.service.componentWillUnmount=function(){
            if(globalInput.componentWillUnmount){
                globalInput.componentWillUnmount();
            }

            globalInput.connector.disconnect();
          };
          globalInput.options.onSenderConnected=this.onSenderConnected.bind(this),
          globalInput.options.onSenderDisconnected=this.onSenderDisconnected.bind(this),
          globalInput.options.onRegistered=function(next){
              next();
              that.onConnected();
          },
          globalInput.options.onRegisterFailed=function(message){
                console.error("failed to register:"+JSON.stringify(message));
          }
          globalInput.connector.connect(globalInput.options);
          this.service.globalInput=globalInput;
          this.state=globalInput.state;
    }

  }
  onConnected(){

    var connected=true;
    var newState=Object.assign({},this.state,{connected});
    this.service.globalInput.state=newState;
    this.setState(newState);
  }
  scrollDocumentOffsetTop(element){
     return element.offsetTop + ( element.offsetParent ? this.scrollDocumentOffsetTop(element.offsetParent) : 0 );
  }
 onSenderConnected(sender, senders){

        var newState=Object.assign({},this.state,{sender, senders});
        this.service.globalInput.state=newState;
        this.setState(newState);

     if(this.props.config.onSenderConnected){
          this.props.config.onSenderConnected(sender,senders);
     }
     if(this.props.config.scrollToOnConnected){
             var scrollElement=document.getElementById(this.props.config.scrollToOnConnected);
             if(scrollElement){
               var top=this.scrollDocumentOffsetTop(scrollElement)-(window.innerHeight / 2 );
               window.scrollTo(0,top);
             }
     }

 }
 onSenderDisconnected(sender, senders){
   var newState=Object.assign({},this.state,{sender, senders});
   this.service.globalInput.state=newState;
   this.setState(newState);

   if(this.props.config.onSenderDisconnected){
        this.props.config.onSenderDisconnected(sender,senders);
   }


 }
 onSetSize(size){
   var newState=Object.assign({},this.state,{size});
   this.service.globalInput.state=newState;
   this.setState(newState);
 }
 onSetLevel(level){
   var newState=Object.assign({},this.state,{level});
   this.service.globalInput.state=newState;
   this.setState(newState);
 }


  render() {
      var loadingClassName="loader";
      if(this.props.loadingClassName){
          loadingClassName=this.props.loadingClassName;
      }
      if(!this.state.connected){
          return (<div className={loadingClassName}></div>);
      }
      var codeClassName="globalInputCodeContainer senderNotConnected";
      if(this.state.senders && this.state.senders.length>0){
          codeClassName="globalInputCodeContainer senderConnected";
      }


      var codedata=null;
      if((!this.props.type) || this.props.type==="input"){
          codedata=this.service.globalInput.connector.buildInputCodeData();
      }
      else if(this.props.type==="pairing"){
          codedata=this.service.globalInput.connector.buildPairingData();
      }
      else{
        console.error("unrecognized type is CodeDataRenderer, input/pairing expected");
        return null;
      }


      console.log("*** code[["+codedata+"]]");
      return(
        <div className={codeClassName}>
              <QRCode value={codedata} level={this.state.level} size={this.state.size}/>
              <QRCodeAdjustControl size={this.state.size} level={this.state.level} onSetSize={this.onSetSize.bind(this)} onSetLevel={this.onSetLevel.bind(this)} showControl={this.props.showControl}/>
              <SendersConnected senders={this.state.senders}/>
          </div>
      );
  }


}
