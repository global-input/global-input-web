
import React from 'react';
import {applicationPathConfig} from "../page-templates";

import {TopMenu} from "../components";

const textContent={
    title:"Global Input App Solution"
}
const images={
  appIcon:require("./app-icon.png"),
}
export  default class TopHeaderSection extends React.Component {

    render(){
      return(<TopMenu
          menus={applicationPathConfig.menus}
          selected={this.props.selected} appLogo={images.appIcon}/>)
    }
}
