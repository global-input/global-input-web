import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const OfflineEncryptedCommunication = props =>{

        const {P, Title,Title2, Code,Concept, FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Encrypted QR Codes</Title>
              <P>
              You can establish an encrypted offline communication with a Global Input App user by pre-sharing one of the managed encryption keys in your app. It is called offline because the network communication is not required for transfering the data.
              </P>
              <P>
Having pre-shared the encryption key, you can use it to encrypt a content and create an encrypted QR code. You can print out the encrypted QR code, or send the image or share it via a video link with the other party to transfer the confidential content. You can do this even in a video conference knowing that only the person, who have shared the encryption key with you, can see the content via his/her mobile screen.
              </P>

              <P>
              <Title2>Arching Passwords</Title2>
              This is also useful if you have the habit of writing down confidential information on a piece of paper. In some companies, the root passwords for some systems are not normally used in day-to-day operations, so they are written down in a paper and stored in a safebox. With the Global Input App, you can just print out the root passwords as an encrypted QR code and nobody else can decrypt the content unless you have shared the encryption key with them.
              </P>
              <P>
              <Title2>Backup Encryption Keys</Title2>
              In case you lose your phone, you need to export and print out the encryption key as a password-protected QR code, and store it in a safe place. When you got your new phone, install the Global Input App, and then scan the password-protected QR code to import the encryption key, and then you will be able to decrypt the encrypted QR code again.
              Let’s say you would like to set up an offline encrypted communication between your current phone and a new phone, and you have installed Global Input App on both.
              </P>

              <P>
              <Title2>Create New Encryption Key</Title2>
              Press “+” button on “Keys” tab to generate a new encryption key, and name the encryption key with the name of your new phone. And then press the “Import” button to import the newly generated encryption key into your app.
              </P>

              <P>
              <Title2>Export Encryption Keys</Title2>
              Press to select the encryption key you would like to share on the “Keys” tab. Then press the “QR Code” button on the bottom of your mobile screen to go into the Export Encryption form, there you can enter a password to encrypt the encryption key that you would like to export. When you press the “Encrypt” button, a QR code will be displayed on your mobile screen.
              </P>

              <P>
              <Title2>Import Encryption Keys</Title2>
              Now if you scan the QR code with the Global Input App on your new mobile, a form for importing the encryption key will be displayed, there you need to type in the password to decrypt the encryption key. If the password is correct, the app will be able to decrypt the encryption key and import it into the app.
After this, an offline encrypted communication will be established between these two mobiles.
              </P>

              <P>
              <Title2>Encrypted QR codes</Title2>
              Now if you press the “+” button on the “Encrypt” tab of of your Global Input App, you can enter a content to encrypt and and the select the encryption key you have just shared/imported. When you press the encrypt button, a QR code will be displayed on your mobile screen. If you scan it with your new mobile, you will see the decrypted content on your mobile screen, and you can press the ”Copy” button to copy the content into your clipboard.
              </P>

              <P>
              <Title2>Print QR Codes on Computer</Title2>
              Load the sample web application with your browser running on your computer.
If you scan the QR code displayed there, a form will be displayed on your mobile screen that is for creating normal QR code. You can now send an encrypted content from your mobile to the content field of your form on your computer. Press the "Encrypt" button on your bottom of your mobile screen to create an encrypted content and send it to the form displayed on your screen. Then you can press ”Print” button to print the QR code.
In order to print out the QR code for an encryption key, you can press the “Key” button, you will be able to create a password protected content for the selected encryption key and send it to the QR code creation form. When you press the "Print" button you can print out a password protected QR code for the selected encryption key. Try to scan the QR code with another phone to see it in action.

              </P>


  </FirstSection>


        </React.Fragment>

);

};
OfflineEncryptedCommunication.menu={
    id:"OfflineEncryptedCommunication",
    label:"Encrypted QR Codes"
}
export default OfflineEncryptedCommunication;
