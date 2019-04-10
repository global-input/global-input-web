import React from 'react';

import {examplesLinks,externalsLinks} from '../../links-components';
const {WebSocketServer,WatchIntroduction,ReactJSLink,ReactJSExtension, JSExtension}=externalsLinks;
const images={deviceSolution:require('./images/global-input-device-solution.png')};
const HowItWorks=props=>{
    const {P, Title, Code,Concept, FirstSection,NextSection,Diagram}=props.theme;
    return(
          <React.Fragment>
                <FirstSection>
                  <Title>How It Works</Title>
                </FirstSection>
                <NextSection>
<P>
  Global Input App provides device and web applications with mobile integration solution to enable applications to
  have mobile input, mobile control, mobile personal storage, mobile content encryption & signing, mobile authentication
  and second screen experience functionalities. The mechanism allows applications to implement the mobile logic with its
  existing application context without the need for developing separate mobile apps.
</P>
<Diagram image={images.deviceSolution}/>
  <P>
    Applications implement mobile integrations by including the GIA extension, which allows GIA to connect to the extension securely using end-to-end encryption. The connection from GIA to an application is always initiated with scanning of an Encrypted QR Code, which contains a one-time-use encryption key and other communication channel parameters. The applications can specify mobile user interfaces and process mobile events to implement mobile integration logic within its existing application context. This client-side only for implementing mobile integration does not require separate server-side logic, greatly simplifying the mobile integration processes.
  </P>

<P>

</P>

                </NextSection>

          </React.Fragment>




    );



};


HowItWorks.menu={
  id:"howItWorks",
  label:"How It Works"
};
export default HowItWorks;
