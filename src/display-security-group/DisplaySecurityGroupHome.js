import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import DisplaySecurityGroup from "./DisplaySecurityGroup";


export default class DisplaySecurityGroupHome extends Component{
  render(){
    return (

            <div className="introSection">
                In some cases you do not want anyone who can access the QR code being able
                to connect to your service.
                In this case, you would like to carry out the paring process with some selected handsets,
                so that only those that are paired can connect to your services.
                For this purpose, Global Input has the concept of Security Group ID, which you can display
                on the screen or print out, so that the user can pair their device simply by pointing
                the phone camera to the Security Group ID QR code.

                Click on the following link to see how it works.
                <ul className="menuContainer">
                    <li className="appTitle"><Link to="/global-input-app-example/securityGroupID">Pair the security group ID</Link></li>
                </ul>
                <Route path="/global-input-app-example/securityGroupID" component={DisplaySecurityGroup}/>
                  In this case, the Security Group Id is the same with the default one that comes with the mobile app,
                  so it does not make any difference whether you accept it or reject it when the dialog appears on your mobile phone.
                  Sure you can also print out your existing Security Group ID for later importing purposes before accept a different Security Group ID.                                    
            </div>

      )
    }
}
