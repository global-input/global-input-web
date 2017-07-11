import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {createMessageConnector,changeBaseURL} from "global-input-message";
import QRCode from "qrcode.react";


/**running locally**/


//changeBaseURL("http://localhost:1337");



export default class SignInInput extends Component {

 constructor(props){
    super(props);
    this.connector=createMessageConnector();
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
      this.connector.connect(this.onMessageReceived.bind(this));
  }

  componentWillUnmount(){
      this.connector.disconnect();
  }

  onMessageReceived(message){
    console.log("setting:"+JSON.stringify(message));
    if(message.name==="Email address"){
        this.setUsername(message.content);
    }
    else if(message.name==="Password"){
        this.setPassword(message.content);
    }
    else{
      console.log("message ignored");
    }
  }


  render() {
    const linenumber=4;
    const {username,password}=this.state;


    const qrcontent=this.connector.genererateQrContent([{
      nm:"Email address",
      vl:this.state.username
    },
    {
      nm:"Password"
    }
  ]);
    console.log("qrcontent:"+qrcontent);
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

      </div>
    );
  }
}
