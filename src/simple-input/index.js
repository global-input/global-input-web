import React, {Component} from 'react'
import {GlobalInputReceiver} from "global-input-react";
import {config} from "../config";



export default class SimpleInput extends GlobalInputReceiver {

    getGlobalInputConfig(){
      return {
          url:config.url,
          metadata:[
            {
              name:"Content",
              value:this.state.content,
              onInput:this.setContent.bind(this)
            },
             {
               name:"Submit",
               type:"action",
               onInput:this.submit.bind(this)
             }
          ]
      }

    }

 constructor(props){
    super(props);
    this.state={content:""};
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
      <div>
      <div style={{display:"flex"}}>

          <h1>Simple Input Example</h1>
            <div style={{margin:5}}>
              {this.displayInputCode()}
            </div>


      </div>

        Content:
        <textarea rows={linenumber} cols="50" onChange={(evt) => {
              this.setContent(evt.target.value);
          }} value={content}/>
          <button onClick={(evt) => {
               this.submit();
           }}>Submit</button>

      </div>
    );
  }
}
