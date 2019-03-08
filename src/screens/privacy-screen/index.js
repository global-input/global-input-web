import React from 'react';
import {Link} from 'react-router-dom'

import {styles,images} from './styles';
import TopHeaderSection from "../../top-header-section";
import AutoPlayVideo from "../../components/auto-play-video";
import {exampleLinks} from '../examples';
import {styleMatchingScreenSize} from "../../utils/screenMedia";
const textContent={
    privacy:{
        title:"Privacy Policy",
        content:["Our privacy policy guarantees that we do not collect your data or track your activities. That applies to this website, and all the Global Input App software components including the mobile app, its Chrome Extensions, Wordpress Plugins and the Global Input App software libraries. All of your data are stored in your device encrypted with an encryption key that you can manage in your app and you will be always presented with an option whenever you need to decrypt and push any of the data to a target application. The core of our privacy policy is to allow you to get back control of your data so that your data can only be decrypted and accessed with your permission when an application needs it."]
    }

}
export default class PrivacyScreen extends React.Component{
  static pagePath="/global-input-app/privacy"

  constructor(props){
    super(props);
    this.onWindowResize=this.onWindowResize.bind(this);
  }
   componentDidMount() {
       window.addEventListener("resize", this.onWindowResize);

   }


   componentWillUnmount() {
       window.removeEventListener("resize", this.onWindowResize);
   }
   onWindowResize(){
      this.forceUpdate();
   }
   renderPrivacyPolicy(){
     return(

           <div style={styles.card.get()}>
               <div style={styles.card.title}>
                   {textContent.privacy.title}
               </div>
               <div style={styles.card.content}>
                   {textContent.privacy.content.map(this.renderParagraph.bind(this))}
               </div>
           </div>
     );
   }

  render(){
      return(
        <div style={styles.content}>
            <TopHeaderSection/>

          <div style={styles.cardContainer.get()}>
                {this.renderPrivacyPolicy()}
          </div>
        </div>
      )

  }

  renderParagraph(content,index){
      return(<div style={styles.card.paragraph} key={index}>
              {content}
        </div>
      );
  }




}
