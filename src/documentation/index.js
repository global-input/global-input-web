import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/index.css";

import {textValues,images} from  "../configs";
import {DisplayBlockText,ShowImage,DownloadApp,RenderText} from "../components";

import {styles} from "./styles";
import {globalStyles} from "../components/styles";

import {TopMenu} from "../menu";


export  class Documentation extends Component {

render() {

    return (
      <div className="homeContainer">
            <div style={styles.headerSection}>
                 <TopMenu selected="documentation"/>
            </div>
            <div className="container" id="mainContent">
              <DisplayBlockText content={textValues.home.content1}/>
            </div>
      </div>
            );
  }
}
