import React from "react";
import { config } from "../configs";
import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";
import { usePageTitle } from "../page-metadata";

import { Container, Content, Title, P, Background } from "./layout";
const PrivacyPage: React.FC = () => {
  const mobile = useConnectToMobile();
  usePageTitle("Global Input App -  Privacy Policy");

  return (
    <Background>
      <PageHeader selected={config.paths.privacy.path} />
      <Container>
        <Content>
          <Title>Privacy Policy</Title>
          <P>
            We do not track your activities and we do not store your data. We
            don't even have a server database or any form of cloud storage which
            would allow us to.
          </P>
          <P>
            Our privacy policy applies to our website and all of our Global
            Input App software components, including the mobile app, its
            extensions and library components.
          </P>
          <P>
            Applications that use our software components allow you to take
            complete control over your sensitive information, by using your
            device's storage to store either the data itself or the master
            encryption key used when encrypting your data.
          </P>
          <P>
            A connected application can always request data on-demand via the
            mobile app, which will ask you for confirmation to push the
            requested data over to the application. The communication between
            your devices is secured using end-to-end encryption and the
            encryption key that starts the session is dynamically generated
            within your device for each session and can only be accessed via an
            encrypted QR Code.
          </P>
          <P>
            Your data in your mobile app always stays encrypted and is decrypted
            only at the point of usage. The keys used in the encryption never
            leave your mobile device and are encrypted with your memorable
            password. This means that you are responsible for backing up your
            encryption keys in your mobile app and the data that is encrypted
            with the encryption keys.
          </P>
          <P>
            Since you can export an encryption key as an encrypted QR code, and
            import it simply by scanning it, the process of backing up the keys
            and sharing between your devices is straightforward.
          </P>

          <ConnectButton mobile={mobile} label="See how it works" />
          <ConnectWindow mobile={mobile} />
        </Content>
      </Container>
      <PageFooter />
    </Background>
  );
};

export default PrivacyPage;
