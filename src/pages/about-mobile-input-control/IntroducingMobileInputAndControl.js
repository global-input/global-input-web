import React from 'react';

import { externalsLinks, pagesLinks } from '../../links-components';
import ButtonsContainer from '../../page-components/buttons-container';
import SimpleContainer from '../../page-components/section-containers/simple-container';

const { JSExtension } = externalsLinks;
const { MobileGameControlButton } = pagesLinks.buttons;



const FooterButtons = props => {

  return (
    <ButtonsContainer>
      <MobileGameControlButton>Try It Now</MobileGameControlButton>
    </ButtonsContainer>
  )

}




const IntroducingMobileInputAndControl = props => {


  const { P, Title, Code, FirstSection, NextSection } = props.theme;

  return (

    <React.Fragment>
      <FirstSection>
        <Title>Mobile Input &amp; Control</Title>
        <SimpleContainer>
          <FooterButtons {...props} />
        </SimpleContainer>

      </FirstSection>

      <NextSection>
        <P>
          Global Input App provides applications with a simple and intuitive client-only solution to achieve
          mobile input and mobile control without the need to develop a separate mobile app.
It is particularly useful for devices that have no input or limited input such as Smart TVs, Set-top boxes, connected devices in IoT, and even some self-service machines. On top of that, it brings better security and convenience for devices/computers that we often use in public places, especially when the applications require personal data to operate on. A user can use his/her mobile to sign into the application, then operate on it,  pushing personal data if requested. The mobile-to-devices operations are powered by the <JSExtension {...props}> Global Input App extension</JSExtension>, allowing applications to specify the mobile user interfaces elements and receiving events generated within the mobile app.
</P>
        <P>
          The following example is a "Hello World" level application code that allows users to use their mobile invoke a play/pause function.

</P>

        <Code>
          {`
  import React, {useState, useEffect } from "react";

  import {useGlobalInputApp} from 'global-input-react';
  const initData = {
    action: "input",
    dataType: "form",
    form: {
      title: "Play/Pause",
      fields: [{
        label: "Play",
        id: "play",
        type:"button"
      },{
        label: "Pause",
        id: "pause",
        type:"button"
      }]
    },
  };
  export default ({play,pause}) => {
    const {field} = useGlobalInputApp({initData});
    useEffect(()=>{
      if(!field){
        return;
      }
      switch(field.id){
        case initData.form.fields[0].id:
                  play();
                  break;
        case initData.form.fields[1].id:
                  pause();
                  break;

      }
    },[field])

      const {connectionMessage,WhenConnected}=globalInputApp;
        return (
          <>
                {connectionMessage}
                <WhenConnected>
                Please operate on your mobile, you should see a "Play" button and a "Pause" button on your mobile screen.
                </WhenConnected>
          </>

        );
  };

`}
        </Code>
      </NextSection>

    </React.Fragment>

  );

};

IntroducingMobileInputAndControl.menu = {
  id: "mobileInputAndControl",
  label: "Mobile Input and Control"
}
export default IntroducingMobileInputAndControl;
