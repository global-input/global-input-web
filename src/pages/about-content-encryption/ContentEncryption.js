import React from 'react';
import {examplesLinks,pagesLinks} from '../../links-components';
import SimpleContainer from '../../page-components/section-containers/simple-container';
import ButtonsContainer from '../../page-components/buttons-container';


const {MobileEncryptionAppButton,ChromeExtensionButton,FirefoxExtensionButton}  = pagesLinks.buttons;

const FooterButtons=props=>{

  return(
    <ButtonsContainer>        
        <ChromeExtensionButton/><FirefoxExtensionButton/>
        <MobileEncryptionAppButton>Mobile Encryption Example</MobileEncryptionAppButton>        
    </ButtonsContainer>
  )

}


const ContentEncryption = props=>{
        const {P, Title,FirstSection,Concept, Code,NextSection}=props.theme;
        return(

          <React.Fragment>
              <FirstSection>
                 <Title>Mobile Encryption</Title>
                 <SimpleContainer>
                             <FooterButtons {...props}/>
                       </SimpleContainer>
                 </FirstSection>
                 <NextSection>
<P>
Encrypting personal data is now an essential requirement for applications that collects customer information. Gone are the days that you can store user data into your database without securing your data further, assuming/wishing that underlying provider and infrastructure would have a defense mechanism that can keep all kinds of intruders out. On the other hand, when you encrypt the data, obviously you need to have a strategy of securing the encryption keys that you use in your encryption/decryption processes, otherwise, it would be like locking your front door and putting the key under your doormat.  The mobile encryption provided by the Global Input App offers an extremely easy and intuitive way of securing encryption keys, in a similar way to carrying a key to your front door securely in your pocket.
</P>
<P>
As part of a form data transfer, a connected application can set the type of a field to either "encrypt" or "decrypt" to instructs the mobile app to present you with an appropriate user interface that you can use to encrypt/decrypt the content received and push the result back to the application. In this architecture, the encryption keys that you use to encrypt/decrypt content never leaves your mobile app, leading to an intuitive and secure way of protecting encryption keys.
</P>
<P>
An application can either send a block of content directly to the Global Input App or can request to encrypt/decrypt an encryption key-set that contains all the keys that the user can use to lock/unlock the data that the user is allowed to access, leading to a data-level access control mechanism that does not rely on the underlying data storage system.
</P>

<P>
The mobile app allows you to manage encryption keys inside the mobile app, and they encrypted with a memorable password that you have to provide to unlock them.
</P>

               </NextSection>


       </React.Fragment>
  );

};
ContentEncryption.menu={
  id:"contentEncryption",
  label:"Mobile Encryption"

}


export default ContentEncryption;
