import React, {Component} from 'react'


import {styles} from "./styles";


export  default class BookMark extends Component {
    render(){
      return(
            <div id={this.props.bookmark} style={styles.bookmark}/>
      );
    }
}
