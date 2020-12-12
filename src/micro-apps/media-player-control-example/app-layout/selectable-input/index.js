import React, {Component} from 'react';

import InputWithLabel from "../input-with-label";

import PropTypes from 'prop-types';


export default class SelectableInput extends Component{
  getStyles(){
      var styles={
          container:{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"flex-start",
                width:"100%",

          },
          checkbox:{
              position:"relative",
              width:30,
              height:30,
              top:8
          }
      }
      return styles;

  }
  render(){
         var styles=this.getStyles();

         return(
           <div style={styles.container}>

                    <InputWithLabel {...this.props}/>
                <input type="checkbox"
                    style={styles.checkbox}
                    checked={this.props.selected}
                    onChange={()=>{
                            if(this.props.onSelected){
                            this.props.onSelected();
                                           }
                    }} />

          </div>
         );
  }
}


SelectableInput.propTypes={
    id:PropTypes.string.isRequired,
    type:PropTypes.string,
    label:PropTypes.string,
    readOnly:PropTypes.bool,
    selected:PropTypes.bool,
    onChange:PropTypes.func,
    onSelected:PropTypes.func,
    styles:PropTypes.object,
    help:PropTypes.string,
}
