import {images} from "../../configs";
import introductionToJSlibraryConfig from "./developers/introductionToJSlibraryConfig";
import webSocketServerConfig from "./developers/webSocketServerConfig";
import  formDataTransferConfig from "./formDataTransferConfig";
import videoPlayerConfig from "./videoPlayerConfig";
import gameExampleConfig from "./gameExampleConfig";
import sendMessageConfig from "./sendMessageConfig";
import chromeExtensionConfig from "./chromeExtensionConfig";
import qrPrintingConfig from "./qrPrintingConfig";
import aboutGlobalInputConfig from "./about/aboutGlobalInputConfig";
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
         content:["Global Input is an open-source platform for connecting a camera enabled mobile device to a web application using end-to-end encryption. The platform enables the mobile device and the web application to exchange messages securely and provides a wide range of functions:",
            {type:"ul",content:[
               [{type:"scroll",content:"User authentication via mobile", to:formDataTransferConfig.menu.bookmark}," initiated by scanning QR codes for applications."],
               [{type:"scroll",content:"Second screen input & control",to:videoPlayerConfig.menu.bookmark}," for media applications."],
               [{type:"scroll",content:"Mobile input & control",to:gameExampleConfig.menu.bookmark}," for IoT, Smart TV and web applications."],
               [{type:"scroll",content:"Form automation",to:sendMessageConfig.menu.bookmark}," using mobile device."],
               [{type:"scroll",content:"Password management",to:chromeExtensionConfig.menu.bookmark}," in user’s device."],
               [{type:"scroll",content:"Backup and transfer",to:qrPrintingConfig.menu.bookmark}," confidential information."]
            ]},
            "Many of the above use cases are shown as samples below.",
            {type:"sub",title:"Features",
             content:[{
               type:"ul",
               content:[
                 ["Users only need to download a single app to use across multiple web applications."],
                 "The mobile app can be used as a password management tool.",
                 "No need to develop mobile apps for extending device and web applications to have mobile input and control.",
                 "The mobile logic can be implemented within the application itself reusing the existing application logic.",
                 "Content can be exchanged securely from the mobile device to the web application.",
                 "Content is stored and managed by users securely on the mobile device.",
                 "No content is stored on a remote server.",
                 "No subscription, no user details needs to be saved outside users’ device.",
                 "Library is completely open-source."
               ]
             }

             ]
           },{
             type:"sub",title:"How it works",
             content:["The Global Input platform consists of 3 main components:",{type:"ol",content:[
               [{type:"link",content:"Global Input JavaScript Library", link:introductionToJSlibraryConfig.menu.url()}," - allows web applications to connect to the Global Input Platform."],
               [{type:"link",content:"Global Input WebSocket Server", link:webSocketServerConfig.menu.url()}, " - transfers encrypted messages between the Global Input JavaScript library instances running on the client sides and the Global Input App."],
               [{type:"link",content:"Global Input App", link:aboutGlobalInputConfig.menu.link}," - a mobile application that provides mobile functions for the applications connected to the Global Input platform."],

             ]},
             "An existing web application can be extended with the Global Input JavaScript library to have mobile input and control. The web application displays a QR code, which contains information such as the URL of the WebSocket server, API key for connection, the encryption key etc.",
            "When a user scans the QR code with the Global Input App, an encrypted communication channel will be established between the web application and the Global Input App via the WebSocket server.",
            "From here, a range of use-cases are available. For example, the web application can send declarative UI form information and register call back functions to receive data and actions from the user and respond to them, effectively extending the web application to the mobile device.",
            "See below for sample applications.",
            {content:["For a more detailed explanation, please visit the ",{type:"link",content:"developer page", link:introductionToJSlibraryConfig.menu.link}]}]

           }],




  }
};
export default homeTextConfig;
