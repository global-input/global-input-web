
import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {DisplaySource} from "../components";




export default class SignInInputSummary extends DisplaySource{


renderSource(){

  return(

    <pre>{`

   ...

      buildGlobalInputConfig(){
        return {

              initData:{
                action:"input",
                dataType:"login",
                form:{
                  "title":"Sign In",
                  fields:[{
                            label:"Email address",
                            value:this.state.username,
                            operations:{
                                onInput:this.setUsername.bind(this)
                            }

                          },{
                             label:"Password",
                             type:"secret",
                             operations:{
                               onInput:this.setPassword.bind(this)
                             }

                          },{
                             label:"Login",
                             type:"button",
                             operations:{
                                onInput:this.login.bind(this)
                             }

                          }]
                      }
             }
          };

      }

        render() {

          return (
            ...
              <CodeDataRenderer service={this}  config={this.buildGlobalInputConfig()} level="H" size="300" showControl={true}/>
           ...
          );
        }
      }
      ...


      `}</pre>
  )
}

}
