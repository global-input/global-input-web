import {images} from "../../configs";
const  homeTextConfig={
  title:"Global Input App ",
  menu:{
    link:"/",
    linkText:"Home"
  },
  advert:{
      duration:6000,
      items:[{
        title:"Encrypted Data Storage in Your Devices",
        content:["Owns Your Encryption as Well as Your Data",
                "Manage Your Own Encryption Keys As Well As Your Data"],
        className: "animateLeftRight"
      },{
        title:"Nothing Stored Outside Your Device",
        content:["Everything Is Stored In Your Device Encrypted with Your Encryption Key",
                 "Decrypted Only at the Point Where It Is Needed, and Discarded Afterwards"],
        className:"animateWithRotate"
      },{
        title:"Encrypted Data Transfer Between Your Devices",
        content:["Data Transfer via the End-To-End Encryption",
                "Use Different Encryption Key for Each Session to Maximise the Transfer Security"],
        className: "animateAppearFromSmallToBig"
      },{
        title:"Sign In On Public Big Screen",
        content:["You Can Now Sign In Safely On Computers While Everybody Is Watching Over Your Shoulder",
                  "Use Your Mobile to Sign In On Computers and Other Devices and Automate Your Sign In"],
        className:"animateSideSlide"
      },{
          title:"Encrypted QR Codes",
          content:["Transfer Data encrypted Without Network",
                    "Use Papers or Images to Store or Transfer Encrypted Content"],
          className: "animateLeftRight"
      },{
          title:"Use Encryption Keys to Manage Access",
          content:["Create, Manage and Share Encryption Keys with Your Devices and Other People",
                  "Scan to Import Password-Encrypted Encryption Keys"],
          className:"animateWithRotate"
      },{
        title:"Encrypted Data & Encrypted Data Transfer",
        content:["No More Reliance On the Security in the Storages, Networks, Servers and Cloud Infrastructures",
                "Data Transfer with the End-To-End Encryption and only Your Devices Can Decrypt the Data"],
        className: "animateLeftRight"
      },{
          title:"Backup Data with Encryption",
          content:["Export Password-Encrypted Encryptions Keys via QR Codes or Text Form",
                  "Export All Your Form Data Encrypted with Your Encryption Key"],
          className: "animateAppearFromSmallToBig"
      },{
          title:"Manage Key-Value Form Data",
          content:["Manage Your Data with Custom Fields, Form Data and Forlders",
                  "Search and Locate and Auto-matching the Form Data"],
          className:"animateSideSlide"
      },{
        title:"Manage Encryption Keys",
        content:["Manage Access with Shared Encryption Keys",
                  "Sharing Encryption Keys with Password Encrypted QR Codes"],
        className: "animateLeftRight"
      },{
        title:"Own Your Own Data",
        content:["No Need for Privacy Policy Because No data is Collected, and No Subscription Happened",
                "No Master Password Over the NetWork, Everything is In Your Control and In Your Device Only"],
        className:"animateWithRotate"
      },{
        title:"Operate on Applications Running On Computers",
        content:["Easy to Enable Applications to Support the Global Input App",
                "Use the Data Stored in Your App to Automate the Processes in the Service Applications"],
        className:"animateAppearFromSmallToBig"
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
