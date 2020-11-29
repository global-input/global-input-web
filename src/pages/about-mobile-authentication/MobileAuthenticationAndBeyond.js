import React from 'react';

import { externalsLinks, pagesLinks } from '../../page-components/links-components';

import SimpleContainer from '../../page-components/section-containers/simple-container';
import ButtonsContainer from '../../page-components/buttons-container';
import { ChromeExtensionButton, FirefoxExtensionButton } from '../../page-components/external-links';


const { ChromeExtension, FirefoxExtension, ReactJSExtension } = externalsLinks;

const { TransferFormDataButton } = pagesLinks.buttons;


const AuthenticationButtons = props => {

  return (
    <ButtonsContainer>
      <ChromeExtensionButton />
      <FirefoxExtensionButton />
      <TransferFormDataButton>Form Data Transfer</TransferFormDataButton>
    </ButtonsContainer>
  )

}




export const MobileAuthenticationAndBeyond = props => {

  const { P, Title, Code, FirstSection, NextSection } = props.theme;



  return (

    <React.Fragment>
      <FirstSection>
        <Title>Mobile Authentication</Title>
        <SimpleContainer>
          <AuthenticationButtons {...props} />
        </SimpleContainer>
      </FirstSection>
      <NextSection>

        <P>
          The Mobile Integration provided by Global Input App allows you to use your mobile device to carry out operations securely on applications that are running on computers, set-top boxes, smart TVs,  connected devices in IoT(Internet of Things), and maybe even some self-service machines. The combination of this capability with the Encrypted Storage provided by the mobile app allows you to use mobile authentication to authenticate yourself against an application that uses a simple password-based authentication mechanism.  You can sign in securely in public view without worrying about revealing your credentials to prying eyes or hidden cameras that could be anywhere in this day and age. This can be achieved without requiring any modifications to the existing authentication logic of the application. Most of all, you do not need to remember a master password that would be required in a generic password manager solution. Entering a master password on multiple devices would risk exposing all of your passwords stored in the password manager. Lastly, you can continue using the same session to carry on other business operations using your mobile device.
</P>
        <P>
          The cross-device communication is secure because it is secured with end-to-end encryption at the device-to-device level, in which the encryption key that starts the session is always generated dynamically within the device at the start of of the session and can be accessed only via an Encrypted QR Code. This means that each device-to-device session has to start from the same physical location where the device is located unless the QR Code is sent over to a remote location via video streaming or any other medium, enhancing the security further.
</P>
        <P>
          Also, your data in the mobile app always stays encrypted inside your device's storage/memory and decrypted only at the point of use and discarded immediately after. Since the mobile app does not have any server or cloud storage to store your data, you need to export and backup your data yourself, which is incredibly easy to do and secure by its nature. Exported data is automatically protected because you can export the data only in its encrypted form, and you can import the data back into your mobile app only if you have the same encryption key that you have used when encrypting the data. This implicates that you need to export and back up the encryption key as well considering you might lose your mobile device. Backing up or sharing encryption is a straightforward and intuitive process because you can export an encryption key only in its encrypted form, which is encrypted with a memorable password that you provide when you are exporting it. The encrypted QR codes mechanism allows you to back up or share encryption keys between your devices extremely easy and secure. All of these processes are constructed to allow you to have complete control over the encryption of your data as well as the data itself.
</P>

      </NextSection>

      <FirstSection>

        <P>
          The browser extensions (<ChromeExtension {...props}>Chrome</ChromeExtension>, <FirefoxExtension {...props}>Firefox</FirefoxExtension>) and form transfer applications are example React JS applications demonstrating how you can use the <ReactJSExtension {...props}>extension library</ReactJSExtension> to implement the Mobile Integration. The following is the source code that is simple enough to serve as a "Hello World" code for  web applications to have direct support for Global Input App support to allows user to use the mobile device to sign in to applications:
</P>


        <Code>
          {`
import React, {useState,useRef, useEffect} from 'react';

import {useGlobalInputApp} from 'global-input-react';

const initData={
      action:"input",
      dataType:"form",
      form:{
        title:"Sign In",
        id:"###username###@global-input-test",
        fields:[{
          label:"Username",
          id:"username",
          value:"test"
        },{
          label:"Password",
          id:"password",
          value:"test"
        },{
          label:"Login",
          type:"button",
          id:"login"
        }]
      }
};

export default ({login})=>{
   const [username, setUsername]=useState('');
   const [password, setPassword]=useState('');
   const {connectionMessage,field}=useGlobalInputApp({initData});

    useEffect(()=>{
        if(!field){
          return;
        }
        switch(field.id){
          case initData.form.fields[0].id:
                  setUsername(field.value);
                  break;
          case initData.form.fields[1].id:
                  setPassword(field.value);
                  break;
          case initData.form.fields[2].id:
                  login(username,password);
                  break;
        }
    },[field]);
        return(
                <>
                        {connectionMessage}
                        <div>Username:{username}</div>
                        <div>Password:{password}</div>
                </>
                );
};

  `}</Code>
        <P>
          When it comes to using applications on shared or public devices (i.e, computers in a conference room), the security and convenience brought by mobile integration is enormous. This is especially true for business applications like JIRA, Confluence, GitLab, Github, Dropbox, to name a few.  You can sign in to the applications safely, while the computer screen, your mobile screen, your actions, and your typings are in public view.
      </P>


      </FirstSection>
    </React.Fragment>

  );

};
