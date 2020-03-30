
import React from 'react';


import {TopMenu} from "../../components";
import {config} from "../../configs";
import {styles, images} from './styles';
const textContent={
    title:"Global Input App"
}
var menus=[{
      link:config.paths.home.path,
      linkText:"HOME"
    },{
      link:config.paths.privacy.path,
      linkText:"PRIVACY"
    },{
      link:config.paths.contactus.path,
      linkText:"CONTACT US"
    },{
      link:config.paths.getAppScreen.path,
      linkText:"GET IT FREE"      
    }];

const TopHeaderSection=props => (<TopMenu appTitle={textContent.title}
          menus={menus}
          selected={props.selected} appLogo={images.appIcon}/>);
export default TopHeaderSection;
