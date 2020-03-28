import React from 'react';

import BlueBackground from "../../page-components/themes/blue-background";



const {Title,P}=BlueBackground;

export default ()=>(
        <BlueBackground.Page>
                  <Title>Privacy Policy</Title>
                  <P>
                  Our privacy policy guarantees that we do not collect your data or track your activities. That applies to our website and all of our Global Input App software components including the mobile app itself, its extensions and library components. 

                  </P>
                  <P>
                  All of your sensitive data are stored in your mobile app's storage, and encrypted using encryption keys that you manage in your mobile app. The connected application will always request data on-demand from you whenever it needs it, and you need to manually confirm every time to decrypt and push the data to the connected application. The communication is secured with the end-to-end encryption on the device-to-device level. The encryption key that drives the end-to-end encryption is communicated via an encrypted QR Code. The core of our privacy policy is to allow you to have complete control over your data so that you need to explicitly decrypt and push the required data to the application when an application needs it.  This means you are responsible for backing up your encryption keys in your mobile app and the data that are always exported as encrypted with the encryption keys. Since the encryption keys can be exported as encrypted QR codes, exporting and importing keys is a straightforward process. 
                  </P>




        </BlueBackground.Page>
      );

