import React from 'react';
import {styles, images} from './styles';
import {screenMedia} from "../../../components/screen-media";

export default class HowItWorks extends React.Component{

  render(){
    if(screenMedia.biggerThan(600)){
        return(
            <div style={styles.container}>
                    <div style={styles.title}>How It Works</div>
                    <div style={styles.howItWorks.get()}>
                          <div style={styles.extension.get()}>
                              <img src={images.extension}/>
                              <div style={styles.itemName}>Install Extension</div>
                          </div>
                          <div style={styles.qrcode.get()}>
                              <img src={images.qrcode}/>
                              <div style={styles.itemName}>Scan QR Code</div>
                          </div>

                          <div style={styles.mobile.get()}>
                              <img src={images.mobile}/>
                              <div style={styles.itemName}>Control with Device</div>
                          </div>
                    </div>


            </div>
        );
      }
      else{
        return null;
      }

  }
}
