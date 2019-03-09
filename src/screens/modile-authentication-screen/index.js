import React from 'react';
import {Link} from 'react-router-dom'

import {styles,images} from './styles';
import TopHeaderSection from "../../top-header-section";
import AutoPlayVideo from "../../components/auto-play-video";
import {LinkItem} from '../../components';
import examples from '../examples';
import {styleMatchingScreenSize} from "../../utils/screenMedia";
const textContent={
    title:"Mobile Inoput & Control",
    chromeExtension:{
      url:"https://chrome.google.com/webstore/detail/global-input-app/hcklienddlealndjnakkagefaelhnjkp",
      linkText:"Install Chrome Extension"
    },
    demo:{
      url:"https://www.youtube.com/watch?v=jLIIrlEoQXM",
      linkText:"Watch demo video"
    },
    whitepaper:{
      url:"https://www.linkedin.com/pulse/security-strategy-business-applications-dilshat-hewzulla/",
      linkText:"Read Whitepaper"
    },
    wordpress:{
      url:"https://en-gb.wordpress.org/plugins/wp-globalinput-login/",
      linkText:"WordPress Plugin"
    },
    authenticationAndBeyond:{
        title:"Mobile Authentication & Beyond",
        content:{
                  first:["Global Input App provides applications with a straightforward solution for introducing mobile authentication without adding any extra server-side logic. The existing username and password based authentication can be extended to have mobile authentication just by including an extension library on the client-side, paving the way to a smooth transition to a more sophisticated authentication strategy later on, for example the Key Pair authentication (WebAuthn, SQRL etc.)",
                          "Global Input App provides applications with a mechanism that allows users to securely push confidential data from mobile to the applications. The mobile integration can go beyond than the authentication to have mobile input and mobile control working like a full mobile app without the need to develop the actual mobile app. This can be achieved by adding the mobile business logic on the client-side application.",
                          'For example if you would like to present mobile user with a form that is comprised of "Username", "Password" and "Login" button and received events when users interacts with the form, you just need to provide the following JSON data:'],
                  second:["And upon successful authentication, you can use the same session to provide different JSON data to allow users to use mobile continually to operate on your application. If you are interested, you can have a look at the following the form transfer example in action, and check out its source codes on the github:"]
               }


    },



}

export default class MobileControlScreen extends React.Component{
  static pagePath="/global-input-app/mobile-authentication"
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

            <div style={styles.textContent}>
              <div style={styles.title.get()}>{textContent.title}</div>

              <div style={styles.itemsContainer}>


                    <LinkItem
                      href={textContent.chromeExtension.url}
                      image={images.extensionIcon}
                      textStyle={styles.linkText}>
                          {textContent.chromeExtension.linkText}
                    </LinkItem>



                    <LinkItem href={textContent.demo.url}
                      textStyle={styles.linkText}
                      image={images.watchVideo}>
                          {textContent.demo.linkText}
                    </LinkItem>

                    <LinkItem href={textContent.whitepaper.url}
                      image={images.whitePaperIcon}  textStyle={styles.linkText}>
                          {textContent.whitepaper.linkText}
                    </LinkItem>

                    <LinkItem href={textContent.wordpress.url}
                      image={images.wordpress}  textStyle={styles.linkText}>
                          {textContent.wordpress.linkText}
                    </LinkItem>

              </div>
            </div>
            <div style={styles.cardContainer.get()}>
                {this.renderMobileAuthentication()}
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
  renderMobileAuthentication(){
    return(

          <div style={styles.card.get()}>
              <div style={styles.card.title}>
                  {textContent.authenticationAndBeyond.title}
              </div>
              <div style={styles.card.content}>
                  {textContent.authenticationAndBeyond.content.first.map(this.renderParagraph.bind(this))}
              </div>
                  <pre style={styles.code}>
                      {`
                         fields:[{
                              label:"Username",
                              operations:{onInput:username=>this.setUsername(username)}
                          },{
                              label:"Password",
                              operations:{onInput:password=>this.setPassword(password)}
                          },{
                              label:"Login",
                              operations:{onInput:()=>this.login()}
                          }]

                      `}
                  </pre>
                  <div style={styles.card.content}>
                      {textContent.authenticationAndBeyond.content.second.map(this.renderParagraph.bind(this))}

                  </div>


                      <div styles={styles.card.exampleContainer}>
                        {examples.renderTransferFormDataExampleLink()}                        
                      </div>
                  </div>

    );
  }



}
