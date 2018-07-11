import React, {Component} from 'react'

import {styles} from "./styles";

export  default class DisplaySourceCode extends Component {
    render(){


      var w = window.innerWidth-100;
      var h = window.innerHeight-100;
      var sourceCodes={
       maxHeight: h,
       maxWidth:w,
       background: "#D9DFE9",
      overflowY: "scroll",
      };


        return(
          <div style={styles.sourceCodeContainer}>
                <div style={sourceCodes}>
                  {this.props.children}
                </div>
            </div>


        );

    }

}
