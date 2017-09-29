import React, {Component} from 'react'
import {textValues} from  "../configs";

import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'
import './styles/TopMenu.css';

export  default class TopMenu extends Component {
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
    var homeClass="notSelected";
    var qrprintingClass="notSelected";
    var contactUsClass="notSelected";
    if(this.props.selected==="home"){
          homeClass="selected";
    }
    if(this.props.selected==="qrprinting"){
          qrprintingClass="selected";
    }


    return (
               <div className={responsiveMenuClass} id="myTopnav">
                    <Link to={textValues.topmenu.home.link} className={homeClass}>
                          {textValues.topmenu.home.linkText}
                    </Link>
                    <Link to={textValues.topmenu.qrprinting.link} className={qrprintingClass}>
                          {textValues.topmenu.qrprinting.linkText}
                    </Link>
                    <a href={textValues.topmenu.contactUs.link} className={contactUsClass}>

                          {textValues.topmenu.contactUs.linkText}
                    </a>
                    <a className="icon" onClick={this.menuPressed.bind(this)}>&#9776;</a>
               </div>
            );
  }
}
