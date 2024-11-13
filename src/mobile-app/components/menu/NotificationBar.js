import React, { Component } from 'react';

import {styles} from "./styles";
import NotificationText from "../display-text/NotificationText";
export default class NotificationBar extends Component{

    render(){
      if(this.props.message){
        return(
              <div style={styles.notificationBar}>
                    <NotificationText message={this.props.message}/>
              </div>
        );
      }
      else{
        return null;
      }

    }
}
