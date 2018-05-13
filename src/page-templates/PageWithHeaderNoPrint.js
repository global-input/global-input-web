import React, {Component} from 'react';


import {images} from "../configs";
import applicationPathConfig from "./configs/applicationPathConfig";

import {styles} from "./styles";
import {TopMenu,DisplayTextImage} from "../components";
import PageDescription from "./sections/PageDescription";
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
      var selected=this.props.selected;
      if(!selected){
        selected=applicationPathConfig.home.menu;
      }
        return(
          <div>
            <div className="noprint">
                  <TopMenu  menus={applicationPathConfig.menus} selected={selected} appLogo={images.appIcon} appTitle={applicationPathConfig.appTitle}/>
                  <PageDescription image={this.props.image} content={this.props.content} />
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
