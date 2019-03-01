import React from "react";
import {styles, images} from "./styles";
import {LinkItem} from '../../components';
import {pagelinks} from "../../configs";
import SecondScreenHowItWorks from "../../second-screen-how-it-works";
import MediaPlayerScreen from "../../media-player-screen";
var textContent={
    title:"Second Screen",
    description:"A simple and innovative solution to introduce the Second Screen to the existing Smart TV applications.",
    demo:{
        linkText:"Player Control Example",
    },
    howItWorks:{
        linkText:"How It Works"
    },
    whitepaper:{
      url:"https://medium.com/@hewzulla/using-smartphones-to-operate-on-applications-running-on-computers-and-other-devices-e397668149f8",
      linkText:"Read Whitepaper"
    },
};



export default class SecondScreenCard extends React.Component{

  render(){
      return(
        <div style={styles.card.get()}>
            <div style={styles.title.get()}>{textContent.title}</div>
            <div style={styles.content.get()}>
              <div style={styles.description}>
                  {textContent.description}
              </div>
                  <LinkItem to={SecondScreenHowItWorks.pagePath}
                    image={images.paper}
                    textStyle={styles.linkText}>
                        {textContent.howItWorks.linkText}
                  </LinkItem>

                    <LinkItem to={MediaPlayerScreen.pagePath}
                      image={images.demo}
                      textStyle={styles.linkText}>
                          {textContent.demo.linkText}
                    </LinkItem>


            </div>
        </div>);

  }

}
