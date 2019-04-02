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
  Global Input App (GIA) is a mobile app with extensions, providing applications with
  a universal mobile integration solution.
  It relies on <Concept>Encrypted QR Codes</Concept> to transfer one-time-use encryption keys for
  securing the communications using end-to-end encryption.
</P>
<P>
  Applications do not need extra server-side business services or develop separate mobile apps to
  implement mobile integrations.
  They simply need to specify mobile user interfaces and receive and process mobile events within
  the existing application context.
</P>

<P>
For example, let's that you have written a <ReactJSLink {...this.props}>React</ReactJSLink> application
that is running on computers, Smart TVs, IoT devices, or on self-service machines, and

you would like to display a text field, labelled as <Concept>Content</Concept>, on the user's mobile screen after the user has connected to your application by scanning the encrypted QR code.

And you would like your application to receive the content in real-time as the user is typing on his/her mobile.

</P>
<P>
With <ReactJSExtension {...this.props}>GIA extension</ReactJSExtension>, you can
include the following to achieve your goal:
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
                      operations:{onInput:content=>setContent(content);}
                  }]
            }
      },
    };
    return(<GlobalInputConnect mobileConfig={mobileConfig}/>);
};
`}
                    </Code>
The above code is from the <ContentTransfer {...this.props}>Content Transfer Demo Application</ContentTransfer>.
On scanning the <Concept>Encrypted QR Code</Concept>, a form titles as "Content Transfer" will be displayed
on the mobile screen. The form contains a single field labelled as "Content". If you type on the content
field on your mobile, the application will receive the content in real-time.

The <Concept>GlobalInputConnect</Concept> component is responsible for displaying an encrypted QR code that
contains a one-time-use encryption key among other communication channel parameters.

  </P>

<P>
The following applications demonstrate a few of the use cases that the GIA mobile integration can provide.
In all of the use cases, the mobile operations are always started with the scanning of an <Concept>Encrypted QR Code</Concept>:
                    </P>
                    <ListAllExamples {...this.props}/>


                    <P>


                    </P>
            </FirstSection>

    </React.Fragment>
    );
  }


}
