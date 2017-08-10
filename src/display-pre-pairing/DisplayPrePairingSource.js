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

        import {AdjustableCodeDataRenderer} from "global-input-react";
        import {createMessageConnector} from "global-input-message";
        import DisplayPrePairingSource from "./DisplayPrePairingSource";
        export default class DisplayPrePairing extends Component {
          constructor(props){
            super(props);
            this.connector=createMessageConnector();
          }

          render() {
            return (
              <div>
                          <div className="codeSettings record">
                               <div className="code">
                                  <AdjustableCodeDataRenderer connector={this.connector} type="pairing"/>
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
