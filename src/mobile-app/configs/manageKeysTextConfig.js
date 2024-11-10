const manageKeysTextConfig={
    title:"Encryption Keys",
    content:["Press the \"+\" button at the bottom right corner of your screen to create a new encryption key."],
    encryptionDetails:{
          activated:{
            title:"Active Encryption Key",
          },
          deactivated:{
            title:"Encryption Key",
          }
    },
    export:{
        fillContent:{
              title:"Encrypting Encryption Key",
              selectKey:{
                  content:["1. Select the encryption key to export."],
              },
              password:{
                  placeHolder:"Password",
                  content1:["2. Password for encrypting the encryption key:"],
                  content2:["3. Press the \"Encrypt\" button to encrypt the encryption key using the password you have provided. The encrypted content will be sent over to the connected application."]
              },
        },
        qrcode:{
              password:{
                  title:"Exporting Encryption Key",
                  placeHolder:"Password",
                  content1:["Exporting the encryption key as password protected QR Code:",
                     "1. Provide the password in the following field for encrypting the encryption key:"],
                  content2:["2. Press the \"Encrypt\" button to create the password protected QR Code for this encryption key."]
              },
              title:"Encrypted QR Code",
              content:["Scan with your Global Input App:"],
              content2:["This is the password protected QR Code for the encryption key \"{name}\". You can print it out and put it in a safe place in case you lose your phone.",
                        "You can scan it with another Global Input App instance to import the encryption key.",
                        "Note that you need to remember the password, which you have provided in the previous step, to import the encryption key."]
        },

        textContent:{
              password:{
                  title:"Exporting Encryption Key",
                  placeHolder:"Password",
                  content1:["Exporting the encryption key as password protected text content:",
                            "1. Password for encrypting the encryption key:"],
                  content2:["2. Press the \"Encrypt\" button to create the password protected content for this encryption key."]
              },
              clipboard:{
                title:"Encrypted Encryption Key",
                content1:["The encrypted content:"],
                content2:["Please press the \"Copy\" button to copy the content into your clipboard.",]
              },
              complete:{
                  title:"Export Completed",
                  content:["The encrypted encryption key \"{name}\" is now exported to your clipboard.",
                           "You can paste it into anywhere you like to save your encryption key.",
                           "When you would like to import the encryption key into Global Input App, please copy the encrypted content into your clipboard, and then press the \"Import\" button on the \"More\" tab.",
                           "Note that you need to remember the password, which you have provided in the previous step, to import the encryption key."]
              }

        }
    },
    importKey:{
        title:"Importing Encryption Key",
        content:["The QR Code is identified as an encryption key, and it is protected with a password.", "1. You need to provide the password to decrypt it:"],
        password:{
              placeHolder:"Password required"
        },
        content2:["2. Press the \"Decrypt\" button to decrypt and import the encryption key."],
    },
    deletingEncryptionKey:{
        title:"Deleting Encryption Key",
        content1:["The following encryption key is about to be deleted."],
        content2:["If you have some exported data that was encrypted with the encryption key that you are deleting, you will not be able to import the exported data unless you have exported/shared the encryption key.",
              "Are you sure you want to delete this encryption key?"],
    },
    nameField:{
            placeHolder:"Name of the encryption key"
    },
    generateNewKey:{
          title:"New Encryption Key",
          content:["Press the \"Import\" button to import this encryption key into the app"]
    },
    errorMessages:{
        passwordIsmissing:"Password required for decrypting the encryption key.",
        passwordTooShort:"Password too short",
        nameMissing:"The name field cannot be empty.",
        failedToEncrypt:"Failed to encrypt the content:",
        invalidPassword:"Failed to decrypt the key using the password provided.",
    },
    encryptionImported:{
          title:"Encryption Key Imported",
          content:[
            "The encryption key above has been imported into the app successfully."],
    },
    encryptionActivated:{
        title:"Encryption Key Activated",
        content:["The encryption key is now activated.",
              "Your data in the app is re-encrypted with this encryption key now.",
              "Note that if you have exported data content encrypted with the encryption key that was activated previously, you cannot import the exported data without re-activating the encryption key first."],
    },
}
export default manageKeysTextConfig;
