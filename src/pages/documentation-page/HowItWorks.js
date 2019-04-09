import React from 'react';

import {examplesLinks,externalsLinks} from '../../links-components';
const {WebSocketServer,WatchIntroduction,ReactJSLink,ReactJSExtension, JSExtension}=externalsLinks;

const HowItWorks=props=>{
    const {P, Title, Code,Concept, FirstSection,NextSection}=props.theme;
    return(
          <React.Fragment>
                <FirstSection>
                  <Title>How It Works</Title>
                </FirstSection>
                <NextSection>
<P>
  Global Input App provides device and web applications with mobile integration solution to enable applications to have mobile input,
  mobile control, mobile personal storage, mobile content encryption & signing, mobile authentication and second screen functionalities.
  The mechanism allows application to implement the mobile loginc with its existing application context without the need for developing separate mobile apps.
</P>
  <P>
    The <JSExtension {...props}>GIA Extension</JSExtension> allows GIA to connect to the applications via the WebSocket server.


    is responsible for establishing end-to-end encrypted communication to GIA via the WebSocket server.
The communication is always establishing by a user sannning a Encrypted QR Code, which contains all the information how GIA can located and connected to the





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
