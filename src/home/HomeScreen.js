import React, {Component} from 'react'







import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'


import {images} from "../configs";

import {ContactUsButton,TopMenu,DisplayTextImage,BookMark} from "../components";

import {styles} from "./styles";

import {PageWithHeader,blockTextConfig,applicationPathConfig} from "../page-templates";



export  default class HomeScreen extends Component {

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

renderPageDescription(content, index){
  return(
        <div style={styles.appContent} key={index}>
             {content}
        </div>
  );
}

render() {



    return (

      <PageWithHeader image={images.globalInputApp}
          advert={applicationPathConfig.home.advert}
          select={applicationPathConfig.home.menu}>


         <div style={styles.content}>
              <BookMark bookmark="contentTransfer"/>

              <div style={styles.itemSection}>
                    <DisplayTextImage title={applicationPathConfig.contentTransfer.title}
                       content={applicationPathConfig.contentTransfer.content} image={images.contentTransfer}
                       buttonLabel={applicationPathConfig.contentTransfer.startButton} buttonLink={applicationPathConfig.contentTransfer.menu.link}/>
              </div>
              <BookMark bookmark="qrPrinting"/>

              <div style={styles.itemSection}>
                    <DisplayTextImage title={applicationPathConfig.qrPrinting.title} reverse={true}
                       content={applicationPathConfig.qrPrinting.content} image={images.encryptedQRCode}
                       buttonLabel={applicationPathConfig.qrPrinting.startButton} buttonLink={applicationPathConfig.qrPrinting.menu.link}/>
              </div>
              <BookMark bookmark="formDataTransfer"/>
              <div style={styles.itemSection}>
                    <DisplayTextImage title={applicationPathConfig.formData.title}
                       content={applicationPathConfig.formData.content} image={images.transferForm}
                       buttonLabel={applicationPathConfig.formData.startButton} buttonLink={applicationPathConfig.formData.menu.link}/>
              </div>
              <BookMark bookmark="chromeExtension"/>

              <div style={styles.itemSection}>
                    <DisplayTextImage title={blockTextConfig.chrome.title} reverse={true}
                       content={blockTextConfig.chrome.content} image={images.chromeExtension}
                       buttonLabel={blockTextConfig.chrome.startButton}
                       buttonHRef={blockTextConfig.chrome.install.link}/>
              </div>



          </div>


          <ContactUsButton/>

      </PageWithHeader>
            );
  }
}



/*
<div id="mainContent" className="noprint">
       <UniversalApp/>
       <AutomaticIdentification/>
       <AutomateProcess/>

</div>
*/
