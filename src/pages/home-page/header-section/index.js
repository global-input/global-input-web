import React, {Component} from 'react';

import FourItemsList from '../../../page-components/four-items-list';
import RightPosterImage from '../../../page-components/right-poster-image';
import {SimpleHeaderBackground} from '../../../page-components/header-backgrounds';
import {HomeTitleSection} from '../../../page-components/text-title-sections';


import ButtonsContainer from '../../../page-components/buttons-container';
import {pagesLinks} from "../../../links-components";



const {LearnMoteWhiteButton,GetAppButton}=pagesLinks.buttons;


const headerTextContent={
    title:"Global Input App",
    subtitle:"Mobile Integration on Multi-Device environment",
    items:[           
           "Mobile Authentication",
           "Mobile Encryption",
           "Mobile Input & Control",           
           "Second Screen"
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
            <HomeTitleSection 
                        title={headerTextContent.title}
                        subtitle={headerTextContent.subtitle}>
                          <FourItemsList items={headerTextContent.items}/>
                          <ButtonsContainer>
                              <GetAppButton>Download</GetAppButton>
                          </ButtonsContainer>
            </HomeTitleSection>
    </SimpleHeaderBackground>
          );
export default HeaderSection;
