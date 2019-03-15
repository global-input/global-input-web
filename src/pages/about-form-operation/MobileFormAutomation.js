import React from 'react';
import examples from "../examples";
const MobileFormAutomation=props=>{
    const exampleLinks=[examples.linkItems.sendMessage];
    const {P,Title,ListLinks}=props.theme;
    return(
      <React.Fragment>
          <Title>Mobile Form Automation</Title>
          <P>Global Input App allows users to store their personal data in their mobile devices encrypted, and push them on-demand when they are needed by applications running on other devices.
          Using the data stored securely in the mobile devices, many operations can be automated. One of the example is the subscription.
         </P>
         <P>
           This also provides applications with a option of not storing user data in their databases, allowing users to store and managing their personal data on their own devices. Applications can request data on-demand from the user, and the user can inspect and push the required data to the application whenever needed.
        </P>
        <P>
          The data in the mobile app is encrypted with encryption keys that are, in turn, encrypted with the master encryption composed from the user app password. The data stays safe in the users’ own mobile device and decrypted only when it is needed. This gives the users complete control over their data.
        </P>
        <P>
            Global Input App also provides portable encryption keys management, allowing applications to store encrypteed data in their databases allowing user to store the master encryption in their mobile devices.
        </P>
        <P>
           In the the following example, the application first displays a company contact information on user's device and ask the users to save it if they have not done so already. Then, it continues to display the a form to allow user to send a message. Since the personal information is not stored in the applications, the user can reuse the data already stored in the encrypted storage.
         </P>
         <ListLinks items={exampleLinks}/>
      </React.Fragment>
    );
};
export default MobileFormAutomation;
