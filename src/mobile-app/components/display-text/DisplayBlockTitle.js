import React, { Component } from 'react';


import {styles} from './styles';


export default class DisplayBlockTitle extends Component {

  render(){

            return(
                <div style={styles.blockTitleContainer}>
                  <span style={styles.blockTitle}>{this.props.title}</span>
                 </div>


            );

   }
}
