import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/index.css";

import {textValues,images} from  "../configs";
import {DisplayBlockText,ShowImage,DownloadApp,RenderText,ContactUsButton} from "../components";

import {styles} from "./styles";
import {globalStyles} from "../components/styles";

import {TopMenu} from "../menu";


export  class Documentation extends Component {

render() {

    return (
      <div className="container">
            <div style={styles.headerSection}>
                 <TopMenu selected="documentation"/>
            </div>
            <div className="container" id="mainContent">
                <DisplayBlockText title={textValues.documentation.getStarted.title} content={textValues.documentation.getStarted.content}/>
                <DisplayBlockText title={textValues.documentation.installation.title} content={textValues.documentation.installation.content}/>

            </div>
            <ContactUsButton/>
      </div>
            );
  }
}
