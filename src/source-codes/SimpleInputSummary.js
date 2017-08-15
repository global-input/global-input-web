


import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {
BrowserRouter as Router,
Route,
Link
} from 'react-router-dom'
import {DisplaySource} from "../components";



export default class SimpleInputSummary extends DisplaySource{
renderSource(){
return(


<pre>{`
    ...
     buildGlobalInputConfig(){
     return {
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
   }


    render() {

      return (
        ...
                    <CodeDataRenderer service={this}  config={this.buildGlobalInputConfig()} level="H" size="300"/>
        ...
      );
    }
  ...



  `}</pre>

)
}

}
