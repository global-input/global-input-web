import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const SupportTool = props =>{

        const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>An IT Support Tool</Title>
              <P>
If you manage applications in a corporate environment, you may need to create accounts for other users and share the authentication details with them unless the application provides the subscription mechanism.
              </P>

              <P>
              If the application supports the Global Input App, you just need to ask the user scan the QR code displayed by the application and then the user will be able to use his/her mobile to enter his/her details directly into the application.
              </P>
              <P>
              If the application does not yet support the Global Input App, you can load the sample web application on your computer and compose the form you need, and click on the ”Next” button to display the QR code. You can ask the user to scan the QR code (you can send the QR code image or share it via a video link). When connected, the user should be able to use his/her mobile to type in his/her details on the form displayed on your screen. Knowing that the user never need to remember the password, you can ask the user to generate a strong password by pressing the ”Random” button on the app. You can then click on the “Copy” button to copy the form details into your clipboard and paste it into the application to continue the account creation process. On the user end, user can press ”Save” button to save the data in his/her mobile. Otherwise, when you press the “Finish” button to end the session, the app will ask the user to save the form data giving the user another chance to save the data.
              </P>
              <P>
In a corporate environment, you may need to share an account with some of your colleagues to accomplish some tasks. Global Input App allows you to share data securely using end-to-end encryption.
              </P>
              <P>
              Press the data item you would like to share on the “Data” tab in your Global Input App and then press the “Edit” button. If the data item does not exist yet, you can press the “+” button to create a new “item”. In the data editor screen, you can now press the “QR Code” button to display the QR Code on your mobile screen.
              </P>
              <P>
              At this time, you can ask your colleague, whom you would like to share data with, to scan the QR code. You colleague should be able to use his/her mobile to edit the form data on your app until the session ends. You can now ask your colleague to save the data item into his/her app.
              </P>

  </FirstSection>


        </React.Fragment>

);

};
SupportTool.menu={
    id:"supportTool",
    label:"An IT Support Tool"
}
export default SupportTool;
