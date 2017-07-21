import React, {Component} from 'react'
import {GlobalInputReceiver} from "global-input-react";
import {config} from "../config";



export default class SettingsView extends GlobalInputReceiver {



 constructor(props){
    super(props);
    this.state={content:""};
 }

  render() {
    return (
      <div>
      <h1>Settings</h1>
      <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{margin:5}}>
              apikey:{this.displayApiCode()}
            </div>
            <div style={{margin:5}}>
              Session Group ID:{this.displaySessionGroupCode()}
            </div>
            <div style={{margin:5}}>
              Code AES Key:{this.displayAESCodeData()}
            </div>
      </div>



      </div>
    );
  }
}
