import React, {Component} from 'react';
import {styles} from "./styles";
import AdjustableComponent from "../../components/adjustable-component";

class SimpleHeaderBackground extends AdjustableComponent{
  render(){
      return (<div style={styles.headerContainer.get()}>{this.props.children}</div>);
  }

}



class HomeHeaderBackground extends AdjustableComponent{
  render(){
    return(<div style={styles.homeHeaderContainer.get()}>{this.props.children}</div>);
  }
}


export  {SimpleHeaderBackground,HomeHeaderBackground};
