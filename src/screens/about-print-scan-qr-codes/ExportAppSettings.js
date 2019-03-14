import React from 'react';

import {styles,images} from './styles';
import examples from "../examples";
import PrinterApp from './PrinterApp';
import Title from './Title';
import Para from './Para';
import WebSocketLink from './WebSocketLink';
export default class ExportAppSettings extends React.Component{

  webSocketGithubURL="https://github.com/global-input/global-input-node";
  render(){
        return(

       <React.Fragment>
              <Title>Exporting App Settings</Title>
              <Para>
Global Input App scans an Encrypted QR code being displayed by an application to obtain a one-time-use encryption key for end-to-end encryption and other communication channel parameters. This allows Global Input App securely connects
to the application and operates on it.
</Para>
<Para>
The encryption key that is used for encrypting the content of the QR code is part of the Global Input App settings. It also includes the URL of <WebSocketLink/> and its <b>API Key</b> value, and the Security Group ID that the client application uses to verify the incoming connection in the same way that a server application uses "API Key" to verify the connection on the server side.
</Para>

<Para>
You can export your Global Input App settings and print it as QR code using the <PrinterApp>QR Code Printing Application</PrinterApp>.
</Para>
<Para>
When you scan the QR code that contains the Global Input App settings, the mobile app presents you with an option of importing the settings into your app.
</Para>
<Para>
This is useful, when some business application prefers to restrict the Global Input App users to those only that has paired with the applications.
In this cases, the Global Input App instance that is not paired with the application would not be able to connect to the application even if he/she scans the QR code.

</Para>


    </React.Fragment>

);
  }
}
