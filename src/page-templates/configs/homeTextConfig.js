import {images} from "../../configs";
const  homeTextConfig={
  title:"Global Input App ",
  menu:{
    link:"/",
    linkText:"Home"
  },
  advert:{
      duration:5000,
      items:[{
        title:"Encrypted Data Storage in Your Devices",
        content:["Owns Your Data and Encryptions",
                "Manage Encryption Keys In Your Device",
                "Share with Password Encrypted QR Codes"],
        className: "animateLeftRight"
      },{
        title:"Nothing Stored Outside Your Device",
        content:["Your Data Stay Encrypted In Your Device",
                 "Stay Encrypted Even in Memory",
                 "Decrypted Only Where It is Needed"],
        className:"animateWithRotate"
      },{
        title:"Open Source Solution",
        content:["Password Management, Encrypted Storage & Transfer",
                 "Device Control, Second Screen, All in One Solution",
                 "Extend Your Existing Applications into Mobile Devices"],
        className:"animateSideSlide"
      },{
        title:"Data Transfer Between Your Devices",
        content:["Data Transfer via the End-To-End Encryption",
                "Encrypted Data Transfer via Open Source WebSocket Server"],
        className: "animateAppearFromSmallToBig"
      },{
        title:"Secure Sign In on Public Big Screen",
        content:["Sign In Securely While Everybody Is Watching",
                  "Use Your Mobile to Automate Your Sign In"],
        className:"animateSideSlide"
      },{
          title:"Encrypted QR Codes",
          content:["Transfer Data encrypted Without Using Network",
                    "Use Papers or Images",
                    "Store and Transfer Encrypted Content"],
          className: "animateLeftRight"
      },{
          title:"Personalize Encryption Keys",
          content:["Create, Manage and Share Encryption Keys",
                  "Select Encrypt Key to Control Access to Data",
                  "Scan to Import Password-Encrypted Encryption Keys"],
          className:"animateWithRotate"
      },{
        title:"Encrypted Storage & Data Transfer",
        content:["Removed the Reliance on the Security in the Storages, Networks, Servers ...",
                "Data Transfer with the End-To-End Encryption",
                "Secure Data Transfer between Your Devices"],
        className: "animateLeftRight"
      },{
          title:"Export Data Encrypted",
          content:["Export Encryptions Keys as Password Encrypted QR Codes",
                  "Export Data Encrypted with Your Encryption Key"],
          className: "animateAppearFromSmallToBig"
      },{
        title:"Own Your Own Data",
        content:["Best Privacy Policy Because No Subscription",
                 "No Data Collection and No Database Server",
                 "Everything is Stored in Your Device"],

        className:"animateWithRotate"
      }],


      install:[
                {type:"a",href:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",content:{type:"image", src:images.appstore}},
                {type:"a", href:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",content:{type:"image", src:images.playstore}}
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
              "It stores all the data in your devices, and encrypts the data with the encryption keys that you also manage in the app. Your data is decrypted only at the point where needed and discards the decrypted data as soon as possible afterwards. The data transfer between your devices uses the End-To-End encryption using the the encryption key generated on the fly. You can also use it to create and read encrypted QR codes, which are suitable if you prefer to use papers to store and transfer encrypted contents. You can use this app as a Universal Device Input App, an Authentication Device, a Password Manager, a Encrypted QR creator and reader and much more."
          ]
};
export default homeTextConfig;
