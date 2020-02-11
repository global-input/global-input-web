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
Powered by device-to-device communication that is secured by end-to-end encryption, the connected application can request data from the Global Input App or instruct it to save data into the mobile app's secure storage. 
The applications can utilize this to turn their existing password-based authentication mechanism into a mobile authentication. 
Users can sign in to the application by simply pushing their credentials to the connected application from their mobile without ever worrying about remembering passwords. Hence, random and long passwords can be enforced seamlessly without affecting convenience or usability of the applications.

Another benefit that comes with this approach is you can sign in securely on shared devices in public view without compromising passwords to prying eyes or hidden cameras that could be anywhere in this day and age.
</P>
<P>
One of such examples is a <WordPressPlugin {...props}> Wordpress Plugin</WordPressPlugin> that allows WordPress websites to have mobile authentication so that users can save their credentials in their app and push them into the Worldpress login form when required. Furthermore, the mobile authentication strategy provides the possibility, if required, smooth transitioning into cryptography-based authentication, since the the app also provides mobile encryption and mobile signing mechanism. Best of all, the connected application can take advantage of the same mobile integration session to allow users to continue to use their mobile to operate on the application to accomplish other operations.
</P>
<P>
The <ChromeExtension {...props}>Chrome Extension</ChromeExtension> allows users to operate on the web applications that do not yet have mobile integration. In this case, the extension acts as a proxy between the web application and the Global Input App, routing the data between them. Also, you can use the <TransferFormData {...props}>Transfer Form Data Application
</TransferFormData> to create customised form transfer data between your computer and your mobile.

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
