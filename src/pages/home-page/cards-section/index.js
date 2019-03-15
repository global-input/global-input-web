import React from 'react';

import IconHeaderCard from "../../../components/icon-header-card";
import BacicsCardsContainer from '../../../page-components/bacics-cards-container';
import pages from '../../../pages';

const images={
  authentication:require('./images/authentication.svg'),
  mobileControl:require('./images/control.svg'),
  secondScreen:require('./images/second-screen.svg'),
}


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
          <BacicsCardsContainer>
              <IconHeaderCard titleIcon={images.authentication}
                  title={textContent.authentication.title}
                  content={textContent.authentication.content}
                  link={pages.allLinks.authentication}
                  />

                  <IconHeaderCard titleIcon={images.mobileControl}
                      title={textContent.mobileControl.title}
                      content={textContent.mobileControl.content}
                      link={pages.allLinks.mobileControl}
                      />

                      <IconHeaderCard titleIcon={images.secondScreen}
                          title={textContent.secondScreen.title}
                          content={textContent.secondScreen.content}
                          link={pages.allLinks.secondScreen}
                          />
          </BacicsCardsContainer>
        );
    }


}
