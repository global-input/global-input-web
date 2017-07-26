import React, {Component} from 'react'

import {CodeDataRenderer} from "../code-data-renderer";
import {createMessageConnector} from "global-input-message";

import "./index.css";



export default class SettingsView extends Component {
  constructor(props){
    super(props);
    this.connector=createMessageConnector();
  }


  render() {
    return (
      <div>
      <h1>Settings</h1>


      <div className="mainBody">
            <div className="codeContainer">

              <div className="codeLabel">apikey</div>
              <div className="codeData">
                  <CodeDataRenderer connector={this.connector} type="apikey"/>
              </div>
            </div>

            <div style={{margin:5}}>
              Session Group ID: <CodeDataRenderer connector={this.connector} type="sessionGroup"/>
            </div>
            <div style={{margin:5}}>
              Code AES Key: <CodeDataRenderer connector={this.connector} type="codeAES"/>
            </div>
      </div>



      </div>
    );
  }
}
