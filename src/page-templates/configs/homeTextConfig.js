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
                      title:"Store Content Encrypted in Your Device",
                      content:["Content Stays Encrypted Even in Memory",
                              "Decrypted Only When Needed."],

                      },{
                        title:"Own Your Data and Encryption",
                        content:["Create, Manage Encryption Keys",
                                "Export, Share, Import Encryption Keys"],

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
                              content:["Store and Manage Your Credentials",
                                      "Transfer to Other Device Applications When Needed"],

                              }]

  },
  globalInputApp:{
    content:["Global Input App is a mobile app, which uses extensions to provide services for business applications to have mobile input and mobile control, portable encrypted data storage and encryption key management etc. The security mechanisms that this solution can provide to the business applications are:",
    {type:"ul", content:["A secure user authentication mechanism without introducing complicated process.",
    "A secure mechanism to store customer data into the customer’s device so that user can have complete control over his/her data.",
    "A secure mechanism for securing the customer data in the application database on the cloud by saving the master encryption key in the mobile app and managing access via the encryption keys hierarchy."]},

    ["For end-user functionalities, have a look at ",{type:"a", href:pagelinks.video.introduction,content:"the short introduction video"}," to see how you can use it in your workplace environment."]]
  },
  help:{

    content:[
      "Global Input App provides an entirely free and open-source solution to resolve security issues faced daily by your business applications and in your workplace environment. You can integrate the Global Input App solution into your business mobile app and business applications for free, as long as you can acknowledge and help us to spread the word. We aim to generate revenue by providing consultancy and develop business applications that span across multiple devices in your workplace."]

  }

};
export default homeTextConfig;
