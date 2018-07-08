import React, {Component} from 'react'
import {images} from "../configs";
import {styles} from "./styles";
import {DisplaySourceCode} from "../components";



export  default class DisplaySampleCode4 extends Component {
    render(){
        return(
          <DisplaySourceCode>
                  <pre>
{`
    var options={
            initData:{
            form:{
                title:"Press the following button when you are ready",
                fields:[{
                    label:"Content",
                    operations:{
                        onInput:function(content){
                                  console.log("User has entered:"+content);
                                }
                        }
                },{
                    type:"button",
                    label:"Start",
                    operations:{
                        onInput:function(){
                                  console.log("User pressed the Start button on mobile");
                                }
                        }
                }]
              }
            }
        };
`}

                  </pre>
          </DisplaySourceCode>

        );

    }

}
