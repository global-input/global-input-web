import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'

import {styles} from "./styles";

export default class TextButton extends Component{

  render(){
    if(this.props.link){
      return(
        <div style={styles.button}>
          <Link to={this.props.link} className="btn btn-primary">{this.props.label}</Link>
        </div>
      );
    }
    else if(this.props.href){
      return(
        <div style={styles.button}>
          <a href={this.props.href} className="btn btn-primary">{this.props.label}</a>
        </div>
      );
    }
    else{
      return(
        <div style={styles.button}>
          <button type="button" className="btn btn-primary" onClick={()=>{
              this.props.onPress();
            }} disabled={this.props.disabled}>{this.props.label}</button>
        </div>
      );
    }

  }

}
