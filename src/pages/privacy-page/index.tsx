import React from 'react';

import { Title, P, PageContainer, Page } from "../../page-components/themes/blue-background";

import * as mobile from '../../mobile';
import { config } from '../../configs';
import { usePageTitle } from '../../page-metadata';


const PrivacyPage: React.FC = () => {


  usePageTitle('Global Input App -  Privacy Policy');


  return (
    <Page selected={config.paths.privacy.path}>
      <mobile.MobileConnect initData={mobile.privacy.initData} onFieldChange={mobile.privacy.onFieldChange} />

      <PageContainer>
        <Title>Privacy Policy</Title>

        <P>
          We do not track your activities and we do not store your data.  We do not even have a server database or cloud storage to store your data.
          </P>
        <P>
          Our privacy policy applies to our website and all of our Global Input App software components including the mobile app, its extensions and library components.
</P>
        <P>
          Applications that use our software components allows you to take complete control over your sensitive information,  by using your device's storage to store either the data itself or the master encryption key used when encrypting your data.
</P>
        <P>
          A connected application can always request data on-demand via the mobile app, which will ask you to confirm to push the requested data over to the application. The communication between your devices is secured using end-to-end encryption and the encryption key that starts the session is dynamically generated within your device for each session and can only be accessed via an encrypted QR Code.
</P>
        <P>
          Your data in your mobile app always stays encrypted and decrypted only at the point of usage.  The keys used in the encryption never leave your mobile and are encrypted with a memorable password.  This means that you are responsible for backing up your encryption keys in your mobile app and the data that are encrypted with the encryption keys.  Since you can export an encryption key as encrypted QR code, and import it simply by scanning it,  the process of backing up the keys and sharing between your devices is a straightforward operation.
</P>



      </PageContainer>



    </Page>
  )
};

export default PrivacyPage;