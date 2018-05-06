import React, {Component} from 'react';

import {styles} from "./styles";
import {LoadingIcon} from "../components";
import SectionHeader from "./headers/SectionHeader";

export  default class DisplayLoading extends Component {
    render(){
              return(
          <div style={styles.container}>
                <SectionHeader title={this.props.title}
                      content={this.props.content}/>
                <LoadingIcon loading={true}/>
          </div>
        );

    }


}
