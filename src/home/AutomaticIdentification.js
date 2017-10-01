import React, {Component} from 'react'


import {textValues,images} from  "../configs";
import {RenderTextImage} from "../components";


export  default class AutomaticIdentification extends Component {

  render() {

    return (
            <RenderTextImage title={textValues.home.identification.title}
                             content={textValues.home.identification.content}
                             image={images.identification}/>
            );
  }
}
