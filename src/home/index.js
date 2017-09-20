import React, {Component} from 'react'

import {textValues,images} from  "../configs";
import {DisplayBlockText,ShowImage} from "../components";


export  class Home extends Component {
  constructor(props){
      super(props);
      this.state={menuPressed:false};
  }

  menuPressed(){
      console.log("pressed");
        this.setState(Object.assign({},this.state,{menuPressed:!this.state.menuPressed}));
  }
  render() {
    return (
      <div>
          <div className="headerSection">
              <div className="companyHeader">
                      <a href={textValues.company.link}>
                        <img src={images.companyLogo}/>
                      </a>
                      <a href={textValues.company.link}>
                         <div className="companyTitleContainer">
                              <div className="companyName"> {textValues.company.title}</div>
                              <div className="tagText">{textValues.company.tags}</div>
                        </div>
                      </a>
               </div>

          </div>


          <div className="homeContainer">

            <div className="pageTitleContainer">
                <div class="pageTitleBlock">
                  <div className="titleText">{textValues.home.title}</div>
                  <div className="subTitleText">{textValues.home.subtitle}</div>
                </div>
            </div>
              <ShowImage/>

              <DisplayBlockText content={textValues.home.content1}/>




          </div>




      </div>
            );
  }
}
