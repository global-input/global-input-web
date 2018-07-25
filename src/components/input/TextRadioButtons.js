import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'

import {styles} from "./styles";

export default class TextRadioButtons extends Component{
  renderItem(item,index){
    var selected=false;
    if(item===this.props.selected){
      selected=true;
    }
    var key=index+"_"+item.label;
    return(
            <div style={styles.selectionContainer} key={key}>
                 <div style={styles.label}>{item.label}
                 </div>
                 <input type="radio" checked={selected} onChange={()=>{}} onClick={()=>{
                     this.props.onChange(item);
                   }}/>


            </div>
        );
  }

  render(){
    return(
      <div style={styles.radioButtonContainer}>
          {this.props.selections.map(this.renderItem.bind(this))}
      </div>
    );

  }

}
