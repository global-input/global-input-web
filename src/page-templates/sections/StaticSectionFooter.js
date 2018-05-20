import React, {Component} from 'react';
import {styles} from "./styles";
export default class StaticSectionFooter extends Component{
  renderItem(p,index){
    return (<div style={styles.instruction} key={index}>{p}</div>);
  }
  render(){
    return(
      <div style={styles.subFooter}>
        {this.props.content.map(this.renderItem.bind(this))}
      </div>
    );
  }
}
