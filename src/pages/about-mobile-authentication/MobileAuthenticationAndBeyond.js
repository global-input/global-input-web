import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks,pagesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';
import SimpleContainer from '../../page-components/section-containers/simple-container';
import ButtonsContainer from '../../page-components/buttons-container';



const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,WatchAuthenticationDemo,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayTutorialVideoIcon, ReactJSExtension,JSExtension,ReactJSLink,ReactJSFiddle}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;
const {TransferFormDataButton,ChromeExtensionButton,WordPressButton,DocumentationButton}  = pagesLinks.buttons;

const DocuButton=props=>{
    if(props.isSideMenu){
      return null;
    }
    return (<DocumentationButton>Documentation</DocumentationButton>);
}

const AuthenticationButtons=props=>{

  return(
    <ButtonsContainer>
        <ChromeExtensionButton/>
        <WordPressButton/>
        <TransferFormDataButton>Transfer Form</TransferFormDataButton>
        <DocuButton {...props}/>
    </ButtonsContainer>
  )

}


const WatchVideo=props=>{
    if(props.isSideMenu){
      console.log("side......");
      return(<WatchAuthenticationDemo {...props}/>);
    }
    else{
      console.log("no side......");
      return(
        <SubtitleSectionContainer>
            <PlayTutorialVideoIcon {...props}/>
        </SubtitleSectionContainer>
      );
    }
}


