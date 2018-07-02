import React, {Component} from 'react';
import {styles} from "./styles";

export default class InputWithLabel extends Component{
  render(){
         return(
           <div className="form-group">
                   <input  className="form-control" id={this.props.fieldId}
                   type={this.props.type}
                   min={this.props.min}
                   max={this.props.max}
                   step={this.props.step}
                   readOnly={this.props.readOnly}
                   
                   onChange={(evt) => {
                     this.props.onChange(evt.target.value,this.props.fieldIndex);
                 }} value={this.props.value} required/>
                 <label htmlFor={this.props.fieldId} className="form-control-placeholder">{this.props.label}</label>
                 {this.renderHelp()}
           </div>
         );
  }
  renderHelp(){
      if(this.props.help){
        return(
          <div style={styles.help}>{this.props.help}</div>
          );
      }
      else{
        return null;
      }

  }

}
