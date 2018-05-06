import React, {Component} from 'react';
import {homeTextConfig} from "../home";
import {documentationConfig} from "../documentation";
import {images} from "../configs";


import {styles} from "./styles";
import {TopMenu,DisplayTextImage} from "../components";
import ApplicationDescription from "./ApplicationDescription";


export  default class PageWithHeaderNoPrint extends Component {
    render(){
        var menus=[];
        menus.push(homeTextConfig.menu);
        menus.push(documentationConfig.menu);
        return(
          <div>
            <div className="noprint">
                  <TopMenu  menus={menus} selected={homeTextConfig.menu} appLogo={images.appIcon} appTitle={homeTextConfig.application.title}/>
                  <ApplicationDescription image={this.props.image} content={this.props.content} />
            </div>
            <div style={styles.content}>
                  {this.props.children}
           </div>
          </div>
        );

    }


}
