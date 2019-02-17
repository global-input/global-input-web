import {images,config,pagelinks} from "../../configs";




const  homeTextConfig={
  title:"Global Input App Solution",
  menu:{
    link:pagelinks.home.link,
    linkText:"Home"
  },

  aboutText:{
              type:"link",
              content:"Get Global Input App Free",
              link:pagelinks.app.url(),
              className:"btn btn-primary buttonOnBlue"
              },
  install:[
            {type:"a",href:pagelinks.appStore,content:{type:"image", src:images.appstore, mobile:{src:images.appstoreMobile}}},
              {type:"a", href:pagelinks.playStore,content:{type:"image", src:images.playstore, mobile:{src:images.playstoreMobile}}}
          ],

  scrollingText:{

                    duration:8000,
                    items:[{
                      title:"Secure Authentication Solution for Business Applications",
                      content:["Content Stored Encrypted in Your Device",
                              "Select & Push Credentials from Your Mobile to the Applications"],

                      },{
                        title:"Own Your Data and Encryption",
                        content:["Create, Manage and Share Encryption Keys",
                                "Use Encryption Keys to Manage Access to the Data"],

                        },{
                          title:"Secure Data Transfer Between Devices",
                          content:["Share Encryption Key via QR Codes to Start Transfer",
                                  "Push Content Securely from Mobile App to Business Applications"],

                          },{
                            title:"Allowing Users to Have Complete Control of their Data",
                            content:["Request User Data On Demand When Needed",
                                    "Allowing the User to Inspect and Push the Data to the Business Application"],

                            },{
                              title:"Allowing Business Applications to Store Encryption Keys",
                              content:["Use Encryption Keys for Encrypting Customer Data",
                                      "Use Encryption Key Hiearchy to Control Access to the Customer Data"],

                              }]

  },
  globalInputApp:{
    content:[
       "Global Input App is a mobile app solution enabling device-to-device communication secured with the end-to-end encryption, with encrypted QR codes and encrypted storage. The following are examples of use cases Global Input App solution:",
       {
         type:"ul",
         content:[
            "Authentication Device: Push the credentials securely from smartphones to the applications via an end-to-end encrypted secure channel.",
            "Mobile Input & Control: using smartphones to operate on other devices(Computers, IoT devices, Smart TVs and company facilities).",
            "Smartphones Digital ID cards: smart digital card protected with biometric authentication to access  company facilities.",
            "Digital Signer: Signing a message with your smartphone.",
            "GDPR Compliance Solution: Allowing users to have complete control of their data. Applications can request the personal data when needed from a user and the user can push the data to the application."]
       },
        "You may read the following two articles listed below to understand the idea behind the solution:",
        {
            type:"ul",
            content:[
                {type:"a",         href:config.docs.smartphoneoperateonapplications,content:"a solution for using smartphones to operate on applications running on other devices without developing a separate mobile app."},
                {type:"a",         href:config.docs.security,content:"an innovative security strategy to resolve many common security issues faced daily by businesses."}
              ]

         },
         [
         {type:"a", href:pagelinks.video.introduction,content:"This video"}, " gives an overview of the Global Input App, you may also visit ",
         {type:"link", content:"the help page", link:pagelinks.platform.url()},
         " to find out more information on how to use the app and how to implement the various solutions."
       ],
       ["The end-users can watch ",{type:"a", href:pagelinks.video.authenticationDemo,content:" this demo video"}, " and ",{type:"a", href:pagelinks.video.tutorialVideo,content:" this tutorial video"},"."]

      ]

  },
  community:{
      title:"Join the Global Input App Community on Gitter",
      content:["Global Input App is a free open-source solution to enhance existing applications running on computers, SmartTV, IoT and other devices to have mobile input, mobile control and portable encrypted storage functionalities. You are welcome to join our Global Input App community to learn about this technology and contribute to the  work we are doing. Start by chatting now."],
      button:{
            content:"CHAT NOW"
      }
  }



};
export default homeTextConfig;
