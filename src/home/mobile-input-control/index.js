import React from "react";
import {styles} from "./styles";
import {LinkItem} from '../../components';

var textContent={
    title:"Mobile Input & Control",
    description:"Extends applications to allows users to use smartphones to operate and transfer data securely.",
    introduction:{
      demo:{
        linkText:"Watch introduction video",
        url:"https://www.youtube.com/watch?v=HzeTY1TA4V8"
      },
    },
    whitepaper:{
      url:"https://medium.com/@hewzulla/using-smartphones-to-operate-on-applications-running-on-computers-and-other-devices-e397668149f8",
      linkText:"Read Whitepaper"
    },


};
var images={
    video:{
        icon:require('./play-icon.png'),
        hover:require('./play-icon-hover.png')
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


export default class MobileInputControlSection extends React.Component{

  render(){
      return(
        <div style={styles.card}>
            <div style={styles.title}>{textContent.title}</div>
            <div style={styles.content}>
              <div style={styles.description}>
                  {textContent.description}
              </div>
              <LinkItem href={textContent.introduction.demo.url}
                image={images.video.icon}
                imageHover={images.video.hover}
                imageStyle={styles.iconStyle}>
                    {textContent.introduction.demo.linkText}
              </LinkItem>
              <LinkItem href={textContent.whitepaper.url}
                image={images.paper.icon}
                imageHover={images.paper.hover}
                imageStyle={styles.iconStyle}>
                    {textContent.whitepaper.linkText}
              </LinkItem>
            </div>
        </div>);

  }

}
