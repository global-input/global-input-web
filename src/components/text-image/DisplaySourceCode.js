import React, {Component} from 'react'

import {styles} from "./styles";

export  default class DisplaySourceCode extends Component {
    render(){
        return(
          <div style={styles.sourceCodeContainer}>
                <div style={styles.sourceCodes}>
                  {this.props.children}
                </div>
            </div>


        );

    }

}
