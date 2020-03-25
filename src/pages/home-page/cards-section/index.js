import React from 'react';

import IconHeaderCard from "../../../page-components/icon-header-card";
import BasicCardsContainer from '../../../page-components/section-containers/bacics-cards-container';
import {config} from '../../../configs';
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
const CardSection= props =>(
  
          <BasicCardsContainer>
              <IconHeaderCard titleIcon={images.authentication}
                  title={textContent.authentication.title}
                  content={textContent.authentication.content}
                  link={config.paths.mobileAuthentication.path}
                  />

                  <IconHeaderCard titleIcon={images.mobileControl}
                      title={textContent.mobileControl.title}
                      content={textContent.mobileControl.content}
                      link={config.paths.mobileControl.path}
                      />

                      <IconHeaderCard titleIcon={images.secondScreen}
                          title={textContent.secondScreen.title}
                          content={textContent.secondScreen.content}
                          link={config.paths.secondScreen.path}
                          />
          </BasicCardsContainer>
        );
export default CardSection;
