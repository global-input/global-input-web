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
        onInput:this.onInput.bind(this),
        initData:Object.assign({},this.buildInitData()),
        onSenderConnected:this.onSenderConnected.bind(this),
        onSenderDisconnected:this.onSenderDisconnected.bind(this)
    };
    if(options.initData.form && options.initData.form.fields && options.initData.form.fields.length>0){
        options.initData.form.fields=options.initData.form.fields.map(function(m){
            var el=Object.assign({},m);
            if(el.operations){
                delete el.operations
            }
            return el;
        });
    }
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

  onInput(inputMessage){

      console.log("received the input message:"+inputMessage);

      if(typeof inputMessage.data =="undefined"){
        console.log("data field is missing in the input message");
        return;
      }
      if(typeof inputMessage.data.index =="undefined"){
        console.log("index should be set in the data field of the input message");
        return;
      }
      var initData=this.buildInitData();
      if((!initData.form) || (!initData.form.fields)){
        console.log("field is missing in the initData");
        return;
      }
      if(initData.form.fields.length<=inputMessage.data.index){
          console.log("index data is too big in the input message");
          return;
      }
      if(initData.form.fields[inputMessage.data.index].operations &&   initData.form.fields[inputMessage.data.index].operations.onInput){
          initData.form.fields[inputMessage.data.index].operations.onInput(inputMessage.data.value);
      }
      else{
        console.log("onInput operations is not defined in the initData index:"+inputMessage.data.index);
      }
  }

}
