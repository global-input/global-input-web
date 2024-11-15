const backupFormDataTextConfig={
      title:"Exporting Encrypted Data",
      nodata:{
          content:["There is no data to export."],
      },
      hasFormData:{
        content:["Press the \"Export\" button to export your data in the app."]
      },
      clipboard:{
        title:"Exporting Encrypted Data",
        content1:["The encrypted data:"],
        content2:["Press the \"Copy\" button to copy the encrypted data into your clipboard."]
      },
      complete:{
          title:"Export Completed",
          content:["The encrypted data is now exported into your clipboard.",
                   "You can now paste the encrypted content into anywhere you like, for example, into a file in your Dropbox folder.",
                   "When you would like to import the content into the app, please copy the exported content into your clipboard, and then press the \"Import\" button on the \"More\" tab.",
                   "Note that in order to be able to decrypt the exported data, the Global Input App needs to have the same encryption key \"{name}\" marked as \"Active\". The exported data will become unusable if you lose the encryption key \"{name}\". So you need to export the encryption key \"{name}\" and store it separately from the exported data.",
                   "Select the encryption key you would like to export on the \"Keys\" tab, and then press the \"QR Code\" button to export the encryption key as password protected QR Code. You can also press the \"Text\" button there to export the encryption key as password protected text content."]
      }


};
export default backupFormDataTextConfig;
