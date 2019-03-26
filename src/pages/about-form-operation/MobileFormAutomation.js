import React from 'react';


import {externalsLinks,examplesLinks} from '../../links-components';
const {SendMessageListExample} = examplesLinks;


const MobileFormAutomation=props=>{
    const {P,Title,ListLinks,Code,Concept,FirstSection,NextSection}=props.theme;
    return(
      <React.Fragment>
        <FirstSection>
          <Title>Mobile Form Automation</Title>
        </FirstSection>
        <NextSection>
          <P>
            GIA solution provides applications with an option of allowing users to store their personal data in their mobile devices and push them on demand when they are needed by the applications. This might be an attractive option for some simple applications that require personal data occasionally.
          </P>
          <SendMessageListExample {...props}/>
          <P>
            Global Input App provides applications with encrypted storage on user mobiles. The data are encrypted with encryption keys that are in turn encrypted with a master encryption key generated from the user app password. The encryption hierarchy ensures that even if somebody has physically got hold of the device, and bypassed the device security such as biometric authentication or device password authentication somehow, the data is still safe. Also, data will always stay encrypted until to the point of actual use and the decrypted data will be discarded immediately after the use, minimizing the reliance on the system security.
          </P>
          <P>
            In the current climate of the digital world, where the risk to the data is coming from all directions,  applications could not risk not to put significant effort into securing user data. The requirement (GDPR compliance for example) for obtaining user consent on collecting and processing the user data may bring extra consideration as well.
          </P>
          <P>
            Hence, allowing users to take control of their own data is a great option for both users and application vendors. The GIA solution not only provides applications with an option of  storing personal data on mobile devices and pushing data back into the applications on demand but also an option of storing master keys for data encryption processes in applications. This means that no personal data access is possible without user unlocking the data first every time.
          </P>
          <P>
            The availability of portable encrypted data storage for storing sensitive data may provide a possibility of automating some form operations, such as subscription, job applications etc.
          </P>
</NextSection>


      </React.Fragment>
    );
};
MobileFormAutomation.menu={
  id:"formAutomation",
  label:"Mobile Form Automation"
}
export default MobileFormAutomation;
