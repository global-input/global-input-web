import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';
import {styles} from "./styles";

export default class InputWithLabel extends Component{
  render(){
      
         return(
           <div className="form-group" style={this.props.fieldContainer}>
                   <input  className="form-control" id={this.props.id}
                   type={this.props.type}
                   min={this.props.min}
                   style={this.props.style}
                   max={this.props.max}
                   step={this.props.step}
                   readOnly={this.props.readOnly}
                   onKeyUp={evt=>{
                     if(this.props.onKeyEnter && evt && evt.keyCode===13){
                        this.props.onKeyEnter();
                     }
                   }}
                   onChange={(evt) => {
                     if(this.props.onChange){
                        this.props.onChange(evt.target.value,this.props.id);
                     }

                 }} value={this.props.value} required/>
               <label htmlFor={this.props.id} className="form-control-placeholder" onClick={this.labelClicked.bind(this)}>
                    <span style={this.props.labelStyle}>{this.props.label}</span>

                 </label>
                 {this.renderHelp()}
           </div>
         );
  }
  renderLabel(){
    if(this.props.label){

    }
  }
  renderHelp(){
      if(this.props.help){

        return(
          <div style={this.props.helpStyle}>{this.props.help}</div>
          );
      }
      else{
        return null;
      }

  }
  labelClicked(){
      document.getElementById(this.props.id).focus();

  }

}


InputWithLabel.propTypes={
    id:PropTypes.string.isRequired,
    type:PropTypes.string,
    label:PropTypes.string,
    readOnly:PropTypes.bool,
    onKeyEnter:PropTypes.func,
    onChange:PropTypes.func,
    style:PropTypes.object,
    labelStyle:PropTypes.object,
    help:PropTypes.string,
    helpStyle:PropTypes.object
}
InputWithLabel.defaultProps={
    type:"text",


}
