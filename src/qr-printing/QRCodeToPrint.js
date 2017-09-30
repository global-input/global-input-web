import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {textValues,images} from  "../configs";
import {DisplayBlockText,ShowImage} from "../components";

import ReactMarkdown from "react-markdown";
import  "./styles/QRCodeToPrint.css";



export default class QRCodeToPrint extends Component{
  render(){
            if(this.props.content){
                      return(
                      <div className="toPrint">
                          <div className="qrCodeContainer">
                              <QRCode value={this.props.content} level={this.props.level} size={this.props.size}/>
                          </div>
                          <div className="qrCodeLabel">
                            {this.props.label}
                          </div>
                      </div>
                      );

            }
            else{
              return null;
            }
      }

  }
