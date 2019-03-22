import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';

import IntroducingMobileInputAndControl from '../about-mobile-input-control';




const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const MobileInputAndControl = props =>{

        const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;
        

        return(

       <React.Fragment>
            <FirstSection>
              <Title>Mobile Input and Control for Device & Web Applications</Title>             
            </FirstSection>
            <IntroducingMobileInputAndControl 
            displayLocation={"document"} aaa="dddd"/>



        </React.Fragment>

);

};
MobileInputAndControl.menu={
    id:"mobileInputAndControl",
    label:"Mobile Input and Control"
}
export default MobileInputAndControl;
