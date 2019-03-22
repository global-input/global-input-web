import React from 'react';
import {externalsLinks,examplesLinks} from '../../links-components';
const {QrcodePrinting,QRCodePrintingListExample} = examplesLinks;

const ContentEncryption = props=>{
        const {P, Title,FirstSection,Concept, Code,NextSection}=props.theme;
        return(

          <React.Fragment>
              <FirstSection>
                 <Title>Mobile Content Encryption</Title>
                 </FirstSection>
                 <NextSection>
                 <P>
    Global Input App allows you to encrypt content using any of the encryption keys in your app.
    The encryption process is carried out inside your mobile app only and only the encrypted content will be sent to the application. And your encryption key will never leave your device.
                  </P>
      <P>
    This means that your encrypted content is safe, and can only be decrypted once imported into your device.
      </P>
      <P>
          One of the examles is the <QrcodePrinting {...props}> QR Code Printing Application </QrcodePrinting>, which allows you to print Encrypted QR Codes using the encryped content that it receives from your mobile.
    </P>
               <P>
    Note that the content will always be encrypted before leaving your mobile, and the encryption key, which you have used to encrypt the content will never leave your device.
    Hence, no applications except your Global Input App in your mobile can decrypt the content. The <QrcodePrinting {...props}>QR Code Printing Application</QrcodePrinting> can only use the encrypted content as the content of the QR code.
               </P>

               <P>
    When you can scan an Encrypted QR Code, the message will be decrypted and displayed immediately on your mobile's screen as long as your app contains the same encryption key that has encrypted content.
    On successful decryption, you will also be presented with an option of importing it into your clipboard.
               </P>
               <P>
    This is a great way of backing up your important passwords if you prefer archiving your passwords offline on papers and filling them as secret documents.
    Decrypting messages will be quick, simple and safe: scan the Encrypted QR code and the decrypted message will be displayed immediately on your mobile screen as long as your app contains the correct encryption key.
               </P>

               <QRCodePrintingListExample {...props}/>
               </NextSection>

       </React.Fragment>
  );

};
ContentEncryption.menu={
  id:"contentEncryption",
  label:"Mobile Content Encryption"

}


export default ContentEncryption;
