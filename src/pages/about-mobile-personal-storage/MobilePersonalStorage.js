import React from 'react';


import { pagesLinks } from '../../links-components';
import SimpleContainer from '../../page-components/section-containers/simple-container';
import ButtonsContainer from '../../page-components/buttons-container';




const { SendMessageAppButton, ChromeExtensionButton, FirefoxExtensionButton } = pagesLinks.buttons;


const FooterButtons = props => {

  return (
    <ButtonsContainer>
      <SendMessageAppButton>Try It Now</SendMessageAppButton>
      <ChromeExtensionButton />
      <FirefoxExtensionButton />
    </ButtonsContainer>
  )

}




const MobilePersonalStorage = props => {
  const { P, Title, FirstSection, NextSection } = props.theme;
  return (
    <React.Fragment>
      <FirstSection>
        <Title>Mobile Personal Storage</Title>
        <SimpleContainer>
          <FooterButtons {...props} />
        </SimpleContainer>
      </FirstSection>
      <NextSection>

        <P>
          As the security breaches continue to plague the digital world across all directions and all facets of organizational structures that we rely on every day, developing a personalized service often requires a considerable effort on securing data, leading to sometimes a disproportionately high cost when compared to the trivial business logic that it needs to implement.  The Global Input App provides applications with an approach that allows users to store their data in their own mobile app's encrypted storage, and push them to a connected application when required. Thus, applications can offer customers a wide variety of personalized services without actually storing sensitive user information in their databases. For example, since takeaways and restaurants need most of the customer information only at the point of each service, a user can push the information from his/her mobile app to the application on-demand, eliminating the need for applications to store those data and worry about how to secure them.  Also, a media application can request the mobile app to store the calculated parameters that describe the user's viewing habit, and later request them from the user whenever it needs to prepare a set of programmes that closely reflect the user's taste.
          </P>
      </NextSection>
    </React.Fragment>
  );
};
MobilePersonalStorage.menu = {
  id: "mobilePersonalStorage",
  label: "Mobile Personal Storage"
}
export default MobilePersonalStorage;
