import React from 'react'

import styles from "./SignInInput.css";


import {GlobalInputComponent,InputCodeRender} from "../global-input-component";

export default class SignInInput extends GlobalInputComponent {
  constructor(props){
     super(props);
     this.state={username:"",password:"", sender:{}, senders:[]};
  }
    getMetadata(){
        return {
                title:"Login",
                fields:[{
                          label:"Email address",
                          value:this.state.username,
                          onInput:this.setUsername.bind(this)
                        },{
                           label:"Password",
                           type:"secret",
                           onInput:this.setPassword.bind(this)
                        },{
                           label:"Login",
                           type:"button",
                           onInput:this.login.bind(this)
                        }]
                }
    }

 setUsername(username){
   console.log("content to be set:"+username);
   this.setState(Object.assign({}, this.state,{username}));
 }
 setPassword(password){
   console.log("content to be set:"+password);
   this.setState(Object.assign({}, this.state,{password}));
 }

login(){
    this.props.history.push("/signin-success");
}


  render() {

    const {username,password}=this.state;
    return (
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
         <InputCodeRender sender={this.state.sender} senders={this.state.senders} connector={this.connector}/>




    </div>
    );
  }
}
