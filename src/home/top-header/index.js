
import React from 'react';
import {applicationPathConfig} from "../../page-templates";
import {images} from "../../configs";
import {TopMenu} from "../../components";

const textContent={
    title:"Global Input App Solution"
}



export  default class TopHeader extends React.Component {

    render(){
      return(<TopMenu
          appTitle={textContent.title}
          menus={applicationPathConfig.menus}
          selected={this.props.selected} appLogo={images.appIcon}/>)
    }
}
