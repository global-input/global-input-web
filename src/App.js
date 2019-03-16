import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

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
