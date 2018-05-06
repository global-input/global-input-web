import React, {Component} from 'react';
import {styles} from "./styles";
export default class SectionHeader extends Component{
  render(){
    return(
      <div style={styles.subHeader}>
            <div style={styles.title}>{this.props.title}</div>
            <div style={styles.instruction}>{this.props.content}</div>
      </div>
    );
  }
}
