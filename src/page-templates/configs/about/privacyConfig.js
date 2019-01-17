import {pagelinks,images} from "../../../configs";
import {styles} from "./styles";
const privacyConfig={
  appTitle:"Global Input App",
  appSubtitle:"Privacy Policy",
  title:"GDPR Compliance Solution",
  menu:{
    link:"/global-input-app/privacy",
    linkText:"Privacy"
  },
  ourPrivacy:{
      title:"Privacy Policy",
      content:"Our privacy policy guarantees that we do not collect your data or track your activities. That applies to this website, and all the Global Input App software components including the mobile app, its Chrome Extensions, Wordpress Plugins and the Global Input App software libraries.  All of your data are stored in your device encrypted with an encryption key that you can manage in your app and you will be always presented with an option whenever you need to decrypt and push any of the data to a target application.  The core of our privacy policy is to allow you to get back control of your data so that your data can only be decrypted and accessed with your permission when an application needs it."

  },
  content:[[{type:"link",content:"Global Input App", link:pagelinks.app.link},"'s privacy policy is simple: you own your data and the encryption that encrypts your data. The app does not store your data or your details outside your device's storage, and your data stays encrypted even in memory, decrypted only when needed. There is no subscription, and there is no database on server."],
          "Your app password is not stored anywhere, it is used only as an encryption key for encrypting/decrypting the encryption keys, which, in turn, encrypts/decrypts the data in the app. So there is no way to recover your password if you forget it. You are responsible for exporting and backing up the encrypted data in the app and the encryption keys.",
          [{type:"link",content:"Global Input App", link:pagelinks.app.link}," is part of the ",{type:"link",content:"Global Input Platform", link:pagelinks.platform.link},", enabling you to select data in the app and push it to another application using the end-to-end encryption. The Global Input WebSocker server will not be able to decrypt the messages transferred between your app and your  connected applications."],
          [{type:"link",content:"Global Input Platform", link:pagelinks.platform.link}," also provides an option for the device and web applications not to store your data in the application databases, instead allowing you to take control of your data and stored it in your app, so that you you can push the data back to the application when it is needed."]],

  encryption:{
      title:"Encryption",
      content:[

          {
              type:"ul",
              content:[
                [{type:"span", style:styles.prefix,content:"In Storage:"}," the personal data is always encrypted before persisting into storage."],
                [{type:"span", style:styles.prefix,content:"In Transit:"}," on top of the encrypted communication channel SSL, the sensitive part of the data is also encrypted with the application level encryption. This mechanism protects data against the breaches at the software components boundaries such as at the HTTPS communication boundaries."],
                {type:"span", style:styles.prefix,content:"In Memory:"}," the data is kept encrypted until to the point of use, and discarded immediately adter use",
              ]
          },
          {
            type:"image",
            src:images.privacy.dataprocessor,

          }
      ]


  },
  encryptionKeysHiearchy:{
      title:"Protection of Encryption Keys",
      content:[
        "Portable Encryption Keys Management: GDPR requires applications to encrypt the customer data, but it is challenging to manage and protect the encryption keys. The Global Input App solution provides a portable encryption keys management, which allows applications to use the master encryption key received from the mobile app to encrypt the encryption key sets. The key set contains the encryption keys that are used for encryption the data that the user is allowed to access. This mechanism will assign personal responsibility for processing personal data.",
           {
            type:"ul",
            content:[
              [{type:"span", style:styles.prefix,content:"Access Control with Encryption Keys:"}," encryption Keys in a Key Set decide which data that the user is allowed to access. It is reminiscent to a real-world scenario, where the keys in possession decide which offices that the person is allowed to access."],
              [{type:"span", style:styles.prefix,content:"Protection of Keys:"}," each Key Set is encrypted (protected) with a master encryption key."],
              [{type:"span", style:styles.prefix,content:"Protection of Master Encryption Keys:"}," Global Input APP provides the master encryption key, so it is not persisted anywhere that the application can access."]
            ]
          },{
              type:"image",
              src:images.privacy.encryptionHeiarchy2,
         }

    ]

  },

  authentication:{
      title:"Authentication",
      content:[
          "Use Authentication Chain to Identify:",
           {
            type:"ul",
            content:[
              [{type:"span", style:styles.prefix,content:"Data Subjects:"}," identify securely the owner of the personal data for modification etc. "],
              [{type:"span", style:styles.prefix,content:"Operators:"}," identify operator who initiate the data processing session."],
            ]
          },{
              type:"image",
              src:images.privacy.authenticationChain,
         }

    ]

  },

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
