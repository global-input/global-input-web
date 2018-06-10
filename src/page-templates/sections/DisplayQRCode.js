import React, {Component} from 'react';
import QRCode from "qrcode.react";
import {styles} from "./styles";
import SectionHeader from "./SectionHeader";
import {TextButton} from "../../components";

export  default class DisplayQRCode extends Component {


    renderButton(){
          if(this.props.buttonLabel){
                return(
                  <div style={styles.buttonContainer}>
                          <TextButton label={this.props.buttonLabel}
                            link={this.props.link}
                          onPress={this.props.onButtonPressed}/>
                  </div>
                );
          }
          else{
            return null;
          }
    }
    render(){
      var {qrCodeContent,qrsize,qrCodeLevel}=this.props;
      if(!qrsize){
            var w = window.innerWidth-50;
            var h = window.innerHeight-50;
            if(w<h){
                qrsize=w;
            }
            else{
              qrsize=h;
            }
            if(qrsize>400){
              qrsize=400;
            }

      }
      else{
        qrsize=parseInt(qrsize);
      }
      if(!qrCodeLevel){
        qrCodeLevel="H";
      }
      console.log("qrcontent:[["+qrCodeContent+"]]");
              return(
          <div style={styles.container}>
                      <div style={styles.title}>{this.props.title}</div>
                      <div style={styles.instruction}>{this.props.content}</div>
                      <div style={styles.qrCodeContainer}>
                              <QRCode
                                        value={qrCodeContent}
                                        level={qrCodeLevel}
                                        size={qrsize}
                                       />
                      </div>


                  {this.renderButton()}
          </div>
        );

    }
  }
