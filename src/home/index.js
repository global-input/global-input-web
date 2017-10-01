import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/index.css";

import {textValues,images} from  "../configs";
import {DisplayBlockText,ShowImage,DownloadApp,RenderText} from "../components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'


import DemoInput from "./DemoInput";
import {styles} from "./styles";
import {globalStyles} from "../components/styles";

import {TopMenu} from "../menu";
import ScrollButton from "./ScrollButton";
import UniversalApp from "./UniversalApp";
import EndToEndEncryption from "./EndToEndEncryption";
import AutomaticIdentification from "./AutomaticIdentification";
import AutomateProcess from "./AutomateProcess";

export  class Home extends Component {

render() {

    return (
      <div className="container">
          <div style={globalStyles.headerSection}>
               <TopMenu selected="home"/>
               <DownloadApp actionText={textValues.home.qrscan} render={true}/>
               <DemoInput/>
               <ScrollButton scrollTo="mainContent"/>
          </div>



          <div id="mainContent">
                 <UniversalApp/>
                 <EndToEndEncryption/>
                 <AutomaticIdentification/>
                 <AutomateProcess/>
          </div>


      </div>
            );
  }
}
