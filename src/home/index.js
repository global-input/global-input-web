import React, {Component} from 'react'

import {textValues,images} from  "../configs";
import {DisplayBlockText} from "../components";


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
    var responsiveMenuClass="topnav";
    if(this.state.menuPressed){
        responsiveMenuClass="topnav responsive";
    }

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


               <div className={responsiveMenuClass} id="myTopnav">
                 <a href={textValues.company.home.link}>{textValues.company.home.linkText}</a>
                 <a href={textValues.company.mobileForBusiness.link}>{textValues.company.mobileForBusiness.linkText}</a>
                 <a href={textValues.company.mobileForBusiness.link}>{textValues.company.mobileForBusiness.linkText}</a>
                 <a href={textValues.company.contactUs.link}>{textValues.company.contactUs.linkText}</a>

                 <a className="icon" onClick={this.menuPressed.bind(this)}>&#9776;</a>
               </div>

          </div>


          <div className="homeContainer">

            <div className="pageTitleContainer">
                <div class="pageTitleBlock">
                  <div className="titleText">{textValues.home.title}</div>
                  <div className="subTitleText">{textValues.home.subtitle}</div>
                </div>
            </div>
              <DisplayBlockText content={textValues.home.content1}/>
              <div className="ptext">
                {textValues.home.appInstall.preContent}
                <a href={textValues.home.appInstall.iosApp.link}>{textValues.home.appInstall.iosApp.linkText}</a>
                 or
                <a href={textValues.home.appInstall.androidApp.link}>{textValues.home.appInstall.androidApp.linkText}</a>
                {textValues.home.appInstall.postContent}
              </div>
              <DisplayBlockText content={textValues.home.content2}/>

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
