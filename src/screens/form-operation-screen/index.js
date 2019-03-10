import React from 'react';
import {Link} from 'react-router-dom'

import {styles,images} from './styles';
import TopHeaderSection from "../../top-header-section";
import AutoPlayVideo from "../../components/auto-play-video";
import examples from '../examples';
import {styleMatchingScreenSize} from "../../utils/screenMedia";
const textContent={
    title:"Form Automation",
    videos:{
        shortNoVoice:"https://media.iterativesolution.co.uk/video/globbal_input_send_message.mp4",
    },
    howItWorks:{
        title:"Portable Encrypted Storage",
        content:{
                first:["The Global Input App provides applications with a option of not storing user data in their databases, allowing users to store and managing their personal data on their own devices. Applications can request data on-demand from the user, and the user can inspect and push the required data to the application.",
                "The data in the mobile app is encrypted with encryption keys that are, in turn, encrypted with the master encryption composed from the user app password. The data stays safe in the users’ own mobile device and decrypted only when it is needed. This gives the users complete control over their data.",
                "Global Input App also provides portable encryption keys management, allowing applications to store encrypteed data in their databases allowing user to store the master encryption in their mobile devices.",
                "In the the following example, the application first displays a company contact information on user's device and ask the users to save it if they have not done so already. Then, it continues to display the a form to allow user to send a message. Since the personal information is not stored in the applications, the user can reuse the data already stored in the encrypted storage."]
               }


    }
}

export default class FormOperationScreen extends React.Component{
  static pagePath="/global-input-app/form-operation"

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
   renderVideo(){
     return(<AutoPlayVideo video={textContent.videos.shortNoVoice} muted={true}/>);
     //return null;
   }
  render(){
      return(

        <div style={styles.content}>
            <TopHeaderSection/>

            <div style={styles.tv.container.get()}>
                  <div styles={styles.tv.inner}>
                      <img src={images.computer} style={styles.tv.img}/>
                    <div style={styles.tv.screen}>
                      {this.renderVideo()}
                    </div>
                  </div>
            </div>

            <div style={styles.textContent}>
              <div style={styles.title.get()}>{textContent.title}</div>

              <div style={styles.description.get()}>



              </div>
            </div>
            <div style={styles.cardContainer.get()}>
                {this.renderHowItWorks()}
          </div>
        </div>
      )

  }
  renderItems(content, index){
      return(<li key={index} className="titleList">{content}</li>);
  }

  renderParagraph(content,index){
      return(<div style={styles.card.paragraph} key={index}>
              {content}
        </div>
      );
  }
  renderHowItWorks(){
    return(

          <div style={styles.card.get()}>
              <div style={styles.card.title}>
                  {textContent.howItWorks.title}
              </div>
              <div style={styles.card.content}>
                  {textContent.howItWorks.content.first.map(this.renderParagraph.bind(this))}
              </div>
              <div styles={styles.card.exampleContainer}>
                    {examples.renderSendMessageScreen("Send Message Example")}
              </div>


          </div>

    );
  }

}
