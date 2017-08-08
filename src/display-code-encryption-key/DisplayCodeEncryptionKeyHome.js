import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import DisplayCodeEncryptionKey from "./DisplayCodeEncryptionKey";
import {textValues} from  "../configs";

export default class DisplayCodeEncryptionKeyHome extends Component{
  render(){
    return (

            <div className="introSection">
                {textValues.codeAES.content.p1}
                <ul className="menuContainer">
                    <li className="appTitle"><Link to="/global-input-app-example/codeAES">{textValues.codeAES.title}</Link></li>
                </ul>
                <Route path="/global-input-app-example/codeAES" component={DisplayCodeEncryptionKey}/>
                {textValues.codeAES.content.p2}  

            </div>

      )
    }
}
