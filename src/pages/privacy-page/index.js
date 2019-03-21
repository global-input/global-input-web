import React from 'react';

import BlueBackground from "../../page-components/themes/blue-background";


const {Title,P}=BlueBackground;

const PrivacyPage=props=>(
        <BlueBackground.Page>
                  <Title>Privacy Policy</Title>
                  <P>
                    Our privacy policy guarantees that we do not collect your data or track your activities. That applies to this website, and all the Global Input App software components including the mobile app, its Chrome Extensions, Wordpress Plugins and the Global Input App software libraries.
                  </P>
                  <P>
                    All of the data stored in the mobile app are encrypted with encryption keys that you can manage in your app,and you will be always presented with an option whenever you need to decrypt and push any of the data to a target application.


                  The core of our privacy policy is to allow you to get back control of your data so that your data can only be decrypted and accessed with your permission when an application needs it.
                  </P>




        </BlueBackground.Page>
      );
export default PrivacyPage;
