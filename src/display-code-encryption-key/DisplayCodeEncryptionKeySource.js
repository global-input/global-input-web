import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {DisplaySource} from "../components";
export default class DisplayCodeEncryptionKeySource extends DisplaySource{

  renderSource(){

    return(

      <pre>{`
        import React, {Component} from 'react';

        import {AdjustableCodeDataRenderer} from "global-input-react";
        import {createMessageConnector} from "global-input-message";
        import DisplayCodeEncryptionKeySource from "./DisplayCodeEncryptionKeySource";
        export default class DisplayCodeEncryptionKey extends Component {
          constructor(props){
            super(props);
            this.connector=createMessageConnector();
          }

          render() {
            return (
              <div>
                          <div className="codeSettings record">
                               <div className="code">
                                  <AdjustableCodeDataRenderer connector={this.connector} type="codeAES"/>
                                </div>
                                <div className="label">
                                    QR Code Encryption Key
                                </div>
                            </div>
                            <div>
                                <DisplayCodeEncryptionKeySource/>
                            </div>
              </div>
            );
          }
        }



        `}</pre>
    )
  }

}
