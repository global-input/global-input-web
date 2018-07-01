import {images} from "../../../configs";
const aboutGlobalInputConfig={
  appTitle:"Global Input App",
  appSubtitle:"About",
  title:"About Global Input App",
  menu:{
    link:"/global-input-app/about",
    linkText:"About"
  },
  aboutText:["Please download & install Global Input App"
          ],
          aboutText:["Please download & install Global Input App"
                  ],
                  

  content:[


    "Global Input App provides a single app solution for encrypted data storage (i.e., password manager), data transfer between devices using end-to-end encryption, encrypted QR Code creator & scanner, mobile input & control for smart TV, media device, IoT and web applications.  Your data stays encrypted even in memory and decrypted only when it is needed.  There is no subscription, nor database on the server to store your data or your details. Everything is stored in your device's storage, encrypted with an encryption key, which is, in turn, encrypted with your app login password.  You can manage and share encryption keys and use encrypted QR codes to backup or share confidential contents.",
    "Device and web applications can be integrated with Global Input App to allow users to use mobiles to do mobile input & control operations on the applications. An application can declaratively specify mobile UI (User Interface) elements and the callback functions for receiving mobile events. This provides a unique solution for implementing mobile input and control without doing mobile application development. Applications can also take advantage of the encrypted data storage to allow users to store the data in app's storage to automate form operations such as sign in, subscription, application forms etc.",

    {type:"line", content:["Global Input App is a free app, created by Dilshat Hewzulla (", {type:"a", content:"dilshat@iterativesolution.co.uk", href:"dilshat@iterativesolution.co.uk"},") to resolve some common issues faced daily in the business environments."]},
    "For example, in some corporate environments, we may have to use many applications to accomplish our tasks: JIRA, Confluence, Gitlab, Github, AWS, WordPress, and many other business applications. The reality of the security in the digital world is forcing us to use different, complicated and unrelated passwords for each of the application so that if one is compromised, the rest is still safe.  We can use a common password manager to resolve this issue if we use a single personal device. But in today working environment, we may have to use multiple shared devices. Typing the master password on those shared devices may compromise the Password Manager itself.  This is especially true if one has to login in on a big screen in a conference room. Global Input App stores data encrypted in app's storage only and push the selected data from the mobile app to other applications using end-to-end encryption.  There is no master password you have to type on other computers or devices. You just need to push the data you have selected to the other application using end-to-end encryption and press the \"Sign In\" button on your mobile. You can even let people watch your mobile screen when you are signing in because the data stays encrypted even in memory so it shows asterisks on the screen, and decrypted only when it is needed.",
    "As the mobile is becoming increasingly important in our working practice as well as our daily life, the ability to use mobile to operate on business applications are increasingly appealing to the business users.  However, the cost of developing a separate mobile application for each small and big business application is significant.   Global Input App offers a single app solution for multiple device and web applications. An application can simply define Mobile UI elements and callback functions for receiving mobile events within the application itself instead of developing a separate mobile app and figure out how they can communicate with other securely. This can be done in an add-on manner without affecting the business logic and system architecture.",
    "If an application requires users to fill a form, Global Input App can offer users to fill in the form using the data saved in their mobile to automate the operation. This automation makes subscription as easy and quick as Signing In. This means that the application does not need to save user details for a long time causing potential privacy issue. This allow users to truly own their data and the encryption that encrypts their data. Global Input App allows to create, export, import, share and manage encryption keys, and select any of them to encrypt data in the app. The data transfer between Global Input App and the application uses end-to-end encryption and the user has complete control over the data on their mobile.",
    "In the IT environment, IT support may need to share some credentials with staffs or customers securely. Sending encrypted file via email sounds secure, but may cause technical issues on some customers side. And also cannot control how the customers store the decrypted content after decryption. Global Input allows sharing confidential content with different Global Input instances by selecting different encryption key that is previously shared."
],
advert:{
    duration:8000,
    items:[{
      title:"Store Content Encrypted in Your Device",
      content:["Content Stays Encrypted Even in Memory",
              "Decrypted Only When Needed"],
    },{
      title:"Own Your Data and Encryption",
      content:["Create, Export, Share & Import Encryption Keys",
              "Select Encryption Key to Encrypt Your Data"],
    },{
      title:"Create Encrypted QR Codes",
      content:["Encrypt Content with Encryption Keys",
              "Backup and Share Credentials"],
    },{
      title:"Scan to Decrypt the Content",
      content:["Transfer Encrypted Content via QR Code",
              "Share Encryption Keys Securely"],
    },{
      title:"End-to-End Encrypted Data Transfer",
      content:["Transfer Content Between Devices",
              "Scan to Start the Data Transfer"],
    },{
      title:"No Subscription, No Database on the Cloud",
      content:["Everything Stored Encrypted in Your Device",
              "Share Content Between Your Devices"],
    },{
      title:"Automate Sign In & Forms",
      content:["Store and Manage Credentials",
              "Transfer to Other Device Applications When Needed"],
    },{
      title:"Single Mobile App",
      content:["Mobile Input & Control for Device and Web Applications",
              "Second Screen Experience for Media Applications"],
    },{
      title:"Implementing Mobile Control",
      content:["Enabling IoT, Smart TV and Web Applications",
               "Single Mobile App Solution for Multiple Devices"],
    }],
}

};
export default aboutGlobalInputConfig;
