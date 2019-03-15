
import React from 'react';


import {TopMenu} from "../../components";
import {config} from "../../configs";
import {styles, images} from './styles';
const textContent={
    title:"Global Input App Solution"
}
var menus=[{
      link:config.paths.home.path,
      linkText:"Home"
    },{
      link:config.paths.privacy.path,
      linkText:"Privacy"
    },{
      link:config.paths.contactus.path,
      linkText:"Contact Us"
    },{
      link:config.paths.getAppScreen.path,
      linkText:"Get GIA App Free",
      button:images.downloadapp,
      styles:{
             menuItem: styles.menuItem
      }
    }];

export  default class TopHeaderSection extends React.Component {

    render(){
      return(<TopMenu
          menus={menus}
          selected={this.props.selected} appLogo={images.appIcon}/>)
    }
}
