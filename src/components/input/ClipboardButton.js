import React, {Component} from 'react';
import {styles} from "./styles";
import TextButton from "./TextButton";
export default class ClipboardButton extends Component{
  render(){
         return(
           <TextButton label={this.props.label}
                onPress={()=>{
                      document.getElementById(this.props.fieldId).select();
                      document.execCommand("Copy");
                      this.props.setMessage(this.props.message);
                }}/>
         );
  }
}
