import React from 'react';

import {examplesLinks,externalsLinks,pagesLinks} from '../../links-components';
const {ChromeExtension,WordPressPlugin,WebSocketServer,WatchIntroduction,ReactJSLink,ReactJSExtension, JSExtension}=externalsLinks;
const {AboutContentEncryption,AboutMobileInputControl,AboutMobilePersonalStorage,
      AboutMobileAuthentication,AboutSecondScreenExperience,AboutMobileContentTransfer}=pagesLinks.links;


const images={deviceSolution:require('./images/global-input-device-solution.png')};
const HowItWorks=props=>{
    const {P, Title, Code,Concept, FirstSection,NextSection,Diagram}=props.theme;
    return(
          <React.Fragment>
                <FirstSection>
                  <Title>How It Works</Title>
                </FirstSection>
                <NextSection>
<P>
  Global Input App enables device and web applications to implement mobile integrations to have:
      <ul>
          <li><AboutMobileInputControl {...props}>Mobile Input & Control</AboutMobileInputControl></li>
          <li><AboutMobilePersonalStorage {...props}>Mobile Personal Storage</AboutMobilePersonalStorage></li>
          <li><AboutContentEncryption {...props}>Mobile Content Encryption & Signing</AboutContentEncryption></li>
          <li><AboutMobileAuthentication {...props}>Mobile Authentication</AboutMobileAuthentication></li>
          <li><AboutSecondScreenExperience {...props}>Second Screen Experience</AboutSecondScreenExperience></li>
          <li><AboutMobileContentTransfer {...props}>Mobile Content Transfer</AboutMobileContentTransfer></li>
      </ul>
  This connects mobile devices to computers and other devices via end-to-end encrypted communication. <Diagram image={images.deviceSolution}/>
And it also brings the mobile business context into the device application's runtime environment,  allowing it to define mobile integration logic
within its existing business processes.
  Hence, this is a client-side-only solution that does not require separate server-side logic,
  greatly simplifying the mobile integration processes.


By including the GIA extension, an application is able to provide an Encrypted QR Code for Global Input App users to scan to connect
to the application securely and can specify mobile user interfaces and process mobile events to implement mobile integrations.
The GIA extensions can be any of the following:
  <ul>
    <li><ChromeExtension {...props}>GIA Chrome Extension</ChromeExtension></li>
    <li><WordPressPlugin {...props}>GIA Wordpress Plugin</WordPressPlugin></li>
    <li><ReactJSExtension {...props}>GIA React Extension</ReactJSExtension></li>
    <li><JSExtension {...props}>GIA JS Extension</JSExtension></li>

  </ul>



  </P>

  <P>
    The extension uses the default <WebSocketServer {...props}>GIA WebSocket server</WebSocketServer>,
    but you can run your own <WebSocketServer {...props}>GIA WebSocket server</WebSocketServer> and configure the extension
    to use your own. The Encrypted QR Code, which initiates the encrypted communication across devices, will include
    information about the configured <WebSocketServer {...props}>GIA WebSocket  server</WebSocketServer>.

  </P>


                </NextSection>

          </React.Fragment>




    );



};


HowItWorks.menu={
  id:"howItWorks",
  label:"How It Works"
};
export default HowItWorks;
