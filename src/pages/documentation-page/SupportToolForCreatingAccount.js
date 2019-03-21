import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const SupportToolForCreatingAccount = props =>{

        const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Support Tool for Creating Accounts</Title>
              <P>
If you manage applications in a corporate environment, you may need to create accounts for other users and share the authentication details with them unless the application provides the subscription mechanism.
              </P>

              <P>
              If the application supports the Global Input App, you just need to ask the user scan the QR code displayed by the application and then the user will be able to use his/her mobile to enter his/her details directly into the application.
              </P>
              <P>
              If the application does not yet support the Global Input App, you can load the sample web application on your computer and compose the form you need, and click on the ”Next” button to display the QR code. You can ask the user to scan the QR code (you can send the QR code image or share it via a video link). When connected, the user should be able to use his/her mobile to type in his/her details on the form displayed on your screen. Knowing that the user never need to remember the password, you can ask the user to generate a strong password by pressing the ”Random” button on the app. You can then click on the “Copy” button to copy the form details into your clipboard and paste it into the application to continue the account creation process. On the user end, user can press ”Save” button to save the data in his/her mobile. Otherwise, when you press the “Finish” button to end the session, the app will ask the user to save the form data giving the user another chance to save the data.
              </P>

  </FirstSection>


        </React.Fragment>

);

};
SupportToolForCreatingAccount.menu={
    id:"supportTool",
    label:"Support Tool for Creating Accounts"
}
export default SupportToolForCreatingAccount;
