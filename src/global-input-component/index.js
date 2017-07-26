import React, {Component} from 'react'

import {createMessageConnector} from "global-input-message";

export   class GlobalInputComponent extends Component {

  constructor(props){
    super(props);
    this.connector=createMessageConnector();
  }

  getMetadata(){
    return {
          title:"",
          fields:[]
    };
  }
  buildConnectionOptions(){
    var options={
        onInput:this.onInput.bind(this),
        metadata:Object.assign({},this.getMetadata())
    };
    if(options.metadata && options.metadata.fields && options.metadata.fields.length>0){
        options.metadata.fields=options.metadata.fields.map(function(m){
            var el=Object.assign({},m);
            if(el.onInput){
                delete el.onInput
            }
            return el;
        });
    }
    console.log("building this:"+JSON.stringify(options));
    return options;
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
      const metadata=this.getMetadata();
      this.connector.onReiceveGlobalInputFieldData(inputMessage,metadata);
  }

}
