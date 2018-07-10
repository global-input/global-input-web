import {images,pagelinks} from "../../configs";
import introductionToJSlibraryConfig from "./developers/introductionToJSlibraryConfig";
import webSocketServerConfig from "./developers/webSocketServerConfig";
import developerTextConfig from "./developers/developerTextConfig";
import  formDataTransferConfig from "./formDataTransferConfig";
import videoPlayerConfig from "./videoPlayerConfig";
import gameExampleConfig from "./gameExampleConfig";
import sendMessageConfig from "./sendMessageConfig";
import chromeExtensionConfig from "./chromeExtensionConfig";
import qrPrintingConfig from "./qrPrintingConfig";
import aboutGlobalInputConfig from "./about/aboutGlobalInputConfig";

const  homeTextConfig={
  title:"Global Input",
  menu:{
    link:"/",
    linkText:"Home"
  },

  aboutText:{
              type:"link",
              content:"Get Global Input App Free",
              link:pagelinks.app.link,
              className:"btn btn-primary buttonOnBlue"
              },
  install:[
            {type:"a",href:pagelinks.appStore,content:{type:"image", src:images.appstore, mobile:{src:images.appstoreMobile}}},
              {type:"a", href:pagelinks.playStore,content:{type:"image", src:images.playstore, mobile:{src:images.playstoreMobile}}}
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

            {type:"sub",title:"Features",
             content:[{
               type:"ul",
               content:[
                 ["Users only need to install a ",{type:"link", content:"single app",link:aboutGlobalInputConfig.menu.link}," to use across multiple web applications."],
                 [{type:"link", content:"The mobile",link:aboutGlobalInputConfig.menu.link}," on its own provides password management and secure data transfer across mobile devices and computers."],
                 "No need to develop separate mobile apps for extending device and web applications to have mobile input and control.",
                 "The mobile logic can be implemented within the application itself reusing the existing application logic.",
                 "Content can be transferred between the mobile device to the web application.",
                 "Content is stored and managed by users securely on the mobile device.",
                 "No content is stored on a remote server.",
                 "No subscription, no user details needs to be saved outside users’ device.",
                 "Library is completely open-source. "
               ]
             }

             ]
           },


           {content:["Please have a look at the following use cases in action, and then visit the ",{type:"link", content:"the developer page",link:developerTextConfig.menu.link}," for more information."]}
          ],




  }
};
export default homeTextConfig;
