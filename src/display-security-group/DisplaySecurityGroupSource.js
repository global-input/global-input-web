import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {DisplaySource} from "../components";
export default class DisplaySecurityGroupSource extends DisplaySource{

  renderSource(){

    return(

      <pre>{`

        import React, {Component} from 'react';

        import {AdjustableCodeDataRenderer} from "global-input-react";
        import {createMessageConnector} from "global-input-message";
        import DisplaySecurityGroupSource from "./DisplaySecurityGroupSource";
        export default class DisplaySecurityGroup extends Component {
          constructor(props){
            super(props);
            this.connector=createMessageConnector();
          }

          render() {
            return (
              <div>
                          <div className="codeSettings record">
                               <div className="code">
                                  <AdjustableCodeDataRenderer connector={this.connector} type="securityGroup"/>
                                </div>
                                <div className="label">
                                    Security Group ID
                                </div>
                            </div>
                            <div>
                                <DisplaySecurityGroupSource/>

                            </div>
              </div>
            );
          }
        }


        `}</pre>
    )
  }

}
