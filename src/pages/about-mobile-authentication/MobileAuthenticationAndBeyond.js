import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks,pagesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';
import SimpleContainer from '../../page-components/section-containers/simple-container';
import ButtonsContainer from '../../page-components/buttons-container';



const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,WatchAuthenticationDemo,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayTutorialVideoIcon, ReactJSExtension,JSExtension,ReactJSLink,ReactJSFiddle}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;
const {TransferFormDataButton,ChromeExtensionButton,FirefoxExtensionButton,WordPressButton,DocumentationButton}  = pagesLinks.buttons;

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
        <FirefoxExtensionButton/>        
        <TransferFormDataButton>Transfer Form</TransferFormDataButton>        
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
              <SimpleContainer>
          <AuthenticationButtons {...props}/>
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
      The following examples codes demonstrate how you can attach the password-based authentication of a React JS application to Global Input App to allow users to use their mobile to carry out sign-in operation.
</P>


        <Code>
          {`
export default ({setUsername,setPassword,signIn})={  
  const mobile = useRef(null);
  useEffect(()=>{
    let mobileConfig={
        initData:{
          form:{
            title:"Sign In",
            id:"###username###@mycompany.com",
            fields:[{
                label:"Username",
                id:"username",
                operations:{
                  onInput:setUsername
                }
            },{
                label:"Password",
                id:"password",
                operations:{
                  onInput:setPassword
                }
            },{
                label:"Sign In",
                type:"button",
                operations:{
                  onInput:signIn
                }
            }]
          }
          }
        };
        mobile.current = createMessageConnector();
        mobile.current.connect(mobileConfig);
  },[])
  
};

  `}

        </Code>
      
        

        <P>

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
      
        </React.Fragment>

);

};

MobileAuthenticationAndBeyond.menu={
    id:config.paths.documentationPage.chromeExtensionHelp.id,
    label:"Mobile Authentication"
}

export default MobileAuthenticationAndBeyond;
