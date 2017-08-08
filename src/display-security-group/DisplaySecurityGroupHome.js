import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import DisplaySecurityGroup from "./DisplaySecurityGroup";
import {textValues} from  "../configs";

export default class DisplaySecurityGroupHome extends Component{
  render(){
    return (

            <div className="introSection">
              {textValues.securityGroup.content.p1}

                <ul className="menuContainer">
                    <li className="appTitle"><Link to="/global-input-app-example/securityGroupID">{textValues.securityGroup.title}</Link></li>
                </ul>
                <Route path="/global-input-app-example/securityGroupID" component={DisplaySecurityGroup}/>
                {textValues.securityGroup.content.p2}
            </div>

      )
    }
}
