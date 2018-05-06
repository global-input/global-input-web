import React, {Component} from 'react';
import QRCode from "qrcode.react";
import {styles} from "./styles";
import SectionHeader from "./headers/SectionHeader";

export  default class DisplayQRCode extends Component {
    render(){
      var {title,content,qrCodeContent,qrsize,onButtonPressed,buttonLabel}=this.props;
      console.log("qrcontent:[["+qrCodeContent+"]]");
              return(
          <div style={styles.container}>
              <SectionHeader title={title}
                content={content}/>
                    <div style={styles.qrCodeContainer}>

                                <QRCode
                                      value={qrCodeContent}
                                      level="H"
                                      size={qrsize}
                                     />
                  </div>

                  <div style={styles.buttonContainer}>
                        <button type="button" className="btn btn-primary" onClick={onButtonPressed}>{buttonLabel}</button>
                  </div>
          </div>
        );

    }

}
