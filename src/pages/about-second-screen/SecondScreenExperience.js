import React from 'react';

import {externalsLinks,examplesLinks,pagesLinks} from '../../links-components';
import SimpleContainer from '../../page-components/section-containers/simple-container';
import ButtonsContainer from '../../page-components/buttons-container';
const {AuthenticationWhitePaper}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;

const {DocumentationButton,SecondScreenButton}  = pagesLinks.buttons;


const DocuButton=props=>{
    if(props.isSideMenu){
      return null;
    }
    return (<DocumentationButton>Documentation</DocumentationButton>);
}
const FooterButtons=props=>{

  return(
    <ButtonsContainer>
        <SecondScreenButton>Example</SecondScreenButton>
        <DocuButton {...props}/>
    </ButtonsContainer>
  )

}



const SecondScreenExperience = props =>{

        const {P, Title, Code,Concept,FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
         <FirstSection>
              <Title>Second Screen Experience</Title>
        </FirstSection>
        <NextSection>
              <P>
  When a smart TV application is playing a video, it is always nice to have an option of a second screen feature, allowing users to use their mobile to interact with the applications. The second screen devices can be any handheld devices such as mobiles or tablets, and the interactions can be anything related to the clips that the application is currently playing.   For example, it can be information about the characters, scenes that are shown on the screen, or features allowing users to post screens shots to social media platforms, or simple media controller,  or sophisticated control like controlling the storylines by selecting different sets of clips in the next breakpoint.
              </P>
              <P>
Global Input App (GIA) provides media applications with a simple mobile integration solution, which allows applications to implement screen experience without implementing extra server-side logic or separate mobile apps.
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
SecondScreenExperience.menu={
  id:"secondScreenExperience",
  label:"Second Screen Experience"
}
export default SecondScreenExperience;
