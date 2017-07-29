import React from 'react'

import {GlobalInputComponent,InputCodeRender} from "../global-input-component";

import styles from "./SimpleInput.css";

export default class SimpleInput extends GlobalInputComponent {

  constructor(props){
     super(props);
     this.state={content:""};
  }
    getMetadata(){
        return {
                title:"Simple Input Example",
                fields:[{
                      label:"Content",
                      value:this.state.content,
                      onInput:this.setContent.bind(this),
                      nLines:4
                },{
                     label:"Submit",
                     type:"button",
                     onInput:this.submit.bind(this)
                 }]
         };
    }
 submit(){
   this.props.history.push("/simpleinput-submit");
 }
 setContent(content){
   console.log("content to be set:"+content);
   this.setState(Object.assign({}, this.state,{content}));
 }


  render() {
    const linenumber=4;
    const content=this.state.content;
    console.log(" so the content in the state:"+content);

    return (
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
             }}>Submit</button>

                   </div>
           </div>
           <InputCodeRender sender={this.state.sender} senders={this.state.senders} connector={this.connector}/>




      </div>
    );
  }
}
