import React, {Component} from 'react';
import {styles} from "./styles";

export default class TextAreaWithLabel extends Component{
  render(){
         return(
           <div className="form-group">
                   <textarea  className="form-control" id={this.props.fieldId}
                     rows={this.props.rows}
                     cols={this.props.cols}
                     readOnly={this.props.readOnly}
                     onChange={(evt) => {
                     this.props.onChange(evt.target.value,this.props.fieldIndex);
                 }} value={this.props.value} required/>
                 <label htmlFor={this.props.fieldId} className="form-control-placeholder">{this.props.label}</label>
           </div>
         );
  }

}
