import React, {Component} from 'react'
import {config,images,pagelinks} from "../configs";
import {genericUtil} from "../util";


import {DisplayTextImage,BookMark,DisplayStaticContent,DisplayVideo} from "../components";

import {styles} from "./styles";

import {PageWithHeader,blockTextConfig,applicationPathConfig} from "../page-templates";




export  default class HomeScreen extends Component {

    constructor(props){
      super(props);
      this.onWindowResize=this.onWindowResize.bind(this);
    }
     componentDidMount() {
         window.addEventListener("resize", this.onWindowResize);

         genericUtil.processQueryParameters(this.props);
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

      <PageWithHeader
          install={applicationPathConfig.home.install}
          scrollingText={applicationPathConfig.home.scrollingText}
          selected={applicationPathConfig.home.menu}>
          <div style={styles.content}>

                <div style={styles.itemSection}>


                  <DisplayVideo video={config.videos.globalInputHome()}
                      autoPlay={true}
                      defaultImage={images.globalInputHome}/>


                    <BookMark bookmark={pagelinks.app.bookmark}/>
                  <DisplayTextImage
                     content={applicationPathConfig.home.globalInputApp.content}/>
                   <div style={styles.installSection}>
                      <DisplayStaticContent content={applicationPathConfig.home.install} linkStyle={styles.imageLink}/>
                   </div>

                   <DisplayStaticContent content={applicationPathConfig.home.help.content}/>
                </div>



          <BookMark bookmark={applicationPathConfig.videoPlayer.menu.bookmark}/>
          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.videoPlayer.title}
                   content={applicationPathConfig.videoPlayer.content} image={images.videoPlayerScrollingText}
                   mobileImage={images.mobile.videoPlayerScrollingText}
                   video={config.videos.videoPlayer()}


                   buttonLabel={applicationPathConfig.videoPlayer.startButton}
                  buttonLink={applicationPathConfig.videoPlayer.menu.link}/>
          </div>


          <BookMark bookmark={applicationPathConfig.gameExample.menu.bookmark}/>
          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.gameExample.title}  reverse={true}
                   content={applicationPathConfig.gameExample.content} image={images.gameScrollingText}
                   video={config.videos.game()}
                   mobileImage={images.mobile.gameScrollingText}
                   buttonLabel={applicationPathConfig.gameExample.startButton}
                  buttonLink={applicationPathConfig.gameExample.menu.link}/>
          </div>

          <BookMark bookmark={applicationPathConfig.sendMessage.menu.bookmark}/>
          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.sendMessage.title}
                   content={applicationPathConfig.sendMessage.content} image={images.automateForm}
                   video={config.videos.sendMessage()}
                   mobileImage={images.mobile.automateForm}
                   buttonLabel={applicationPathConfig.sendMessage.startButton} buttonLink={applicationPathConfig.sendMessage.menu.link}/>
          </div>

          <BookMark bookmark={applicationPathConfig.formData.menu.bookmark}/>
          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.formData.title} reverse={true}
                   content={applicationPathConfig.formData.content} image={images.transferForm}
                   video={config.videos.formTransfer()}
                   mobileImage={images.mobile.transferForm}
                   buttonLabel={applicationPathConfig.formData.startButton} buttonLink={applicationPathConfig.formData.menu.link}/>
          </div>

          <BookMark bookmark={applicationPathConfig.chrome.menu.bookmark}/>

          <div style={styles.itemSection}>
                <DisplayTextImage title={blockTextConfig.chrome.title}
                   content={blockTextConfig.chrome.content} image={images.chromeExtension}
                   mobileImage={images.mobile.chromeExtension}
                   video={config.videos.signin()}/>
          </div>



          <BookMark bookmark={applicationPathConfig.contentTransfer.menu.bookmark}/>

          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.contentTransfer.title}
                video={config.videos.copyAndPaste()}
 reverse={true}
                   content={applicationPathConfig.contentTransfer.content} image={images.contentTransfer}
                   mobileImage={images.mobile.contentTransfer}
                   buttonLabel={applicationPathConfig.contentTransfer.startButton} buttonLink={applicationPathConfig.contentTransfer.menu.link}/>
          </div>



              <BookMark bookmark={applicationPathConfig.qrPrinting.menu.bookmark}/>

              <div style={styles.itemSection}>
                    <DisplayTextImage title={applicationPathConfig.qrPrinting.title}
                       content={applicationPathConfig.qrPrinting.content} image={images.encryptedQRCode}
                       video={config.videos.qrPrinting()}
                       mobileImage={images.mobile.encryptedQRCode}

                       buttonLabel={applicationPathConfig.qrPrinting.startButton} buttonLink={applicationPathConfig.qrPrinting.menu.link}/>

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
