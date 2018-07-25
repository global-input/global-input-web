import {pagelinks} from "../../configs";
const formDataTransferConfig={
  title:"Sign In Across Multiple Devices",
  appSubtitle:"Form Data Transfer",
  menu:{
     link:pagelinks.samples.formData.link,
     linkText:"Form Data Transfer",
     backLink:pagelinks.samples.formData.backLink,
     bookmark:pagelinks.samples.formData.bookmark,
  },
  content:["Global Input App can act as a Password Manager on your personal mobile device for signing into the web applications with Global Input App extensions.",
          "Credentials are stored encrypted in your device’s storage only, and decrypted only when it is needed and pushed to the connected application using end-to-end encryption.",
          "Global Input allows to login securely to a web application on a shared computer that is attached to a shared screen in a conference room."],




   compose:{
     title:"Building Form for Receiving Data from Global Input App",
     content:["Press the \"Next\" button to continue."],
     idField:{
       help:"The \"ID\" value is for matching the existing data items in the app. If any matching data item is found, the app will display the \"Matched\" button. If you press the button, you will be presented with a list of matched data items that can be selected to fill in the form to automate the form filling operation. A pair of '###' marker identifies a place holder, which will be replaced with the value of the corresponding field named by the place holder when saving the data item in the app. For example, the ###username### place holder will be replaced with whatever content you have filled in the following \"Username\" field when saving the form. On the other hand, when it is used to match the existing data items in the app, the place holders will be removed and remaining part will be used as the \"starts with\" matching operation against the data in the app."
     },
     folder:{
       help:"The \"Folder\" value helps the Global Input App to organise data into folders if saved into the app"
     },
     fields:{
       header:["Following lists the pre-defined fields. You do not need to populate the fields at this stage."],
       footer:["To delete a field: please select the field by clicking on the checkbox on the right hand side of the field and then click \"Delete\" button below to delete the field.",
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
      shorttitle:"Disconnected"
   },






    clipboard:{
      copied:"The content of the text field is copied into your clipboard"
    },
    startButton:"Try It",
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
