import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

import ReactMarkdown from "react-markdown";


import {textValues} from  "../configs";
import {images} from "../configs";
import {CodeDataRenderer} from "global-input-react";

import {styles} from "./styles";
export default class DisplayBlockText extends Component{
      render(){
              const content=this.props.content;
              return(
                <div style={styles.introduction}>
                  <DisplayTitle title={this.props.title}/>
                  {content.map((p,index)=>{return(<div className="ptext" key={index}>
                      <ReactMarkdown source={p} />
                </div>);})}
                </div>
              );

      }
}

class DisplayTitle extends Component{

  render(){
    if(this.props.title){
      return(
        <div style={styles.blockTitle}>{this.props.title}</div>
      );
    }
    else{
      return null;
    }
  }
}
