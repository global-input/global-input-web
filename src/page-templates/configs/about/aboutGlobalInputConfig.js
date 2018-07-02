import {images} from "../../../configs";
const aboutGlobalInputConfig={
  appTitle:"Global Input App",
  appSubtitle:"About",
  title:"About Global Input App",
  menu:{
    link:"/global-input-app/about",
    linkText:"About",
    backLink:"/?scrollTo=contactForm",
    bookmark:"contactForm"
  },
  aboutText:["Please download & install Global Input App"
          ],
          aboutText:["Please download & install Global Input App"
                  ],


  content:[


    "Global Input App provides a single app solution for encrypted data storage (i.e., password manager), data transfer between devices using end-to-end encryption, encrypted QR Code creator & scanner, mobile input & control for smart TV, media device, IoT and web applications.  Your data stays encrypted even in memory and decrypted only when it is needed.  There is no subscription, nor database on the server to store your data or your details. Everything is stored in your device's storage, encrypted with an encryption key, which is, in turn, encrypted with your app login password.  You can manage and share encryption keys and use encrypted QR codes to backup or share confidential contents.",
    "Device and web applications can be integrated with Global Input App to allow users to use mobiles to do mobile input & control operations on the applications. An application can declaratively specify mobile UI (User Interface) elements and the callback functions for receiving mobile events. This provides a unique solution for implementing mobile input and control without doing mobile application development. Applications can also take advantage of the encrypted data storage to allow users to store the data in app's storage to automate form operations such as sign in, subscription, application forms etc.",

    {type:"line", content:["Global Input App is a free app, created by Dilshat Hewzulla (", {type:"a", content:"dilshat@iterativesolution.co.uk", href:"dilshat@iterativesolution.co.uk"},") to resolve some common issues faced daily in the business environments.", ". Please explore the use cases on the ", {type:"link",link:"/", content:"home page"}," to see where you can use Global Input App."]},

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
