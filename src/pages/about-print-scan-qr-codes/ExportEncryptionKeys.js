import React from 'react';


import {externalsLinks,examplesLinks} from '../../links-components';
const {QrcodePrinting,QRCodePrintingListExample} = examplesLinks;
const {WebSocketServer} = externalsLinks;


const ExportEncryptionKeys= props=>{
        const {P, Title,Concept}=props.theme;
        return(

       <React.Fragment>
              <Title>Exporting Encryption Keys</Title>
              <P>
You need to backup/export your encryption keys in your Global Input App, so that you can recover them if your phone is lost or stolen.
              </P>

<P>

You can select and export encryption keys on the <Concept>Keys</Concept> tab on your Global Input App. When you are exporting an encryption key, you will be asked to provide a password.
The app uses the password that you have provided to build a new encryption key for encrypting the encryption key being exported.
</P>
<P>
You can display the encrypted key as QR code on your mobile screen, so that you can scan it immediately with another mobile to import the key into your new phone.
Or you can share an encryption key with your colleges or your friends so that later on you can share secret messages via Encrypted QR codes.
</P>
<P>
  When you scan an QR Code that contains an encrypted key, the app asks you to provide password for decrypting the encrypted key. The app uses the password you have provided to build an new encryption key, and will use it to try to decrypt the encrypted key.

If you have provided a correct password, the app should be able to decrypt it successfully and present you with an option of importing the key into your app.
</P>
              <P>
You can use the <QrcodePrinting {...props}>QR Code Printing Application</QrcodePrinting> to print QR Codes using the encypted content from the encryption key that you have exported.
Scan the QR Code being displayed on <QrcodePrinting {...props}>QR Code Printing Application</QrcodePrinting>, and then press the <Concept>Keys</Concept> button on the Global Input App control panel.
The next screen will present you with a list of encryption keys in your app. You can select the key you would like to export, and scroll further down to find the field where you can provide password for protecting the encryption key.
Having provided the password, you can press the 'Encrypt' button. The app then uses the password you have provided to build a new encryption key and use it to encrypt the encryption key.
The encrypted content will be pushed to <QrcodePrinting {...props}>QR Code Printing Application</QrcodePrinting>. You can modify the label to give it a meaningful name, and then press the <Concept>Print</Concept> button on your mobile to instruct the application to print the QR Code.
</P>

    </React.Fragment>

);

};
export default ExportEncryptionKeys;
