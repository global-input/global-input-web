import React from 'react';

import {externalsLinks,examplesLinks} from '../../links-components';
const {AuthenticationWhitePaper}=externalsLinks;
const {TransferFormData,SecondScreen,SecondScreenList} = examplesLinks;


const SecondScreenExperience = props =>{

        const {P, Title, Code,Concept,FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
         <FirstSection>
              <Title>GIA Solution for Second Screen Experience</Title>
        </FirstSection>
        <NextSection>
              <P>
  When a smart TV application is playing a video, it is always nice to have an option of second screen user interactions
  on the clips that are being played on the big screen.
  The second screen devices can be any handheld devices such as mobiles and tablets. The interactions includes presenting users with information
  on characters, objects, places that the users are watching on the big screen. The applications can even choose to implement logic to allow users
  to control storyline by playing different sets of video based on user selections.
              </P>
              <P>
GIA provides media applications with a simple solution for implementing second screen experience, by introducing mobile integration, allowing a media application to define
second screen logic within its context without implementing extra server side logic or a separate mobile app logic.
              </P>
<P>
For example, for displaying a button button on user's mobile and calling <Concept> playMovie()</Concept> function on the user interaction, the following JSON data can be passed to
the extension library:
</P>
<Code>
{`
type:  "button",
label: "Play",
onInput:value => playMovie()
`}
</Code>
<P>
And then more sophisticated logic and control can be built iteratively.
</P>

<P>
  You may have look at the following example media application, and check out its source codes on the GitHub:
</P>
  <SecondScreenList {...props}/>
<P>
The mobile device integration leads to a unified solution to many other use cases such as
Mobile Authentication, Subscription, Account Update, and Mobile Player Control, Programme search & browse etc.
</P>
</NextSection>
        </React.Fragment>
);

};

export default SecondScreenExperience;
