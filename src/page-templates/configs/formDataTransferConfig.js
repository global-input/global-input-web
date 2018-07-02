const formDataTransferConfig={
  title:"Sign-in Across Multiple Devices",
  appSubtitle:"Sign-in Across Multiple Devices",
  menu:{
     link:"/global-input-app/form-data-transfer",
     linkText:"Form Data Transfer",
     backLink:"/?scrollTo=formDataTransfer",
     bookmark:"formDataTransfer"
  },
  content:["In today’s corporate world, you may have to use many applications to accomplish your business tasks: JIRA, Confluence, Salesforce, Gitlab, Github, AWS, WordPress, and many others. From the security perspective, passwords for each application should be different, unrelated and difficult to guess so that if one is compromised, the rest are still safe. A common password manager may resolve this issue if we use a single personal device but in today's working environment, we may have to use multiple shared devices. Typing the master password on those shared devices may compromise the Password Manager itself.  This is especially true for example, if one has to login in on a web application loaded on a shared computer that is attached to a big screen in a conference room.",
  "The Global Input App can act as a Password Manager on your personal mobile device. By adding the Global Input App extensions to your web application, your users can securely connect to your web application on their mobile device. Once connected, your users can sign-in securely with their encrypted credentials that are stored on their device by the Global Input App.",
  "Global Input App manages the encrypted content into the custom fields, forms and folders to help the users to search and locate the data and send the selected data to an application running on another device. The application can define defines a form and use registered callback functions to receive mobile inputs. Application can also optional report back the data changes within the application to the application as well.  Press the following \“Start\” button to see how an JavaScript code can build an form to receive mobile input events over the form defined."],

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
     title:"Building Form for Receiving Data from Global Input App",
     content:["Press the \"Next\" button to continue."],
     idField:{
       help:"The \"ID\" value is used for matching existing data entries in the app. If any matching data found, the app will display the \"Matched\" button, which, if pressed, will list the matched data entries that can be selected to fill in the form to automate the form filling."
     },
     folder:{
       help:"The \"Folder\" value helps the Global Input App to orgnazed data with folders if saved."
     },
     fields:{
       header:["Following lists the pre-defined fields. You do not need to populate the fields at this stage."],
       footer:["To delete a fiel: select it and then click \"Delete\" button below.",
       "To add a new field: click on the  \"Add New Field\" button below",
       "Please click on \"Next\" button to receive data from your Global Input App if you are satisfied with the form above"]
     }
   },
    newField:{
      title:"Adding a new field to the form",
      content:["Example names of the new field: Mobile, Address, Account Number, Post Code ..."],
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
      content:"You can now type content either in the form on your mobile or in the form below and they will be synchronized with each other as you type."                
   },

   disConnected:{
     title:"Transfer Form Data",
      content:["Your Global Input App is now disconnected"],
   },






    clipboard:{
      copied:"The content of the text field is copied into your clipboard"
    },
    startButton:"Start",
    cancelButton:"Back",
    backButton:"Back",
    restartButton:"Restart",
    finishButton:"Finish",
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
