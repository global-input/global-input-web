import React from 'react';
import {Link} from 'react-router-dom'

import {styles,images} from './styles';
import TopHeaderSection from "../../page-components/top-header-section";
import AutoPlayVideo from "../../components/auto-play-video";
import {exampleLinks} from '../examples';
import {styleMatchingScreenSize} from "../../components/screen-media";
const textContent={
    privacy:{
        title:"Privacy Policy",
        content:["Our privacy policy guarantees that we do not collect any user data or track user activities. It applies to this website and all of the Global Input App software components.",
        "All of the data stored in the mobile app are encrypted with encryption keys, which are, in turn, are encrypted with your master encryption key.  Your master encryption key is not stored anywhere, and it is coming from your app password that you have to supply each time when you start your app.",
        "Your personal data stays encrypted in your device and you can decrypt and push the required data to an application on-demand.",
        "The purpose of our privacy policy is to allow you to get back control of your personal data so that your data can only be decrypted and delivered to an application securely with your permission only."]
    }

}
export default class PrivacyPage extends React.Component{


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

  render(){
      return(
        <div style={styles.container}>
            <TopHeaderSection/>
            <div style={styles.content.get()}>
                  <div style={styles.title}>{textContent.privacy.title}</div>
                  {textContent.privacy.content.map(this.renderParagraph.bind(this))}
            </div>

        </div>
      )

  }

  renderParagraph(content,index){
      return(<div style={styles.paragraph} key={index}>
                    {content}
        </div>
      );
  }




}
