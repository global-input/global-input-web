import React, {Component} from 'react';

import {styles} from "./styles";
import SectionHeader from "./SectionHeader";

export  default class DisplayLoading extends Component {
    render(){
              return(
                    <div style={styles.container}>
                          <SectionHeader title={this.props.title}
                                content={this.props.content}/>
                          <div className="loader"/>
                    </div>
              );

    }


}
