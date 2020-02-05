import React from 'react';
import {Link} from 'react-router-dom';
import {styles,images} from './styles';

import BorderedWhite from '../../page-components/themes/bordered-white';

import {examplesLinks,externalsLinks,JSExtension} from '../../links-components';



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
            Global Input App (GIA) and its extensions libraries form a secure integration platform for various smart devices that we use in our everyday life and workspaces. Contrary to the common approaches that emphasize the data security within servers and processes on servers and cloud platforms,  this solution presents a strategy that shifts the fucus towards the device applications. The device-to-device communications are facilitated by WebSocket servers and secured with end-to-end encryption that is powered by encrypted QR codes containing one-time-use encryption key. 
                  </P>
                  <P>
                  From a device application's perspective, the extension library extends the mobile device environments into the device application's runtime context, allowing it define mobile user interface elements in the form of JSON data, and receives events in the form of callbacks to implement the business logic across devices.
</P>

<P>
For example, imagine you have an React JS application for IoT or Smart TV, and you would like to allow users to use mobiles to operate on it or transfer data between them. 

</P>
<P>
After importing the <ReactJSExtension {...this.props}>GIA extension module</ReactJSExtension>, the following codes allows you to specify an 
text area on the mobile and receive input events from mobile:
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
