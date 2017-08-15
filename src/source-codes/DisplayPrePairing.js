import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {DisplaySource} from "../components";


export default class DisplayPrePairingSource extends DisplaySource{
renderSource(){
  return(

    <pre>{`
      import React, {Component} from 'react';

      import {CodeDataRenderer} from "global-input-react";
      import {config} from "../configs";

      export default class DisplayPrePairing extends Component {

        render() {

          return (
            <div>
                        <div className="applicationContainer">
                             <div className="code">
                                    <CodeDataRenderer service={this} type="pairing" config={{securityGroup:config.securityGroup}} level="H" size="300"/>
                              </div>
                          </div>
            </div>
          );
        }
      }





    `}</pre>


  );




}

}
