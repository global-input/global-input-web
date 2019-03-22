import React from 'react';




import {externalsLinks,examplesLinks} from '../../links-components';
const {QrcodePrinting,QRCodePrintingListExample} = examplesLinks;
const {WebSocketServer} = externalsLinks;

const ExportAppSettings=props => {

        const {P, Title,FirstSection,Concept, Code,NextSection}=props.theme;
        return(

       <React.Fragment>
         <FirstSection>
               <Title>Exporting App Settings </Title>
        </FirstSection>
           <NextSection>
              <P>
Global Input App scans an Encrypted QR code being displayed by an application to obtain a one-time-use encryption key for end-to-end encryption
and other communication channel parameters. This allows Global Input App securely connects
to the application and operates on it.
</P>
<P>
The encryption key that is used for encrypting the content of the QR code is part of the Global Input App settings.
It also includes the URL of <WebSocketServer {...props}>WebSocket Proxy server</WebSocketServer> and its <Concept>API Key</Concept> value, and the Security Group ID that the client application uses
  to verify the incoming connection in the same way that a server application uses "API Key" to verify the connection on the server side.
</P>

<P>
You can export your Global Input App settings and print it as QR code using the <QrcodePrinting {...props}>QR Code Printing Application</QrcodePrinting>
</P>
<P>
When you scan the QR code that contains the Global Input App settings, the mobile app presents you with an option of importing the settings into your app.
</P>
<P>
This is useful, when some business application prefers to restrict the Global Input App users to those only that has paired with the applications.
In this cases, the Global Input App instance that is not paired with the application would not be able to connect to the application even if he/she scans the QR code.

</P>
</NextSection>
    </React.Fragment>

);
};

ExportAppSettings.menu={
  id:"exportAppSettings",
  label:"Exporting App Settings"
}
export default ExportAppSettings;
