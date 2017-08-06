import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



import SignInInput from "./SignInInput";


export default class SignInInputHome extends Component{
  render(){
    return (


            <div className="introSection">
                      The next thing you can have a look at is the Sign In example by clicking on the following link:
                      <ul className="menuContainer">
                          <li className="appTitle"><Link to="/global-input-app-example/signinput">Sign In Example</Link></li>
                      </ul>
                      <Route path="/global-input-app-example/signinput" component={SignInInput}/>
                      <Route path="/global-input-app-example/signin-success" component={SignInSuccess}/>
                      <div>
                          Sorry to show you the ugliest and useless Sign In form, but it serves the purpose: the version displayed on your mobile is better.
                          Enabling sign in via mobile phone is extremely useful,
                          because users are normally much more comfortable to sign in
                          via mobile phone rather than typing on a computer keyboard, especially in public places.
                          Anyway, users normally stores passwords in mobile rather on computers, so enabling a website to be able to transfer the signin process to mobile makes sense.
                          Point your mobile phone camera to the QR code displayed on the website or app, the login process will be magically transferred into your phone!


                          If the app is on smart TV, it makes even more sense to transfer the login process onto your phone because typing using TV remote control is not so handy.

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
