
import {images,pagelinks} from "../../../configs";

const aboutGlobalInputConfig={
  appTitle:"Global Input",
  appSubtitle:"Global Input App",
  title:"What is Global Input App",
  menu:{
    link:pagelinks.app.link,
    link2:pagelinks.app.link2,
    linkText:"App"
  },


  content:[
    "Global Input App provides a single app solution for encrypted data storage (i.e. password manager), data transfer between devices using end-to-end encryption, encrypted QR Code creator & scanner, mobile input & control for smart TV, media device, IoT and web applications.  Your data stays encrypted and is only decrypted when it is needed.  There is no subscription and no database on the server to store your data or your details. Everything is stored in your device's storage, encrypted with an encryption key, which in turn, is encrypted with your app login password.  You can manage and share encryption keys and use encrypted QR codes to backup or share confidential contents.",
    ["Global Input App is part of the ",{type:"link",content:"Global Input Platform", link:pagelinks.developers.platform.url()},". The platform provides a unique solution to device and web applications for implementing mobile input and control, and second screen experience without separate mobile application development. An application can declaratively specify mobile UI (User Interface) elements and the callback functions for receiving mobile events to implement mobile logic within the application itself. The applications can also take advantage of the encrypted data storage to allow users to store the data in the app's storage to automate form operations such as sign in, subscription, application forms, etc. "],

    ["Global Input App is a free app, created by Dilshat Hewzulla (", {type:"a", content:"dilshat@iterativesolution.co.uk", href:"dilshat@iterativesolution.co.uk"},") to resolve some common issues faced in the business environment. The app is available in ",{type:"a",content:"App Store",href:pagelinks.appStore}," for iOS and in ",{type:"a",content:"Play Store",href:pagelinks.playStore}," for Android."],

],
whyneeded:{
        title:"Reasons Why You Need Global Input App and How to Use It",
        ownYourData:{
            title:"Own Your Data and Your Encryption",
            content:["With Global Input App, it is like a personal notebook in your device and with the encryption function that you are in control, feeling safe because you are not storing anything outside your device. The app is implemented to remove the need for the reliance on the security in the storages, networks, servers and cloud infrastructures. It stores all the data in your devices only, and encrypts the data with the encryption keys that you also manage in the app. This means you own your data and the encryption that encrypts your data in your device. You can create, export, import, manage and share the encryption keys in the app, while the encryptions keys are encrypted with your login app password. All your data stays encrypted and it is decrypted only when it is needed. The data will be decrypted and revealed only when you press the \"Show\" button or \"Edit\" button on the app, In other time, it stays encrypted.",
          ]
        },
        signInDevice:{
            title:"Sign In Across Multiple Shared Device",
            content:[
            "Global Input App is implemented to resolve the password management issue in the corporate environment where a common password manager may not be suitable. In a corporate environment, you may have to use many applications to accomplish your business tasks: JIRA, Confluence, Gitlab, Github, AWS, WordPress, Dropbox and many others.  And you may have to login to these applications on the shared workstations, and on computers attached to the big screens in a conference room or shared screen environment. Often you have to login to multiple business applications when everybody is watching on your screen and your typing on the computer keyboard. If you use a common password manager, you may have to type the master password on the computer, which endangers the entire data stored in your password manager. You may rely on two-factor authentication when your password is breached.",

            "Global Input App resolve this issue by allowing you to  push a selected data from your mobile device to the target application. You just need to scan the QR code displayed, and select the authentication data stored in your device and press the \”Select\” button. The data will then be transferred using end-to-end encryption. You can now set a random and different password for each application that you do not need to remember and use your mobile as a sign in device to the web applications on shared computers.  Because you are using completely random password for each device, even if one system is hacked, the other systems will be safe.",


            ["The fastest way of trying this out is to to load the ",
                  {type:"link",content:"sample web application",link:pagelinks.samples.formData.link},
                  " on your browser. Note that this does not require you to install the ",
                  {type:"link",content:"Chrome Extension",link:pagelinks.samples.chromeExtension.url()},". ",
                 ".  Click on the \”Next” button on the ",
                   {type:"link",content:"sample web application",link:pagelinks.samples.formData.link},
                   ", and then scan the QR Code with your Global Input App on your mobile. You should now see a form on your mobile screen, so you can enter some authentication data there. You will notice the data is being transferred live to the form on your computer. Save the form data on your mobile before ending the session. The next time when you come back to the same form, you can can see that a “Matched” button has appeared on the bottom of your mobile screen. Pressing the button will list all the matched data saved in your mobile. Select the data by pressing the data item, you will be presented with the details of the data item. At that time, the fields will be displayed with “*” characters, this means that the value is not decrypted yet. If you press the “Select” button, the data will be decrypted and sent to the form on your computer. Now you can select the field and then click on the “Copy” button to copy the content into you clipboard, and switch to the application you need and paste the content there."
                 ],


            ]

        },
        creatingAccounts:{
            title:"Support Tool to Creating Accounts",
            content:[
              "If you manage applications in a corporate environment, you may need to create accounts for other users and share the authentication details with them unless the application provides the user subscription mechanism.",
              "If the application supports the Global Input App, you just need to let the user scan the QR code displayed by the application and allow the user to use his/her mobile to enter his/her details directly into the application.",
              ["If the application does not yet support the Global Input App, you can load the ",
                  {type:"link",content:"sample web application",link:pagelinks.samples.formData.link},
                  " on your computer and compose the form you need, and click on the \”Next\” button to display the QR code. You can ask the user to scan the QR code (you can send the QR code image or share it via a video link) to establish the end-to-end encrypted communication.  Now the user will be able to use his/her mobile to type in his/her details on the form displayed on your screen. Because the user never need to remember the password, you can ask the user to generate a strong password by pressing the \”Random\” button on the app. You can then click on the “Copy\” button to copy the form details into your clipboard and paste it into the application to continue the account creation process. On the user end, the user needs to press \”Save\” button to save the form details in his/her mobile. You can now press the “Finish” button to end the session. The app will ask the user to save the form details when the session is ended if the user has not saved the form data yet."]]
        },
        sharingAccounts:{
            title:"Support Tool for Sharing Accounts",
            content:["In a corporate environment, you may need to share an account with some of your college to accomplish some tasks. Global Input App allows you to share data securely using end-to-end encryption.",
                    "Press the data item you would like to share on the “Data” tab on your Global Input App and then press the “Edit” button. If the data item does not exist yet, you can press the “+” button create a new “item”. In the data editor screen, press the “QR Code” button. This will display the QR Code.",
                    "You can now ask your college, whom you would like to share data with, to scan the QR code. You college should be able to use his/her mobile to edit the form data on your app until the session ends. You can now ask your college to save the data item into his/her app and you can do the same if the data on your side is also changed."]


        },
        offlineSharing:{
            title:"Offline Encrypted Communication",
            content:["You can establish an encrypted offline communication with a Global Input App user by pre-sharing one of the managed encryption keys in your app. It is called offline because the network communication is not required for the data transfer process.",
                    "Having pre-shared the encryption key, you can use it to encrypt an content and create an encrypted QR code with it. You can print out the encrypted QR code, or send the image or share it via the video link with the other party to transfer the confidential content. You can do this even in a video conference knowing that only the person, who have shared the encryption key with you, can see the content via his/her mobile screen.",
                    {type:"sub", title:"Printing Passwords", content:[
                      "This is also useful if you have the habit of writing down confidential information on a piece of paper. In some companies, the root passwords for some systems are not normally used in day-to-day operations, so they are written down in a paper and stored in a safebox. With the Global Input App, you can just print out the root passwords as an encrypted QR codes and nobody else can decrypt the content unless you have shared the encryption key with them."
                    ]},{
                      type:"sub", title:"Backup Encryption Keys", content:[
                        "In case you lose your phone, you need to export and print out the encryption key as a password-protected QR code, and store it in a safe place.  When you got your new phone, install the Global Input App, and then scan the password-protected QR code to import the encryption key, and then you will be able to decrypt the encrypted QR code again.",
                        "Let’s say you would like to set up an offline encrypted communication between your current phone and a new phone, and you have installed Global Input App on both."
                      ]
                    },{
                      type:"sub", title:"Create New Encryption Key", content:[
                        "Press “+” button on “Keys” tab to generate a new encryption key, and name the encryption key with name of your new phone. And then press the “Import” button to import the newly generated encryption key into your app."
                      ]
                    },{
                      type:"sub", title:"Export Encryption Keys", content:[
                        "Press the encryption key you would like to share on the \“Keys\” tab. Then you should be able to see a \“QR Code\” button on the bottom of your mobile screen. Press the button to go to the Export screen, there you can enter a password to encrypt the encryption key that you would like to export. When you press the \“Encrypt\” button, a QR code will be displayed on your mobile screen."
                      ]
                    },{
                      type:"sub", title:"Import Encryption Keys", content:[
                        "If you scan the QR code now with the Global Input App on your new phone, a screen for importing the encryption key will be displayed, there you need to type in the password to decrypt the encryption key. If the password is correct, the app will be able to decrypt the encryption key and import it into the app.",
                        "After this, an offline encrypted communication will be established between these two mobiles."
                      ]
                    },{
                      type:"sub", title:"Encrypted QR codes", content:[
                        "Now if you press the \“+\” button on the \“Encrypt\” tab of of your Global Input App, you can enter a content to encrypt and and the select the encryption key you have just imported. When you press the encrypt button, a QR code will be displayed on your mobile screen. If you scan it with your new phone, you will see decrypted content on your mobile screen, and you can press the \”Copy\” button to copy the content into your clipboard."
                      ]
                    },{
                      type:"sub", title:"Print QR Codes on Computer", content:[
                        ["Please try the ",{type:"link",content:"sample web application",link:pagelinks.samples.qrPrinting.link}," to print out encrypted QR codes the password-protected QR codes."],
                        "If you scan the QR code displayed there, a form will be displayed on your mobile screen that are for creating normal QR code, but you can send an encrypted content from your mobile. Press the \"Encrypt\" button on your bottom of your mobile screen to create an encrypted content and send it to the form displayed on your screen. Then you can press \”Print\” button to print the QR code. On the other hand, When you have connected to the QR code creation form, If you press the “Key” button, you will be able to create a password protected content for the selected encryption key and send it to the QR code creation form. When you press the \"Print\" button you can print out a password protected QR code for the selected encryption key. Try to scan the QR code with another phone to see it in action."
                      ]
                    }]

        }

},
advert:{
    duration:8000,
    items:[{
      title:"Store Content Encrypted in Your Device",
      content:["Content Stays Encrypted Even in Memory",
              "Decrypted Only When Needed"],
    },{
      title:"Own Your Data and Encryption",
      content:["Create, Export, Share & Import Encryption Keys",
              "Select Encryption Key to Encrypt Your Data"],
    },{
      title:"Create Encrypted QR Codes",
      content:["Encrypt Content with Encryption Keys",
              "Backup and Share Credentials"],
    },{
      title:"Scan to Decrypt the Content",
      content:["Transfer Encrypted Content via QR Code",
              "Share Encryption Keys Securely"],
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
      content:["Store and Manage Credentials",
              "Transfer to Other Device Applications When Needed"],
    },{
      title:"Single Mobile App",
      content:["Mobile Input & Control for Device and Web Applications",
              "Second Screen Experience for Media Applications"],
    },{
      title:"Implementing Mobile Control",
      content:["Enabling IoT, Smart TV and Web Applications",
               "Single Mobile App Solution for Multiple Devices"],
    }],
}

};
export default aboutGlobalInputConfig;
