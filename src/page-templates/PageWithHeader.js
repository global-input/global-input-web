import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



import {images} from "../configs";
import {styles} from "./styles";

import {TopMenu,DisplayTextImage,DisplayStaticContent} from "../components";
import PageDescription from "./sections/PageDescription";
import PageAdvert from "./sections/PageAdvert";
import SectionHeader from "./sections/SectionHeader";
import StaticSectionFooter from "./sections/StaticSectionFooter";
import applicationPathConfig from "./configs/applicationPathConfig";

export  default class PageWithHeader extends Component {

    renderSectionHeader(){

        if(this.props.sectionHeaderTitle || this.props.sectionHeaderContent){
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
            return(<StaticSectionFooter content={this.props.sectionFooterContent}/>);
        }
        else{
          return null;
        }
    }
    renderAdvert(){

        if(this.props.advert){

          return(
              <PageAdvert image={this.props.image} advert={this.props.advert} mobileImage={this.props.mobileImage}/>
          );
        }
        else{
            return(
                <PageDescription image={this.props.image} content={this.props.content}/>
            );
        }
    }
    render(){

        var appTitle=applicationPathConfig.appTitle;
        if(this.props.appTitle){
          appTitle=this.props.appTitle;
        }
        return(
          <div style={styles.container}>
            <TopMenu  menus={applicationPathConfig.menus} selected={this.props.selected} appLogo={images.appIcon} appTitle={appTitle}/>
            {this.renderAdvert()}
            <div style={styles.content}>
                  {this.renderSectionHeader()}
                  {this.props.children}
                  {this.renderSectionFooter()}
           </div>
          </div>
        );

    }


}