const MobileAuthenticationAndBeyond = props =>{

        const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;
        


        return(

       <React.Fragment>
<FirstSection>
              <Title>Mobile Authentication</Title>
              <WatchVideo {...props}/>
  </FirstSection>
  <NextSection>
    <P>
Global Input App (GIA) provides applications with a straightforward solution for introducing mobile authentication without adding any extra
server-side logic. The existing username and password based authentication can be extended to have mobile authentication just by including
an <JSExtension {...props}>extension module</JSExtension> on the client-side, paving the way for a smooth transition to a more sophisticated
authentication later on, for example, the Key Pair authentication (WebAuthn, SQRL etc.).
</P>

<P>
Global Input App provides applications with a mechanism that allows users to securely push confidential data from mobile to the applications.
The mobile integration can go beyond than the authentication to have mobile input and mobile control similar to a dedicated mobile app
for the application without the need to develop the actual mobile app. This can be achieved by adding the mobile business logic on the
client-side application.
</P>

<P>
For the websites/applications that do not have <JSExtension {...props}>GIA extension</JSExtension>,
the <ChromeExtension {...props}>Chrome Extension</ChromeExtension> plays the role of a proxy between the web page that is currently loaded in the browser
and the GIA running on user's mobile, routing the data between them via the end-to-end encrypted communication.
</P>

<P>
The <ChromeExtension {...props}>Chrome Extension</ChromeExtension> uses the configurations specified in
the <SupportedWebsites {...props}>Application Control Settings</SupportedWebsites> to locate the HTML elements to interact with and transfer
the data that is received from the GIA running on your mobile, allowing you to operate on the page
directly using your mobile device. In the extension window, you can modify/add/remove those configurations for the website you are visiting.
</P>
<P>
If there is no configuration setting for the website, you can still push the selected data from your mobile to the Chrome Extension first,
and then you can copy and paste the required data to the web page currently loaded on your browser.
In this mode, you can enter content both on your computer and on your mobile,
and the content will be synced automatically with each other. This is convenient if you would like to transfer some content from a computer
to your mobile or vice versa.
Also, you can quickly customise the form displayed on the extension matching what is required by the website that is currently loaded.
The customised form allows you to manage data in your mobile device that is specific to the website.
</P>
<P>

If a website or a web application has the <JSExtension {...props}>GIA extension</JSExtension> included,
you do not need to use the <ChromeExtension {...props}>Chrome Extension</ChromeExtension> to use mobile to operate on it.
If you have a WordPress website, you can install the <WordPressPlugin {...props}>Global Input App Wordpress Plugin</WordPressPlugin>.
This allows you to scan the QR code using GIA and sign in straight away using the credential data stored in your mobile without worrying about installing and activating the Chrome extension.

</P>

<P>
When you are using a computer that does not have Global Input App Chrome Extension installed, and you are visiting a website,
which does not have Global Input App extension embedded,  you can still use the  <TransferFormData {...props}>Transfer Form Data Application
</TransferFormData> to transfer data to there and then copy and paste to wherever you like.
Again, you can use both computer and your mobile to enter content and they will be synced on the fly.
The application allows you to customise the form and then when the QR code is displayed, you can bookmark the URL, saving yourself from going through the process again in the future
when you need the same custom form to transfer data between a computer and your mobile.
</P>


    </NextSection>

    <FirstSection>

      <P>
          If you have a <ReactJSLink {...props}>React</ReactJSLink> web application that is using the password authentication to authenticate users.

          You can use the <ReactJSExtension {...props}>GIA React JS Component</ReactJSExtension> to achieve mobile integrations.
          For example, the following code displays a form on the user's mobile with the <Concept>Username</Concept> and <Concept>Password</Concept> fields
          and a <Concept>Login</Concept> button:

        <Code>
          {`

import {GlobalInputConnect} from 'global-input-react';
import React, { useState } from 'react';

const [username, setUsername]=useState("");
const [password, setPassword]=useState("");

...

let mobileConfig={
initData:{
  form:{
    title:"Sign In",
    id:"###username###@mycompany.com",
    fields:[{
        label:"Username",
        id:"username",
        operations:{
          onInput:username=>setUsername(username)
        }
    },{
        label:"Password",
        id:"password",
        operations:{
          onInput:password=>setPassword(password)
        }
    },{
        label:"Sign In",
        type:"button",
        operations:{
          onInput:()=>signIn()
        }
     }]
   }
  }
};
...
return (<GlobalInputConnect mobileConfig={mobileConfig}/>);
          `}

        </Code>
The <Concept>GlobalInputConnect</Concept> component in the above sample code is responsible for displaying an encrypted QR code, allowing users
to connect to your application by scanning the QR code. This allows users to sign in to your application by
pushing stored credentials from the mobile devices to your application.
        This brings convenience and security by allowing users to set up complicated passwords without the need to remember them,
        also allowing them to sign in securely on shared devices in public view without compromising passwords to prying eyes or hiddence cameras.
        You may try out the sample code above on the <ReactJSFiddle {...props}>JSFiddle</ReactJSFiddle>
      </P>
      <P>

        One of the features of the GIA solution is that you can start from this very simple form to achieve the basic GIA mobile integration, and then
        work on it iteratively to transform it to a more sophisticated mobile integration solution. For example, after the successfull authentication,
        you may like to allow users to continually use the mobile devices to operate on the application, for example,
        playing video content like <SecondScreen {...props}>this demo application</SecondScreen>.
        </P>

        <P>
Global Input App provides an authentication device solution for corporate environments where a common password manager may not always suitable.
Business applications such as JIRA, Confluence, Gitlab, Github, AWS, WordPress, Dropbox  may often need to be used on devices
that are shared. GIA allows employees to use a random and different password for each application without the need to remember them and still
can spedily sign in to the applications by just scanning the encrypted QR codes. GIA also allows employee to change passwords frequently without any pain.
        </P>

        <P>
        When employees need to sign into applications on shared workstations, or on computers attached to the big screens in a conference room or
        in a shared screen environment, GIA allows them to login safely in public view, effectively turning the mobile devices to authentication devices
        for signing in to web applications running on computers. You can read our <AuthenticationWhitePaper {...props}>white paper</AuthenticationWhitePaper> for more information on this topic.
        </P>
      </FirstSection>
      <NextSection>

        <P>
              And upon successful authentication, you can use the same session to provide different JSON data to allow users to use mobile continually to operate on your application. If you are interested, you can have a look at the following the form transfer example in action, and check out its source codes on the github:
        </P>
      </NextSection>
      <FirstSection>
        <SimpleContainer>
          <AuthenticationButtons {...props}/>
          </SimpleContainer>
      </FirstSection>

        </React.Fragment>

);

};

MobileAuthenticationAndBeyond.menu={
    id:config.paths.documentationPage.chromeExtensionHelp.id,
    label:"Mobile Authentication"
}

export default MobileAuthenticationAndBeyond;
