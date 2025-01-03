import React from "react";
import { Helmet } from 'react-helmet'
import { config } from "../web-config";
import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";
import { usePageTitle } from "../page-metadata";
import { Container, Content, Title, P, Background, ContactInfo, ContactItem, SubTitle, Address, AddressLine, BulletList, BulletItem} from "./layout";

const PrivacyPage: React.FC = () => {
 const mobile = useConnectToMobile();
 usePageTitle("Global Input App - Privacy Policy");

 return (
   <Background>
     <PageHeader selected={config.paths.privacy.path} />
     <Container>
       <Content>
         <Title>Privacy Policy</Title>

         <SubTitle>Our Privacy Commitment</SubTitle>
         <P>
           This Privacy Policy describes how Iterative Solution Limited handles information in the Global Input App ecosystem. Our core commitments:
         </P>
         <BulletList>
           <BulletItem>No data collection or server storage</BulletItem>
           <BulletItem>All data stays on user devices</BulletItem>
           <BulletItem>End-to-end encryption for all communications</BulletItem>
         </BulletList>

         <SubTitle>App Permissions</SubTitle>
         <P>The app requires minimal permissions:</P>
         <BulletList>
           <BulletItem>Internet access for device communication</BulletItem>
           <BulletItem>Camera access for QR code scanning only</BulletItem>
           <BulletItem>No other permissions needed or requested</BulletItem>
         </BulletList>

         <SubTitle>Data Security</SubTitle>
         <P>Security is built into every aspect:</P>
         <BulletList>
           <BulletItem>End-to-end encryption for all device communications</BulletItem>
           <BulletItem>Local device storage only with encrypted keys</BulletItem>
           <BulletItem>HTTPS protocol for added security layer</BulletItem>
           <BulletItem>User-provided password protection</BulletItem>
         </BulletList>

         <SubTitle>User Control</SubTitle>
         <P>You have complete control of your data:</P>
         <BulletList>
           <BulletItem>All data stored locally on your device</BulletItem>
           <BulletItem>Encryption keys never leave your device</BulletItem>
           <BulletItem>Direct data deletion through app controls</BulletItem>
           <BulletItem>No server-side data recovery needed</BulletItem>
         </BulletList>

         <SubTitle>Third-Party Components</SubTitle>
         <P>We use only essential third-party components:</P>
         <BulletList>
           <BulletItem>No data collection by third-party code</BulletItem>
           <BulletItem>Platform metrics only (App Store, Play Store)</BulletItem>
           <BulletItem>Minimal AWS service logging</BulletItem>
           <BulletItem>Compliance with Play Store policies</BulletItem>
         </BulletList>

         <SubTitle>Data Sharing</SubTitle>
         <P>Your data remains yours:</P>
         <BulletList>
           <BulletItem>No third-party data sharing</BulletItem>
           <BulletItem>User-initiated sharing only</BulletItem>
           <BulletItem>End-to-end encrypted transfers</BulletItem>
           <BulletItem>No data sales or transfers</BulletItem>
         </BulletList>

         <SubTitle>Policy Updates</SubTitle>
         <P>
           We may update this policy periodically. Continued use of the app constitutes acceptance of any updates.
         </P>

         <SubTitle>Contact Us</SubTitle>
         <ContactInfo>
           <ContactItem>
             <strong>Email:</strong> <a href="mailto:info@iterativesolution.co.uk">info@iterativesolution.co.uk</a>
           </ContactItem>
           <ContactItem>
             <strong>Phone:</strong> +44 (0) 20 3290 6278
           </ContactItem>
           <ContactItem>
             <strong>Address:</strong>  
             <Address>
               <AddressLine>Iterative Solution Limited</AddressLine>
               <AddressLine>Kemp House, 124 City Road</AddressLine>
               <AddressLine>London, EC1V 2NX</AddressLine>
             </Address>
           </ContactItem>
         </ContactInfo>

         <ConnectButton mobile={mobile} label="Connect Mobile" />
         <ConnectWindow mobile={mobile} />
         
       </Content>
       
     </Container>
     <PageFooter />
   </Background>
 );
};

export default PrivacyPage;