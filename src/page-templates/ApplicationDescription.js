import React, {Component} from 'react'




import {images} from  "../configs";
import {homeTextConfig} from "../home";


import {styles} from "./styles";


export  default class ApplicationDescription extends Component {

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

renderAppDescription(content, index){
  return(
        <div style={styles.appContent} key={index}>
        {content}
        </div>
  );
}

renderDescription(){
  if(this.props.content){
    return (
        <div style={styles.appDescription}>
              {this.props.content.map(this.renderAppDescription.bind(this))}
        </div>
    );
  }
  else{
    return (
                  <div style={styles.appDescription}>
                        <div style={styles.appContent}>
                            {homeTextConfig.application.description.name} ({homeTextConfig.application.appDownload.content}
                            <a href={homeTextConfig.application.appDownload.appStore.linkURL} style={styles.link}>
                                {homeTextConfig.application.appDownload.appStore.linkText}
                            </a>
                            {homeTextConfig.application.appDownload.andText}
                            <a href={homeTextConfig.application.appDownload.playStore.linkURL} style={styles.link}>
                                {homeTextConfig.application.appDownload.playStore.linkText}
                            </a>) {homeTextConfig.application.description.content}
                        </div>
                          {homeTextConfig.application.description.content2.map(this.renderAppDescription.bind(this))}
                      <div style={styles.appContent}>
                            {homeTextConfig.application.chromeExtension.content}
                            <a href={homeTextConfig.application.chromeExtension.linkURL} style={styles.link}>
                                {homeTextConfig.application.chromeExtension.linkText}
                            </a>
                            {homeTextConfig.application.chromeExtension.content2}
                      </div>

                </div>

            );
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
    var applicationSection=styles.getApplicationSection();
    return (

                <div style={applicationSection}>
                      {this.renderDescription()}
                      {this.renderImage()}

                </div>
            );
  }
}
