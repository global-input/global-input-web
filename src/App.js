import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/general.css";
import "./css/loader.css";
import "./css/print.css";
import "./css/input.css";
import "./css/simpleAnimate.css";
import {pagelinks} from "./configs";


import {DevelopersScreen} from "./developers";



import {applicationPathConfig} from "./page-templates";

//import {PrivacyScreen} from "./privacy";


import screens from "./screens";



export default class App extends Component{


  render(){

    return (

      <Router>

        <div className="topContainer">
            {screens.renderRoute()}
            <Route  path={pagelinks.platform.link}  component={DevelopersScreen}/>
            <Route  path={pagelinks.platform.link2}  component={DevelopersScreen}/>
            <Route  path={pagelinks.platform.link3}  component={DevelopersScreen}/>
        </div>


      </Router>
      )
    }
}
