import React from 'react';

import {styles,images} from './styles';
import examples from "../examples";
import PrinterApp from './PrinterApp';
import Title from './Title';
import Para from './Para';

export default class ExportEncryptionKeys extends React.Component{


  render(){
        return(

       <React.Fragment>
              <Title>Exporting Encryption Keys</Title>
              <Para>
You need to backup/export your encryption keys in your Global Input App, so that you can recover them if your phone is lost or stolen.
</Para>

<Para>

You can select and export encryption keys on the <b>Keys</b> tab on your Global Input App. When you are exporting an encryption key, you will be asked to provide a password.
The app uses the password that you have provided to build a new encryption key for encrypting the encryption key being exported.
</Para>
<Para>
You can display the encrypted key as QR code on your mobile screen, so that you can scan it immediately with another mobile to import the key into your new phone.
Or you can share an encryption key with your colleges or your friends so that later on you can share secret messages via Encrypted QR codes.
</Para>
<Para>
  When you scan an QR Code that contains an encrypted key, the app asks you to provide password for decrypting the encrypted key. The app uses the password you have provided to build an new encryption key, and will use it to try to decrypt the encrypted key.

If you have provided a correct password, the app should be able to decrypt it successfully and present you with an option of importing the key into your app.
</Para>
              <Para>
You can use the <PrinterApp>QR Code Printing Application</PrinterApp> to print QR Codes using the encypted content from the encryption key that you have exported.
Scan the QR Code being displayed on <PrinterApp>the QR Code Printing Application</PrinterApp>, and then press the <b>Keys</b> button on the Global Input App control panel.
The next screen will present you with a list of encryption keys in your app. You can select the key you would like to export, and scroll further down to find the field where you can provide password for protecting the encryption key.
Having provided the password, you can press the 'Encrypt' button. The app then uses the password you have provided to build a new encryption key and use it to encrypt the encryption key.
The encrypted content will be pushed to <PrinterApp>the QR Code Printing Application</PrinterApp>. You can modify the label to give it a meaningful name, and then press the <b>Print</b> button on your mobile to instruct the application to print the QR Code.
</Para>

    </React.Fragment>

);
  }
}
