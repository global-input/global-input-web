import React from 'react';
import {Link} from 'react-router-dom'

import {styles,images} from './styles';
import TopHeaderSection from "../../top-header-section";
import AutoPlayVideo from "../../components/auto-play-video";
import {LinkItem} from '../../components';
import examples from '../examples';
import {styleMatchingScreenSize} from "../../components/screen-media";
const textContent={
    title:"Mobile Input & Control",

    whitepaper:{
      url:"https://medium.com/@hewzulla/using-smartphones-to-operate-on-applications-running-on-computers-and-other-devices-e397668149f8",
      linkText:"Read Whitepaper"
    },
    mobileControl:{
        title:"Introducing Mobile Input & Control",
        content:{
                  first:["Global Input App introduces a unified and client-only solution for using mobile to do a wide variety of operations on applications running on other devices. It is extremely simple to introduce mobile input and control functionalities into the applications running on IoT, Smart TV and Self-service machines. The level of flexibility in the mobile user interface makes it possible for applications to provide features very close to the fully functional mobile app.  For example, if you have written an application on a small Rassbery device, and would like to use mobile to start and stop it your process. You can provide the following configuration code to the extension library:"],
                  second:["If you are interested, you can have a look at the following game control examples in action, and check out its source codes on the github:"]
               }


    },



}

export default class MobileControlScreen extends React.Component{
  static pagePath="/global-input-app/mobile-control"
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







                    <LinkItem href={textContent.whitepaper.url}
                      image={images.whitePaperIcon}  textStyle={styles.linkText}>
                          {textContent.whitepaper.linkText}
                    </LinkItem>



              </div>
            </div>
            <div style={styles.cardContainer.get()}>
                {this.renderMobileControl()}
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
  renderMobileControl(){
    return(

          <div style={styles.card.get()}>
              <div style={styles.card.title}>
                  {textContent.mobileControl.title}
              </div>
              <div style={styles.card.content}>
                  {textContent.mobileControl.content.first.map(this.renderParagraph.bind(this))}
              </div>
                  <pre style={styles.code}>
                      {`
                         fields:[{
                              label:"Start",
                              operations:{onInput:()=>this.start()}
                          },{
                            label:"Start",
                            operations:{onInput:()=>this.stop()}
                          }]
                      `}
                  </pre>
                  <div style={styles.card.content}>
                      {textContent.mobileControl.content.second.map(this.renderParagraph.bind(this))}

                  </div>


                      <div styles={styles.card.exampleContainer}>
                        {examples.renderGameControlExampleLink()}
                      </div>
                  </div>

    );
  }



}
