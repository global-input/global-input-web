import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import DisplayAPIKey from "./DisplayAPIKey";
import {textValues} from  "../configs";

export default class DisplayAPIKeyHome extends Component{
  render(){
    return (

            <div className="introSection">
                {textValues.apikey.content.p1}
                <ul className="menuContainer">
                    <li className="appTitle"><Link to="/global-input-app-example/apikey">{textValues.apikey.title}</Link></li>
                </ul>
                <Route path="/global-input-app-example/apikey" component={DisplayAPIKey}/>
                {textValues.apikey.content.p2}
            </div>

      )
    }
}
