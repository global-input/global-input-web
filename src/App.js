import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";//removed after test
import "./css/general.css";//removed after test
import "./css/loader.css";//removed after test
import "./css/print.css";//removed after test
import "./css/input.css";//removed after test
import "./css/simpleAnimate.css";//removed after test

import {DeveloperRoute} from "./developers"; //to be removed
import pages from './pages';


export default class App extends Component{

  render(){
    return (
      <Router>
          <React.Fragment>
                <pages.Route/>
                <DeveloperRoute/>
          </React.Fragment>
      </Router>
      )
    }
}
