import React from 'react'

import {GlobalInputComponent,AdjustableInputCodeRender} from "global-input-react";

import SimpleInputSource from "./SimpleInputSource";


const linenumber=10;
export default class SimpleInput extends GlobalInputComponent {

  constructor(props){
     super(props);
     this.state={content:""};
  }
    buildInitData(){
        return {
                action:"input",
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

         };
    }
 submit(){
   this.props.history.push("/global-input-app-example/simpleinput-submit");
 }
 setContent(content){
   this.setState(Object.assign({}, this.state,{content}));
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
