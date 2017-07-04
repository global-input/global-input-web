import React, {Component} from "react";

import {api} from "../data";
import SocketIOClient from "socket.io-client";
import {messenger} from "./messenger"



class BarcodeView extends Component{

  render(){
    var clientId=this.props.clientId;
    var barcodeImageURL=this.props.barcodeImageURL;
      return(
        <div>
           {clientId}
           <img src={barcodeImageURL}/>
        </div>
      );
  }
}


export default class MessengerDisplay extends Component{
  constructor(props){
    super(props);
    this.state={clientId:messenger.getClientId()}
    messenger.addMessageListener(this);
  }
 render(){
    var clientId=this.state.clientId;
    var barcodeImageURL=api.qrURL(this.state.clientId);
    return (
        <BarcodeView barcodeImageURL={barcodeImageURL} clientId={clientId}/>
    );
  }
  setClientId(clientId){
    this.setState(Object.assign({}, this.state, {clientId}));
  }
  onReceiveClientMessage(data){
      this.props.messageListener.onReceiveClientMessage(data);
  }


}
