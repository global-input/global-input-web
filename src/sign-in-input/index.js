import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {GlobalInputReceiver} from "../global-input-react";

import {config} from "../config";


export default class SignInInput extends GlobalInputReceiver {
  getGlobalInputConfig(){
    return  {
              url:config.url,
              onInput:this.onInput.bind(this),
              metadata:
              [
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
            ]
          }
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
    const linenumber=4;
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

          <Route path="/success" component={SigninSuccess}/>
      </div>
    );
  }
}

class SigninSuccess extends Component{
  render(){
    return(
      <div>Sign in Success</div>
    );

  }
}
