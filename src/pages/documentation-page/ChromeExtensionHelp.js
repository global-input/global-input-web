import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const ChromeExtensionHelp = props =>{

        const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Chrome Extension Help</Title>
              <SubtitleSectionContainer>
                  <PlayAuthenticationDemo/>
              </SubtitleSectionContainer>
  </FirstSection>
  <NextSection>

  <P>
      Having installed the <ChromeExtension {...props}>Chrome Extension</ChromeExtension>, you need to visit a website,
      and then click on the GIA icon on the top of your browser to activate the extension.

  </P>
  <P>
    The <Concept>Application Control Settings</Concept> on the Chrome extension window allows you to specify the IDs of the HTML elements on the current page
     that you would like to interact with and transfer content or operate on them using your mobile.
    In this scenario, the Chrome Extension plays the role of the proxy between the application and GIA, allowing you to operate on the page
    directly using your mobile. The Applications Control Settings that comes with the extension can be found <SupportedWebsites {...props}>here</SupportedWebsites>.
    You can add new settings or remove the existing ones for the website you are visiting.
  </P>
  <P>
    If the <Concept>Application Control Settings</Concept> is missing for a website, you cannot directly control the web page using your mobile, but you still can push
     the selected data (filtered automatically using the domain of the website you are visiting) to the Chrome Extension, and then you can copy and paste the required content to
     the web page currently loaded on your browser. In this mode, you can type both on your computer and on your mobile to enter content,
     the content will be synced live with each other. This is convenient if you would like to transfer some content from a computer to your mobile or vice versa.
     Also, you can quickly customise the form displayed on the extension matching what is required by the website.
     The customised form will also be displayed on your mobile, allowing your enter content or select and push the existing data to the form.
    This is very convenient if a website has a long form for you to fill in, and you would like to reuse some data stored in GIA's encrypted storage.
  </P>
  <P>
    A website can embed the GIA extension directly. In that case, there is no need for the Chrome extension for using GIA to operate on it.
    If you have a WordPress website, you can install the <WordPressPlugin {...props}>Global Input App Wordpress Plugin</WordPressPlugin>, so that your website can work without the Chrome extension.
    When your website is displayed on a big screen, you can just scan the QR code and you can sign in straight away using the credential data stored in your mobile.
  </P>

  <P>
    When you are using a computer that does not have Global Input App Chrome Extension installed, and you are visiting a website,
    which does not have Global Input App extension embedded,  you can still use the  <TransferFormData {...props}>Transfer Form Data Application
    </TransferFormData> to transfer data to there and then copy and paste to wherever you like.
    Again, you can use both computer and your mobile to enter content and they will be synced on the fly.
    The application allows you to customise the form and then when the QR code is displayed, you can bookmark the URL, saving yourself from go through the process again in the future
    when you need the same custom form to transfer data between a computer and your mobile.
  </P>

    </NextSection>


    <FirstSection>

              <P>
                The <TransferFormData {...props}>Transfer Form Data Application</TransferFormData> is a sample web application.
                If you have a web application, you can easily integrate the GIA extension
                into your application, making the mobile authentication available with no time.
                For example if you would like to present in the GIA mobile screen, a form that
                is comprised of "Username" and  "Password" fields and a "Login" button, and would like to receive mobile events and
                input values from mobile, you just need to provide the following JSON data to the extension:
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
              <P>
              One of the superb features of the GIA solution is that the GIA mobile integration can go easily beyond the authentication step, and you can start from this very simple form and then work on it iteratively to transform it to more sophiscated mobile solution.
              </P>
              <P>
              After the authentication, the user can use the mobile device to operate on the application, like using a fully functional mobile version of the application, and this can be achieved without developing the actual mobile app. You may already have seen the
              flexibility of the mobile UI on the <AuthenticationDemoVideo {...props}>demo video</AuthenticationDemoVideo>, or  you can have a look at the <SecondScreen {...props}>Second Screen Application</SecondScreen>.
              </P>

              <P>
                  If you would like to know more about the GIA security strategy, you can read our <AuthenticationWhitePaper {...props}>white paper</AuthenticationWhitePaper>.
              </P>
          </FirstSection>
        </React.Fragment>

);

};

export default ChromeExtensionHelp;
