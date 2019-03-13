import React from 'react';
import {Link} from 'react-router-dom'

import {styles,images} from './styles';
import TopHeaderSection from "../../top-header-section";
import AutoPlayVideo from "../../components/auto-play-video";
import examples from '../examples';
import {styleMatchingScreenSize} from "../../components/screen-media";
const textContent={
    title:"Media Second Screen Solution",
    videos:{
        shortNoVoice:"https://media.iterativesolution.co.uk/video/glbal_input_media_player.mp4",
    },
    subtitle:"A Unified & Simple Solution for",
    items:["Mobile Input & Mobile Control",
                 "Second Screen Experience",
                 "Mobile Authentication",
                 "Data Encryption"],
    howItWorks:{
        title:"How It Works",
        content:{
                  first:["The Global Input App implements a device-to-device communication, which is secured with the end-to-end encryption. On top of this secure communication mechanism, it provides Smart TV applications with the ability to specify second screen user interface elements without the need for separate server-side or mobile-side business logic.",
                "A media application can be extended by including a software library, which uses an encrypted QR code to communicate one-time-use encryption key along with other communication channel parameters to the Global Input App for establishing the secure device-to-device communication.",
                "The media application provides JSON data to the Global Input App for presenting the user with second screen UI (user interface) elements, and callback functions for receiving moble events, allowing the application to implement second screen business logic.",
              "One of the most distinct innovative features of this solution is that it provides Smart TV applications with a unified and simple framework for enabling applications to interact with users at any point, covering functionalities that are not limited to the second screen experiences. The extra functionality covers subscriptions, signing in, searching, browsing media programmes, controlling media players etc that are difficult to achieve using the TV remote control and the users can carry out these operations without looking at the big screen as though they are operating an indepedent mobile app.","Global Input App provides applications with a client-side-only solution that does not require any extra server-side implementation, no extra API to implement or call, not extra cloud storage, not extra subscriptions, and all business logics are implemented on the client side by including a extension library, passing JSON data and receiving even calls when the user press the button on the mobile.",
             "For example, if you would like to to display a button button on user's mobile after user scans the encrypted QR code presented by your application, and you would like to call a playMovie() function when the user presses the button, you just need to provide the following:"]
               }


    }
}

export default class MediaSecondScreen extends React.Component{
  
  static menu={
        link:"/global-input-app/learn-more",
        linkText:"Learn More",
        styles:{
                menuItem:{
                  get:styleMatchingScreenSize,
                  default:{
                    float: "left",
                    display: "block",
                    textAlign: "center",
                    textDecoration: "none",
                    fontSize: 15,
                    borderRadius:25,
                    color: "#4281BD",
                    backgroundColor:"white",
                    whiteSpace:"nowrap",
                    fontWeight:300,
                    padding:10,
                    maxHeight:40,
                    marginLeft:20
                  },

                  selected:{
                      color:"#002080",
                      fontWeight:500
                  },
                  hover:{
                      color:"#66ccff",
                      fontWeight:300
                  }

                }
          }
   }
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
              <div style={styles.subtitle.get()}>{textContent.subtitle}</div>
              <div style={styles.description.get()}>
                  <ul>
                      {textContent.items.map(this.renderItems.bind(this))}
                  </ul>


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
                  <pre style={styles.code}>
                      {`
type:  "button",
label: "Play",
onInput:value => playMovie()
                      `}
                  </pre>




                  <div styles={styles.card.exampleContainer}>
                    {examples.renderMediaPlayerExampleLink("Player Control Example")}
                  </div>


          </div>

    );
  }

}
