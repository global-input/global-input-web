
import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {DisplaySource} from "../components";




export default class SignInInputSource extends DisplaySource{


renderSource(){

  return(

    <pre>{`
      import React, {Component} from 'react'

      import "../css/global-input.css"
      import  "../css/SignInInput.css";

      import {config} from "../configs";

      import {GlobalInputComponent,AdjustableInputCodeRender} from "global-input-react";

      import SignInInputSource from "./SignInInputSource";



      export default class SignInInput extends Component {
        constructor(props){
           super(props);
           this.state={username:"",password:"", sender:{}, senders:[]};
        }
        connectToGlobalInput(){
              var options={

                    url:config.url,
                    apikey:config.apikey,
                    onSenderConnected:this.onSenderConnected.bind(this),
                    onSenderDisconnected:this.onSenderDisconnected.bind(this),
                    initData:{
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


              };

            this.connector.connect(options);
       }
       onSenderConnected(sender, senders){
              this.setState(Object.assign({},this.state,{sender, senders}));
          }
          onSenderDisconnected(sender, senders){
              this.setState(Object.assign({},this.state,{sender, senders}));
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
      componentDidMount(){
         this.connectToGlobalInput();
      }
      componentWillUnmount(){
         this.connector.disconnect();
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



      `}</pre>
  )
}

}
