const formDataTransferConfig={
  title:"Transfer Form Data",
  appSubtitle:"Transfer Form Data",
  menu:{
     link:"/global-input-app/formd-data-transfer",
     linkText:"Form Data Transfer",
     backLink:"/?scrollTo=formDataTransfer",
     bookmark:"formDataTransfer"
  },
  content:["Global Input App manages the encrypted content into the custom fields, forms and folders to help the users to search and locate the data and send the selected data to an application running on another device.",
            {type:"line", content:["The app allows a device (i.e. Smart TV) or a web application to use the ",{
              type:"a", content:"global-input-message", href:"https://github.com/global-input/global-input-message"
            }, " JavaScript library  to define a form and specify the type of the data that the application needs. This enables the Global Input App user to locate the data that the application needs and send it over to the application. This can speed up form operations such as Sign In, Subscription, and online application forms etc.",
              "The app scans the QR code displayed by the application to obtain the encryption key for the end-to-end encryption and other communication parameters necessary for establishing the communication."]}],

  advert:{
                    duration:8000,
                    items:[{
                      title:"Store Content Encrypted in Your Device",
                      content:["Content Stays Encrypted Even in Memory",
                              "Decrypted Only When Needed."],

                      },{
                        title:"Own Your Data and Encryption",
                        content:["Create, Manage Encryption Keys",
                                "Export, Share, Import Encryption Keys"],

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
                              content:["Store and Manage Your Credentials",
                                      "Transfer to Other Device Applications When Needed"],

                              }]
  },


   compose:{
     title:"Building Form for Receiving Data",
     content:["Press the \"Next\" button to continue."],
     footer:["The \"ID\" field is optional. If it is filled in, it will help the Global Input App to filter the data for selection.",
             "The \"Folder\" field is also optional. It will be used in saving the data in the Global Input App if you have choose to save the data in the app."]

   },
   newField:{
      title:"Adding New Field",
      content:["Specify the name of the new field that you would like to add to the form:",
              "Examples: Mobile, Address, Account Number, Post Code ..."],
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
          content:"Scan the QR Code below with your Global Input App"
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
    finishButton:"Back",
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
