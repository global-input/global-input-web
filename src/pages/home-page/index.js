import React, {Component} from 'react'

import BasicLayout from "../../page-components/themes/basic-layout";
import HeaderSection from "./header-section";
import {HomeHeaderBackground} from "../../page-components/header-backgrounds";
import HowItWorks from "./how-it-works";
import FooterSection from '../../page-components/footer-section';
import CardSection from "./cards-section";
import FeaturesSection from './features-section';


export  default class HomePage extends Component {

render() {

    return (
          <BasicLayout>
            <HomeHeaderBackground>
                <HeaderSection history={this.props.history}/>
                <CardSection/>
                <HowItWorks/>
            </HomeHeaderBackground>
            <FeaturesSection/>
            <FooterSection/>
          </BasicLayout>
            );
  }

}
