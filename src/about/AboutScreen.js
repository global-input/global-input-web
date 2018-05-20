import React, {Component} from 'react'







import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'


import {images} from "../configs";



import {styles} from "./styles";




import {DisplayTextImage,DisplayStaticContent,BookMark} from "../components";





import {PageWithHeader,blockTextConfig} from "../page-templates";

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
onContactFormConnected(){
    var elmnt = document.getElementById("contactForm");
    elmnt.scrollIntoView()
}

render() {



    return (

      <PageWithHeader  advert={blockTextConfig.about.home.advert}  selected={blockTextConfig.about.home.menu}
        appTitle={blockTextConfig.about.home.appTitle}>
         <div style={styles.content}>
               <div style={styles.itemSection}>
                     <DisplayTextImage title={blockTextConfig.about.globalInputApp.title} reverse={true}
                        content={blockTextConfig.about.globalInputApp.content} image={images.aboutGlobalInputApp}/>
               </div>
               <div style={styles.itemSection}>
                     <DisplayTextImage title={blockTextConfig.about.us.title}
                        content={blockTextConfig.about.us.content} image={images.aboutUsInputApp}
                        buttonLabel={blockTextConfig.about.us.visitButton}
                        buttonHRef={blockTextConfig.about.us.visitLink}/>
               </div>
               <div style={styles.itemSection}>
                 <BookMark bookmark="contactForm"/>
                  <div className="row top-margin-md">
                        <div className="col-md-6">
                            <div style={styles.addressContainer}>
                                <div style={styles.sectionHeading}>{blockTextConfig.about.contact.title}</div>
                                <img src={images.contactUs} className="img-responsive"/>
                                <div style={styles.subtitle}>{blockTextConfig.about.contact.pageContent.address.title}</div>
                                <DisplayStaticContent
                                   content={blockTextConfig.about.contact.pageContent.address.content} lineStyle={styles.linaddress}/>

                                 <div style={styles.subtitle}>{blockTextConfig.about.contact.pageContent.phone.title}</div>
                                <DisplayStaticContent
                                   content={blockTextConfig.about.contact.pageContent.phone.content} lineStyle={styles.linaddress}/>

                                 <div style={styles.subtitle}>{blockTextConfig.about.contact.pageContent.phone.title}</div>
                                <DisplayStaticContent
                                   content={blockTextConfig.about.contact.pageContent.phone.content} lineStyle={styles.linaddress}/>



                            </div>

                        </div>
                        <div className="col-md-6">
                            <div style={styles.contactFormContainer}>
                                <ContactForm onConnected={this.onContactFormConnected.bind(this)}/>
                            </div>

                        </div>
                  </div>
               </div>
         </div>

      </PageWithHeader>
            );
  }
}
