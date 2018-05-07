import React, {Component} from 'react'







import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'


import {images,chromeExtensionConfig} from "../configs";

import {ContactUsButton,TopMenu,DisplayTextImage,BookMark} from "../components";

import {styles} from "./styles";

import {contentTransferConfig} from "../content-transfer";
import {qrPrintingConfig} from "../qr-printing";
import {formDataTransferConfig} from "../formdata-transfer";


import UniversalApp from "./UniversalApp";
import EndToEndEncryption from "./EndToEndEncryption";
import AutomaticIdentification from "./AutomaticIdentification";
import AutomateProcess from "./AutomateProcess";



import {PageWithHeader} from "../page-templates";



export  default class Home extends Component {

    constructor(props){
      super(props);
      this.onWindowResize=this.onWindowResize.bind(this);
    }
     componentDidMount() {
         window.addEventListener("resize", this.onWindowResize);
         this.processQueryParameters(this.props);
     }
     getQueryParam(query,variable) {
            if(!query){
              return null;
            }
            query=query.substring(1);
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (decodeURIComponent(pair[0]) == variable) {
                    return decodeURIComponent(pair[1]);
                }
            }
  }
     processQueryParameters(props){
            if(props && props.location && props.location.search){
                    var scrollTo=this.getQueryParam(props.location.search, "scrollTo");
                    setTimeout(function(){
                          var elmnt = document.getElementById(scrollTo);
                          elmnt.scrollIntoView()
                    },200);
            }
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



    return (

      <PageWithHeader image={images.globalInputApp}>


         <div style={styles.content}>
              <BookMark bookmark="contentTransfer"/>

              <div style={styles.itemSection}>
                    <DisplayTextImage title={contentTransferConfig.title}
                       content={contentTransferConfig.content} image={images.contentTransfer}
                       linkText={contentTransferConfig.startButton} link={contentTransferConfig.menu.link}/>
              </div>
              <BookMark bookmark="qrPrinting"/>

              <div style={styles.itemSection}>
                    <DisplayTextImage title={qrPrintingConfig.title}
                       content={qrPrintingConfig.content} image={images.encryptedQRCode}
                       linkText={qrPrintingConfig.startButton} link={qrPrintingConfig.menu.link}/>
              </div>
              <BookMark bookmark="formDataTransfer"/>
              <div style={styles.itemSection}>
                    <DisplayTextImage title={formDataTransferConfig.title}
                       content={formDataTransferConfig.content} image={images.transferForm}
                       linkText={formDataTransferConfig.startButton} link={formDataTransferConfig.menu.link}/>
              </div>
              <BookMark bookmark="chromeExtension"/>

              <div style={styles.itemSection}>
                    <DisplayTextImage title={chromeExtensionConfig.title}
                       content={chromeExtensionConfig.content} image={images.chromeExtension}
                       linkText={formDataTransferConfig.startButton} link={formDataTransferConfig.menu.link}/>
              </div>



          </div>
          <div id="mainContent" className="noprint">
                 <UniversalApp/>
                 <EndToEndEncryption/>
                 <AutomaticIdentification/>
                 <AutomateProcess/>

          </div>
          <div className="noprint">
                <ContactUsButton/>
          </div>
      </PageWithHeader>
            );
  }
}
