import React from 'react';
import {Link} from 'react-router-dom';
import {styles,images} from './styles';

import BorderedWhite from '../../page-components/themes/bordered-white';

import {examplesLinks,externalsLinks} from '../../links-components';



const {ListAllExamples,ContentTransfer}=examplesLinks;

const {WebSocketServer,WatchIntroduction,ReactJSLink,ReactJSExtension}=externalsLinks;

export default class MobileIntegration extends React.Component{

  static menu={
        id:"clientdevice",
        label:"Mobile Integration"
  }
  render(){
    const {P, Title, Code,Concept, FirstSection,NextSection}=this.props.theme;
    return(
      <React.Fragment>

            <FirstSection>
              <WatchIntroduction>Watch Intro</WatchIntroduction>

                  <Title>Mobile Integration</Title>
                    <P>
      Global Input App (GIA) is a mobile app with extensions,
      providing applications with a universal mobile integration solution.
      It relies on <Concept>Encrypted QR Codes</Concept> to transfer one-time-use encryption keys for end-to-end encryption to secure communications between devices.
</P>
<P>
  Applications do not need extra server-side business services or develop separate mobile apps to  implement mobile integrations.
They simply need to specify mobile user interfaces and receive and process mobile events within the existing application context.
</P>

<P>
For example, let's assume that you have written a <ReactJSLink {...this.props}>React</ReactJSLink> application,
and you would like to allow users to scan an encrypted QR code to connect to your application.
Having established the secure connection,  you would like to display a text field, labelled as <Concept>Content</Concept>,
on the user's mobile screen, and you would like your application to receive the content in real-time as the user
is typing on his/her mobile.

</P>
<P>
After including the <ReactJSExtension {...this.props}>GIA extension module</ReactJSExtension>, you can
achieve what you want just by the following lines of code :
<Code>
{`
import React, { useState } from 'react';
import {GlobalInputConnect} from 'global-input-react';
...
export default props=>{
    const [content, setContent]=useState("");
    let mobileConfig={
      initData:{
          form:{
                  title:"Content Transfer",
                  fields:[{
                      label:"Concent",
                      operations:{
                          onInput:content=>setContent(content)
                      }
                  }]
            }
      },
    };
    return(<GlobalInputConnect mobileConfig={mobileConfig}/>);
};
`}
                    </Code>
The above sample is taken from the <ContentTransfer {...this.props}>Content Transfer Demo Application</ContentTransfer>.
When you scan the <Concept>Encrypted QR Code</Concept>, a form titles as "Content Transfer" will be displayed
on your mobile screen. The form contains a single field labelled as "Content". If you type on the content
field on your mobile, the application will receive the content in real-time.

The <Concept>GlobalInputConnect</Concept> component is responsible for displaying an encrypted QR code.

  </P>

<P>
The following applications demonstrate a few of the use cases that the GIA mobile integration can provide.
In all of the use cases, the mobile operations are always started with a scanning of an <Concept>Encrypted QR Code</Concept>:
                    </P>
                    <ListAllExamples {...this.props}/>

                    <P>
This is especially useful when you are writing applications for running on computers, Smart TVs, IoT devices, or on self-service machines.

                    </P>
            </FirstSection>

    </React.Fragment>
    );
  }


}
