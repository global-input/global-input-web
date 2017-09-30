import React, {Component} from 'react'



import {textValues,images} from  "../../configs";





import {styles} from "./styles";


export  default class DownloadApp extends Component {

  render() {
    if(this.props.render){
      return (
               <div style={styles.container}>

                 <div style={styles.fromStore}>
                      <a href={textValues.urls.playstore}>
                       <img src={images.playstore} style={styles.storeImage}/>
                      </a>
                      <a href={textValues.urls.appstore}>
                       <img src={images.appstore} style={styles.imageStore}/>
                       </a>
                 </div>
                 <div style={styles.scanQrAction}>{this.props.actionText}</div>
                </div>
              );
    }
    else{
      return null;
    }

  }
}
