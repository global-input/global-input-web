import React, {Component} from 'react'


import {images} from "../configs";



import {styles} from "./styles";




import {DisplayTextImage} from "../components";





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

      <PageWithHeader  advert={blockTextConfig.about.privacy.advert}  selected={blockTextConfig.about.privacy.menu}
        appTitle={blockTextConfig.about.privacy.appTitle}

        install={applicationPathConfig.home.install}
        aboutText={applicationPathConfig.home.aboutText}

        appSubtitle={blockTextConfig.about.privacy.appSubtitle}>

         <div style={styles.content}>
           <div style={styles.itemSection}>
                 <DisplayTextImage title={blockTextConfig.about.privacy.title} reverse={true}
                    content={blockTextConfig.about.privacy.content} />
           </div>
         </div>
      </PageWithHeader>
            );
  }
}
