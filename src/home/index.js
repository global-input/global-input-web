import React, {Component} from 'react'

import {textValues} from  "../configs";
import {DisplayBlockText} from "../components";


export  class Home extends Component {

  render() {

    return (
      <div>
          <div className="headerSection">
              <h1 className="titleText">{textValues.home.title}</h1>
              <h3 className="subTitleText">{textValues.home.subtitle}</h3>
          </div>
          <div className="copyrightinfo">
              <div>{textValues.home.copyrightinfo}</div>
          </div>
          <div className="homeContainer">
              <DisplayBlockText content={textValues.home.content1}/>
              <div className="ptext">
                  {textValues.home.email.pretext}
                    <a href={textValues.home.email.link} target="_top">
                      {textValues.home.email.linkText}
                   </a>
                   {textValues.home.work.pretext}
                   <a href={textValues.home.work.link}>
                     {textValues.home.work.linkText}
                  </a>
              </div>

          </div>
      </div>
            );
  }
}
