
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


      import {config} from "../configs";

      import {CodeDataRenderer} from "global-input-react";





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
          this.props.login(this.state.username, this.state.password);
      }

      buildGlobalInputConfig(){
        return {

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

      }

        render() {

          return (
             <div className="applicationContainer">
                  <div className="formContainer">
                         <div className="form">
                              <DisplaySignInForm username={this.state.username} password={this.state.password}
                                setUsername={this.setUsername.bind(this)}
                                setPassword={this.setPassword.bind(this)}
                                login={this.login.bind(this)}/>
                         </div>
                  </div>
                  <CodeDataRenderer service={this}  config={this.buildGlobalInputConfig()} level="H" size="300" showControl={true}/>
              </div>
          );
        }
      }
      class DisplaySignInForm extends Component{
        render(){
          return(
          <div className="loginForm">
             <div className="loginTitle">LOGIN</div>
              <div className="contetAndLabelRecord">

              </div>
              <div className="contetAndLabelRecord">

                     <div className="contetAndLabelLabel">
                      Username:
                    </div>
                    <input type="text" onChange={(evt) => {
                        this.props.setUsername(evt.target.value);
                      }} value={this.props.username} size="30"/>
              </div>
              <div className="contetAndLabelRecord">
                      <div className="contetAndLabelLabel">
                          Password:
                        </div>
                        <input type="password" onChange={(evt) => {
                              this.props.setPassword(evt.target.value);
                              }} value={this.props.password} size="30"/>
              </div>
              <div className="contetAndLabelRecord">
                <div className="button">
                  <a onClick={(evt) => {
                                 this.props.login();
                             }}>

                      Login


                  </a>
                  </div>
             </div>
          </div>
        );


        }
      }




      `}</pre>
  )
}

}
