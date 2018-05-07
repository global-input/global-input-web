import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'

import {styles} from "./styles";

export default class TextSelectOptions extends Component{
  renderItem(item,index){
    return(
              <option value={item.value} key={index}>{item.label}</option>
        );
  }

  render(){
    return(
      <div className="form-group">
            <select id={this.props.fieldId} className="form-control"
              value={this.props.selected.value} onChange={evt=>{
                  this.props.onChange(evt.target.value, this.props.fieldIndex);

            }}>
                  {this.props.selections.map(this.renderItem.bind(this))}
            </select>
            <label htmlFor={this.props.fieldId} className="form-control-placeholder">{this.props.label}</label>
      </div>
    );

  }

}
