import React, {Component} from 'react';
import {createMessageConnector} from "global-input-message";
import DisplayQRCode from "../display-qrcode";
export  default class GlobalInputConnect extends Component {
  ACT_TYPE={
      CONNECTING:1,
      CONNECTED:2,
      SENDER_CONNECTED:3
  }
  constructor(props){
    super(props);
    this.state=this.buildConnectingState(this.props);
    this.connector=null;
  }

  componentWillReceiveProps(nextProps){
    if(this.nextProps.mobileConfig!=this.props.mobileConfig){
        this.setState(this.buildConnectingState(nextProps));
        this.connectGlobalInputApp();
    }
  }
  onGlobalInputConnected(){
    this.setState(this.buildConnectedState());
  }
  buildConnectingState(props){
    this.mobileConfig=Object.assign({},this.props.mobileConfig,{
        onRegistered:next=>{
            next();
            this.onGlobalInputConnected();
        }

    });
    return {
        renderType:this.ACT_TYPE.CONNECTING
    }
  }
  buildConnectedState(){
    return{
      renderType:this.ACT_TYPE.CONNECTED,
      code:this.connector.buildInputCodeData()
    };
  }
  componentDidMount(){
    this.connectGlobalInputApp();
  }
  disconnectGlobaInputApp(){
    this.connector.disconnect();
    this.connector=null;
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
  render(){
    if(this.state.renderType===this.ACT_TYPE.CONNECTED){
      return this.renderConnected();
    }
    else{
        return this.renderConnecting();
    }


  }
  renderConnecting(){
        if(this.props.connectingMessage){
            return (<div>{this.props.connectingMessage}</div>);
        }
        else{
          return null;
        }

  }
  renderConnected(){
          return (<DisplayQRCode code={this.state.code} label={this.props.connectedMessage}/>);

  }


}
