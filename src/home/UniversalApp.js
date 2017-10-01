import React, {Component} from 'react'


import {textValues,images} from  "../configs";
import {RenderTextImage} from "../components";


export  default class UniversalApp extends Component {

  render() {
    
    return (
            <RenderTextImage title={textValues.home.universalApp.title}
                             content={textValues.home.universalApp.content}
                             image={images.globalInputBanner}/>
            );
  }
}
