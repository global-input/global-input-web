import {images} from "../../configs";
import introductionToJSlibraryConfig from "./developers/introductionToJSlibraryConfig";
import webSocketServerConfig from "./developers/webSocketServerConfig";
const  homeTextConfig={
  title:"Global Input App ",
  menu:{
    link:"/",
    linkText:"Home"
  },

  aboutText:[{
              type:"line",
              content:["Get Global Input App Free"],
              }
          ],
  install:[
            {type:"a",href:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",content:{type:"image", src:images.appstore, mobile:{src:images.appstoreMobile}}},
            {type:"a", href:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",content:{type:"image", src:images.playstore, mobile:{src:images.playstoreMobile}}}
          ],

  advert:{
      duration:8000,
      items:[{
        title:"Store Content Encrypted in Your Device",
        content:["Content Stays Encrypted Even in Memory",
                "Decrypted Only When Needed"],
      },{
        title:"Own Your Data and Encryption",
        content:["Create, Manage Encryption Keys",
                "Export, Share, Import Encryption Keys"],
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
  },
  content:[{
              type:"line",
              content:[
                       {content:"The Global Input App (",type:"span"},
                       {content:"Apple App Store", type:"a",href:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4"},
                       {content:" and ",type:"span"},
                       {content:"Google Play Store",type:"a",href:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB"},
                       {content:") provides you with encrypted data storage and encrypted data transfer between your devices.",type:"span"}
                      ],
              },
              "It removes the need for the reliance on the security in the storages, networks, servers and cloud infrastructures or the reliance on the authorisation from security authorities.",
              "It stores all the data in your devices, and encrypts the data with the encryption keys that you also manage in the app. Your data is decrypted only at the point where needed and discards the decrypted data as soon as possible afterwards. The data transfer between your devices uses end-to-end encryption using the the encryption key generated on the fly. You can also use it to create and read encrypted QR codes, which are suitable if you prefer to use papers to store and transfer encrypted contents. You can use this app as a Universal Device Input App, an Authentication Device, a Password Manager, a Encrypted QR creator and reader and much more."
          ],
  platform:{
         title:"Global Input Platform",
         content:["Global Input is an open-source platform for connecting a camera enabled mobile device to a web application using end-to-end encryption. Once connected, the platform provides the features to exchange content securely between the mobile device and the web application. The platform opens up a wide range of functions:",
            {type:"ul",content:[
               "User authentication via mobile initiated by scanning QR codes for applications.",
               "Second screen control of media applications.",
               "Mobile input for IoT, Smart TV and web applications.",
               "Form automation using mobile device.",
               "Password management in User’s device.",
               "Exchange of confidential information between web applications and staff mobile devices as well as between devices."
            ]},
            "Many of the above use cases are shown as samples below.",
            {type:"sub",title:"Features",
             content:[{
               type:"ul",
               content:[
                 "Users only need to download a single app to use across multiple web applications.",
                 "User mobile device can become password management tool.",
                 "A separate mobile application is not required to be developed and deployed.",
                 "Secure exchange of content from the mobile device to the web application.",
                 "Content is stored securely on the mobile device.",
                 "No content is stored on a remote server.",
                 "No subscription.",
                 "open-source."
               ]
             }

             ]
           },{
             type:"sub",title:"How it works",
             content:["The Global Input platform consists of 3 main components:",{type:"ol",content:[
               [{type:"link",content:"global-input-message", link:introductionToJSlibraryConfig.menu.link+"#"+introductionToJSlibraryConfig.menu.bookmark}," - a JS websocket library that enables WebSocket client applications to connect to each other with end-to-end encryption and exchange messages via the Global Input WebSocket server."],
               [{type:"link",content:"global-input-node", link:webSocketServerConfig.menu.link+"#"+webSocketServerConfig.menu.bookmark}, " - a WebSocket server, responsible for transferring encrypted messages between the global-input-message library instances running on the client sides."],
               "Global Input App - a mobile application that obtains connection information from a QR code and uses the global-input-message library to connect to the Websocket client application securely."
             ]},
             "An existing web application can be extended with the global-input-message library to connect to a Global Input WebSocket server. The web application displays a QR code, which contains information such as the URL of the WebSocket server, API key for connection, the encryption key for encryption, etc.",
            "When a user scans the QR code with the Global Input App, an encrypted communication channel will be established between the web application and the Global Input App via the WebSocket server.",
            "From here, a range of use-cases are available. For example, the web application can send declarative UI form information and register call back functions to receive data and actions from the user and respond to them, effectively extending the web application to the mobile device.",
            "See below for sample applications.",
            {content:["For a more detailed explanation, see the ",{type:"link",content:"developer page", link:introductionToJSlibraryConfig.menu.link}]}]

           }],




  }
};
export default homeTextConfig;
