import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from "./home";
import {SimpleInput} from "./simple-input";
import {SignInInput} from "./sign-in-input";
import SettingsView from "./settings";
import SimpleInputSubmit from "./simple-input-submit";
export default class App extends Component{
  render(){
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/simpleInput">Simple Input Example</Link></li>
            <li><Link to="/signinput">Sign In Example</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/simpleInput" component={SimpleInput}/>
          <Route path="/signinput" component={SignInInput}/>
          <Route path="/settings" component={SettingsView}/>
          <Route path="/signin-success" component={SignInSuccess}/>
          <Route path="/simpleinput-submit" component={SimpleInputSubmit}/>
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
