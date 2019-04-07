import React from 'react';


import {config} from '../../configs';

import {externalsLinks,examplesLinks,pagesLinks} from '../../links-components';
import ButtonsContainer from '../../page-components/buttons-container';
import SimpleContainer from '../../page-components/section-containers/simple-container';
const {MobileGameControlExample} = examplesLinks;
const {MobileOperationWhitePaper,ReactJSExtension,JSExtension,ReactJSLink,ReactJSFiddle} = externalsLinks;
const {DocumentationButton,MobileGameControlButton}  = pagesLinks.buttons;


const DocuButton=props=>{
    if(props.isSideMenu){
      return null;
    }
    return (<DocumentationButton>Documentation</DocumentationButton>);
}

const FooterButtons=props=>{

  return(
    <ButtonsContainer>
        <MobileGameControlButton>Game Control Example</MobileGameControlButton>
        <DocuButton {...props}/>
    </ButtonsContainer>
  )

}




const IntroducingMobileInputAndControl=props=>{


        const {P, Title, Code,FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
         <FirstSection>
                <Title>Mobile Input & Control</Title>

          </FirstSection>

           <NextSection>

<P>
Global Input App (GIA) provides device and web applications with a simple, unified and client-only solution for
introducing mobile input and mobile control functionalities, leading to many useful use-cases.
It is especially useful for devices that have no input or limited input components such as Smart TVs, or IoT devices.
It also enhances security for users who use shared devices in public places when the applications require personal data to operate.
The communications between devices are secured with end-to-end encryption that uses a ephemeral(one-time-use) encryption key, which
is obtained from the Encrypted QR code.

</P>

<P>
    The <JSExtension {...props}>GIA extensions</JSExtension> allow applications to implement mobile integrations within their application
    context without the need to develop separate mobiles apps.
</P>
<P>
  For example, let's say that you would like to allow users to use their mobile devices to start a process in your application that is running on a device.
  The related configuration can be as simple as following:

<Code>
{`
  fields:[{
      label:"Start",
      type:"button",
      operations:{
        onInput:()=>start()
      }
  }]
`}
</Code>
  </P>
  <P>
    As mobile devices are playing increasingly important roles in our daily lives,
    the ability to use mobile devices to operate on business applications and transferring
    data between them securely is also getting quite useful. However,
    the cost of developing such a mobile application for a business application is not a trivial task.
              </P>
              <P>
              The Global Input App provides a single mobile app solution for multiple devices and web applications.
              Existing IoT, Smart TV, and web applications can define mobile user interfaces and process mobile events
              within its context to implement mobile integration.
              You may find more information on in <MobileOperationWhitePaper {...props}>our white paper</MobileOperationWhitePaper>.
              </P>
</NextSection>
<FirstSection>
  <SimpleContainer>
        <FooterButtons {...props}/>
  </SimpleContainer>

</FirstSection>

        </React.Fragment>

      );

};

IntroducingMobileInputAndControl.menu={
  id:"mobileInputAndControl",
  label:"Mobile Input and Control"
}
export default IntroducingMobileInputAndControl;
