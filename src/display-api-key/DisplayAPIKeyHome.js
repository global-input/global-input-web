import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import DisplayAPIKey from "./DisplayAPIKey";


export default class DisplayAPIKeyHome extends Component{
  render(){
    return (

            <div className="introSection">
                In some business use cases, api key for connecting to the socket server may also different.
                In this case, again you can pairt up the API key in the same way.

                Click on the following link to see how it works.
                <ul className="menuContainer">
                    <li className="appTitle"><Link to="/global-input-app-example/apikey">Pair the API Key</Link></li>
                </ul>
                <Route path="/global-input-app-example/apikey" component={DisplayAPIKey}/>
                  In this case, the Api Key is the same with the default one that comes with the mobile app,
                  so it does not make any difference whether you accept it or reject it when the dialog appears on your mobile phone.
                  Sure you can also print out your existing api key value for later importing purposes before accept a different api key.
            </div>

      )
    }
}
