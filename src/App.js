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
import {pagelinks} from "./configs";//to be removed


import {DevelopersScreen} from "./developers"; //to be removed

import screens from "./screens";



export default class App extends Component{


  render(){

    return (

      <Router>

        <div className="topContainer">
            {screens.renderRoute()}
            /*******To be removed begin*********/
            <Route  path={pagelinks.platform.link}  component={DevelopersScreen}/>
            <Route  path={pagelinks.platform.link2}  component={DevelopersScreen}/>
            <Route  path={pagelinks.platform.link3}  component={DevelopersScreen}/>
            /*******To be removed begin*********/
        </div>


      </Router>
      )
    }
}
