import React from 'react';

import { pagesLinks } from '../../links-components';
import SimpleContainer from '../../page-components/section-containers/simple-container';
import ButtonsContainer from '../../page-components/buttons-container';


const { SecondScreenButton } = pagesLinks.buttons;


const FooterButtons = props => {

  return (
    <ButtonsContainer>
      <SecondScreenButton>Try It Now</SecondScreenButton>
    </ButtonsContainer>
  )

}



const SecondScreenExperience = props => {

  const { P, Title, FirstSection, NextSection } = props.theme;

  return (

    <React.Fragment>
      <FirstSection>
        <Title>Second Screen Experience</Title>
        <SimpleContainer>
          <FooterButtons {...props} />
        </SimpleContainer>

      </FirstSection>
      <NextSection>
        <P>
          Global Input App provides an intuitive and straightforward way of implementing second screen experience for media applications running on Smart TVs and set-top boxes.
          Responding to media events or any other events raised inside the first screen device, a media application can pass a configuration (JSON) to the extension library specifying what information and what user interface elements that the second screen device should display. On the other hand,  the extension forwards the events generated within the second screen device to the media application in an intuitive way. This allows the media application to respond to the local and remote events, implementing business logic in the same place for both main and second screens. This architecture that centralizes the related business logic for both main and second screen into one place makes it simple and fun to extend an existing media application to support a second screen.

              </P>



      </NextSection>




    </React.Fragment>
  );

};
SecondScreenExperience.menu = {
  id: "secondScreenExperience",
  label: "Second Screen Experience"
}
export default SecondScreenExperience;
