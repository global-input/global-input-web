import React, {Component} from 'react'

import {createMessageConnector} from "global-input-message";


export  default class GlobalInputComponent extends Component {

  constructor(props){
    super(props);
    this.connector=createMessageConnector();
  }

  buildInitData(){
    return {
          action:"input-form",
          form:{
              title:"",
              fields:[]
          }

    };
  }

  buildConnectionOptions(){
    var options={
        initData:Object.assign({},this.buildInitData()),
        onSenderConnected:this.onSenderConnected.bind(this),
        onSenderDisconnected:this.onSenderDisconnected.bind(this)
    };
    return options;
  }
  onSenderConnected(sender, senders){
      this.setState(Object.assign({},this.state,{sender, senders}));
  }
  onSenderDisconnected(sender, senders){
      this.setState(Object.assign({},this.state,{sender, senders}));
  }
  connectToMessenger(){
          var options=this.buildConnectionOptions();
          this.connector.connect(options);          
  }

disconnectFromMessenger(){
  this.connector.disconnect();
}
componentDidMount(){
  this.connectToMessenger();
}
componentWillUnmount(){
    this.disconnectFromMessenger();
}
  render() {
    return null;
  }



}
