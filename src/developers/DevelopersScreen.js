import React, {Component} from 'react'
import {pagelinks} from "../configs";
import {genericUtil} from "../util";
import {styles} from "./styles";
import {DisplayTextImage,BookMark,DisplayStaticContent,TextViewPad} from "../components";
import {PageWithHeader,blockTextConfig,applicationPathConfig} from "../page-templates";

import DisplaySampleCode1 from "./DisplaySampleCode1";
import DisplaySampleCode2 from "./DisplaySampleCode2";
import DisplaySampleCode3 from "./DisplaySampleCode3";
import DisplaySampleCode4 from "./DisplaySampleCode4";

export  default class DevelopersScreen extends Component {

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


render() {



    return (

      <PageWithHeader  scrollingText={blockTextConfig.developers.home.scrollingText}  selected={blockTextConfig.developers.home.menu}
        install={applicationPathConfig.home.install}
        aboutText={applicationPathConfig.home.aboutText}
        appSubtitle={blockTextConfig.developers.home.appSubtitle}>
        <BookMark bookmark={pagelinks.platform.bookmark}/>
         <div style={styles.content}>

           <TextViewPad bookmark={pagelinks.app.reasons.bookmark} title={blockTextConfig.about.globalInputApp.whyneeded.title}>
             <div style={styles.itemSection}>
               <DisplayTextImage title={blockTextConfig.about.globalInputApp.whyneeded.ownYourData.title}
                  content={blockTextConfig.about.globalInputApp.whyneeded.ownYourData.content} />
             </div>
             <div style={styles.itemSection}>
               <DisplayTextImage title={blockTextConfig.about.globalInputApp.whyneeded.signInDevice.title}
                  content={blockTextConfig.about.globalInputApp.whyneeded.signInDevice.content} />
             </div>
             <div style={styles.itemSection}>
               <DisplayTextImage title={blockTextConfig.about.globalInputApp.whyneeded.creatingAccounts.title}
                  content={blockTextConfig.about.globalInputApp.whyneeded.creatingAccounts.content} />
             </div>

             <div style={styles.itemSection}>
               <DisplayTextImage title={blockTextConfig.about.globalInputApp.whyneeded.sharingAccounts.title}
                  content={blockTextConfig.about.globalInputApp.whyneeded.sharingAccounts.content} />
             </div>

             <div style={styles.itemSection}>
               <DisplayTextImage title={blockTextConfig.about.globalInputApp.whyneeded.offlineSharing.title}
                  content={blockTextConfig.about.globalInputApp.whyneeded.offlineSharing.content} />
             </div>

             <div style={styles.itemSection}>
               <DisplayTextImage title={blockTextConfig.about.globalInputApp.whyneeded.contentTransfer.title}
                  content={blockTextConfig.about.globalInputApp.whyneeded.contentTransfer.content} />
             </div>

             <div style={styles.itemSection}>
               <DisplayTextImage title={blockTextConfig.about.globalInputApp.whyneeded.formAutomation.title}
                  content={blockTextConfig.about.globalInputApp.whyneeded.formAutomation.content} />
             </div>

             <div style={styles.itemSection}>
               <DisplayTextImage title={blockTextConfig.about.globalInputApp.whyneeded.gameControl.title}
                  content={blockTextConfig.about.globalInputApp.whyneeded.gameControl.content} />
             </div>


             <div style={styles.itemSection}>
               <DisplayTextImage title={blockTextConfig.about.globalInputApp.whyneeded.mediaPlayerControl.title}
                  content={blockTextConfig.about.globalInputApp.whyneeded.mediaPlayerControl.content} />
             </div>

           </TextViewPad>

           <BookMark bookmark={pagelinks.platform.platform.bookmark}/>
           <div style={styles.itemSection}>

                 <DisplayTextImage title={blockTextConfig.developers.home.platform.title}
                    content={blockTextConfig.developers.home.platform.content}/>
           </div>

           <BookMark bookmark={blockTextConfig.developers.jslibrary.menu.bookmark}/>
           <div style={styles.itemSection}>

                 <DisplayTextImage title={blockTextConfig.developers.jslibrary.title}>
                    <DisplayStaticContent content={blockTextConfig.developers.jslibrary.content}
                      sampleCode1={<DisplaySampleCode1/>}  sampleCode2={<DisplaySampleCode2/>}
                      sampleCode3={<DisplaySampleCode3/>}
                      sampleCode4={<DisplaySampleCode4/>}/>


                </DisplayTextImage>



           </div>

           <div style={styles.itemSection}>
                <BookMark bookmark={blockTextConfig.developers.websocketServer.menu.bookmark}/>
                 <DisplayTextImage title={blockTextConfig.developers.websocketServer.title} reverse={true}
                    content={blockTextConfig.developers.websocketServer.content}/>
           </div>


           <BookMark bookmark={blockTextConfig.developers.home.howItWorks.bookmark}/>
           <div style={styles.itemSection}>

                 <DisplayTextImage title={blockTextConfig.developers.home.howItWorks.title}
                    content={blockTextConfig.developers.home.howItWorks.content}/>
           </div>


         </div>
      </PageWithHeader>
            );
  }
}
