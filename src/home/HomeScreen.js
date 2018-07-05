import React, {Component} from 'react'









import {images} from "../configs";

import {DisplayTextImage,BookMark,DisplayStaticContent} from "../components";

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
                if (decodeURIComponent(pair[0]) === variable) {
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
          install={applicationPathConfig.home.install}
          aboutText={applicationPathConfig.home.aboutText}
          advert={applicationPathConfig.home.advert}
          selected={applicationPathConfig.home.menu}>
          <div style={styles.content}>
                <div style={styles.itemSection}>
                  <DisplayTextImage title={applicationPathConfig.home.platform.title}
                     content={applicationPathConfig.home.platform.content}/>                   
                </div>


          <BookMark bookmark={applicationPathConfig.videoPlayer.menu.bookmark}/>
          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.videoPlayer.title}
                   content={applicationPathConfig.videoPlayer.content} image={images.videoPlayerAdvert}
                   mobileImage={images.mobile.videoPlayerAdvert}


                   buttonLabel={applicationPathConfig.videoPlayer.startButton}
                  buttonLink={applicationPathConfig.videoPlayer.menu.link}/>
          </div>


          <BookMark bookmark={applicationPathConfig.gameExample.menu.bookmark}/>
          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.gameExample.title}  reverse={true}
                   content={applicationPathConfig.gameExample.content} image={images.gameAdvert}
                   mobileImage={images.mobile.gameAdvert}
                   buttonLabel={applicationPathConfig.gameExample.startButton}
                  buttonLink={applicationPathConfig.gameExample.menu.link}/>
          </div>

          <BookMark bookmark={applicationPathConfig.formData.menu.bookmark}/>
          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.formData.title}
                   content={applicationPathConfig.formData.content} image={images.transferForm}
                   mobileImage={images.mobile.transferForm}
                   buttonLabel={applicationPathConfig.formData.startButton} buttonLink={applicationPathConfig.formData.menu.link}/>
          </div>


          <BookMark bookmark={applicationPathConfig.sendMessage.menu.bookmark}/>
          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.sendMessage.title} reverse={true}
                   content={applicationPathConfig.sendMessage.content} image={images.automateForm}
                   mobileImage={images.mobile.automateForm}
                   buttonLabel={applicationPathConfig.sendMessage.startButton} buttonLink={applicationPathConfig.sendMessage.menu.link}/>
          </div>





              <BookMark bookmark={applicationPathConfig.contentTransfer.menu.bookmark}/>

              <div style={styles.itemSection}>
                    <DisplayTextImage title={applicationPathConfig.contentTransfer.title}
                       content={applicationPathConfig.contentTransfer.content} image={images.contentTransfer}
                       mobileImage={images.mobile.contentTransfer}
                       buttonLabel={applicationPathConfig.contentTransfer.startButton} buttonLink={applicationPathConfig.contentTransfer.menu.link}/>
              </div>


              <BookMark bookmark={applicationPathConfig.qrPrinting.menu.bookmark}/>

              <div style={styles.itemSection}>
                    <DisplayTextImage title={applicationPathConfig.qrPrinting.title} reverse={true}
                       content={applicationPathConfig.qrPrinting.content} image={images.encryptedQRCode}
                       mobileImage={images.mobile.encryptedQRCode}
                       buttonLabel={applicationPathConfig.qrPrinting.startButton} buttonLink={applicationPathConfig.qrPrinting.menu.link}/>
              </div>

              <BookMark bookmark={applicationPathConfig.chrome.menu.bookmark}/>

              <div style={styles.itemSection}>
                    <DisplayTextImage title={blockTextConfig.chrome.title}
                       content={blockTextConfig.chrome.content} image={images.chromeExtension}
                       mobileImage={images.mobile.chromeExtension}
                       buttonLabel={blockTextConfig.chrome.startButton}
                       buttonHRef={blockTextConfig.chrome.install.link}/>
              </div>








          </div>




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
