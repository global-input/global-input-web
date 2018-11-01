import React, {Component} from 'react'


import {styles} from "./styles";
import {TextButton} from "../index";
import DisplayStaticContent from "./DisplayStaticContent";
import DisplayVideo from "./DisplayVideo";


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

  renderTitle(isMobile){
    if(isMobile && this.props.mobileImage){
       return null;
    }
    if(typeof this.props.title ==='object' && this.props.title.image){
      return(
              <div style={styles.sectionHeading}>
                      <img src={this.props.title.image} style={styles.image} alt={this.props.title.image}/>
              </div>
            );
    }
    if(typeof this.props.title ==='object'){
      return(
              <div style={styles.sectionHeading}>
                      <DisplayStaticContent content={this.props.title} lineStyle={styles.sectionHeading}/>
              </div>
            );
    }
    else{
      return(
              <div style={styles.sectionHeading}>
                      {this.props.title}
              </div>
            );
    }
  }
  renderDesktopTextContent(){
    var containerClass="col-md-12";
    if(this.props.image){
        containerClass="col-md-6";
    }
    return(
        <div className={containerClass}>
          {this.renderTitle(false)}
          <DisplayStaticContent content={this.props.content}/>
          {this.props.children}
          {this.renderButton()}
        </div>
     );

  }

  renderImageTitle(isMobile){
    if(this.props.imageTitle){
      var imageTitleStyle=styles.imageTitle;
      if(isMobile){
        imageTitleStyle=styles.imageTitleMobile;
      }
      return(

        <div style={imageTitleStyle}>
            <DisplayStaticContent content={this.props.imageTitle} lineStyle={imageTitleStyle}/>
        </div>
      );
    }
    else{
      return null;
    }



  }
  renderVideo(isMobile){
          return(
          <div className="col-md-6">
              <div style={styles.imageContainer}>
                <DisplayVideo video={this.props.video}
                  defaultImage={this.props.image} autoPlay={true}
                  loop={true}/>
              </div>
          </div>
        );
  }
  renderImage(isMobile){
    if(this.props.video){
        return this.renderVideo(isMobile);
    }
    else if(this.props.image){
      if(isMobile){
        var imageurl=this.props.image;
        if(this.props.mobileImage){
          imageurl=this.props.mobileImage;
        }

        return(
          <div style={styles.mobileImageContainer}>
              {this.renderImageTitle(isMobile)}
              <img src={imageurl} style={styles.image} alt={imageurl}/>
          </div>
        );
      }
      else{

          return(
            <div className="col-md-6">
                <div style={styles.imageContainer}>
                    {this.renderImageTitle(isMobile)}
                    <img src={this.props.image} style={styles.image} alt={this.props.image}/>
                </div>
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
                          {this.renderDesktopTextContent()}
                      </div>
                );
      }
      else{
        return (
                      <div className="row" >
                        {this.renderDesktopTextContent()}
                        {this.renderImage(false)}
                      </div>
                );
      }
    }
    renderMobile(){
      
        return (
                      <div style={styles.mobileTextImageContainer}>
                        {this.renderTitle(true)}
                        {this.renderImage(true)}
                            <DisplayStaticContent content={this.props.content}/>
                            {this.props.children}
                            {this.renderButton()}

                      </div>
                );

    }

}
