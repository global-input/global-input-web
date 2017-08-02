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
    console.log("building this:"+JSON.stringify(options));
    return options;
  }
  onSenderConnected(sender, senders){
      console.log("a new device is connected:"+JSON.stringify(sender));
      this.setState(Object.assign({},this.state,{sender, senders}));
  }
  onSenderDisconnected(sender, senders){
      console.log("a device is disconnected:"+JSON.stringify(sender));
      this.setState(Object.assign({},this.state,{sender, senders}));
  }
  connectToMessenger(){
          var options=this.buildConnectionOptions();
          console.log("......*****:connection options***"+JSON.stringify(options));
          this.connector.connect(options);
          console.log("......*****:"+this.connector.url);
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
