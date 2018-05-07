const  homeTextConfig={
  menu:{
    link:"/",
    linkText:"Home"
  },
    application:{
      title:"Global Input App ",
      description:{
            name:"The Global Input App",
            content:"provides you with encrypted data storage and encrypted data transfer between your devices.",
            content2:["It removes the need for the reliance on the security in the storages, networks, servers and cloud infrastructures or the reliance on the authorisation from security authorities.",
             "It stores all the data in your devices, and encrypts the data with the encryption keys that you also manage in the app. Your data is decrypted only at the point where needed and destroys the decrypted data as soon as possible afterwards. The data transfer between your devices uses the End-To-End encryption. The encryption key used for the End-To-End encryption is generated on the fly and transferred via the QR code only. You can also use it to create and read encrypted QR codes, which are suitable if you prefer to use papers to store and transfer encrypted contents. You can use this app as a Universal Device Input App, an Authentication Device, a Password Manager, a Encrypted QR creator and reader and much more."]
      },
      appDownload:{
          content:"available in ",
           appStore:{
             linkText:"Apple App Store",
             linkURL:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4"
           },
           andText:" and ",
           playStore:{
               linkText:"Google Play Store",
               linkURL:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB"
           }
      },
       chromeExtension:{
          content:"You can install ",
          linkText:"the Chrome Extension",
          linkURL:"https://chrome.google.com/webstore/detail/global-input-app/hcklienddlealndjnakkagefaelhnjkp",
          content2:" from the Chrome Web Store to use your mobile to operate on the Sign In forms in the web pages that are being displayed on your computer screen. "
       }
    },
    contentTransfer:{
        title:"Live Content Transfer",
        content:["This is live"]
    }
};
export default homeTextConfig;
