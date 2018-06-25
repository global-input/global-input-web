import React, {Component} from 'react'




import {images} from  "../../configs";

import {DisplayStaticContent} from "../../components";
import { CSSTransitionGroup } from 'react-transition-group'

import {styles} from "./styles";


export  default class PageAdvert extends Component {

    constructor(props){
      super(props);
      this.onWindowResize=this.onWindowResize.bind(this);
      this.state=this.getStateFromProps(this.props);
    }

    componentDidMount() {
        window.addEventListener("resize", this.onWindowResize);
        this.stopSiwtchContentThread(this.props);
        this.startSiwtchContentThread(this.props);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onWindowResize);
        this.stopSiwtchContentThread(this.props);
    }

    onWindowResize(){
      this.forceUpdate();
    }


    componentWillReceiveProps(nextProps){
        if(this.props.advert!=nextProps.advert){
            this.setState(this.getStateFromProps(nextProps))
            this.stopSiwtchContentThread(nextProps);
            this.startSiwtchContentThread(nextProps);
        }
    }


    getStateFromProps(props){
        return {index:0};
    }

    stopSiwtchContentThread(props){
      if(this.starterThread){
        clearInterval(this.starterThread);
        this.starterThread=null;
      }
    }
    startSiwtchContentThread(props){
          if(props.advert.items && props.advert.items.length && props.advert.items.length>1){
                this.starterThread=setInterval(this.nextContent.bind(this),this.props.advert.duration);
          }
    }

    nextContent(){

          if(this.starterThread){
            var index=this.state.index;
            index++;
            if(index>=this.props.advert.items.length){
                index=0;
            }
            this.setState(Object.assign({}, this.state,{index}));
          }
          else{
            console.log("out of view point");
          }



    }

  isInViewport() {
      var advertSection=document.getElementById("advertSection");
      if(advertSection){
                var top = advertSection.offsetTop;
           var left = advertSection.offsetLeft;
           var width = advertSection.offsetWidth;
           var height = advertSection.offsetHeight;

           while(advertSection.offsetParent) {
             advertSection = advertSection.offsetParent;
             top += advertSection.offsetTop;
             left += advertSection.offsetLeft;
           }

           return (
             top >= window.pageYOffset &&
             left >= window.pageXOffset &&
             (top + height) <= (window.pageYOffset + window.innerHeight) &&
             (left + width) <= (window.pageXOffset + window.innerWidth)
           );
      }
      else{
        return false;
      }

    }




renderPageDescription(content, index){
  return(
        <div style={styles.appContent} key={index}>
        {content}
        </div>
  );
}
renderInstall(){
    if(this.props.advert.install){
      return(
          <div style={styles.installContainer}>
              <DisplayStaticContent content={this.props.advert.install} lineStyle={styles.advertLine}
              linkStyle={styles.imageLink}/>
          </div>
      );
    }
    else{
      return null;
    }
}


renderImage(){
  if(this.props.image){
    if(this.props.mobileImage && styles.isMobile()){
      return(
        <img src={this.props.mobileImage}/>
      );
    }
    else{
      return(
        <img src={this.props.image}/>
      );
    }

  }
  else{
      return null;
  }

}
renderAnimation(){


  var advertItem=this.props.advert.items[this.state.index];
  var advertTitleStyle=styles.advertTitle;
  var advertContentStyle=styles.advertContent;


  var advertContainer=styles.advertContainer;
  if(styles.isMobile()){
    advertContainer=styles.advertContainerMobile;
      advertTitleStyle=styles.advertTitleMobile;
      advertContentStyle=styles.advertContentMobile;

  }

  return(
    <div style={advertContainer}>
          <CSSTransitionGroup
              transitionName="advertAnimation"

              transitionEnterTimeout={2000}
              transitionLeaveTimeout={1000}>
              <div key={this.state.index} style={styles.advertItemContainer}>
                  <div style={advertTitleStyle}>{advertItem.title}</div>
                  <DisplayStaticContent content={advertItem.content} lineStyle={advertContentStyle}/>
              </div>

          </CSSTransitionGroup>
    </div>

  );
}
render() {

    var pageDescriptionSection=styles.pageDescriptionSection;
    if(styles.isMobile()){
      pageDescriptionSection=styles.pageDescriptionSectionMobile;
    }
    var pageDescription=styles.pageDescription;
     if(this.props.image){
         pageDescription=styles.pageDescriptionWithImage;
     }
    var advertItem=this.props.advert.items[this.state.index];

    return (
                      <div style={pageDescriptionSection} id="advertSection">
                              <div style={pageDescription}>
                                  {this.renderAnimation()}
                                  {this.renderInstall()}
                              </div>
                            {this.renderImage()}

                      </div>



            );
  }



}
