import {images} from "../../configs";
const  homeTextConfig={
  title:"Global Input App ",
  menu:{
    link:"/",
    linkText:"Home"
  },
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


      install:[
                {type:"a",href:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",content:{type:"image", src:images.appstore, mobile:{src:images.appstoreMobile}}},
                {type:"a", href:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",content:{type:"image", src:images.playstore, mobile:{src:images.playstoreMobile}}}
              ]

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
          ]
};
export default homeTextConfig;
