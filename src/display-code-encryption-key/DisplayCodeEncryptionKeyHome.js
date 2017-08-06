import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import DisplayCodeEncryptionKey from "./DisplayCodeEncryptionKey";


export default class DisplayCodeEncryptionKeyHome extends Component{
  render(){
    return (

            <div className="introSection">
                If you turn off the Global Input by dragging the slider, which is located on the top of the Global Input mobile app,
                only the value of the QR code will be displayed, and no action will take place. At this time you will have the chance to notice that the
                QR Code itself is also encrypted. In some business applications, if you  want to use a differet value even for this as well, you need to
                part up the Code encrypytion key as well.

                Click on the following link to see how it works.
                <ul className="menuContainer">
                    <li className="appTitle"><Link to="/global-input-app-example/codeAES">Pair the Code Encryption Key</Link></li>
                </ul>
                <Route path="/global-input-app-example/codeAES" component={DisplayCodeEncryptionKey}/>
                  In this case, the Code Encryption Key is the same with the default one that comes with the mobile app,
                  so it does not make any difference whether you accept it or reject it when the dialog appears on your mobile phone.
                  Sure you can also print out your existing api key value for later importing purposes before accept a different api key.

            </div>

      )
    }
}
