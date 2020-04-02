
import React from 'react';


import {TopMenu} from "../../components";
import {config} from "../../configs";
import {styles, images} from './styles';
const textContent={
    title:"Global Input App",
    companyTitle:"Iterative Solution Limited"
}
var menus=[{
      link:config.paths.home.path,
      linkText:"HOME"
    },{
      link:config.paths.privacy.path,
      linkText:"PRIVACY POLICY"
    },{
      link:config.paths.contactus.path,
      linkText:"CONTACT US"
    },{
      link:config.paths.getAppScreen.path,
      linkText:"GET IT FREE"      
    }];

const   getWebSiteConfig=()=>{
   if(config.id==='iterative'){
     return {
        webSiteTitle:textContent.companyTitle,
        websiteIcon:images.companyIcon
     };
   }   
      return {
        webSiteTitle:textContent.title,
        websiteIcon:images.appIcon
    }; 
}  
 
const {webSiteTitle, websiteIcon}=getWebSiteConfig();



export default ({selected}) => (<TopMenu appTitle={webSiteTitle}
          menus={menus}
          selected={selected} appLogo={websiteIcon}/>);

