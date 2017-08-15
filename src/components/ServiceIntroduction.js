import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'


import {textValues} from  "../configs";
import {images} from "../configs";

import DisplayBlockText from "./DisplayBlockText";
export default class ServiceIntroduction extends Component{
  render(){
    return (
            <div>
                    <div className="serviceTitle">
                          {this.props.title}
                    </div>
                    <DisplayBlockText content={this.props.content}/>
            </div>
      )
    }
}
