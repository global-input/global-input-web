import React, {Component} from 'react';

import FourItemsList from '../../../page-components/four-items-list';
import RightPoterImage from '../../../page-components/right-poster-image';
import {SimpleHeaderBackground} from '../../../page-components/header-backgrounds';
import TextTileSection from '../../../page-components/text-title-section';

import ButtonsSection from './ButtonsSection';



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

export  default class HeaderSection extends Component {
  render() {
    return (
          <SimpleHeaderBackground>
            <RightPoterImage
                    image={images.rightPoster}
                    image200={images.rightPoster200}
                    image400={images.rightPoster400}/>
                  <TextTileSection title={headerTextContent.title}
                        subtitle={headerTextContent.subtitle}>
                  <FourItemsList items={headerTextContent.items}/>
                  <ButtonsSection/>
                </TextTileSection>
          </SimpleHeaderBackground>
          );
  }
}
