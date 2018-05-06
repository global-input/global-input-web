import React, {Component} from 'react';
import {styles} from "./styles";
import TextAreaWithLabel from "./TextAreaWithLabel";
export default class TextAreaWithSelect extends Component{

  render(){
         return(
               <div style={styles.fieldrow}>
                     <TextAreaWithLabel
                            rows={this.props.rows}
                            cols={this.props.cols}
                             onChange={this.props.onChange}
                             fieldIndex={this.props.fieldIndex}
                             fieldId={this.props.fieldId}
                             value={this.props.value}
                             label={this.props.label}/>
                      <input style={styles.radioButton}
                              type="radio" checked={this.props.fieldSelected}
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
