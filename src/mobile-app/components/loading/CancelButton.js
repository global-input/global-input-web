import React, { Component } from 'react';

import {styles} from './styles';


export default class CancelButton extends Component {
    render(){
          if(this.props.onCancel){
            return (
                    <div onClick={this.props.onCancel}>
                      <div style={styles.button}>
                          <span style={styles.buttonText}>Cancel</span>
                      </div>
                    </div>
           );
          }
          else{
            return null;
          }




    }
  }
