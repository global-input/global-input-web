import React, {Component} from 'react'








import {images} from "../configs";



import {styles} from "./styles";




import {DisplayTextImage,DisplayStaticContent,DisplaySectionTitle} from "../components";





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

      <PageWithHeader  advert={blockTextConfig.about.globalInputApp.advert}  selected={blockTextConfig.about.globalInputApp.menu}
        appTitle={blockTextConfig.about.globalInputApp.appTitle} appSubtitle={blockTextConfig.about.globalInputApp.appSubtitle}
        install={applicationPathConfig.home.install}
        aboutText={blockTextConfig.about.globalInputApp.aboutText}>
         <div style={styles.content}>
               <div style={styles.itemSection}>
                     <DisplayTextImage title={blockTextConfig.about.globalInputApp.title}
                        content={blockTextConfig.about.globalInputApp.content} />
               </div>

               <div style={styles.bigSection}>
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



               </div>
         </div>

      </PageWithHeader>
            );
  }
}
