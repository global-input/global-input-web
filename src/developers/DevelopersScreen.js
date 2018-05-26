import React, {Component} from 'react'
import {images} from "../configs";
import {styles} from "./styles";
import {DisplayTextImage} from "../components";
import {PageWithHeader,blockTextConfig} from "../page-templates";



export  default class DevelopersScreen extends Component {

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

      <PageWithHeader  advert={blockTextConfig.developers.home.advert}  selected={blockTextConfig.developers.home.menu}
        appTitle={blockTextConfig.developers.home.appTitle}
        appSubtitle={blockTextConfig.developers.home.appSubtitle}>
         <div style={styles.content}>
           <div style={styles.itemSection}>
                 <DisplayTextImage title={blockTextConfig.developers.example.title} reverse={true}
                    content={blockTextConfig.developers.example.content} image={images.websiteCode}
                    buttonLabel={blockTextConfig.developers.example.startButton}
                    buttonHRef={blockTextConfig.developers.example.install.link}/>
           </div>
           <div style={styles.itemSection}>
                 <DisplayTextImage title={blockTextConfig.developers.jslibrary.title}
                    content={blockTextConfig.developers.jslibrary.content} image={images.jslibrary}
                    buttonLabel={blockTextConfig.developers.jslibrary.startButton}
                    buttonHRef={blockTextConfig.developers.jslibrary.install.link}/>
           </div>

           <div style={styles.itemSection}>
                 <DisplayTextImage title={blockTextConfig.developers.proxy.title} reverse={true}
                    content={blockTextConfig.developers.proxy.content} image={images.proxyRepo}
                    buttonLabel={blockTextConfig.developers.proxy.startButton}
                    buttonHRef={blockTextConfig.developers.proxy.install.link}/>
           </div>
         </div>
      </PageWithHeader>
            );
  }
}
