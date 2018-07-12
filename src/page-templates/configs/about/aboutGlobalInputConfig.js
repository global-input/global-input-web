
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
    "Global Input App provides a single app solution for encrypted data storage (which includes password manager), data transfer between devices using end-to-end encryption, encrypted QR Code creator & scanner, mobile input & control for smart TV, media device, IoT and web applications.  Your data stays encrypted and is only decrypted when it is needed.  There is no subscription and no database on the server to store your data or your details. Everything is stored in your device's storage, encrypted with an encryption key, which in turn, is encrypted with your app login password.  You can manage and share encryption keys and use encrypted QR codes to backup or share confidential contents.",
    ["Global Input App is part of the ",{type:"link",content:"Global Input Platform", link:pagelinks.platform.platform.url()},". The platform provides a unique solution to device and web applications for implementing mobile input and control, and second screen experience without the need for separate app development. An application can declaratively specify mobile UI (User Interface) elements and the callback functions for receiving mobile events to implement mobile logic within the application itself. The applications can also take advantage of the encrypted data storage by asking users to store data in the app's storage to automate form operations such as sign in, subscription and other form filling operation."],

    ["Global Input App is a free app, created by Dilshat Hewzulla (", {type:"mailto", content:"dilshat@iterativesolution.co.uk"},") to resolve some common issues faced in the business environment. The app is available in ",{type:"a",content:"App Store",href:pagelinks.appStore}," for iOS and in ",{type:"a",content:"Play Store",href:pagelinks.playStore}," for Android."],

],
whyneeded:{
        title:"Reasons Why You Need Global Input App and How to Use It",
        ownYourData:{
            title:"Personal Notebook with Encryption",
            content:["The Global Input App is like a personal notebook with encryption in your device, feeling safe because you are not storing anything outside your device. The app is implemented with the purpose of minimum reliance on the security of the software systems. All your data stays encrypted and decrypted only when it is needed. The data will be decrypted and revealed only when you press the \"Show\" button or \"Edit\" button in the app.",
            "It stores all the data only in your device’s storage, and encrypts the data with the encryption key that you also manage in the app. This means you own your data and the encryption keys that encrypt your data. You can create, export, import, manage and share the encryption keys in the app. The encryptions keys, on the other hand, are encrypted with your login app password."
          ]
        },
        signInDevice:{
            title:"Sign In Across Multiple Devices & Shared Workstations",
            content:[
            "Global Input App provides the password management solution in the corporate environment where a common password manager may not be suitable. In your working environment, you may have to use many business applications such as: JIRA, Confluence, Gitlab, Github, AWS, WordPress, Dropbox and many others. You should use a strong and completely different password for each system and avoid using similar password for multiple systems. Otherwise if one is breached, multiple systems will be affected.",

            "And most importantly, you may have to login to these applications on the shared workstations, or on computers attached to the big screens in a conference room or in a shared screen environment. Often you have to login to multiple business applications when everybody is watching on your screen and on your typing on the computer keyboard. If you use a common password manager, you may have to type your master password on the computer, that may lead to the breach of the password manager itself, bringing risks to all the passwords stored in the password manager.",

            "Global Input App resolve this issue by allowing you to  push a selected data from your mobile device to the target application you are signing in. You just need to scan the QR code displayed, and select the authentication data stored in your app and press the \”Select\” button. The data will then be decrypted and transferred to the target application using end-to-end encryption. You can now set a random password for each application, and you do not need to memorize them. As the result you can use your mobile as a sign in device for signing in to the applications on the shared computers. Most importantly, you can now sign in to the application even if people are watching over both your mobile and computer screen.",


            ["The fastest way of trying this out is to load the ",
                  {type:"link",content:"sample web application",link:pagelinks.samples.formData.link},
                  " on your browser. Note that this does not require you to install the ",
                  {type:"link",content:"Chrome Extension",link:pagelinks.samples.chromeExtension.url()},". ",
                 ". Click on the \”Next” button on the ",
                   {type:"link",content:"sample web application",link:pagelinks.samples.formData.link},
                   ", and then scan the QR Code with your Global Input App on your mobile. The same form being displayed on your computer screen should be displayed on your mobile as well. This allows you to use your mobile to enter content in the form on your computer. You can save the form data into your app and end the session. ",
                   "Now If you reload the page and go through the process again, you will notice that a button named “Matched” has appeared on the bottom of your mobile screen. This means that one or more data items in your app matches the form displayed by the application. If you press the button, a list of matched data items will be presented to you. Normally there will vbe only one item in the list. If you select the data item, you will be presented with the detail page of the data item. You will notice that the value of the fields is being displayed with “*” characters, which means that the value is not decrypted yet.  You can press the \”Show\” button to decrypt and reveal its content, or you can press the “Select” button straightaway to decrypt the data and send it to the form on your computer. Now you can select the field and then click on the “Copy” button to copy the content into you clipboard, and switch to the application you need and paste the content there."
                 ],


            ]

        },
        creatingAccounts:{
            title:"Support Tool to Creating Accounts",
            content:[
              "If you manage applications in a corporate environment, you may need to create accounts for other users and share the authentication details with them unless the application provides the subscription mechanism.",
              "If the application supports the Global Input App, you just need to ask the user scan the QR code displayed by the application and then the user will be able to use his/her mobile to enter his/her details directly into the application.",
              ["If the application does not yet support the Global Input App, you can load the ",
                  {type:"link",content:"sample web application",link:pagelinks.samples.formData.link},
                  " on your computer and compose the form you need, and click on the \”Next\” button to display the QR code. You can ask the user to scan the QR code (you can send the QR code image or share it via a video link). When connected, the user should be  able to use his/her mobile to type in his/her details on the form displayed on your screen. Knowing that the user never need to remember the password, you can ask the user to generate a strong password by pressing the \”Random\” button on the app. You can then click on the “Copy\” button to copy the form details into your clipboard and paste it into the application to continue the account creation process. On the user end, user can press \”Save\” button to save the data in his/her mobile. Otherwise,  when you press the “Finish” button to end the session,  the app will ask the user to save the form data giving the user another chance to save the data."]]
        },
        sharingAccounts:{
            title:"Support Tool for Sharing Accounts",
            content:["In a corporate environment, you may need to share an account with some of your colleagues to accomplish some tasks. Global Input App allows you to share data securely using end-to-end encryption.",
                    "Press the data item you would like to share on the “Data” tab in your Global Input App and then press the “Edit” button. If the data item does not exist yet, you can press the “+” button to create a new “item”. In the data editor screen, you can now press the “QR Code” button to display the QR Code on your mobile screen.",
                    "At this time, you can ask your colleague, whom you would like to share data with, to scan the QR code. You colleague should be able to use his/her mobile to edit the form data on your app until the session ends. You can now ask your colleague to save the data item into his/her app."]


        },
        offlineSharing:{
            title:"Offline Encrypted Communication",
            content:["You can establish an encrypted offline communication with a Global Input App user by pre-sharing one of the managed encryption keys in your app. It is called offline because the network communication is not required for transfering the data.",
                    "Having pre-shared the encryption key, you can use it to encrypt a content and create an encrypted QR code. You can print out the encrypted QR code, or send the image or share it via a video link with the other party to transfer the confidential content. You can do this even in a video conference knowing that only the person, who have shared the encryption key with you, can see the content via his/her mobile screen.",
                    {type:"sub", title:"Printing Passwords", content:[
                      "This is also useful if you have the habit of writing down confidential information on a piece of paper. In some companies, the root passwords for some systems are not normally used in day-to-day operations, so they are written down in a paper and stored in a safebox. With the Global Input App, you can just print out the root passwords as an encrypted QR code and nobody else can decrypt the content unless you have shared the encryption key with them."
                    ]},{
                      type:"sub", title:"Backup Encryption Keys", content:[
                        "In case you lose your phone, you need to export and print out the encryption key as a password-protected QR code, and store it in a safe place.  When you got your new phone, install the Global Input App, and then scan the password-protected QR code to import the encryption key, and then you will be able to decrypt the encrypted QR code again.",
                        "Let’s say you would like to set up an offline encrypted communication between your current phone and a new phone, and you have installed Global Input App on both."
                      ]
                    },{
                      type:"sub", title:"Create New Encryption Key", content:[
                        "Press “+” button on “Keys” tab to generate a new encryption key, and name the encryption key with the name of your new phone. And then press the “Import” button to import the newly generated encryption key into your app."
                      ]
                    },{
                      type:"sub", title:"Export Encryption Keys", content:[
                        "Press to select the encryption key you would like to share on the \“Keys\” tab. Then press the \“QR Code\” button on the bottom of your mobile screen to go into the Export Encryption form, there you can enter a password to encrypt the encryption key that you would like to export. When you press the \“Encrypt\” button, a QR code will be displayed on your mobile screen."
                      ]
                    },{
                      type:"sub", title:"Import Encryption Keys", content:[
                        "Now if you scan the QR code with the Global Input App on your new mobile, a form for importing the encryption key will be displayed, there you need to type in the password to decrypt the encryption key. If the password is correct, the app will be able to decrypt the encryption key and import it into the app.",
                        "After this, an offline encrypted communication will be established between these two mobiles."
                      ]
                    },{
                      type:"sub", title:"Encrypted QR codes", content:[
                        "Now if you press the \“+\” button on the \“Encrypt\” tab of of your Global Input App, you can enter a content to encrypt and and the select the encryption key you have just shared/imported. When you press the encrypt button, a QR code will be displayed on your mobile screen. If you scan it with your new mobile, you will see the decrypted content on your mobile screen, and you can press the \”Copy\” button to copy the content into your clipboard."
                      ]
                    },{
                      type:"sub", title:"Print QR Codes on Computer", content:[
                        ["Load the ",{type:"link",content:"sample web application",link:pagelinks.samples.qrPrinting.link}," with your browser running on your computer."],
                        "If you scan the QR code displayed there, a form will be displayed on your mobile screen that is for creating normal QR code. You can now send an encrypted content from your mobile to the content field of your form on your computer. Press the \"Encrypt\" button on your bottom of your mobile screen to create an encrypted content and send it to the form displayed on your screen. Then you can press \”Print\” button to print the QR code.",
                        "In order to print out the QR code for an encryption key, you can press the “Key” button, you will be able to create a password protected content for the selected encryption key and send it to the QR code creation form. When you press the \"Print\" button you can print out a password protected QR code for the selected encryption key. Try to scan the QR code with another phone to see it in action."
                      ]
                    }]

        },
        contentTransfer:{
            title:"Content Transfer Between Your Mobile and Computers",
            content:["If you are working in a company or organisation, where you may often have to work on a shared computer temporarily to accomplish some tasks.",
              "In this case, you may find something useful on the computer that you would like to copy and paste to your mobile securely. Or you would like to copy and paste a content securely from your mobile into an application running on the computer.",
              ["In order to do this, you can load the ",{type:"link",content:"sample web application",link:pagelinks.samples.contentTransfer.link}, " in a browser on the computer, and scan the QR code with your Globa Input App. A text box should be displayed on the computer and your mobile. You can now paste content either on the computer or on your mobile, and the content will be synchronized using the end-to-end encryption. Finally, you can select the box, and click/press on “Copy” button on the computer/mobile to copy the content into your clipboard so that you can paste the content into any application you like."]
            ]
        },
        formAutomation:{
            title:"Form Automation",
            content:["In some applications, some process may make sense only when it is attached to a user data. For example when a user has placed a message for the service provider, the user data should be attached to it. In order to avoid repeatedly filing the user information, a subscription & login mechanism can be implemented. ",
            "Global Input App provides an alternative solution for this, allowing the application to present the user with an option to save the the data into the app. And in the next use, user can select the saved data and send it back to the application. This means the application can have the option not to save the user data in the application databases, avoiding the complexities brought by the extra work in complying with the privacy policy etc.",
            {type:"sub", title:"See It in Action", content:[
                  ["Load the ",{type:"link",content:"sample web application",link:pagelinks.samples.sendMessage.link}, " in a browser on your computer, and scan the QR Code with your Global Input App."],
                  "A form will be displayed on your mobile titled with “Our Contact Details”, you can now press the the “Save” button to save our details into your app. You can view/edit the data item you have saved on the \“Data\” tab.",
                  "If you can now scroll to the bottom of the form, and press the \“Continue\” button there, a new form for sending a message to us will be displayed. If you fill in your details and a message content, and then press the \“Send Now\”, a message will be sent to us. Now you need to save the form data you have just entered into your app. If you reload the page and go through the steps again, you will notice that a button named \“Matched\” is displayed on the bottom of your mobile screen. This means that at least one data item matching the form exists in your app. Press on it to see the list and select the row to display its details. The data details will be displayed with \“*\” characters. This means that the data is not decrypted yet. You can press \“Show\” button to decrypt and show its details or press the \“Select\” button to send the data item straight away to the form being displayed on your computer. Now you can just need to place a new message and press the \“Send Now\” button.",

            ]},
            {
              type:"sub", title:"A Privacy Compliance Solution",
              content:["Many applications needs to store user data into the application databases in order to provide personalised experience. This means the user data will be collected in the application databases.  In this case, in order to comply with the privacy policy, application developers may have to spend quite significant amount of effort on protecting the user data and making sure that the user has given consent on collecting the personal data and how to use the user data etc.",
              "Global Input App offers an alternative solution by removing the need to store the user data into the application database, instead it presents a form to the user, and the user can push data to fill the form by selecting the data in the app.",
              "For example, a media application may need to personalise the user experience using the preference/user habits parameters that can be automatically adjusted in each session by following what programmes that the user has watched. This data be can be stored as part of the authentication data in the Global Input App with the choice of user, and the user may choose to send the data back to the application to get the personalized experience, thus eliminating the need for the application to store the user specific data on the server. This may simplify the development of the application and may be appealing to the users who may not like like the application provider to store his/her viewing habits into their databases."]
            },
            {
              type:"sub", title:"Subscription on Smart TV",
              content:["A Smart TV media application may require user to create an account before using it. Using the TV remote controller to sign in is already a time consuming task, let alone going through the entire subscription process. The Smart TV media application can be easily extended to have mobile input and mobile control functionality, so that a user can  user his/her mobile to carry out “subscription”, “sign in”, search and browsing functionalities."]
            }
          ]
        },
        mediaPlayerControl:{
            title:"Screen Input & Control for Media Applications",
            content:["Global Input App provides a unique solution for applications to achieve the second screen input & control, plus some user experience without affecting the existing logic and architecture of the application.  This is possible because the business logic for the second screen can be implemented within the application itself following its own functional flows and business logic. The applications declares the UI elements for the second screen and use the callback functions to receive mobile events.",
            ["Please use your Global Input App to scan the QR code displayed on the ",{type:"link",content:"sample web application",link:pagelinks.samples.mediaPlayer.link}," to see this in action. You will be able to use your Global Input App to control the media player on the web application."]
          ]
        },
        gameControl:{
            title:"Mobile Input and Control for Device & Web Applications",
            content:["The personal mobile device is becoming increasingly important in our daily lives and the ability to use these devices for business applications is becoming more widespread. However, the cost of developing a separate mobile application and the associated server-side integration for each business application is quite significant.",
                    "The Global Input App offers a single mobile app solution for multiple devices and web applications. Existing IoT, Smart TV, and web applications can be extended in an add-on manner by defining the mobile UI elements and callback functions for receiving mobile events within the application itself. This is done declaratively in an add-on manner without affecting the business logic and system architecture. The communication between the Global Input App and the application is secured with end-to-end encryption.",
                    ["Please use your Global Input App to scan the QR code displayed on the ",{type:"link",content:"sample web application",link:pagelinks.samples.gameControl.link}," to see this in action."]
                  ]
        },



},
scrollingText:{
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
