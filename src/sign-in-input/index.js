import React, {Component} from 'react'


import {GlobalInputReceiver} from "global-input-react";

import {config} from "../config";


export default class SignInInput extends GlobalInputReceiver {
  getGlobalInputConfig(){
    var globalConfig=super.getGlobalInputConfig();
    globalConfig.options.url=config.url;
    globalConfig.metadata=[
                {
                  name:"Email address",
                  value:this.state.username,
                  onInput:this.setUsername.bind(this)
                 },{
                   name:"Password",
                   type:"secret",
                   onInput:this.setPassword.bind(this)
                 },
                 {
                   name:"Login",
                   type:"action",
                   onInput:this.login.bind(this)
                 }
            ];
            return globalConfig;
  }
 constructor(props){
    super(props);
    this.state={username:"",password:""};
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
    <div>
          <div style={{display:"flex"}}>

              <h1>Login Input Example</h1>
                <div style={{margin:5}}>
                  {this.displayInputCode()}
                </div>
          </div>
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
    );
  }
}
