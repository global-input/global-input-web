import React from 'react';
import {Link} from 'react-router-dom';
import {styles,images} from './styles';

import BorderedWhite from '../../page-components/themes/bordered-white';

import {examplesLinks} from '../../links-components';
import WatchIntroduction from './watch-introduction';


const {ListAllExamples}=examplesLinks;



export default class ClientSideOnlySolution extends React.Component{

  static menu={
        id:"clientdevice",
        label:"Client Side Only Solution"
  }
  render(){
    const {P, Title, Code,Concept, FirstSection,NextSection}=this.props.theme;
    return(
      <React.Fragment>

            <FirstSection>
              <WatchIntroduction/>

                  <Title>Client Side Only Solution</Title>
                  <P>
                    Global Input App provides applications with a <Concept>client-side-only</Concept> solution that does not require any extra server-side implementation, no extra API to implement or call, not extra cloud storage, not extra subscriptions, and all business logics are implemented on the client side by
                    including a <Concept>extension library</Concept>, passing JSON data and receiving even calls when the user press the button on the mobile.
                  </P>
                  <P>
                      For example, if you would like to display a button on user’s mobile after user scans the encrypted QR code presented by your application,
                      and you would like to call a <Concept>playMovie()</Concept> function when the user presses the button, you just need to provide the following:
                  </P>
                  <Code>
                    {`
      type:  "button",
      label: "Play",
      onInput:value => playMovie()
                    `}
                  </Code>
                  <P>
                    And if you would like the user to enter content via his/her mobile and sent to your Smart TV app, you just need to provide the following:
                  </P>
                  <Code>
                    {`
     type:  "text",
     label: "Search",
     onInput:value => searchContent(value)
                    `}
                  </Code>
                  <P>
                      If you are interested, you can have a look at the examples in action, and check out their sources codes on the Github:
                  </P>
                  <ListAllExamples {...this.props}/>


            </FirstSection>



    </React.Fragment>
    );
  }


}
