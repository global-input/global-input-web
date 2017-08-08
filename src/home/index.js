import React, {Component} from 'react'

import {textValues} from  "../configs";

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

              <div>
                    <div className="ptext">
                      {textValues.home.content.p1}
                    </div>
                    <div  className="ptext">
                      {textValues.home.content.p2}
                    </div>

                    <div>


                      <div>{textValues.home.content.p3}</div>
                        <div className="appLink">
                           <a href={textValues.urls.apk}>{textValues.urls.apk}</a>
                        </div>
                      <div>{textValues.home.content.p4}</div>
                      <div>
                          {textValues.home.content.p5}
                          <a href={textValues.urls.github.web}>{textValues.home.content.p6}</a>.
                      </div>



                    </div>

              </div>



          </div>
      </div>
            );
  }
}
