import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'


import {styles} from "./styles";
import {TextButton} from "../index";
import DisplayStaticContent from "./DisplayStaticContent";



export  default class DisplayTextImage extends Component {

  renderButton(){
      if(this.props.buttonLabel){
        return(

          <div style={styles.buttonContainer}>
                <TextButton label={this.props.buttonLabel} onPress={this.props.buttonOnPress} link={this.props.buttonLink}
                  href={this.props.buttonHRef}/>
          </div>
        );
      }
      else{
        return null;
      }
  }

  renderTextContent(){
    var containerClass="col-md-12";
    if(this.props.image){
        containerClass="col-md-6";
    }
    return(
        <div className={containerClass}>
          <div style={styles.sectionHeading}>
                  {this.props.title}
          </div>
          <DisplayStaticContent content={this.props.content}/>
          {this.props.children}
          {this.renderButton()}
        </div>
     );

  }
  renderImage(isMobile){

    if(this.props.image){
      if(isMobile){
        return(
          <div style={styles.mobileImageContainer}>
              <img src={this.props.image} style={styles.image}/>
          </div>
        );
      }
      else{
        return(
          <div className="col-md-6">
              <img src={this.props.image} style={styles.image}/>
          </div>
        );
      }

    }
  }
  render() {
        if(styles.isMobile()){
            return this.renderMobile();
        }
        else{
          return this.renderDeskTop();
        }



    }


    renderDeskTop(){
      if(this.props.reverse){
        return (
                      <div className="row" >
                          {this.renderImage(false)}
                          {this.renderTextContent()}
                      </div>
                );
      }
      else{
        return (
                      <div className="row" >
                        {this.renderTextContent()}
                        {this.renderImage(false)}
                      </div>
                );
      }
    }
    renderMobile(){
      var sectionHeadingStyle=styles.sectionHeading;
      if(styles.isMobile()){
        sectionHeadingStyle=styles.sectionHeadingMobile;
      }
        return (
                      <div style={styles.mobileTextImageContainer}>

                          <div style={sectionHeadingStyle}>
                                  {this.props.title}
                          </div>
                          {this.renderImage(true)}
                            <DisplayStaticContent content={this.props.content}/>
                            {this.props.children}
                            {this.renderButton()}

                      </div>
                );

    }

}
