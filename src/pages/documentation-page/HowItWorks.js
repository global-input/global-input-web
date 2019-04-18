import React from 'react';

import {examplesLinks,externalsLinks,pagesLinks} from '../../links-components';
const {ChromeExtension,WordPressPlugin,WebSocketServer,WatchIntroduction,ReactJSLink,ReactJSExtension, JSExtension}=externalsLinks;
const {AboutContentEncryption,AboutMobileInputControl,AboutMobilePersonalStorage,
      AboutMobileAuthentication,AboutSecondScreenExperience,AboutMobileContentTransfer}=pagesLinks.links;


const images={deviceSolution:require('./images/global-input-device-solution.png'),
              webSocketServer:require('./images/websocket-server.png'),
              globalInputMessage:require('./images/global-input-messages.png')};

const HowItWorks=props=>{
    const {P, Title, Code,Concept, FirstSection,NextSection,Diagram}=props.theme;
    return(
          <React.Fragment>
                <FirstSection>
                  <Title>How It Works</Title>
                </FirstSection>
                <NextSection>
<P>
  Global Input App (GIA) provides a universal mobile app integration solution for all device and web applications.
  Typical Use cases are:
      <ul>
          <li><AboutMobileInputControl {...props}>Mobile Input & Control</AboutMobileInputControl></li>
          <li><AboutMobilePersonalStorage {...props}>Mobile Personal Storage</AboutMobilePersonalStorage></li>
          <li><AboutContentEncryption {...props}>Mobile Content Encryption & Signing</AboutContentEncryption></li>
          <li><AboutMobileAuthentication {...props}>Mobile Authentication</AboutMobileAuthentication></li>
          <li><AboutSecondScreenExperience {...props}>Second Screen Experience</AboutSecondScreenExperience></li>
          <li><AboutMobileContentTransfer {...props}>Mobile Content Transfer</AboutMobileContentTransfer></li>
      </ul>

<Diagram image={images.deviceSolution}/>
The GIA mobile integration mechanism secures the communication between devices with end-to-end encryption.
The Global Input App (GIA) extension libraries abstract away this communication details so that device applications can
concentrate on providing configurations for building mobile interfaces for displaying on the user’s mobile screen
and using call-back functions to receive and process events that are coming from the mobile devices.
The GIA extension component displays an Encrypted QR Code that contains information on how to connect to the device application,
and one of the parameters is an encryption key, which is the shared encrypton key used for end-to-end encryption, is generated
randomly on the fly within the device application at the beginning
of the session. When a user scans the QR Code, a secure connection will be established and the GIA displays the user interface,
which is defined by the device application and sends back the events as the user interacts with the user interface elements.
This universal mobile app integration solution not only bring the convenience to the users by using the same mobile app for
interacting with different devices, but also save costs for businesses by eliminating the need for developing different mobile app
for different devices. The mechanism brings the mobile runtime environment into the device application's runtime context,
allowing the application to implement the mobile integration logic within its business processes.
This results in a greatly simplified mobile integration architecture,
where the universal mobile app does not directly interact with the application's backend API,
nor does it require to run any business-specific processes.


  Currently, the following GIA extensions are available:
    <ul>
      <li><ChromeExtension {...props}>GIA Chrome Extension</ChromeExtension></li>
      <li><WordPressPlugin {...props}>GIA Wordpress Plugin</WordPressPlugin></li>
      <li><ReactJSExtension {...props}>GIA React Extension</ReactJSExtension></li>
      <li><JSExtension {...props}>GIA JS Extension</JSExtension></li>

    </ul>
  We are developing many more extensions and software/hardware components that can be plugged into
  various software and devices in a plug-and-play manner to achieve mobile integrations.
</P>
<P>

  The Encrypted QR Code, which provides the information on how to connect to
  the device application, contains the following information:

  <ul>
      <li>
          <Concept>Encryption Key</Concept>: used for establishing the end-to-end encrypted communication between devices.
       </li>
       <li>
          <Concept>URL</Concept>: the URL of the <WebSocketServer {...props}>GIA WebSocket server</WebSocketServer> that the device application has connected to.
       </li>
       <li>
          <Concept>APIKey</Concept>: required for connecting to the <WebSocketServer {...props}>GIA WebSocket server</WebSocketServer>.
       </li>
       <li>
            <Concept>securityGroupId</Concept>: required for connecting to the device application.
            Like <Concept>APIKey</Concept> that validates messages coming to the server, the <Concept>securityGroupId</Concept> validates
            messages comming to the device application. This parameter is useful for some businesses who would like to use pairing to control who can connect to the devices.

       </li>
       <li><Concept>sessionId</Concept>: The id of the session that the device application is bound to.
       </li>
  </ul>
  <Diagram image={images.globalInputMessage}/>

  The sequence diagram describes how  GIA extensions, the device application and the GIA mobile app communicate with each other
 to achieve mobile integrations. When the device application initialises the GIA extension component
 with the configuration that contains information on how to build the initial mobile interface, the extension component connects to
 one of the <WebSocketServer {...props}>GIA WebSocket server</WebSocketServer> nodes, and displays an Encrypted QR Code and wait for
 the incoming connections like a server application running on the cloud. Hence, the architecture can be viewed as the
 logical client-server architecture implemented at the device applications layer. The GIA scans the QR code to obtain the information on
 how to connect to the device application. Once a secure connection is established to the device application,
 the GIA loads the JSON data from the device application to obtain information on how to
 build the mobile interface (form) on the user's mobile screen. When the user interacts with the user interface elements,
 the events will be routed to the connected device application, so that the application can implement mobile integrations within its own context.

  </P>


  <P>
    The GIA mobile integration mechanism comes with a default <WebSocketServer {...props}>GIA WebSocket server</WebSocketServer>,
    but you can run your own <WebSocketServer {...props}>GIA WebSocket server</WebSocketServer> and configure the extension
    to use your own one. <Diagram image={images.webSocketServer}/>
    When you set up your own <WebSocketServer {...props}>GIA WebSocket server</WebSocketServer> node,
    you need to modify the URL in its configuration to point to itself to make the GIA load balancing mechanism work correctly.
    In order to prevent the long-running connections accumulated on the load balancer, the GIA introduces an initial RestAPI call
    on the load balancer to obtain the URL of an available WebSocket Server node.
    The subsequent persistent WebSocket connection will skip the load balancer, and connects to the WebSocket node directly.
    As shown in the diagram, each WebSocket session is started with an initial RestAPI call on the load balancer to obtain the URL of an available WebSocket Server node.
    Therefore, the URL in the <WebSocketServer {...props}>GIA WebSocket server</WebSocketServer> configuration should point
    to itself instead of pointing to the load balancer. This also means that a service URL for each node in the cluster should be exposed as well.
  </P>

  <P>
GIA expands the mobile integration to the next level with its
<AboutMobilePersonalStorage {...props}>Mobile Personal Storage</AboutMobilePersonalStorage>. User can push the data
  in the storage to the connected application on-demand, and the connected application can request
to save some calculated data for later use so that the user can push it back to the application when requested.
One of its use cases is to turn a password-based authentication into a password-less authentication by pushing credential
in the storage to the connected application. Other use cases are subscriptions, account update, changing password,
and other activities where forms need to be filled with the data stored in the mobile storage.
Also, a media application can implement a personalized experience using data stored in Mobile Personal Storage.
The data stored in the Mobile Personal Storage are encrypted with data encryption keys. The data encryption keys,
in turn, are encrypted with a master key. And the master key is built from the user app password.


  </P>

  <P>
The <AboutContentEncryption {...props}>Mobile Content Encryption & Signing</AboutContentEncryption> allows
the user to push encrypted data to the connected application.
The encrypted data can only be decrypted inside the mobile app once sent back to the GIA.
This is reminiscent of the scenario that you carry around lockers and the keys for locking the doors so that the
no one else can open the door because the keys will never leave from your pocket. One of its use cases is that
an application can use the GIA Mobile Encryption to encrypt a keyring (keyset) that contains the data encryption
key for encrypting the data that the user is allowed to access.
This not only reduces the reliance of the data security on the system security but also enhances the accountability
of the data processing session because of the personal attachment of the mobile device where the process of
decrypting the data encryption keys is executed. GIA mobile signing mechanism allows users to use mobiles to sign documents.
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
