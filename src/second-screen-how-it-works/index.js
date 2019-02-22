import React from 'react';
import TopHeaderSection from "../top-header-section";
import MediaPlayerScreen from "../media-player-screen";
import {styles,images} from "./styles";
import {applicationPathConfig} from "../page-templates";
import LinkItem from "../components/link-item";
const textContent={
    title:"Second Screen Experience Solution",
    subtitle:"How It Works",
    content:["The Global Input App implements a device-to-device communication, which is secured with the end-to-end encryption. On top of this secure communication mechanism, it provides Smart TV applications with the ability to specify second screen user interface elements without the need for separate server-side or mobile-side business logic.",
  "A media application can be extended by including a software library, which uses an encrypted QR code to communicate one-time-use encryption key along with other communication channel parameters to the Global Input App for establishing the secure device-to-device communication.",
  "The media application provides JSON data to the Global Input App for presenting the user with second screen UI (user interface) elements, and callback functions for receiving moble events, allowing the application to implement second screen business logic.",
"One of the most distinct innovative features of this solution is that it provides Smart TV applications with a unified and simple framework for enabling applications to interact with users at any point, covering functionalities that are not limited to the second screen experiences. The extra functionality covers subscriptions, signing in, searching, browsing media programmes, controlling media players etc that are difficult to achieve using the TV remote control and the users can carry out these operations without looking at the big screen as though they are operating an indepedent mobile app."],
demo:{
  linkText:"Player Control Example"
}
}
export default class SecondScreenHowItWorks extends React.Component{
  static pagePath="/global-input-app/second-screen-how-it-works"

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


      let paragrapgStyle=styles.description.get();
      return(

        <div style={styles.content}>
              <TopHeaderSection menus={applicationPathConfig.menus} selected={this.props.selected}/>
              <div style={styles.title.get()}>{textContent.title}</div>
              <div style={styles.itemSection}>
                      <div style={styles.subtitle.get()}>{textContent.subtitle}</div>
                        <div style={styles.textContainer}>
                          {textContent.content.map((p,index)=>this.renderParagraph(p,index,paragrapgStyle))}
                        </div>
                        <div style={styles.textFooter}>
                          <LinkItem to={MediaPlayerScreen.pagePath}
                            image={images.demo}
                            textStyle={styles.linkText}>
                                {textContent.demo.linkText}
                          </LinkItem>
                        </div>

              </div>

          </div>

      );



  }
  renderParagraph(paragraph,index,paragrapgStyle){
    return(
      <div style={paragrapgStyle} key={index}>
        {paragraph}
      </div>
    );
  }


}
