import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {textValues} from  "../configs";

import SignInInput from "./SignInInput";


export default class SignInInputHome extends Component{
  render(){
    return (


            <div className="introSection">
               <div>
                 {textValues.signin.content.p1}
               </div>

                      <ul className="menuContainer">
                          <li className="appTitle"><Link to="/global-input-app-example/signinput">{textValues.signin.title}</Link></li>
                      </ul>
                      <Route path="/global-input-app-example/signinput" component={SignInInput}/>
                      <Route path="/global-input-app-example/signin-success" component={SignInSuccess}/>
                      <div>
                         {textValues.signin.content.p2}

                      </div>


            </div>


      )
    }
}
class SignInSuccess extends Component{
  render(){
    return(
      <div className="loginComplete">
          <div className="title">
           Login Complete
          </div>
      </div>
    );

  }
}
