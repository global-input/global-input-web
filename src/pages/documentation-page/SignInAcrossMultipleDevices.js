import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const SignInAcrossMultipleDevices = props =>{

        const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Sign In Across Devices</Title>
              <P>
Global Input App provides the password management solution in the corporate environment where a common password manager may not be suitable. In your working environment, you may have to use many business applications such as: JIRA, Confluence, Gitlab, Github, AWS, WordPress, Dropbox and many others. You should use a strong and completely different password for each system and avoid using similar password for multiple systems. Otherwise if one is breached, multiple systems will be affected.
              </P>

              <P>
              And most importantly, you may have to login to these applications on the shared workstations, or on computers attached to the big screens in a conference room or in a shared screen environment. Often you have to login to multiple business applications when everybody is watching on your screen and on your typing on the computer keyboard. If you use a common password manager, you may have to type your master password on the computer, that may lead to the breach of the password manager itself, bringing risks to all the passwords stored in the password manager.
              </P>
              <P>
              Global Input App resolve this issue by allowing you to push a selected data from your mobile device to the target application you are signing in. You just need to scan the QR code displayed, and select the authentication data stored in your app and press the ”Select” button. The data will then be decrypted and transferred to the target application using end-to-end encryption. You can now set a random password for each application, and you do not need to memorize them. As the result you can use your mobile as a sign in device for signing in to the applications on the shared computers. Most importantly, you can now sign in to the application even if people are watching over both your mobile and computer screen.
              </P>
              <P>
You can first try this out on the sample web application without installing the Chrome Extension.
Click on the ”Next” button on the sample web application, and then scan the QR Code with your Global Input App on your mobile. The same form being displayed on your computer screen should be displayed on your mobile as well. This allows you to use your mobile to enter content in the form on your computer. You can save the form data into your app and end the session. Now If you reload the page and go through the process again, you will notice that a button named “Matched” has appeared on the bottom of your mobile screen. This means that one or more data items in your app matches the form displayed by the application. If you press the button, a list of matched data items will be presented to you. Normally there will vbe only one item in the list. If you select the data item, you will be presented with the detail page of the data item. You will notice that the value of the fields is being displayed with “*” characters, which means that the value is not decrypted yet. You can press the ”Show” button to decrypt and reveal its content, or you can press the “Select” button straightaway to decrypt the data and send it to the form on your computer. Now you can select the field and then click on the “Copy” button to copy the content into you clipboard, and switch to the application you need and paste the content there.
              </P>

  </FirstSection>


        </React.Fragment>

);

};
SignInAcrossMultipleDevices.menu={
    id:"sigInAcrossMultipleDevices",
    label:"Sign In Across Devices"
}
export default SignInAcrossMultipleDevices;
