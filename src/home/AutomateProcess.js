import React, {Component} from 'react'


import {textValues,images} from  "../configs";
import {RenderImageText} from "../components";


export  default class AutomateProcess extends Component {

  render() {

    return (
            <RenderImageText title={textValues.home.automateProcess.title}
                             content={textValues.home.automateProcess.content}
                             image={images.automateProcess}/>
            );

  }
}
