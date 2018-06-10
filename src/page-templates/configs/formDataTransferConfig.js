const formDataTransferConfig={
  title:"Transfer Form Data",
  menu:{
     link:"/global-input-app/formd-data-transfer",
     linkText:"Form Data Transfer",
     backLink:"/?scrollTo=formDataTransfer",
     bookmark:"formDataTransfer"
  },
  content:["Transfer form data from one device to another.",
            "The data stay encrypted in your device and will not be stored anywhere else, and decrypted only where it is needed",
            "You can transfer any form data on-demand between your devices via the end-to-end encryption, so no need for typing your app password on computers.",
            {type:"line", content:["This is also an example of how to use ",{
              type:"a", content:"the global-input-message", href:"https://github.com/global-input/global-input-message"
            }, " WebSocket JavaScript library  to declaratively define form fields to receive form data from the Global Input App"]}],

  advert:{
                    duration:10000,
                    items:[{
                      title:"Transfer Form Data From Your Mobile to Your Computer",
                      content:["Manage Form (Key-Value) Data on Your Mobile and Transfer On-Demand to Your Computer",
                              "Transfer Encrypted Data Between the Global Input App and the JavaScript Code in the Page."],
                      className: "animateLeftRight"
                    },{
                      title:"Transfer Form Data From Your Mobile to Your Computer",
                      content:["Save Form (Key-Value) Data in Your Mobile, Encrypted with Your Encryption Key.",
                               "On-Demand Transfer to Your Computer: Typing Master Password On Computers Are Not Required."],
                      className: "animateAppearFromSmallToBig"
                    },{
                      title:"Transfer Form Data From Your Mobile to Your Computer",
                      content:["Save Form (Key-Value) Data in Your Mobile, Encrypted with Your Encryption Key.",
                               "Use End-To-End Encryption to Transfer Data On-Demand From Your Mobile to Your Computer."],
                      className:"animateWithRotate"
                    }]
  },


   compose:{
     title:"Transfer Form Data",
     content:"Create the form to receive data from the Global Input App:",
     footer:["Both the \"Form Id\" and \"Folder\" are optional. The value of the \"Form Id\" will assist the Global Input App to find the matching records for auto-filling operation. It is required for identifying the record uniquely in the app if it is saved for later use.",
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
