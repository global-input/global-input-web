import React from 'react'

import "../css/global-input.css"
import  "../css/SignInInput.css";



import {GlobalInputComponent,AdjustableInputCodeRender} from "global-input-react";

import SignInInputSource from "./SignInInputSource";



export default class SignInInput extends GlobalInputComponent {
  constructor(props){
     super(props);
     this.state={username:"",password:"", sender:{}, senders:[]};
  }
    buildInitData(){
        return {
                action:"input",
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

                 <AdjustableInputCodeRender sender={this.state.sender} senders={this.state.senders} connector={this.connector}/>
               </div>
               <div>
               <SignInInputSource/>
               </div>
        </div>
    );
  }
}
