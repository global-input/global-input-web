import React, {Component} from 'react';

import FourItemsList from '../../../page-components/four-items-list';
import RightPosterImage from '../../../page-components/right-poster-image';
import {SimpleHeaderBackground} from '../../../page-components/header-backgrounds';
import TextTitleSection from '../../../page-components/text-title-section';


import ButtonsContainer from '../../../page-components/buttons-container';
import {pagesLinks} from "../../../links-components";



const {LearnMoteWhiteButton,GetAppButton}=pagesLinks.buttons;


const headerTextContent={
    title:"Global Input App",
    subtitle:"A Unified & Simple Solution",
    items:[
            "Mobile Input & Control",
           "Mobile Authentication",
           "Data Encryption",
           "Secure Content Transfer"
         ]
};
export const images={

    rightPoster:require('./images/right-poster.png'),
    rightPoster400:require('./images/right-poster-400.png'),
    rightPoster200:require('./images/right-poster-200.png')
};

const HeaderSection = props =>(
      <SimpleHeaderBackground>
            <RightPosterImage
                    image={images.rightPoster}
                    image200={images.rightPoster200}
                    image400={images.rightPoster400}/>
            <TextTitleSection title={headerTextContent.title}
                        subtitle={headerTextContent.subtitle}>
                          <FourItemsList items={headerTextContent.items}/>
                          <ButtonsContainer>
                              <LearnMoteWhiteButton>Read More</LearnMoteWhiteButton>
                              <GetAppButton>Get GIA App Free</GetAppButton>
                          </ButtonsContainer>
            </TextTitleSection>
    </SimpleHeaderBackground>
          );
export default HeaderSection;
