import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import {Home} from "./home";
import {SimpleInput} from "./simple-input";
import {SignInInput} from "./sign-in-input";
import {SettingsCodeScreen} from "./settings-code";
import {SimpleInputSubmit} from "./simple-input-submit";
import {QRCodePrintService} from "./qrcode-print-service";
export default class App extends Component{
  render(){
    return (
      <Router>
        <div className="topContainer">
              <ul className="menuContainer">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/global-input-app-example/simpleInput">Simple Input Example</Link></li>
                <li><Link to="/global-input-app-example/signinput">Sign In Example</Link></li>
                <li><Link to="/global-input-app-example/settings">Settings</Link></li>
                <li><Link to="/global-input-app-example/qrcode-print">QR Code Printing Service</Link></li>
              </ul>


              <div className="contentContainer">
              <Route exact path="/" component={Home}/>
              <Route path="/global-input-app-example/simpleInput" component={SimpleInput}/>
              <Route path="/global-input-app-example/signinput" component={SignInInput}/>
              <Route path="/global-input-app-example/settings" component={SettingsCodeScreen}/>
              <Route path="/global-input-app-example/signin-success" component={SignInSuccess}/>
              <Route path="/global-input-app-example/simpleinput-submit" component={SimpleInputSubmit}/>
              <Route path="/global-input-app-example/qrcode-print" component={QRCodePrintService}/>
              </div>
            </div>
      </Router>
      )
    }
}
class SignInSuccess extends Component{
  render(){
    return(
      <div>
  <h1>
        Sign in result spage</h1>

      </div>
    );

  }
}
