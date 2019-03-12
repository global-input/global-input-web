import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {LinkItem} from '../../../components';
import TextButton from '../../../components/text-button';
import {styles, images} from "./styles";
import TopHeaderSection from "../../get-app-screen";
import GetAppScreen from '../../get-app-screen';
import LearnMoreScreen from '../../learn-more-screen';
import {screenMedia} from "../../../components/screen-media";
import screens from "../../../screens";

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
renderPosterImage(){
  var postImage=images.rightPoster;
  if(!screenMedia.biggerThan(800)){
      return null;
  }
  else if(!screenMedia.biggerThan(680)){
    postImage=images.rightPoster200;
  }
  else if(!screenMedia.biggerThan(1258)){
    postImage=images.rightPoster400;
  }

  else{
      postImage=images.rightPoster;
  }
  return(<img src={postImage} style={styles.rightImage.get()}/>);


}

renderHeaderListItems(){
  if(screenMedia.biggerThan(800)){
    return(
      <div style={styles.listContent.get()}>
          <ul className="listmenu" style={styles.itemRow.onerow.get()}>
            {headerTextContent.items.map(this.renderHeaderItems.bind(this))}
          </ul>
      </div>
    );
  }
  else{
    return(
      <div style={styles.listContent.get()}>
        <ul className="listmenu" style={styles.itemRow.tworows}>
          <li>
            {headerTextContent.items[0]}
          </li>
          <li>
            {headerTextContent.items[1]}
          </li>
        </ul>

    <ul className="listmenu" style={styles.itemRow.tworows}>
      <li>
        {headerTextContent.items[2]}
      </li>
      <li>
        {headerTextContent.items[3]}
      </li>
    </ul>
    </div>
  );

  }


}

render() {






    return (
          <div style={styles.headerContainer}>
              {this.renderPosterImage()}
              <div style={styles.headerSection.get()}>
                    <div style={styles.title.get()}>{headerTextContent.title}</div>
                    <div style={styles.subtitle.get()}>{headerTextContent.subtitle}</div>

                       {this.renderHeaderListItems()}


                        <div style={styles.buttonsContainer.get()}>

                        {screens.buttons.learnMoreWhite('Read More')}
                        {screens.buttons.getAppScreen('Get GIA App Free')}
                        </div>

              </div>

          </div>
          );
  }
}
