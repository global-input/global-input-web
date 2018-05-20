import React, {Component} from 'react'




import {images} from  "../../configs";

import {DisplayStaticContent} from "../../components";


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

renderAdverts(){

      var pageDescription=styles.pageDescription;
      if(this.props.image){
          pageDescription=styles.pageDescriptionWithImage;
      }
      var advertItem=this.props.advert.items[this.state.index];

    return (
      <div style={pageDescription}>
          <div className={advertItem.className}>
                <div style={styles.advertTitle}>{advertItem.title}</div>
                <DisplayStaticContent content={advertItem.content} lineStyle={styles.advertContent}/>
          </div>
          {this.renderInstall()}
      </div>
    );

}
renderImage(){
  if(this.props.image){
    if(this.props.mobileImage && styles.isMobile()){
      return(
        <img src={this.props.mobileImage} style={styles.appImage}/>
      );
    }
    else{
      return(
        <img src={this.props.image} style={styles.appImage}/>
      );
    }

  }
  else{
      return null;
  }

}
render() {

    var pageDescriptionSection=styles.pageDescriptionSection;
    if(styles.isMobile()){
      pageDescriptionSection=styles.pageDescriptionSectionMobile;
    }
    return (
                      <div style={pageDescriptionSection}>
                            {this.renderAdverts()}
                            {this.renderImage()}

                      </div>



            );
  }



}
