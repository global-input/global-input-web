import React, {Component} from 'react'




import {images} from  "../../configs";

import {DisplayStaticContent} from "../../components";
import { CSSTransitionGroup } from 'react-transition-group'

import {styles} from "./styles";


export  default class PageScrollingText extends Component {

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
        if(this.props.scrollingText!=nextProps.scrollingText){
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
          if(props.scrollingText.items && props.scrollingText.items.length && props.scrollingText.items.length>1){
                this.starterThread=setInterval(this.nextContent.bind(this),this.props.scrollingText.duration);
          }
    }

    nextContent(){

          if(this.starterThread){
            var index=this.state.index;
            index++;
            if(index>=this.props.scrollingText.items.length){
                index=0;
            }
            this.setState(Object.assign({}, this.state,{index}));
          }
          else{
            console.log("out of view point");
          }



    }

  isInViewport() {
      var scrollingTextSection=document.getElementById("scrollingTextSection");
      if(scrollingTextSection){
                var top = scrollingTextSection.offsetTop;
           var left = scrollingTextSection.offsetLeft;
           var width = scrollingTextSection.offsetWidth;
           var height = scrollingTextSection.offsetHeight;

           while(scrollingTextSection.offsetParent) {
             scrollingTextSection = scrollingTextSection.offsetParent;
             top += scrollingTextSection.offsetTop;
             left += scrollingTextSection.offsetLeft;
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

renderAboutText(){
    if(this.props.aboutText){
      return(
            <DisplayStaticContent content={this.props.aboutText} lineStyle={styles.scrollingTextLine} linkStyle={styles.link}/>
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


  var scrollingTextItem=this.props.scrollingText.items[this.state.index];
  var scrollingTextTitleStyle=styles.scrollingTextTitle;
  var scrollingTextContentStyle=styles.scrollingTextContent;


  var scrollingTextContainer=styles.scrollingTextContainer;
  if(styles.isMobile()){
    scrollingTextContainer=styles.scrollingTextContainerMobile;
      scrollingTextTitleStyle=styles.scrollingTextTitleMobile;
      scrollingTextContentStyle=styles.scrollingTextContentMobile;

  }

  return(
    <div style={scrollingTextContainer}>
          <CSSTransitionGroup
              transitionName="scrollingTextAnimation"

              transitionEnterTimeout={2000}
              transitionLeaveTimeout={1000}>
              <div key={this.state.index} style={styles.scrollingTextItemContainer}>
                  <div style={scrollingTextTitleStyle}>{scrollingTextItem.title}</div>
                  <DisplayStaticContent content={scrollingTextItem.content} lineStyle={scrollingTextContentStyle}/>
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
    var scrollingTextItem=this.props.scrollingText.items[this.state.index];

    return (
                      <div style={pageDescriptionSection} id="scrollingTextSection">
                              <div style={pageDescription}>
                                  {this.renderAnimation()}
                                  <div style={styles.fixedScrollingTextContainer}>
                                      {this.renderAboutText()}

                                  </div>
                              </div>
                            {this.renderImage()}

                      </div>



            );
  }



}
