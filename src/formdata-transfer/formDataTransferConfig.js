const formDataTransferConfig={
  title:"Transfer Form Data",
  menu:{
     link:"/global-input-app/formd-data-transfer",
     linkText:"Form Data Transfer"
   },
   content:["The Global Input App allows you to transfer the form data between your computer and the Global Input App via the End-To-End encryption",
            "The form data will be automatically matched based on the Form ID, so that you do not need to search and locate the form data.",
            "Here you you need to specify the form id if you would like the Global Input App to filter the data for you. If you install the Global Input App extension on your Chrome browser, this will be automatically taken cared off.",
            "Click the start button below to start"],
  topContent:["The Global Input App allows you to store form data (key-value data) on your mobile. The data stay encrypted in your device and will not be stored anywhere else. When you need any of them on your computer, you can transfer it via the end-to-end encryption. Here you can transfer form data from your mobile to your computer or vice versa."],

   compose:{
     title:"Transfer Form Data",
     content:"Create the form to receive data from the Global Input App:",
   },
   newField:{
      title:"Add a New Field to the Form",
      content:"Specify the name of the new field to add to the form:",
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
