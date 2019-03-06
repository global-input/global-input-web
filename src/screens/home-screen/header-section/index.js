import React, {Component} from 'react'
import {LinkItem} from '../../../components';
import {styles} from "./styles";



var textContent={

    introduction:{
      demo:{
        linkText:"Intro Video",
        url:"https://www.youtube.com/watch?v=HzeTY1TA4V8"
      },
    },


};
const headerTextContent={
    title:"Global Input App",
    subtitle:"A Unified & Simple Solution",
    items:[
            "Mobile Input & Control",
           "Mobile Authentication",
           "Data Encryption",
           "Secure Content Transfer"
         ],
    app:{
      content:"Provided by the Global Input App, which is a free and open-source mobile app with extensions.",
      appStore:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",
      playStore:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",
    }
}


var images={
  header:require('./Group-52.png'),
  appStore:require('./app-store.png'),
  playStore:require('./play-store.png'),
  watchVideo:require('./watch-video-icon.png'),
}


export  default class HeaderSection extends Component {

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
    renderHeaderItems(item,index){
        return(
          <li key={index}>
            {item}
          </li>
        );

    }
render() {

    return (
          <div style={styles.headerContainer}>
              <img src={images.header} style={styles.rightImage.get()}/>
              <div style={styles.headerSection.get()}>
                    <div style={styles.title.get()}>{headerTextContent.title}</div>
                    <div style={styles.subtitle.get()}>{headerTextContent.subtitle}</div>
                  <div style={styles.listContent.get()}>
                   <ul>
                      {headerTextContent.items.map(this.renderHeaderItems.bind(this))}
                  </ul>
                  </div>
                  <div style={styles.appSelection.get()}>
                      <div style={styles.appDescription.get()}>

                          <LinkItem href={textContent.introduction.demo.url}
                            image={images.watchVideo} textStyle={styles.watchVideoText}>
                                {textContent.introduction.demo.linkText}
                          </LinkItem>
                      </div>
                      <div style={styles.appDownload}>
                          <img src={images.appStore} style={styles.appStoreImage}/>

                          <img src={images.playStore} style={styles.appStoreImage}/>
                      </div>



                  </div>
              </div>
          </div>
          );
  }
}
