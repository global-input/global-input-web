import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const SupportToolForSharingAccounts = props =>{

        const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Support Tool for Sharing Accounts</Title>
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
SupportToolForSharingAccounts.menu={
    id:"supportToolForSharingAccounts",
    label:"Support Tool for Sharing Accounts"
}
export default SupportToolForSharingAccounts;
