import {images,config,pagelinks} from "../../configs";




const  homeTextConfig={
  title:"Global Input",
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
       "Global Input App provides a straightforward solution for:",
       {
         type:"ul",
         content:[
            "Using smartphones to operate on applications on other devices: scan a QR code to connect to an application and carry out various operations on the application.",
            "Using smartphones to sign in: scan a QR code to attach to the form on an application and push the credentials to identify himself/herself.  It can even be extended to digital ID card protected with biometric authentication.",
            "Using smartphones to store and share personal data: scan a QR code to download or share personal information.  One application of this is to implement the digital business card mechanism, and another is to auto-fill forms on the applications, for example, subscription and account update etc.",
            "An innovative way of implementing the GDPR compliance.",
            "Using smartphones to implement a business security strategy."
         ]
       },
        "Global Input App is a mobile app with extensions, enabling applications running on other devices to have mobile input, mobile control, portable encrypted data storage and portable encryption key management functionalities.  You may read the following two articles to learn more about the idea behind the solution:",
        {
            type:"ul",
            content:[
                {type:"a",         href:config.docs.smartphoneoperateonapplications,content:"a solution for using smartphones to operate on applications running on other devices without developing a separate mobile app."},
                {type:"a",         href:config.docs.security,content:"an innovative security strategy to resolve many common security issues faced daily by businesses."}
              ]

         },
         ["You may watch ",
         {type:"a", href:pagelinks.video.introduction,content:"this video"}, " to have an overview of the Global Input App, and then install the mobile app on your smartphone and watch the video on ",
         {type:"link", content:"the help page", link:pagelinks.platform.url()},
         "."
         ]

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
