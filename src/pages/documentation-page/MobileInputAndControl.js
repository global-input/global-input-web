import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const MobileInputAndControl = props =>{

        const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Mobile Input and Control for Device & Web Applications</Title>
              <P>
              As mobile devices are playing increasingly important roles in our daily lives, the need for using mobile devices to operate on those business applications and transferring data between them securely is getting quite important. However, the cost of developing such a mobile application for a business application is not a trivial task.
              </P>
              <P>
              The Global Input App offers a single mobile app solution for multiple devices and web applications. Existing IoT, Smart TV, and web applications can be extended in an add-on manner by defining the mobile UI elements and callback functions for receiving mobile events within the application itself. This is done declaratively in an add-on manner without affecting the business logic and system architecture. The communication between the Global Input App and the application is secured with end-to-end encryption.
              </P>
              <P>
              Please use your Global Input App to scan the QR code displayed on the sample web application to see this in action.
              </P>
  </FirstSection>


        </React.Fragment>

);

};
MobileInputAndControl.menu={
    id:"mobileInputAndControl",
    label:"Mobile Input and Control"
}
export default MobileInputAndControl;
