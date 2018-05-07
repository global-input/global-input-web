import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import {homeTextConfig} from "../home";
import {documentationConfig} from "../documentation";
import {images} from "../configs";
import {styles} from "./styles";

import {TopMenu,DisplayTextImage} from "../components";
import ApplicationDescription from "./ApplicationDescription";
import SectionHeader from "./sections/SectionHeader";
import SectionFooter from "./sections/SectionFooter";


export  default class PageWithHeader extends Component {
    renderSectionHeader(){
        if(this.props.sectionHeaderTitle){
          return(
            <SectionHeader title={this.props.sectionHeaderTitle}
                content={this.props.sectionHeaderContent}/>
            );
        }
        else{
          return null;
        }
    }
    renderSectionFooter(){
        if(this.props.sectionFooterContent){
            return(<SectionFooter content={this.props.sectionFooterContent}/>);
        }
        else{
          return null;
        }
    }
    render(){
        var menus=[];
        menus.push(homeTextConfig.menu);
        menus.push(documentationConfig.menu);
        return(
          <div style={styles.container}>
            <TopMenu  menus={menus} selected={homeTextConfig.menu} appLogo={images.appIcon} appTitle={homeTextConfig.application.title}/>

            <ApplicationDescription image={this.props.image} content={this.props.content} />
            <div style={styles.content}>
                  {this.renderSectionHeader()}
                  {this.props.children}
                  {this.renderSectionFooter()}
           </div>
          </div>
        );

    }


}
