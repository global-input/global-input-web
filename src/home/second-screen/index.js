import React from "react";
import {styles} from "./styles";
import {LinkItem} from '../../components';
import {pagelinks} from "../../configs";
var textContent={
    title:"Second Screen Experience",
    description:"A simple and innovative solution to introduce the Second Screen Experience to the existing Smart TV applications.",
    demo:{
        linkText:"Player Control Example",
        to:pagelinks.samples.mediaPlayer.link
    },

    whitepaper:{
      url:"https://medium.com/@hewzulla/using-smartphones-to-operate-on-applications-running-on-computers-and-other-devices-e397668149f8",
      linkText:"Read Whitepaper"
    },


};
var images={
    demo:{
        icon:require('./demo-icon.png'),
        hover:require('./demo-icon-hover.png')
    },
    paper:{
        icon:require('./paper.png'),
        hover:require('./paper-hover.png')
    },
    extension:{
      icon:require('./extension-icon.png'),
      hover:require('./extension-hover.png')
    }

}


export default class SecondScreenSection extends React.Component{

  render(){
      return(
        <div style={styles.card}>
            <div style={styles.title}>{textContent.title}</div>
            <div style={styles.content}>
              <div style={styles.description}>
                  {textContent.description}
              </div>
              <LinkItem to={textContent.demo.to}
                image={images.demo.icon}
                imageHover={images.demo.hover}
                imageStyle={styles.iconStyle}>
                    {textContent.demo.linkText}
              </LinkItem>

            </div>
        </div>);

  }

}
