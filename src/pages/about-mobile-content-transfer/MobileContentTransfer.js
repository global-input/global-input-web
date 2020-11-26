import React from 'react';

import SimpleContainer from '../../page-components/section-containers/simple-container';
import ButtonsContainer from '../../page-components/buttons-container';

import { pagesLinks } from '../../page-components/links-components';



const { CopyContentAppButton, ChromeExtensionButton, FirefoxExtensionButton } = pagesLinks.buttons;

const FooterButtons = props => {

  return (
    <ButtonsContainer>
      <CopyContentAppButton>Try It Now</CopyContentAppButton>
      <ChromeExtensionButton />
      <FirefoxExtensionButton />

    </ButtonsContainer>
  )

}


const MobileContentTransfer = props => {

  const { Title, FirstSection, NextSection } = props.theme;

  return (

    <React.Fragment>
      <FirstSection>
        <Title>Mobile Content Transfer</Title>
        <SimpleContainer>
          <FooterButtons {...props} />
        </SimpleContainer>
      </FirstSection>
      <NextSection>
        Global Input App allows you to transfer content between your mobile and a shared device or a computer. It works like using a USB cable connecting your mobile directly to your computer rather than using an intermediate storage system that normally requires sign in on both devices. You start the process by scanning an encrypted QR code that contains the required parameters to start an end-to-end encrypted communication between your devices, then, you can operate on either device to transfer or receive content.  This is particularly useful when you are working in your workplace or in a public facility where you need to work on several shared computers or devices and when you need some information stored on your mobile, for example, your personal information. This capability of transferring data securely between heterogeneous and multi-vendor devices show an interesting approach that may clear the hurdles that are impeding the development of IoT and other connected and smart devices because of the lack of a secure and simple platform that facilitates the interoperability over a multi-device environment.


</NextSection>





    </React.Fragment>

  );

};

MobileContentTransfer.menu = {
  id: "contentTransferTools",
  label: "Mobile Content Transfer"
};
export default MobileContentTransfer;
