import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const SecondScreenExperience = props =>{

        const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Screen Input & Control for Media Applications</Title>
              <P>
              Global Input App provides a unique solution for applications to achieve the second screen input & control, plus some user experience without affecting the existing logic and architecture of the application. This is possible because the business logic for the second screen can be implemented within the application itself following its own functional flows and business logic. The applications declares the UI elements for the second screen and use the callback functions to receive mobile events.
              </P>
              <P>
              Please use your Global Input App to scan the QR code displayed on the sample web application to see this in action. You will be able to use your Global Input App to control the media player on the web application.
              </P>

  </FirstSection>


        </React.Fragment>

);

};
SecondScreenExperience.menu={
    id:"secondScreenExperience",
    label:"Second Screen Experience"
}
export default SecondScreenExperience;
