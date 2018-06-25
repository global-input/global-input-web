const privacyConfig={
  appTitle:"Global Input App",
  appSubtitle:"Privacy Policy",
  title:"Privacy Policy",
  menu:{
    link:"/global-input-app/privacy",
    linkText:"Privacy"
  },
  content:["Global Input App's privacy policy is simple: you own your data and the encryption that encrypts your data. The app does not to store your data or your details outside your device's storage, and your data stays encrypted even in memory, decrypted only when needed.  There is no subscription, and there is no database on server.",
          "Your app password is not stored anywhere, it is used only as an encryption key for encrypting/decrypting the \"active\" encryption key, which is, in turn, encrypts/decrypts the rest of the data in the app. So there is no way to recover your password if you forgot it. You create, manage and share encryption keys in the app. You are responsible for exporting the encrypted data and store it for the backup purposes. You also need to backup your \"active\" encryption key in a separate place in case you lose your phone.",
          {type:"line", content:["Global Input App transfers data between your devices using the end-to-end encryption. You can select any stored data item in the app to send over to an application. The encrypted data travels through a ",{type:"a", content:"WebSocket server", href:"https://github.com/global-input/global-input-node"},". Because the encryption key is shared only with the ", {type:"a", content:"calling application", href:"https://github.com/global-input/global-input-message#calling-application"}," via a QR code, the messages are safe even if the WebSocket server is compromised. You can download and install your own ", {type:"a", content:"WebSocket server from the github", href:"https://github.com/global-input/global-input-node"}]}],
  advert:{
      duration:5000,
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
