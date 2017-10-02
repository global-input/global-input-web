import React, {Component} from 'react'

import {CodeDataRenderer} from "global-input-react";

import "../components/styles/index.css";


import {config} from "../configs";
import {styles} from "./styles";


const linenumber=10;
export default class DemoInput extends Component {

  constructor(props){
     super(props);
     this.state={content:"",senders:null};
  }
  sendInputMessage(message, fieldIndex){
    if(this.globalInput && this.globalInput.connector){
       this.globalInput.connector.sendInputMessage(message,fieldIndex);
    }

  }


 setContent(content){

   this.setState(Object.assign({}, this.state,{content}));

 }
 setSenders(sender, senders){
   this.setState(Object.assign({}, this.state,{senders:senders}));
   console.log("---:"+senders);
 }
 buildGlobalInputConfig(){
   return {

         url:config.url,
         apikey:config.apikey,
         securityGroup:config.securityGroup,
         scrollToOnConnected:"bidirectionalInputTest",
         onSenderConnected:this.setSenders.bind(this),
         onSenderDisconnected:this.setSenders.bind(this),
         initData:{
           action:"input",
           dataType:"text",
           form:{
                 title:"Birectional Input Test",
                 fields:[{
                       label:"Content",
                       value:this.state.content,
                       operations:{
                           onInput:this.setContent.bind(this),
                       },
                       nLines:linenumber
                 }]
           }
        }
   };
 }


  render() {
    const config=this.buildGlobalInputConfig();
    return (
    <div id="demoContainer" style={styles.demoContainer}>
                  <DisplayQRCode config={config} service={this} senders={this.state.senders}/>
                  <DisplayForm content={this.state.content}  setContent={this.setContent.bind(this)} senders={this.state.senders}
                  sendInputMessage={this.sendInputMessage.bind(this)}/>
      </div>
    );
  }
}
class DisplayQRCode extends Component{

  render(){
    if(!this.props.senders || this.props.senders.length===0){
          return(
            <div style={styles.demoQrCodeContainer}>
             <CodeDataRenderer service={this.props.service}  config={this.props.config} level="H" size="300"/>
            </div>
          );
    }
    else{
        console.log("----qr senders-:"+this.props.senders)
          return null;
    }

  }
}

class DisplayForm extends Component{
    render(){
      if(this.props.senders && this.props.senders.length>0){
           return(
             <div className="simpleFormContainer">
                     <div className="contetAndLabelRecord">
                         <textarea id="bidirectionalInputTest" rows={linenumber} cols="100" onChange={(evt) => {
                        this.props.setContent(evt.target.value);
                        this.props.sendInputMessage(evt.target.value,0);
                      }} value={this.props.content}/>
                     </div>

            </div>
           );
         }
         else{
           return null;
         }






    }


}
