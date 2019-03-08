import React from 'react';
import {Link} from 'react-router-dom'
import {styles,images} from './styles';
import TopHeaderSection from "../../top-header-section";
import {styleMatchingScreenSize} from "../../utils/screenMedia";
import LearnMoreScreen from '../learn-more-screen';
const textContent={
    title:"Get GIA App Free",
    content:"Install this open-source mobile app for free on App Store or Play Store.",
    appStore:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",
    playStore:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",
    chromeStore:"https://chrome.google.com/webstore/detail/global-input-app/hcklienddlealndjnakkagefaelhnjkp?hl=en",
    next:{
      title:"Next Step"
    }

}
export default class GetAppScreen extends React.Component{
  static pagePath="/global-input-app/get-app"
  static menu={
        link:"/global-input-app/get-app",
        linkText:"Get GIA App Free",
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
                    backgroundColor: "#4281BD",
                    color:"white",
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
                    <a href={textContent.chromeStore} target="_blank" style={LearnMoreScreen.menu.styles.menuItem.get()}>Install Chrome Extension</a>
                    <Link to={LearnMoreScreen.pagePath} style={LearnMoreScreen.menu.styles.menuItem.get()}>
                            {LearnMoreScreen.menu.linkText}
                    </Link>
                  </div>

                </div>

              </div>






        </div>
      )

  }

}
