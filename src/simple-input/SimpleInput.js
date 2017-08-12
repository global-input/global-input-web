import React, {Component} from 'react'

import {CodeDataRenderer} from "global-input-react";


import SimpleInputSource from "./SimpleInputSource";
import {config} from "../configs";


const linenumber=10;
export default class SimpleInput extends Component {

  constructor(props){
     super(props);
     this.state={content:""};
  }


 submit(){
   this.props.history.push("/global-input-app-example/simpleinput-submit");
 }
 setContent(content){
   this.setState(Object.assign({}, this.state,{content}));
 }

  render() {

    var globalInputConfig={

          url:config.url,
          apikey:config.apikey,
          securityGroup:config.securityGroup,
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
                  <CodeDataRenderer service={this}  config={globalInputConfig} level="H" size="300"/>
              </div>

              <div>
                  <SimpleInputSource/>

              </div>
      </div>
    );
  }
}
