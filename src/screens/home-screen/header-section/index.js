import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {LinkItem} from '../../../components';
import TextButton from '../../../components/text-button';
import {styles} from "./styles";
import TopHeaderSection from "../../get-app-screen";
import GetAppScreen from '../../get-app-screen';
import LearnMoreScreen from '../../learn-more-screen';

var textContent={




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
     toGetGIAApp(){
       this.props.history.push(TopHeaderSection.pagePath, null);
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
                   <ul className="listmenu">
                      {headerTextContent.items.map(this.renderHeaderItems.bind(this))}
                  </ul>
                  </div>
                  <div style={styles.appSelection.get()}>
                      <div style={styles.appDescription.get()}>

                        <Link to={LearnMoreScreen.pagePath} style={LearnMoreScreen.menu.styles.menuItem.get()}>
                                {LearnMoreScreen.menu.linkText}
                        </Link>

                          <Link to={GetAppScreen.pagePath} style={GetAppScreen.menu.styles.menuItem.get()}>
                                  {GetAppScreen.menu.linkText}
                          </Link>



                      </div>




                  </div>
              </div>
          </div>
          );
  }
}
