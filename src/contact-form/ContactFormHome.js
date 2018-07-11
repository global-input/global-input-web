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





import {PageWithHeader,blockTextConfig,applicationPathConfig} from "../page-templates";

import {ContactForm} from "../contact-form";

export  default class ContactFormHome extends Component {

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

      <PageWithHeader  scrollingText={blockTextConfig.about.contact.scrollingText}  selected={blockTextConfig.about.contact.menu}
         appSubtitle={blockTextConfig.about.contact.appSubtitle}
        install={applicationPathConfig.home.install}
        aboutText={applicationPathConfig.home.aboutText}>
         <div style={styles.content}>

               <div style={styles.itemSection}>

                  <div className="row top-margin-md">
                        <div className="col-md-6">
                            <div style={styles.addressContainer}>
                                <div style={styles.sectionHeading}>{blockTextConfig.about.contact.title}</div>
                                <img src={images.contactUs} className="img-responsive"/>
                                <div style={styles.fieldTitle}>{blockTextConfig.about.contact.pageContent.address.title}</div>
                                <DisplayStaticContent
                                   content={blockTextConfig.about.contact.pageContent.address.content} lineStyle={styles.linaddress}/>

                                 <div style={styles.fieldTitle}>{blockTextConfig.about.contact.pageContent.phone.title}</div>
                                <DisplayStaticContent
                                   content={blockTextConfig.about.contact.pageContent.phone.content} lineStyle={styles.linaddress}/>

                                 <div style={styles.fieldTitle}>{blockTextConfig.about.contact.pageContent.email.title}</div>
                                   <DisplayStaticContent
                                      content={blockTextConfig.about.contact.pageContent.email} lineStyle={styles.linaddress}/>


                            </div>

                        </div>
                        <div className="col-md-6">
                            <div style={styles.contactFormContainer}>
                                <BookMark bookmark="contactForm"/>
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
