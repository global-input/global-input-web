import React from 'react';

import SmallText from './small-text';
import RightPosterImage from '../../../page-components/right-poster-image';
import { SimpleHeaderBackground } from '../header-backgrounds';
import { HomeTitleSection } from '../../../page-components/text-title-sections';


import ButtonsContainer from '../../../page-components/buttons-container';
import { pagesLinks } from "../../../links-components";



const { GetAppButton } = pagesLinks.buttons;


const headerTextContent = {
    title: "Mobile Integration",
    subtitle: "Mobile Solution for Device Applications",
    smallText: "Data Security, Mobile Input & Control for IoT",
    description: "Users Carry Their Around Own Data or their Key "
};
export const images = {

    rightPoster: require('./images/right-poster.png'),
    rightPoster400: require('./images/right-poster-400.png'),
    rightPoster200: require('./images/right-poster-200.png')
};

const HeaderSection = props => (
    <SimpleHeaderBackground>
        <RightPosterImage
            image={images.rightPoster}
            image200={images.rightPoster200}
            image400={images.rightPoster400} />
        <HomeTitleSection
            title={headerTextContent.title}
            subtitle={headerTextContent.subtitle}>
            <SmallText content={headerTextContent.smallText} />
            <ButtonsContainer>
                <GetAppButton>Get It Free</GetAppButton>
            </ButtonsContainer>
        </HomeTitleSection>
    </SimpleHeaderBackground>
);
export default HeaderSection;
