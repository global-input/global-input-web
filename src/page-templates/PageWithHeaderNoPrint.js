import React, {Component} from 'react';
import {homeTextConfig} from "../home";
import {documentationConfig} from "../documentation";
import {images} from "../configs";


import {styles} from "./styles";
import {TopMenu,DisplayTextImage} from "../components";
import ApplicationDescription from "./ApplicationDescription";
import SectionHeader from "./sections/SectionHeader";
import SectionFooter from "./sections/SectionFooter";


export  default class PageWithHeaderNoPrint extends Component {

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
          <div>
            <div className="noprint">
                  <TopMenu  menus={menus} selected={homeTextConfig.menu} appLogo={images.appIcon} appTitle={homeTextConfig.application.title}/>
                  <ApplicationDescription image={this.props.image} content={this.props.content} />
            </div>
            <div style={styles.content}>
                <div className="noprint">
                  {this.renderSectionHeader()}
                </div>
                  {this.props.children}
                <div className="noprint">
                  {this.renderSectionFooter()}
                </div>
           </div>
          </div>
        );

    }


}
