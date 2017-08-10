import React, {Component} from 'react'

import {AdjustableInputCodeRender} from "global-input-react";
import {createMessageConnector} from "global-input-message";

import SimpleInputSource from "./SimpleInputSource";
import {config} from "../configs";


const linenumber=10;
export default class SimpleInput extends Component {

  constructor(props){
     super(props);
     this.state={content:"",sender:null, senders:[]};
     this.connector=createMessageConnector();

  }
  connectToGlobalInput(){
         var options={

               url:config.url,
               apikey:config.apikey,
               onSenderConnected:this.onSenderConnected.bind(this),
               onSenderDisconnected:this.onSenderDisconnected.bind(this),
               initData:{
                 action:"input",
                 dataType:"text",
                 form:{
                       title:"Simple Input Example",
                       fields:[{
                             label:"Content",
                             value:this.state.content,
                             operations:{
                                 onInput:this.setContent.bind(this),
                             },
                             nLines:linenumber
                       },{
                            label:"Finish",
                            type:"button",
                            operations:{
                               onInput:this.submit.bind(this)
                            }

                        }]
                 }
              }


         };

       this.connector.connect(options);
  }

  onSenderConnected(sender, senders){
       this.setState(Object.assign({},this.state,{sender, senders}));
   }
   onSenderDisconnected(sender, senders){
       this.setState(Object.assign({},this.state,{sender, senders}));
   }


 submit(){
   this.props.history.push("/global-input-app-example/simpleinput-submit");
 }
 setContent(content){
   this.setState(Object.assign({}, this.state,{content}));
 }
 componentDidMount(){
    this.connectToGlobalInput();
 }
 componentWillUnmount(){
    this.connector.disconnect();
}

  render() {

    const content=this.state.content;


    return (
    <div>
              <div className="simple container">

                   <div className="simple formContainer">

                           <div>
                               <textarea rows={linenumber} cols="50" onChange={(evt) => {
                        			this.setContent(evt.target.value);
                              this.connector.sendInputMessage(evt.target.value,0);
                				    }} value={content}/>
                           </div>

                           <div>
                                  <button onClick={(evt) => {
                         this.submit();
                     }}>Finish</button>

                           </div>
                   </div>
                   <AdjustableInputCodeRender sender={this.state.sender} senders={this.state.senders} connector={this.connector}/>
              </div>

              <div>
                  <SimpleInputSource/>

              </div>
      </div>
    );
  }
}
