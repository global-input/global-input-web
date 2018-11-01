import React, {Component} from 'react'
import {DisplaySourceCode} from "../components";



export  default class DisplaySampleCode3 extends Component {
    render(){
        return(
          <DisplaySourceCode>
                  <pre>
{`
    var options={
            initData:{
            form:{
                title:{content:"Press the following button when you are ready", color:"green"},
                fields:[{
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
