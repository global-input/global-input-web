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
        import DisplayPrePairingSource from "./DisplayPrePairingSource";
        export default class DisplayPrePairing extends Component {

          render() {

            var globalInputConfig={
                    securityGroup:config.securityGroup
            };

            return (
              <div>
                          <div className="codeSettings record">
                               <div className="code">
                                      <CodeDataRenderer service={this} type="pairing" config={globalInputConfig} level="H" size="300"/>
                                </div>
                                <div className="label">
                                    Pairing data
                                </div>
                            </div>
                            <div>
                                <DisplayPrePairingSource/>

                            </div>
              </div>
            );
          }
        }


        `}</pre>
    )
  }

}
