import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {createMessageConnector} from "global-input-message";
import QRCode from "qrcode.react";
import {config} from "../config";


export default class SignInInput extends Component {
  getMetadata(){
    return  [
                {
                  name:"Email address",
                  value:this.state.username
                 },{
                   name:"Password",
                   type:"secret"
                 },
                 {
                   name:"Login",
                   type:"action"
                 }
            ];
  }
  getInputProcessors(){
    return [
      this.setUsername.bind(this),
      this.setPassword.bind(this),
      this.login.bind(this)
    ];
  }
  getQRData(){
    return JSON.stringify(this.connector.getConnectionData({}));

  }

onInputMessageReceived(inputMessage){
   var dataprocessors=this.getInputProcessors();
   console.log("setting:"+JSON.stringify(inputMessage));
   dataprocessors[inputMessage.data.index](inputMessage.data.value);
}
  connectToMessenger(){
          this.connector=createMessageConnector();
          var options={
            url:config.baseURL,
            onInputMessageReceived:this.onInputMessageReceived.bind(this),
            metadata:this.getMetadata()
          }
          this.connector.connect(options);
}







disconnectFromMessenger(){
  this.connector.disconnect();
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

  componentWillMount(){
      this.connectToMessenger();
  }

  componentWillUnmount(){
      this.disconnectFromMessenger();
  }

login(){
    this.props.history.push("/signin-success");
}


  render() {
    const linenumber=4;
    const {username,password}=this.state;
    const qrcontent=this.getQRData();

    return (
    <div>
          <div style={{display:"flex"}}>

              <h1>Login Input Example</h1>
                <div style={{margin:5}}>
                  <QRCode value={qrcontent}/>
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
