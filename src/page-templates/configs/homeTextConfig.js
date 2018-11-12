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
        "Global Input App is a mobile app with extensions, enabling applications running on other devices to have mobile input, mobile control, portable encrypted data storage and portable encryption key management functionalities. This mechanism provides applications with:",
        {
            type:"ul",
            content:[
                {type:"a",         href:config.docs.smartphoneoperateonapplications,content:"a solution for using smartphones to operate on applications running on other devices without developing a separate mobile app."},
                {type:"a",         href:config.docs.security,content:"an innovative security strategy to resolve many common security issues faced daily by businesses."},
                {type:"link",         link:pagelinks.privacy.url(),content:"a GDPR compliant solution to secure customer data and to give users complete control over their data."}


              ]

         },
         ["You may have a look at the demo of Global Input App in ",
         {type:"a", href:pagelinks.video.introduction,content:"this video"}, " or you can install the mobile app on your smartphone and try it out on the applications listed on this page."]

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
