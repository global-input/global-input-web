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
      ["Global Input App is a mobile app with extensions, providing services to business applications to have mobile input and mobile control, portable encrypted data storage and encryption key management etc. Please read ", {type:"a", href:config.docs.security,content:"this article"}," to find out how businesses can use these services to implement ",{type:"a", href:config.docs.security,content:"an enterprise security strategy"},"."],    
    ["Please watch ",{type:"a", href:pagelinks.video.introduction,content:"this introduction video"}," for end-user functionalities."]]
  },
  help:{

    content:[
      "Global Input App provides an entirely free and open-source solution to resolve security issues faced daily by your business applications and in your workplace environment. You can integrate the Global Input App solution into your business mobile app and business applications for free, as long as you can acknowledge and help us to spread the word. We aim to generate revenue by providing consultancy and develop business applications that span across multiple devices in your workplace."]

  }

};
export default homeTextConfig;
