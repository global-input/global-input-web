import React from 'react'
import styled from 'styled-components';
import {PageHeader} from '../../page-header';



import HowItWorks from "./how-it-works";

import FeaturesSection from './features-section';
import {PageFooter} from '../../page-footer';
import { config } from '../../configs';


import { HomeTitleSection } from './text-title-sections';
import SmallText from './SmallText';
import ButtonsContainer from '../../page-components/buttons-container';
import { pagesLinks } from "../../page-components/links-components";
import { CardSection } from './card-section';
import { useWindowSize } from '../../app-layout';

import { useMobile } from '../../mobile-ui/home';



import headerBackground1440 from './images/headerBackground-1440.svg';
import posterImage552 from './images/right-poster-552-505.png';
import posterImage200 from './images/right-poster-200-183.png';
import posterImage350 from './images/right-poster-350-320.png';

const headerTextContent = {
  title: "Mobile Integration",
  subtitle: "Use Mobiles to Operate on Device Applications",
  smallText: "Authentication, Encryption, Second Screen & Mobile Input & Control "
};

interface HomePageProps {
  editConnectionSettings: () => void;
}
const HomePage: React.FC<HomePageProps> = ({ editConnectionSettings }) => {
  const { GetAppButton } = pagesLinks.buttons;
  const [width] = useWindowSize();
  const MobileConnect = useMobile();


  return (
    <Container>
        <PageHeader selected={config.paths.home.path}/>
        <HeadBackGround>
          <PosterImage/>
          <MobileConnect />
          <HomeTitleSection
            title={headerTextContent.title}
            subtitle={headerTextContent.subtitle}>

            <SmallText content={headerTextContent.smallText} scWidth={width} />

            <ButtonsContainer>
              <GetAppButton>Get It Free</GetAppButton>
            </ButtonsContainer>
          </HomeTitleSection>


        <CardSection scWidth={width} />
        <HowItWorks />
      </HeadBackGround>
      <FeaturesSection scWidth={width} />
      <PageFooter />
    </Container>








  )
};

export default HomePage;



const Container = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: "100%",
`;

const HeadBackGround=styled.div`
    background-image: url(${headerBackground1440});
    background-color: rgb(114,164,210);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media only screen and (max-width: 700px){
      background-size: auto;
    }
`


const PosterImage=styled.div`
      position: absolute;
      top: 50px;
      right: 50px;
      display:none;
      @media only screen and (min-width:750px){
        display:block;
        background-image:url(${posterImage200});
        background-repeat: no-repeat;
        width:200px;
        height:183px;

      }
      @media only screen and (min-width:800px){
        display:block;
        background-image:url(${posterImage350});
        background-repeat: no-repeat;
        width:350px;
        height:320px;

      }
      @media only screen and (min-width:1258px){
          display:block;
          background-image:url(${posterImage552});
          background-repeat: no-repeat;
          width:552px;
          height:505px;
      }


`;
