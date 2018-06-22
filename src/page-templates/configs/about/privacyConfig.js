const privacyConfig={
  appTitle:"Global Input App",
  appSubtitle:"Privacy Policy",
  title:"Privacy Policy",
  menu:{
    link:"/global-input-app/privacy",
    linkText:"Privacy"
  },
  advert:{
      duration:5000,
      items:[{
        title:"The Privacy Policy of the Global Input App",
        content:["All Your Data Are Stored Encrypted Inside Your Device Only, and Can Only Decrypted By You.",
                  "No Data Stored Outside Your Device,  No Subscruption, No User Details, no User User Profiles Outside Your Device."],
        className: "animateLeftRight"
      },{
        title:"Own Your Own Data In Your Device",
        content:["Own Your Data in Your Device, and Own Your Encryption that Encrypts Your Data in Your Device",
                "The Policy of this App is Not to Store any User Data Outside Your Devices."],
        className:"animateWithRotate"
      },{
        title:"Your Data in Your Pocket Not On the Cloud",
        content:["Your Data Stays In Your Devices, Encrypted with Your Encryption Key.",
                "Take Back Control of Your Data by Storing Your Data In Your Device Only."],
        className: "animateAppearFromSmallToBig"
      }]
  },
  content:["The Global Input App works on it own independently and stores the data encrypted in the device's local storage.  So there is no subscription, no external services, no cloud, no usage collection by the app, not even network communication is required until the end-to-end encrypted data transfer between devices are initiated. In this case, only the webSocket proxy server stands in the middle transferring the encrypted data between your devices.",
            "The app password is for decrypting the password-encrypted encryption key, so there is no way of getting back the access to the app if the password is forgotten.",
            "This also means that it is users' own responsibility to backup the encrypted form data regularly, and export the active encryption key that is used to encrypt the form data and put it in a safe place.",
            "An end-to-end encrypted data transfer between devices goes through via a WebSocket server. The WebSocket server collects the IP addresses and unique app IDs for the purpose of maintaining the server. The data in the form fields are not visible to the WebSocket server, because they are encrypted using the end-to-end encryption."],

};
export default privacyConfig;
