import React, {Component} from 'react'

import {CodeDataRenderer} from "../code-data-renderer";
import {GlobalInputComponent} from "global-input-react";
import "./index.css";



export default class SettingsView extends GlobalInputComponent {



 constructor(props){
    super(props);
    this.state={content:""};
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
