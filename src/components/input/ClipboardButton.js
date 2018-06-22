import React, {Component} from 'react';
import {styles} from "./styles";
import TextButton from "./TextButton";
export default class ClipboardButton extends Component{
  render(){
          var disabled=true;
          if(this.props.fieldId){
            disabled=false;
          }
         return(
           <TextButton label={this.props.label} disabled={disabled}
                onPress={()=>{
                      document.getElementById(this.props.fieldId).select();
                      document.execCommand("Copy");
                      this.props.setMessage(this.props.message);
                }}/>
         );
  }
}
