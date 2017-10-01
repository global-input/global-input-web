import React, {Component} from 'react'


import {textValues,images} from  "../configs";
import {RenderImageText} from "../components";


export  default class EndToEndEncryption extends Component {

  render() {

    return (
            <RenderImageText title={textValues.home.endToEnd.title}
                             content={textValues.home.endToEnd.content}
                             image={images.endToEnd}/>
            );

  }
}
