import React, { Component } from 'react';

import {styles} from "./styles";

export default class DialogButton extends Component{
  onPress(){
    this.props.onPress(this.props.data);
  }
  render(){

    if(this.props.onPress && this.props.buttonText){
      var position=this.props.position;
      var buttonStyle=styles.button;
      if(position==="right"){
        buttonStyle=styles.buttonRight;
      }
      else if(position==="left"){
        buttonStyle=styles.buttonLeft;
      }
      else if(position==='separate'){
        buttonStyle=styles.buttonSeparate;
      }

            return(
                <div onClick={this.onPress.bind(this)} style={buttonStyle}>
                  
                          <span style={styles.buttonText} >{this.props.buttonText}</span>
                </div>

               );
    }
    else{
      return null;
    }
  }

}
