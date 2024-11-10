import React from "react";
import { Helmet } from 'react-helmet'
import { config } from "../mobile-app/configs";
import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";
import { usePageTitle } from "../page-metadata";

import { Container, Content, Title, P, Background, ContactInfo, ContactItem,SubTitle, Address, AddressLine} from "./layout";

const PrivacyPage: React.FC = () => {
  const mobile = useConnectToMobile();
  usePageTitle("Global Input App - Privacy Policy");

  return (
    <Background>
      <PageHeader selected={config.paths.privacy.path} />
      <Container>
        <Content>
          <Title>Privacy Policy</Title>
          <SubTitle>Introduction</SubTitle>
          <P>
            
            This Privacy Policy describes how Iterative Solution Limited (“we,” “us,” “our”) handles your information in relation to the Global Input App and its related software components, including mobile applications, extensions, and libraries. We are committed to protecting your privacy and ensuring the security of your data. This policy applies to our website globalinput.co.uk and all software components associated with the Global Input App.
          </P>
          <SubTitle>Data Collection</SubTitle>
          <P>
          
          We do not directly collect, store, or process any personal or sensitive user data through the Global Input App. Any data related to app usage or performance is provided directly by platform providers such as Google Play Store and Apple App Store. This includes information like app download counts, user ratings, and aggregated usage metrics.

          </P>
          <SubTitle>Permissions</SubTitle>
          <P>
          

          The app only requires permission for Internet access and access to the device’s camera to scan QR codes. No other permissions are requested or needed.

          </P>
          <SubTitle>Third-Party Services</SubTitle>
          <P>
          
          The Global Input App utilises standard third-party software components. We have ensured that these components do not collect or sell personal or sensitive user data. Please note that platform providers like Google Play Store and Apple App Store may collect usage data, and AWS services may log service usage for operational purposes. However, we do not actively use these platforms and services to collect or track users beyond what is necessary for the app’s functionality.

          </P>
          <P>
          We do not use any third-party code, SDKs, or libraries that collect or transmit sensitive user data without the user’s knowledge or consent. All third-party components comply with Google Play Developer Program policies.
          </P>
          <SubTitle>Data Security</SubTitle>
          <P>
          The Global Input App ensures the security of your data through end-to-end encryption for all communications between the app and connected devices. This encryption ensures that your data remains secure and private during transmission, and this is on top using HTTPS. The encryption keys never leave your mobile device and are secured with a memorable password provided by you.

          </P>
          <SubTitle>User Rights and Control</SubTitle>
          <P>
          You retain full control over your data within the Global Input App. All your data is stored locally on your device’s storage, encrypted with keys that are also encrypted with your provided password. We do not have access to your data, and we do not store it on any server or cloud storage.

If you wish to delete your data, you can do so directly within the app by deleting the stored data or by uninstalling the app. Since no data is stored on our servers, we cannot assist in recovering or deleting data beyond what you control on your own device.

          </P>
          <SubTitle>Data Retention and Deletion</SubTitle>
          <P>
          The Global Input App does not retain any user data on back-end servers. All data is stored locally on your device and is encrypted. You are responsible for managing, backing up, and deleting your data as needed. We do not have the ability to recover data once deleted from your device.

          </P>
          <SubTitle>Data Sharing</SubTitle>
          <P>
          The Global Input App does not share any user data with third parties. Any data sharing that occurs is initiated by you, the user, at the time of usage, through a manual process to connected business applications. This process is protected with end-to-end encryption and requires your active confirmation.
          </P>
          <P>
          We do not and will not sell any personal or sensitive user data to third parties.
          </P>
          <SubTitle>Changes to This Privacy Policy</SubTitle>
          <P>
          We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically. Your continued use of the app constitutes your acceptance of the updated policy.

          </P>
          <SubTitle>Contact Information</SubTitle>

          <P>
          If you have any questions or concerns regarding this Privacy Policy, please contact us at:
          </P>
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
              <AddressLine>
              Iterative Solution Limited
              </AddressLine>
              <AddressLine>

              Kemp House, 124 City Road
              </AddressLine>
              <AddressLine>
                London, EC1V 2NX
               </AddressLine>
              </Address>
              
            </ContactItem>
          </ContactInfo>

          <ConnectButton mobile={mobile} label="See how it works" />
          <ConnectWindow mobile={mobile} />
        </Content>
      </Container>
      <PageFooter />
    </Background>
  );
};

export default PrivacyPage;



