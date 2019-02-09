import React, {Component} from 'react';
import QRCode from "qrcode.react";
import {styles} from "./styles";
import {TextButton} from "../../components";

export  default class DisplayQRCode extends Component {

    render(){
      var {content,size,level}=this.props;
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
      return(
          <div style={styles.container}>
                      <div style={styles.qrCodeContainer}>
                              <QRCode
                                        value={content}
                                        level={level}
                                        size={size}
                                       />
                      </div>


                  {this.renderButton()}
          </div>
        );

    }
  }
