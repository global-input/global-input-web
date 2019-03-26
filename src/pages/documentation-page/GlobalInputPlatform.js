import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen,ListAllExamples} = examplesLinks;

const images={
    globalInputPlatform:require('./images/global-input-platform.png')
  };

const GlobalInputPlatform = props =>{

        const {P, Title, Title2,ode,Concept, FirstSection,NextSection,Diagram}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Global Input Platform</Title>
              <P>
              <Diagram image={images.globalInputPlatform}/>
                  Global Input platform is an open-source platform, which allows device and web applications to be extended to have mobile input and mobile control functionalities without developing separate mobile apps. An application can declaratively specify mobile user interface components and use callbacks to receive mobile input events. The platform is responsible for sending and receiving messages using end-to-end encryption etc. It consists of the following components:


              <ul>
                  <li>Global Input App</li>
                  <li>Global Input WebSocket Server</li>
                  <li>Global Input App Extensions</li>
              </ul>


              The Global Input JavaScript library and the Global Input WebSocket server implements the end-to-end encryption and the message transporting logic transparently. A client application passes the unencrypted messages to the Global Input JavaScript library, without worrying about the encryption and the delivery of the messages. The library encrypts the message content and forwards them to the destination. On the receiving end, the JavaScript library receives the encrypted messages, decrypt them and forward the decrypted messages to the callback function that the application has provided when connected to the library. Because of the communication is secured with the end-to-end encryption, it is as though that the Global Input App is connected directly to the Device via cable as shown in the following picture.
              The platform enables the mobile device and the web application to transfer data securely and provides a wide range of functions:

               <ListAllExamples {...props}/>
               <Title2>Features</Title2>

               <ul>
                    <li> Users only need to install a single app to use across multiple web applications.</li>
                    <li> The mobile app on its own provides password management and secure data transfer across mobile devices and computers.</li>
                    <li>  No need to develop separate mobile apps for extending device and web applications to have mobile input and control.</li>
                    <li> The logic in the mobile input and control can be implemented within the application itself reusing the existing application logic.</li>
                    <li>  Content can be transferred between the mobile device to the web application.</li>
                    <li> Content is stored and managed by users securely on the mobile device.</li>
                    <li>  No data is stored on a remote server.</li>
                    <li> No subscription, no user details needs to be saved outside users’ device.</li>
                    <li>  The mobile app and the library is open-source</li>
              </ul>
               Please install the app and explore the following use cases in action. You may find many reasons why the app can become an essential tool in a corporate environment. If you are interested in how it works and would like to extend your web applications to allow users to use their mobile to operate on them, please visit the platform page.
                </P>





      </FirstSection>


        </React.Fragment>

);

};
GlobalInputPlatform.menu={
    id:"globalInputPlatform",
    label:"Global Input Platform"
}
export default GlobalInputPlatform;
