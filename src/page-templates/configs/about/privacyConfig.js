import {pagelinks} from "../../../configs";

const privacyConfig={
  appTitle:"Global Input App",
  appSubtitle:"Privacy Policy",
  title:"Privacy Policy",
  menu:{
    link:"/global-input-app/privacy",
    linkText:"Privacy"
  },
  content:[[{type:"link",content:"Global Input App", link:pagelinks.app.link},"'s privacy policy is simple: you own your data and the encryption that encrypts your data. The app does not store your data or your details outside your device's storage, and your data stays encrypted even in memory, decrypted only when needed. There is no subscription, and there is no database on server."],
          "Your app password is not stored anywhere, it is used only as an encryption key for encrypting/decrypting the encryption keys, which, in turn, encrypts/decrypts the data in the app. So there is no way to recover your password if you forget it. You are responsible for exporting and backing up the encrypted data in the app and the encryption keys.",
          [{type:"link",content:"Global Input App", link:pagelinks.app.link}," is part of the ",{type:"link",content:"Global Input Platform", link:pagelinks.platform.link},", enabling you to select data in the app and push it to another application using the end-to-end encryption. The Global Input WebSocker server will not be able to decrypt the messages transferred between your app and your  connected applications."],
          [{type:"link",content:"Global Input Platform", link:pagelinks.platform.link}," also provides an option for the device and web applications not to store your data in the application databases, instead allowing you to take control of your data and stored it in your app, so that you you can push the data back to the application when it is needed."]],
  scrollingText:{
      duration:8000,
      items:[{
        title:"Store Content Encrypted in Your Device",
        content:["Nothing Stored Outside Your Decvice",
                  "No Subscription, No Database On the Server"],
      },{
        title:"Your Data Stays Encrypted in Your Device",
        content:["Stays Encrypted Even in Memory",
                  "Decrypted Only When Needed"],
      },{
        title:"Own Your Data and Encryption",
        content:["Create, Manage Encryption Keys",
                "Export, Share, Import Encryption Keys"],
      }]
  },


};
export default privacyConfig;
