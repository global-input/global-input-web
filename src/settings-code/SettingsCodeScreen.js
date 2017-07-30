import React, {Component} from 'react'

import {AdjustableCodeDataRenderer} from "../global-input-component";
import {createMessageConnector} from "global-input-message";

import "./SettingsCodeScreen.css";



export default class SettingsCodeScreen extends Component {
  constructor(props){
    super(props);
    this.connector=createMessageConnector();
  }


  render() {
    return (
      <div>
            <h1>Settings</h1>

            <div className="codeSettings settings">
                  <div className="codeSettings record">
                        <div className="code">
                          <AdjustableCodeDataRenderer connector={this.connector} type="codeAES"/>
                        </div>
                        <div className="label">
                            Code AES Key
                        </div>
                  </div>

                  <div className="codeSettings record">
                       <div className="code">
                          <AdjustableCodeDataRenderer connector={this.connector} type="securityGroup"/>
                        </div>
                        <div className="label">
                            Security Group ID
                        </div>
                    </div>

                <div className="codeSettings record">
                      <div className="code">
                            <AdjustableCodeDataRenderer connector={this.connector} type="apikey"/>
                      </div>
                      <div className="label">
                        API Key
                      </div>
                </div>

              </div>



      </div>
    );
  }
}
