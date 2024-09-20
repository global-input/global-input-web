import React from "react";
import { config } from "../configs";
import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";
import { usePageTitle } from "../page-metadata";

import { Container, Content, Title, P, Background, ContactInfo, ContactItem } from "./layout";

const PrivacyPage: React.FC = () => {
  const mobile = useConnectToMobile();
  usePageTitle("Global Input App - Privacy Policy");

  return (
    <Background>
      <PageHeader selected={config.paths.privacy.path} />
      <Container>
        <Content>
          <Title>Privacy Policy</Title>
          <P>
            This Privacy Policy describes how Iterative Solution Limited ("we," "us," "our") handles your
            information in relation to the Global Input App and its related software components, including
            mobile applications, extensions, and libraries. We are committed to protecting your privacy and
            ensuring the security of your data. This policy applies to our website globalinput.co.uk and all
            software components associated with the Global Input App.
          </P>
          <P>
            <strong>Data Collection:</strong> We do not collect, store, or process any personal or sensitive user data
            through the Global Input App. Any insights related to app usage or performance are provided directly
            by platform providers such as Google Play Store and Apple App Store. We do not use third-party
            analytics services that collect or track user data.
          </P>
          <P>
            <strong>Permissions:</strong> The app only requires permission for Internet access and access to the
            device’s camera to scan QR codes. No other permissions are requested or needed.
          </P>
          <P>
            <strong>Third-Party Services:</strong> The Global Input App does not integrate with third-party services,
            libraries, or APIs for the purpose of data collection. While the app utilises standard third-party
            software components, we have not identified any of these components as collecting user data. Please
            note that platform providers like Google Play Store and Apple App Store do collect usage data, and AWS
            services provide basic log service usage for operational purposes. However, we do not actively use these
            platforms and services to collect or track users.
          </P>
          <P>
            <strong>Data Security:</strong> The Global Input App ensures the security of your data through end-to-end
            encryption for all communications between the app and connected devices. This encryption ensures that
            your data remains secure and private during transmission. The encryption keys never leave your mobile
            device and are secured with a memorable password provided by you.
          </P>
          <P>
            <strong>User Rights and Control:</strong> You retain full control over your data within the Global Input App.
            All your data is stored locally on your device’s storage, encrypted with keys that are also encrypted with
            your provided password. We do not have access to your data, and we do not store it on any server or cloud
            storage. If you wish to delete your data, you can do so directly within the app by deleting the stored data
            or by uninstalling the app. Since no data is stored on our servers, we cannot assist in recovering or deleting
            data beyond what you control on your own device.
          </P>
          <P>
            <strong>Data Retention and Deletion:</strong> The Global Input App does not retain any user data on back-end
            servers. All data is stored locally on your device and is encrypted. You are responsible for managing, backing
            up, and deleting your data as needed. We do not have the ability to recover data once deleted from your device.
          </P>
          <P>
            <strong>Data Sharing:</strong> The Global Input App does not share any user data with third parties. Any data
            sharing that occurs is initiated by you, the user, at the time of usage, through a manual process to connected
            business applications. This process is protected with end-to-end encryption and requires your active confirmation.
          </P>
          <P>
            <strong>Changes to This Privacy Policy:</strong> We may update our Privacy Policy from time to time. Any changes
            will be posted on this page, and we encourage you to review this policy periodically. Your continued use of the
            app constitutes your acceptance of the updated policy.
          </P>
          <P>
            <strong>Contact Information:</strong> If you have any questions or concerns regarding this Privacy Policy, please
            contact us at:
          </P>
          <ContactInfo>
            <ContactItem>
              <strong>Email:</strong> <a href="mailto:info@iterativesolution.co.uk">info@iterativesolution.co.uk</a>
            </ContactItem>
            <ContactItem>
              <strong>Phone:</strong> +44 (0) 20 3290 6278
            </ContactItem>
            <ContactItem>
              <strong>Address:</strong> Iterative Solution Limited, Kemp House, 124 City Road, London, EC1V 2NX
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