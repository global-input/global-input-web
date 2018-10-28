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
    ["Global Input App is a mobile app with extensions, enabling applications running on other devices to have mobile input, mobile control, portable encrypted data storage and portable encryption key management functionalities. This mechanism leads to a set of exciting usages where a smartphone can be used to operate on various applications running on other devices. Please read ", {type:"a", href:config.docs.smartphoneoperateonapplications,content:"this article"}," to learn more about this topic. You may see Global Input App in action from ",{type:"a", href:pagelinks.video.introduction,content:"this introduction video"}, "."]
    ]
  },
  help:{

    content:[[
      "Global Input App also provides ", {type:"a", href:config.docs.smartphoneoperateonapplications,content:"a free and open-source security mechanism"}," to resolve security issues faced daily by your business applications and in your workplace environment. You can integrate the Global Input App solution into your business mobile app and business applications for free. We provide consultancy to develop GDPR compliant business applications that span across multiple devices. "]
    ]

  }

};
export default homeTextConfig;
