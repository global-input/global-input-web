import React, {Component} from 'react'

import {textValues,images} from  "../configs";


import ReactMarkdown from "react-markdown";









export default class QRCodePropertyFields extends Component{

  render(){
    if(this.props.content){
          return (
          <div className="qrcodePropery">
                <input type="range" min="100" max="1000" step="10" value={this.props.size} onChange={evt=>{
                    this.props.setSize(evt.target.value);
                }}/>
              <select value={this.props.level} onChange={evt=>{
                  this.props.setLevel(evt.target.value);
                }}>
                  <option value="L">L</option>
                  <option value="M">M</option>
                  <option value="Q">Q</option>
                  <option value="H">H</option>
                </select>
                <div className="button">
                  <a onClick={this.props.printQRCode}>
                    Print
                  </a>
                </div>
            </div>
          );
    }
    else{
      return null;
    }

  }
}
