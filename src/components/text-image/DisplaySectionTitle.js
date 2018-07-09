import React, {Component} from 'react';
import {styles} from "./styles";
export default class DisplaySectionTitle extends Component{
  render(){
    var sectionTitle=styles.sectionTile;
    if(styles.isMobile()){
      sectionTitle=styles.sectionTitleMobile;
    }
    return(
      <div style={sectionTitle}>
            {this.props.title}
      </div>
    );
  }
}
