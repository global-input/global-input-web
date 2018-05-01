import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import "../components/styles/index.css";

import {textValues,images,homeTextConfig} from  "../configs";
import {DisplayBlockText,ShowImage,DownloadApp,RenderTextImage,ContactUsButton,TopMenu} from "../components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'


import DemoInput from "./DemoInput";
import {styles} from "./styles";
import {globalStyles} from "../components/styles";


import ScrollButton from "./ScrollButton";
import UniversalApp from "./UniversalApp";
import EndToEndEncryption from "./EndToEndEncryption";
import AutomaticIdentification from "./AutomaticIdentification";
import AutomateProcess from "./AutomateProcess";
import PasswordPrinting from "./PasswordPrinting";

import {ContentTransfer,QRCodePrinting} from "../examples";

export  class Home extends Component {

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

render() {
    var applicationSection=globalStyles.getApplicationSection();


    return (
      <div>
          <div className="noprint">

                <div styles={globalStyles.menuSection}>
                    <TopMenu selected="home"/>
                </div>

                <div style={applicationSection}>
                      <div style={globalStyles.appDescription}>
                        <div style={styles.appContent}>
                            {homeTextConfig.application.description.name} ({homeTextConfig.application.appDownload.content}
                            <a href={homeTextConfig.application.appDownload.appStore.linkURL} style={globalStyles.link}>
                                {homeTextConfig.application.appDownload.appStore.linkText}
                            </a>
                            {homeTextConfig.application.appDownload.andText}
                            <a href={homeTextConfig.application.appDownload.playStore.linkURL} style={globalStyles.link}>
                                {homeTextConfig.application.appDownload.playStore.linkText}
                            </a>) {homeTextConfig.application.description.content}
                      </div>

                          {homeTextConfig.application.description.content2.map(this.renderAppDescription.bind(this))}

                        </div>
                        <img src={images.globalInputApp} style={styles.appImage}/>
                </div>
          </div>
          <div style={styles.content}>
            <div className="noprint">
               <div style={styles.itemSection}>
                       <ContentTransfer/>
               </div>
            </div>
               <div style={styles.itemSection}>
                      <QRCodePrinting/>
              </div>


          </div>








          <div id="mainContent" className="noprint">
                 <UniversalApp/>
                 <EndToEndEncryption/>
                 <AutomaticIdentification/>
                 <AutomateProcess/>
                 <PasswordPrinting/>
          </div>
          <div className="noprint">
                <ContactUsButton/>
          </div>


      </div>
            );
  }
}
