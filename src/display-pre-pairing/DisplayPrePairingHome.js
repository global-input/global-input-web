import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import DisplayPrePairing from "./DisplayPrePairing";
import {textValues} from  "../configs";

export default class DisplayPrePairingHome extends Component{
  render(){
    return (

            <div className="introSection">
              {textValues.pairing.content.p1}

                <ul className="menuContainer">
                    <li className="appTitle"><Link to="/global-input-app-example/pairing">{textValues.pairing.title}</Link></li>
                </ul>
                <Route path="/global-input-app-example/pairing" component={DisplayPrePairing}/>
                {textValues.pairing.content.p2}
            </div>

      )
    }
}
