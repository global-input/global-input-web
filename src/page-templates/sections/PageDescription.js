import React, {Component} from 'react'




import {images} from  "../../configs";

import {DisplayContent} from "../../components";

import {styles} from "./styles";


export  default class PageDescription extends Component {

    constructor(props){
      super(props);
      this.onWindowResize=this.onWindowResize.bind(this);
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

renderDescription(){
  if(this.props.content){
    var pageDescription=styles.pageDescription;
    if(this.props.image){
        pageDescription=styles.pageDescriptionWithImage;
    }
    return (
      <div style={pageDescription}>
            <DisplayContent content={this.props.content} lineStyle={styles.pageDescriptionLine}
            linkStyle={styles.link}/>
      </div>
    );
  }
  else{
    return null;
  }

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
                      {this.renderDescription()}
                      {this.renderImage()}

                </div>
            );
  }
}
