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


  scrollDocumentOffsetTop(element){
     return element.offsetTop + ( element.offsetParent ? this.scrollDocumentOffsetTop(element.offsetParent) : 0 );
  }
  gotoIntroduction(){
       var scrollElement=document.getElementById("intro");
             if(scrollElement){
               var top=this.scrollDocumentOffsetTop(scrollElement)-(window.innerHeight / 2 );
               window.scrollTo(0,top);
             }
  }
  render() {

    return (
      <div className="homeContainer">
          <div style={globalStyles.headerSection}>
               <TopMenu selected="home"/>
               <DownloadApp actionText={textValues.home.qrscan} render={true}/>
               <DemoInput/>
               <ScrollButton scrollTo="mainContent"/>
          </div>



          <div className="container" id="mainContent">
                 <UniversalApp/>
                 <EndToEndEncryption/>
                 <AutomaticIdentification/>
                 <AutomateProcess/>                 
          </div>






              <DisplayBlockText content={textValues.home.content1}/>









      </div>
            );
  }
}
