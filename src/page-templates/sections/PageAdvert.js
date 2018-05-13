import React, {Component} from 'react'




import {images} from  "../../configs";

import {DisplayContent} from "../../components";


import {styles} from "./styles";


export  default class PageAdvert extends Component {

    constructor(props){
      super(props);
      this.onWindowResize=this.onWindowResize.bind(this);
      this.state=this.getStateFromProps(this.props);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.advert!=nextProps.advert){
            this.setState(this.getStateFromProps(nextProps))
        }
    }
    getStateFromProps(props){
        return {index:0};
    }

    componentWillMount(){
        this.stopSiwtchContentThread();
        this.startSiwtchContentThread();
    }
    componentWillUnmount(){
        this.stopSiwtchContentThread();
    }

    nextContent(){
        var index=this.state.index;
        index++;
        if(index>=this.props.advert.items.length){
            index=0;
        }
        this.setState(Object.assign({}, this.state,{index}));
    }
    stopSiwtchContentThread(){
      if(this.starterThread){
        clearInterval(this.starterThread);
        this.starterThread=null;
      }
    }
    startSiwtchContentThread(){
          this.starterThread=setInterval(this.nextContent.bind(this),this.props.advert.duration);

    }



     componentDidMount() {
         window.addEventListener("resize", this.onWindowResize);
     }
     componentWillUnmount() {
         window.removeEventListener("resize", this.onWindowResize);
     }
     onWindowResize(){
       this.forceUpdate();
     }

renderPageDescription(content, index){
  return(
        <div style={styles.appContent} key={index}>
        {content}
        </div>
  );
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
                <DisplayContent content={advertItem.content} lineStyle={styles.advertContent}/>
          </div>
          <div style={styles.advertContainer}>
              <DisplayContent content={this.props.advert.install} lineStyle={styles.advertLine}
              linkStyle={styles.imageLink}/>
          </div>
      </div>
    );

}
renderImage(){
  if(this.props.image){
    return(
      <img src={this.props.image} style={styles.appImage}/>
    );
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
