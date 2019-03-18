import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks,pagesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';
import SimpleContainer from '../../page-components/section-containers/simple-container';




const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayTutorialVideoIcon}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;
const {TransferFormDataButton,AuthenticationButtons}  = pagesLinks.buttons;

const MobileAuthenticationAndBeyond = props =>{

        const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Mobile Authentication & Beyond</Title>
              <SubtitleSectionContainer>
                  <PlayTutorialVideoIcon/>
              </SubtitleSectionContainer>
  </FirstSection>
  <NextSection>
              <P>
              Global Input App (GIA) provides applications with a straightforward solution for introducing mobile authentication without adding any extra
              server-side logic. The existing username and password based authentication can be extended to have mobile authentication just by including an
              extension library on the client-side, paving the way for a smooth transition to a more sophisticated authentication later on,
              for example, the Key Pair authentication (WebAuthn, SQRL etc.).
              </P>

              <P>
                Global Input App provides applications with a mechanism that allows users to securely push confidential data from mobile to the applications.
                The mobile integration can go beyond than the authentication to have mobile input and mobile control working like a full mobile app without
                the need to develop the actual mobile app. This can be achieved by adding the mobile business logic on the client-side application.
              </P>


    </NextSection>

    <FirstSection>

              <P>

                For example if you would like to present mobile user with a form that is comprised of “Username”, “Password” and “Login” button and received events
                when users interacts with the form, you just need to provide the following JSON data:
              </P>
              <Code>
                {`
                   fields:[{
                        label:"Username",
                        operations:{onInput:username=>this.setUsername(username)}
                    },{
                        label:"Password",
                        operations:{onInput:password=>this.setPassword(password)}
                    },{
                        label:"Login",
                        operations:{onInput:()=>this.login()}
                    }]
                `}

              </Code>
      </FirstSection>
      <NextSection>

        <P>
              And upon successful authentication, you can use the same session to provide different JSON data to allow users to use mobile continually to operate on your application. If you are interested, you can have a look at the following the form transfer example in action, and check out its source codes on the github:
        </P>
        <SimpleContainer>
            <TransferFormDataButton>Example</TransferFormDataButton>
        </SimpleContainer>

      </NextSection>
      <FirstSection>
        <SimpleContainer>
          <AuthenticationButtons/>
          </SimpleContainer>
      </FirstSection>

        </React.Fragment>

);

};

export default MobileAuthenticationAndBeyond;
