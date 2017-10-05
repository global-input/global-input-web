import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './css/App.css';
import './css/home.css';
import "./css/global-input.css"


import {Home} from "./home";
import {Documentation} from "./documentation";
import {Pricing} from "./pricing";

import {QRPrinting} from "./qr-printing";
import {textValues,images} from  "./configs";



export default class App extends Component{
  render(){

    return (

      <Router>

        <div className="topContainer">

            <Route  path="/" exact component={Home}/>
            <Route  path="/global-input-app/qr-printing"  component={QRPrinting}/>
            <Route  path="/global-input-app/documentation"  component={Documentation}/>
            <Route  path="/global-input-app/pricing"  component={Pricing}/>


            </div>


      </Router>
      )
    }
}
