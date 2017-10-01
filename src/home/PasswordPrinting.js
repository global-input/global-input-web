import React, {Component} from 'react'


import {textValues,images} from  "../configs";
import {RenderImageText} from "../components";


export  default class PasswordPrinting extends Component {

  render() {

    return (
            <RenderImageText title={textValues.qrcode.passwordPring.title}
                             content={textValues.qrcode.passwordPring.content}
                             image={images.passwordPrinting}/>
            );
  }
}
