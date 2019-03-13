import React from 'react';
import {Link} from 'react-router-dom'
import {styles,images} from './styles';
import TopHeaderSection from "../../top-header-section";
import {styleMatchingScreenSize} from "../../components/screen-media";
import screens,{pagelinks} from '../../screens';
const textContent={
    title:"Get GIA App Free",
    content:"Install this open-source mobile app for free on App Store or Play Store.",
    appStore:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",
    playStore:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",
    next:{
      title:"Next Step"
    }

}
export default class GetAppScreen extends React.Component{
  
  static menu={
        link:"/global-input-app/get-app",
        linkText:"Get GIA App Free",
        button:images.downloadapp,
        styles:{
              menuItem:  styles.menuItem
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
  render(){
      return(
        <div style={styles.content}>
            <TopHeaderSection/>
            <img src={images.rightposter} style={styles.rightImage.get()}/>

              <div style={styles.textContent}>
                <div style={styles.title.get()}>{textContent.title}</div>
                <div style={styles.smallp.get()}>{textContent.content}</div>
                <div style={styles.description.get()}>
                        <a href={textContent.appStore} target="_blank" style={styles.appStoreLink}>
                                <img src={images.appStore} style={styles.appStoreImage}/>
                            </a>
                        <a href={textContent.playStore} target="_blank" style={styles.appStoreLink}>
                              <img src={images.playStore} style={styles.appStoreImage}/>
                        </a>

                </div>
                <div style={styles.nextContainer}>

                  <div style={styles.subtitle.get()}>{textContent.next.title}</div>

                  <div style={styles.nextLinkContainer}>

                    {pagelinks.renderChromeStoreLink('Install Chrome Extension')}
                    {screens.buttons.learnMoreWhite('Learn More')}

                  </div>

                </div>

              </div>






        </div>
      )

  }

}
