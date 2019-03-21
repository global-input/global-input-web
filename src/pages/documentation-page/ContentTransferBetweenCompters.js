import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const ContentTransferBetweenCompters = props =>{

        const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Content Transfer To/From Computers</Title>
              <P>
              If you are working in a company or organisation, where you may often have to work on a shared computer temporarily to accomplish some tasks.
              </P>
              <P>
              In this case, you may find something useful on the computer that you would like to copy and paste to your mobile securely. Or you would like to copy and paste a content securely from your mobile into an application running on the computer.
              </P>
              <P>
              In order to do this, you can load the sample web application in a browser on the computer, and scan the QR code with your Globa Input App. A text box should be displayed on the computer and your mobile. You can now paste content either on the computer or on your mobile, and the content will be synchronized using the end-to-end encryption. Finally, you can select the box, and click/press on “Copy” button on the computer/mobile to copy the content into your clipboard so that you can paste the content into any application you like.
              </P>
  </FirstSection>

          
        </React.Fragment>

);

};
ContentTransferBetweenCompters.menu={
    id:"contentTransferBetweenCompters",
    label:"Transfer Content To/From Computers"
}
export default ContentTransferBetweenCompters;
