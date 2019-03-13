import React from 'react';
import {styles, images} from './styles';
import Card from "./card";
import screens from '../../../screens';


const textContent={
    authentication:{
        title:"Mobile Authentication",
        content:["Authentication on shared devices in public view, No need to hide screen, keyboard even mobile screen when signing in on a shared device"],
    },
    mobileControl:{
        title:"Mobile Input & Control",
        content:["Extends applications to allows users to use smartphones to operate and transfer data securely."],
    },
    secondScreen:{
      title:"Second Screen",
      content:["A simple and innovative solution to introduce the Second Screen Experience to the Smart TV applications"],
    }


}
export default class CardSection extends React.Component{

    render(){
        return(
          <div style={styles.cardContainer.get()}>
              <Card titleIcon={images.authentication}
                  title={textContent.authentication.title}
                  content={textContent.authentication.content}
                  link={screens.allLinks.authentication}
                  />

                  <Card titleIcon={images.mobileControl}
                      title={textContent.mobileControl.title}
                      content={textContent.mobileControl.content}
                      link={screens.allLinks.mobileControl}
                      />

                      <Card titleIcon={images.secondScreen}
                          title={textContent.secondScreen.title}
                          content={textContent.secondScreen.content}
                          link={screens.allLinks.secondScreen}
                          />

          </div>
        );
    }


}
