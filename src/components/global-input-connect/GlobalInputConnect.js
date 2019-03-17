import React, {Component} from 'react';
import {createMessageConnector} from "global-input-message";
import cloneDeep from "lodash/cloneDeep";
import DisplayQRCode from "../display-qrcode";
export  default class GlobalInputConnect extends Component {
  RENDER_TYPE={
      ERROR:0,
      CONNECTING:1,
      CONNECTED:2,
      SENDER_CONNECTED:3,
      SENDER_DISCONNECTED:4
  }  
  constructor(props){
    super(props);
    this.state=this.buildConnectingState(this.props);
    this.connector=null;
  }

  componentDidUpdate(prevProps){
    if(prevProps.mobileConfig!=this.props.mobileConfig){
        this.setState(this.buildConnectingState(this.props.mobileConfig));
        this.connectGlobalInputApp();
    }
  }
  onGlobalInputConnected(){
    this.setState(this.buildConnectedState());
  }
  onSenderDisconnected(sender,senders){
    if(!this.props.MultiSenders){
        this.disconnectGlobaInputApp();
    }
    try{
        if(this.props.mobileConfig.onSenderDisconnected){
          this.props.mobileConfig.onSenderDisconnected(sender, senders);
        }
    }
    catch(error){
      console.error(error);
    }

    if(this.props.reconnectOnDisconnect){

        this.setRenderType(this.RENDER_TYPE.CONNECTING, "");
        this.connectGlobalInputApp();
    }
    else{
        this.setState(this.buildSenderDisconnectedState(sender,senders));
    }
  }
  buildConnectingState(props){
    if(!props.mobileConfig){
      return {
          renderType:this.RENDER_TYPE.ERROR,
          message:"GlobalInputConnect component requires mobileConfig parameter."
      }
    }
    else if(!props.mobileConfig.initData){
      return {
          renderType:this.RENDER_TYPE.ERROR,
          message:"initData is missing in the parameter mobileConfig in the GlobalInputConnect component"
      }
    }
    else if(!props.mobileConfig.initData.form){
      return {
          renderType:this.RENDER_TYPE.ERROR,
          message:"form is missing in initData of the mobileConfig in the GlobalInputConnect component"
      }
    }
    this.mobileConfig=cloneDeep(this.props.mobileConfig);
    this.mobileConfig.onRegistered=next=>{
            next();
            this.onGlobalInputConnected();
    };
    this.mobileConfig.onSenderConnected=(sender, senders)=>{
          if(this.props.mobileConfig.onSenderConnected){
            this.props.mobileConfig.onSenderConnected(sender, senders);
          }
          this.setState(this.buildSenderConnectedState(sender,senders));
    }
    this.mobileConfig.onSenderDisconnected=this.onSenderDisconnected.bind(this)

    return {
        renderType:this.RENDER_TYPE.CONNECTING
    }
  }
  setRenderType(renderType,message){
      this.setState(Object.assign({},this.state,{renderType,message}));
  }

  buildConnectedState(){
    return{
      renderType:this.RENDER_TYPE.CONNECTED,
      code:this.connector.buildInputCodeData()
    };
  }
  buildSenderConnectedState(sender,senders){
    return{
      renderType:this.RENDER_TYPE.SENDER_CONNECTED,
      sender,
      senders
    };
  }
  buildSenderDisconnectedState(sender,senders){
    return{
      renderType:this.RENDER_TYPE.SENDER_DISCONNECTED,
      sender,
      senders
    };
  }


  componentDidMount(){
    this.connectGlobalInputApp();
  }
  disconnectGlobaInputApp(){
    if(this.connector){
      this.connector.disconnect();
      this.connector=null;
      this.onSenderDisconnected();
    }

  }
  connectGlobalInputApp(){
      if(this.connector){
        this.disconnectGlobaInputApp();
      }
      this.connector=createMessageConnector();
      if(this.props.mobileConfig){
        this.connector.connect(this.mobileConfig);
      }

  }
  sendInputMessage(message, fieldIndex, fieldId){
    if(this.connector){
       this.connector.sendInputMessage(message,fieldIndex, fieldId);
    }
  }

  changeInitData(initData){
    if(this.connector){
       this.connector.sendInitData(initData);
    }
    else{
        console.log("sendInitData is called when disconnected:");
    }
  }



  render(){
    if(this.state.renderType===this.RENDER_TYPE.ERROR){
        return this.renderError();
    }
    else if(this.state.renderType===this.RENDER_TYPE.CONNECTED){
      return this.renderConnected();
    }
    else if(this.state.renderType===this.RENDER_TYPE.SENDER_CONNECTED){
      return this.renderSenderConnected();
    }
    else if(this.state.renderType===this.RENDER_TYPE.SENDER_DISCONNECTED){
          return this.renderSenderDisconnected();
    }
    else{
        return this.renderConnecting();
    }


  }
  renderError(){

        return (<DisplayQRCode code={this.state.message} label={this.state.message} size={this.props.qrCodeSize}/>);

  }
  renderConnecting(){
        if(this.props.connectingMessage){
            return (<div>{this.props.connectingMessage}</div>);
        }
        else{
          return null;
        }

  }
  renderSenderConnected(){
        if(this.props.renderSenderConnected){
            return this.props.renderSenderConnected(this.state.sender,this.state.senders)
        }
        else if(this.props.senderConnectedMessage){
            return (<div>{this.props.senderConnectedMessage}</div>);
        }
        else if(this.props.children){
             return this.props.children;
        }
        else{
          return null;
        }

  }
  renderSenderDisconnected(){
        if(this.props.renderSenderDisconnected){
            return this.props.renderSenderDisconnected(this.state.sender,this.state.senders)
        }
        else if(this.props.senderDisconnectedMessage){
            return (<div>{this.props.senderDisconnectedMessage}</div>);
        }
        else if(this.props.children){
             return this.props.children;
        }
        else{
          return null;
        }
  }
  renderConnected(){
          console.log("[["+this.state.code+"]]");
          return (<DisplayQRCode code={this.state.code} label={this.props.connectedMessage} size={this.props.qrCodeSize}/>);

  }


}
