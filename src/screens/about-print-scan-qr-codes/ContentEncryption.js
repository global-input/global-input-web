import React from 'react';


import {styles,images} from './styles';
import examples from "../examples";
import PrinterApp from './PrinterApp';
import Title from './Title';
import Para from './Para';

export default class ContentEncryption extends React.Component{


  render(){
        return(

       <React.Fragment>
              <Title>Mobile Content Encryption</Title>
              <Para>
Global Input App allows you to encrypt content using any of the encryption keys in your app.
The encryption process is carried out inside your mobile app only and only the encrypted content will be sent to the application. And your encryption key will never leave your device.
        </Para>
          <Para>
This means that your encrypted content is safe, and can only be decrypted once imported into your device.
</Para>

                  <Para>
One of the examles is <PrinterApp>QR Code Printing Application</PrinterApp>, which allows you to print Encrypted QR Codes using the encryped content that it receives from your mobile.
</Para>
            <Para>
Note that the content will always be encrypted before leaving your mobile, and the encryption key, which you have used to encrypt the content will never leave your device.
Hence, no applications except your Global Input App in your mobile can decrypt the content. <PrinterApp>The application</PrinterApp> can only use the encrypted content as the content of the QR code.
            </Para>

            <Para>
When you can scan an Encrypted QR Code, the message will be decrypted and displayed immediately on your mobile's screen as long as your app contains the same encryption key that has encrypted content.
On successful decryption, you will also be presented with an option of importing it into your clipboard.
            </Para>
            <Para>
This is a great way of backing up your important passwords if you prefer archiving your passwords offline on papers and filling them as secret documents.
Decrypting messages will be quick, simple and safe: scan the Encrypted QR code and the decrypted message will be displayed immediately on your mobile screen as long as your app contains the correct encryption key.
            </Para>
              {examples.renderQRPrintingScreen('QR Code Printing Application')}

    </React.Fragment>

);
  }
}
