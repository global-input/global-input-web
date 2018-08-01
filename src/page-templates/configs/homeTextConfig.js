import {images,config,pagelinks} from "../../configs";




const  homeTextConfig={
  title:"Global Input",
  menu:{
    link:"/",
    linkText:"Home"
  },

  aboutText:{
              type:"link",
              content:"Get Global Input App Free",
              link:pagelinks.app.link,
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

  platform:{
         title:"Global Input Solution",
         content:[
           ["Global Input Solution provides an ",{type:"link",content:"open-source platform", link:pagelinks.platform.platform.url()}," for connecting a camera enabled mobile device to a web application using end-to-end encryption."],
           {type:"video", video:config.videos.globalInputHome(), poster:images.globalInputApp},

           ["The platform enables the mobile device and the web application to transfer data securely and provides a wide range of functions:"],
            {type:"ul",content:[
               [{type:"scroll",content:"User authentication via mobile", to:pagelinks.samples.formData.bookmark}," initiated by scanning QR codes for applications."],
               [{type:"scroll",content:"Second screen input & control",to:pagelinks.samples.mediaPlayer.bookmark}," for media applications."],
               [{type:"scroll",content:"Mobile input & control",to:pagelinks.samples.gameControl.bookmark}," for IoT, Smart TV and web applications."],
               [{type:"scroll",content:"Form automation",to:pagelinks.samples.sendMessage.bookmark}," using mobile device."],
               [{type:"scroll",content:"Password management",to:pagelinks.samples.chromeExtension.bookmark}," in user’s device."],
               [{type:"scroll",content:"Backup and transfer",to:pagelinks.samples.qrPrinting.bookmark}," confidential information."]
            ]},

            


           ["Please  ",{type:"link", content:"install the app",link:pagelinks.app.link}, " and explore the following use cases in action. You may find ",{type:"link", content:"many reasons",link:pagelinks.app.reasons.url()}," why the app can become an essential tool in a corporate environment. If you are interested in how it works and would like to extend your web applications to allow users to use their mobile to operate on them, please visit the ",{type:"link", content:"platform page",link:pagelinks.platform.link},"."]

          ],




  }
};
export default homeTextConfig;
