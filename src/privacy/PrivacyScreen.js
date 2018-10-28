import React, {Component} from 'react'


import {images,pagelinks} from "../configs";



import {styles} from "./styles";




import {DisplayTextImage,TextViewPad} from "../components";





import {PageWithHeader,blockTextConfig,applicationPathConfig} from "../page-templates";



export  default class PrivacyScreen extends Component {

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


render() {



    return (

      <PageWithHeader  scrollingText={blockTextConfig.about.privacy.scrollingText}  selected={blockTextConfig.about.privacy.menu}


        install={applicationPathConfig.home.install}
        aboutText={applicationPathConfig.home.aboutText}

        appSubtitle={blockTextConfig.about.privacy.appSubtitle}>

         <div style={styles.content}>

           <TextViewPad bookmark={pagelinks.privacy.bookmark} title={blockTextConfig.about.privacy.title}>
              <div style={styles.itemSection}>

               <DisplayTextImage title={blockTextConfig.about.privacy.encryption.title}
                  content={blockTextConfig.about.privacy.encryption.content} />
              </div>


              <div style={styles.itemSection}>

               <DisplayTextImage title={blockTextConfig.about.privacy.encryptionKeysHiearchy.title}
                  content={blockTextConfig.about.privacy.encryptionKeysHiearchy.content} />
              </div>

              <div style={styles.itemSection}>

               <DisplayTextImage title={blockTextConfig.about.privacy.authentication.title}
                  content={blockTextConfig.about.privacy.authentication.content} />
              </div>

          </TextViewPad>


         </div>
      </PageWithHeader>
            );
  }
}
