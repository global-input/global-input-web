import React, {Component} from 'react'

import "../css/global-input.css"
import  "../css/SignInInput.css";

import {config} from "../configs";

import {CodeDataRenderer} from "global-input-react";

import SignInInputSource from "./SignInInputSource";



export default class SignInInput extends Component {
  constructor(props){
     super(props);
     this.state={username:"",password:""};
  }



 setUsername(username){

   this.setState(Object.assign({}, this.state,{username}));
 }
 setPassword(password){

   this.setState(Object.assign({}, this.state,{password}));
 }

login(){
    this.props.history.push("/global-input-app-example/signin-success");
}


  render() {
    var globalInputConfig={

          url:config.url,
          apikey:config.apikey,
          securityGroup:config.securityGroup,
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
    const {username,password}=this.state;
    return (
      <div>
            <div className="signin container">

                 <div className="signin formContainer">
                         <div>
                             Email address: <input type="text" onChange={(evt) => {
                                   this.setUsername(evt.target.value);
                               }} value={username}/>
                         </div>
                         <div>
                             Password: <input type="password" onChange={(evt) => {
                                   this.setPassword(evt.target.value);
                               }} value={password}/>
                         </div>
                         <div>
                              <button onClick={(evt) => {
                                   this.login();
                               }}>Login</button>

                         </div>
                 </div>
                   <CodeDataRenderer service={this}  config={globalInputConfig} level="H" size="300"/>
               </div>
               <div>
               <SignInInputSource/>
               </div>
        </div>
    );
  }
}
