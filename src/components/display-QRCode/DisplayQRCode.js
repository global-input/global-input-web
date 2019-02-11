import React, {Component} from 'react';
import QRCode from "qrcode.react";
import {styles} from "./styles";


export  default class DisplayQRCode extends Component {

    render(){
      var {code,size,level}=this.props;
      if(!size){
            var w = window.innerWidth-50;
            var h = window.innerHeight-50;
            if(w<h){
                size=w;
            }
            else{
              size=h;
            }
            if(size>400){
              size=400;
            }

      }
      else{
        size=parseInt(size);
      }
      if(!level){
        level="H";
      }
      if(!code){
        code="";
      }
      return(
          <div style={styles.container}>
                      <div style={styles.qrCodeContainer}>
                              <QRCode
                                        value={code}
                                        level={level}
                                        size={size}
                                       />
                      </div>
                      <div style={styles.label}>{this.props.label}</div>
          </div>
        );

    }
  }
