import React, {Component} from 'react';
import {styles} from "./styles";
import InputWithLabel from "./InputWithLabel";
export default class InputWithSelect extends Component{

  render(){
         return(
               <div style={styles.fieldrow}>
                     <InputWithLabel
                             type={this.props.type}
                             onChange={this.props.onChange}
                             fieldIndex={this.props.fieldIndex}
                             fieldId={this.props.fieldId}
                             value={this.props.value}
                             label={this.props.label}/>
                        <input style={styles.checkboxButton}
                              type="checkbox" checked={this.props.fieldSelected}
                                 onClick={()=>{
                                   if(this.props.fieldSelected){
                                       this.props.setSelectedField(null);
                                   }
                                   else{
                                       this.props.setSelectedField(this.props.fieldId);
                                   }
                        }}/>
               </div>
         );
  }

}
