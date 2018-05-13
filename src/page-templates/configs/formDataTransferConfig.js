const formDataTransferConfig={
  title:"Transfer Form Data",
  menu:{
     link:"/global-input-app/formd-data-transfer",
     linkText:"Form Data Transfer",
     backLink:"/?scrollTo=formDataTransfer"
  },
  content:["The Global Input App allows you to store form data (key-value data) on your mobile. The data stay encrypted in your device and will not be stored anywhere else. The data is encrypted with the encryption key that you also manage in the app, and the encryption key is encryptef with your password. The data will stay encrypted in your device, and decrypted only when it is needed and discarded afterwards.",
            "When you need any of the data on the other devices, you can transfer it via the end-to-end encryption. Here you can transfer the form data from your mobile to your computer or vice versa.",
            "Click the start button below to start"],
  topContent:["The Global Input App allows you to store form data (key-value data) on your mobile. The data stay encrypted in your device and will not be stored anywhere else. When you need data transfer to your computer, you can do so on-demand usng the end-to-end encryption."],

   compose:{
     title:"Transfer Form Data",
     content:"Create the form to receive data from the Global Input App:",
     footer:["Both the \"Form Id\" and \"Fonder\" are optional. The value of the \"Form Id\" will assist the Global Input App to find the matching records for auto-filling operation. It is required for identifying the record uniquely in the app if it is saved for later use.",
             "The value of the \"Folder\" is also required if the data is saved for later use, so that the form data can be organized into folders in the app."]

   },
   newField:{
      title:"Add a New Field to the Form",
      content:"Specify the name of the new field to add to the form:",
      example:["Examples: Mobile, Address, Account Number, Post Code ..."],
      fieldLabel:"Name of the new field",
      errorMessages:{
        missingid:"Please provide the name of the new field to add.",
        exists:"The field with the same name already exists."
      }
   },
   connecting:{
     title:"Transfer Form Data",
     content:"Loading...."
   },
   connected:{
          title:"Transfer Form Data",
          content:"Scan the QR Code below with the Global Input App on your mobile"
   },
   senderConnected:{
     title:"Transfer Form Data",
      content:"You can now enter content or select the existing form data on your mobile. The data will be transferred live to the form below. Or you can enter content in the form below, the content will be transferred back live to your mobile.",
   },






    clipboard:{
      copied:"The content of the text field is copied into your clipboard"
    },
    startButton:"Start",
    cancelButton:"Cancel",
    finishButton:"Cancel",
    nextButton:"Next",
    backButton:"Back",
    addNewFieldButton:"Add New Field",
    addButton:"Add",
    unselectButton:"Unselect",
    deleteButton:"Delete",
    copyButton:"Copy",
    backButton:"Back"
}
export default formDataTransferConfig;
