import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'


import {textValues} from  "../configs";
import {images} from "../configs";
import {CodeDataRenderer} from "global-input-react";


export default class DisplayBlockText extends Component{
      render(){
              const content=this.props.content;
              return(
                <div className="serviceIntroduction">
                  {content.map((p,index)=>{return(<div className="ptext" key={index}>{p}</div>);})}
                </div>
              );

      }
}
