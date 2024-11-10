var manageFormDataTextConfig={
        title:"Encrypted Data",
        noData:{
              content:["You have not created any data yet.",
                       "Press the \"+\" button at the bottom right corner of your screen to create a new data.",
                        "Visit the URL below with a browser on your computer for more information on how to use the app",
                        {type:"text", content:"https://globalinput.co.uk/", url:"https://globalinput.co.uk/"}]
        },
        errorMessages:{
          formId:{
             tooShort:"The ID value is too short. You can enter content like username@mycompany.com to uniquely identify your data item.",
             alreadyExists:'The ID already exists. You may use the pattern "username@mycompany.com".',
             alreadyExistsForNewFormId:"The value of the ID field is already taken by another data item in the app.",
             tooLong:"The ID value is too long, you may enter content like username@mycompany.com to uniquely identify your data item.",
          },
          formFields:{
             noneExist:"At least one field is required. Press the 'Add Field' button to add a new field."
          },
          decryptError:{
             title:"Decryption Error",
             content:"Failed to decrypt the data."
          },
          newField:{
              newFieldMissing:"Please provide the name of the new field you would like to add",
              fieldExists:"The field you have specified already exists."
          }

        },
        confirmDelete:{
              title:"Deleting Data",
              content:["Are you sure you would like to delete the following data item?"]
        },
        addAField:{
           title:"Adding New Field",
           content:["1. Enter the name of the new field:"],
           content2:["2. Check the checkbox below if the field you are adding is a multi-line field:"],
           content3:["3. Press the \"Apply\" button to add the new field to the form"],
           idField:{
               placeHolder:"Name of the new field",
           },
           multiLine:{
                label:"Multi-line"
           }
        },
        clipboard:{
          message:"The content of the selected field is copied into your clipboard."
        },
        qrcode:{
             title:{
                   connecting:"Connecting...",
                   connected:"Encrypted Data Transfer"
               },
              content:["Scan with your Global Input App:"],
              content2:["The QR Code is valid for this session only. It contains the encryption key for end-to-end encryption, the URL of the WebSocket server, and the API key required for connecting to the WebSocket Server."],
        },
        newForm:{
             title:"New Data"
        },
        editForm:{
           title:"Edit Data"
        },
        idPlaceHolder:"ID",
        labelPlaceHolder:"Folder",
        domainSearchPlaceHolder:'Web domain',
        searchResult:{
           title:"Search Result"
        },
        searchField:{
             label:"Search forms"
        },
        labelsSiwtch:{
          title:"Folders",
          root:"Root"
        },

};
export default manageFormDataTextConfig;
