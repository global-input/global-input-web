import React, {Component} from 'react'








import {images,pagelinks} from "../configs";



import {styles} from "./styles";




import {DisplayTextImage,DisplayStaticContent,DisplaySectionTitle,BookMark} from "../components";





import {PageWithHeader,blockTextConfig,applicationPathConfig} from "../page-templates";

import {ContactForm} from "../contact-form";

export  default class AboutScreen extends Component {

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

render() {



    return (

      <PageWithHeader  scrollingText={blockTextConfig.about.globalInputApp.scrollingText}  selected={blockTextConfig.about.globalInputApp.menu}
        appTitle={blockTextConfig.about.globalInputApp.appTitle} appSubtitle={blockTextConfig.about.globalInputApp.appSubtitle}
        install={applicationPathConfig.home.install}>
         <div style={styles.content}>
               <div style={styles.itemSection}>
                     <DisplayTextImage title={blockTextConfig.about.globalInputApp.title}
                        content={blockTextConfig.about.globalInputApp.content} />
                      <DisplayStaticContent content={applicationPathConfig.home.install} linkStyle={styles.imageLink}/>
               </div>

               <div style={styles.bigSection}>
                    <BookMark bookmark={pagelinks.app.reasons.bookmark}/>
                    <DisplaySectionTitle title={blockTextConfig.about.globalInputApp.whyneeded.title}/>
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


               </div>
         </div>

      </PageWithHeader>
            );
  }
}
