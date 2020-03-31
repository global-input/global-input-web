import React, {Component} from 'react'

import BasicLayout from "../../page-components/themes/basic-layout";
import HeaderSection from "./header-section";
import {HomeHeaderBackground} from "./header-backgrounds";
import HowItWorks from "./how-it-works";
import FooterSection from './footer-section';

import CardSection from "./cards-section";
import NextCards from "./next-cards";
import FeaturesSection from './features-section';

import {withScrollToTop} from "../../components/screen-media";
const HomePage=props=> (
          <BasicLayout>
            <HomeHeaderBackground>
                <HeaderSection history={props.history}/>
                <CardSection/>
                <NextCards/>
                <HowItWorks/>
            </HomeHeaderBackground>
            <FeaturesSection/>
            <FooterSection/>
          </BasicLayout>
            );

  export default HomePage;

  export const HomePageWithScrollToTop=withScrollToTop(HomePage,'topContent');
