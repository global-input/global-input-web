import React, {Component} from 'react';
import {styles} from "./styles";
import AdjustableComponent from "../../components/adjustable-component";

const SimpleHeaderBackground=props=>(<div style={styles.headerContainer}>{props.children}</div>);

class HomeHeaderBackground extends AdjustableComponent{
  render(){
    return(<div style={styles.homeHeaderContainer.get()}>{this.props.children}</div>);
  }
}


export  {SimpleHeaderBackground,HomeHeaderBackground};
