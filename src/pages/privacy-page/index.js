import React from 'react';

import BlueBackground from "../../page-components/themes/blue-background";


const {Title,P}=BlueBackground;

const PrivacyPage=props=>(
        <BlueBackground.Page>
                  <Title>Privacy Policy</Title>
                  <P>
                    Our privacy policy guarantees that we do not collect any user data or track user activities. It applies to this website and all of the Global Input App software components.
                  </P>
                  <P>
                    All of the data stored in the mobile app are encrypted with encryption keys, which are, in turn, are encrypted with your master encryption key.  Your master encryption key is not stored anywhere, and it is coming from your app password that you have to supply each time when you start your app.
                  </P>
                  <P>
                    Your personal data stays encrypted in your device and you can decrypt and push the required data to an application on-demand.
                  </P>
                  <P>
                    The purpose of our privacy policy is to allow you to get back control of your personal data so that your data can only be decrypted and delivered to an application securely with your permission only.
                  </P>



        </BlueBackground.Page>
      );
export default PrivacyPage;
