import React, {Component} from 'react';
import QRCode from "qrcode.react";
import {styles} from "./styles";
import SectionHeader from "./SectionHeader";
import {TextButton} from "../../components";

export  default class DisplayQRCode extends Component {

    renderSectionHeader(){
            if(this.props.title || this.props.content){
              return (
                <SectionHeader title={this.props.title}
                  content={this.props.content}/>
              );
            }
            else{
              return null;
            }
    }
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
        qrsize=300;
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
                {this.renderSectionHeader()}
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
