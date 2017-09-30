const textValues={
  urls:{
    apk:"https://globalinput.co.uk/app/GlobalInputApp.apk",
    appstore:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",
    playstore:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB"
  },
  topmenu:{
    title:"Global Input Software",
    link:"https://iterativesolution.co.uk",
    tags:"A Universal Mobile Input Solution",
    home:{
      link:"/",
      linkText:"HOME"
    },
    qrprinting:{
      link:"/global-input-app/qr-printing",
      linkText:"QR Code Printing"
    },
    contactUs:{
      link:"https://iterativesolution.co.uk/contact-us/",
      linkText:"CONTACT US"
    },

  },
  home:{

     title:"Global Input Software",
     subtitle:"A Universal mobile input solution",
     copyrightinfo:"Copyright © 2017-2022 by Iterative Solution Limited",
     qrscan:"Scan the following QR code",
     first:{
        title:"A Universal Device Input Mobile App",
        description:[
          "For applications on Smart TV, Computers and other devices.",
          "For Signing in on websites via mobile.",
          "For Sign in to business applications:JIRA, Confluence, gitlab, github...",
          "Operating on IoT devices",
          "For getting access to company facilities"
        ]
     },
     second:{
        title:"End-to-end Encryption",
        description:[
          "Encryption key exchange via QR code only: only in the close distance.",
           "Communication with end-to-end encryption: not possible to intercept communication.",
           "Use different strong encryption key for each session: maximum security possible.",

        ]
     },
     content1:[

        "Install the Global Input App on your mobile from [Apple App Store](https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4) or [Google Play Store](https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB).",
        "You may be already running the Global Input App on your mobile app and have tried the app by scanning the QR code on the top of the page. You may try the app on the QR Code Printing Service by clicking on the menu on the top of this page. The QR Code Printing Service is a Single Page Application with any back-end services. ",
        "then you can download the [chrome extension](https://github.com/global-input/chrome-extension) so you can use it on the various business application such as Confluence, JIRA, GitLab, GitHub, LucidChart, etc",

        "If you have a word press website, you can have a look at the [this github repository](https://github.com/global-input/wordpress-login) to enable the Global Input Software on your website. As the live example, you can visit [here](https://iterativesolution.co.uk/wp-admin/)",

        "If you are javascript developer, you can try online [the React JS example](https://jsfiddle.net/dilshat/26jh68wv/) and [the plain JavaScript example](https://jsfiddle.net/dilshat/c5fvyxqa/) or you may have a look at the documentation and code samples in the github repositories listed below",
        "[https://github.com/global-input/global-input-react](https://github.com/global-input/global-input-react)",
        "[https://github.com/global-input/global-input-message](https://github.com/global-input/global-input-message)",
        "After this, you can sign it on business applications such as Jira, Confluece, GitLab, Github, lucidchart etc.  Our [media software products](https://github.com/boxmediapp) that we have developed are also comes with Global Input enabled. ",
        "You can login very quickly just by pointing the mobile camera to the QR code regardless of how long and how complex the password is! You don't have to remember the long passwords anymore. You don't have such hesitation or embarrassment when you need to sign into the services via the big screen devices while everybody else in the room is watching. In workplace, using shared computer are common place, using complex and different password for each applications and devices greatly increases security. Global Input App will types fill in the same automatically when you scan the QR code.",
        "You can even print out passwords on papers and only your mobile can decrypt it via its camera and display it on your mobile screen! You can print out your master encryption key and lock it in your safebox. When you have a new phone, install the Global Input App on your new phone and point the mobile camera to the master QR code and your phone will recognize it automatically and import it into your phone. This will pair your new phone with your old phone!",
      ],

  },


  signin:{
    title:"Sign In Example",
    content1:["This Sign In sample demonstrates that a service application can transfer the Sign In process to your mobile. This is useful because you may prefer to enter your credentials via mobile phone instead of on a computer or on a big screen device that everybody is watching.",
    "You can make the Global Input App to memorize the form content, so that the mobile app will type the form content for you next time. This will greatly speed up the Sign In or other operations for you, especially if the password is long and complex",
    "This is especially useful for using business applications in workplaces, for example on a shared computers or big sreens in conference rooms. In fact, we are already using the Global Input App for our business applications like Github, Gitlan, JIRA, Confluence, Lucidchart etc. If you need a demo, please [contact us](https://iterativesolution.co.uk/contact-us/).",
    "If the service application is running on a smart TV, entering the username and password via a remote control may not be so convenient, so it makes sense to carry out the Sign In or Subscription process with the help of a mobile phone.",
    "You can have a look at the detailed explanation about this Sign In example in the following github repository:",
    "[https://github.com/global-input/global-input-react](https://github.com/global-input/global-input-react)"
     ],
     content2:["In the source code shown above, the only part that is related to the Global Input is to build the metadata for the sign in form and call the Global Input Component. In the folling source code listing, the part not related to the Global Input functionality is omitted."],
    link:{
      text:"or you can click on the following arrow to see how it works.",
      uri:"/global-input-app-example/signinput"
    },
    complete:{
      uri:  "/global-input-app-example/signinput-complete",
      content1:[
        "Login Submitted. This is just an example of how Global Input enabled Sign In works. If you can click on the Login button via your mobile, you will see how your mobile is connected securely to the Sign In form."
      ]
    }
  },
  simpleInput:{
    title:"Simple Input (two way) Example",
    content1:["This example demonstrates that it is also possible to enable bidirectional operation. This means both the service application and the Global Input app can be operated at the same time. Here, the changes will be reflected and synced on both screens.",
              "This might be useful if you would like to use both your mobile and computer to carry out some tasks, for example copy and paste some content from the Internet using your laptop and carry out the rest of the editing on your mobile."],
    link:{
                text:"Please click on the following arrow to see how it works.",
                uri:"/global-input-app-example/simple-input"
          },
    content2:["In the source code shown above, the only part that is related to the Global Input is to build the metadata for the edit form and call the Global Input Component. In the following source code listing, the part not related to the Global Input functionality is omitted. "],
    complete:{
      uri:  "/global-input-app-example/simple-input-complete",
      content1:[
        "Edit Submitted. This is just an example of how Global Input enabled bidirectional operations functions. "
      ]
    }
  },
  qrcode:{
        title:"QR Code Printing",
        qrscan:"Scan to start to create QR Code",
        content1:[
          
          "The QR Code Printing Service enables you to print a QR code via your phone. Using this service you can print out your passwords that only your phone can decrypt, you can backup your data on paper so that you can import back them into your phone if you loose your phone."
        ],
        content2:[
          "This service application is a single page application that do not use back-end services, its source code is available as part of this website at the following github repository",
          "[https://github.com/global-input/global-input-web](https://github.com/global-input/global-input-web)",
          "This also demonstrates that a website or service applicatios that are providing service can transfer any input form or control to the Global Input App so that users can operate on the mobile."
        ],
        passwordPring:{
            title:"Password Printing",
            content:[
                  "You can now put your passwords on the stickers. They will be revealed only via your phone camera and can be imported into your phone.",
                  "You can now print your passwords on papers. They will be revealed only via your phone camera and can be imported into your phone.",
                  "You can now place your passwords on the confluence page where you placed the links to login pages. They will be revealed only via your phone camera and can imported into your phone.",
                  "The passwords in the QR Codes are encrypted with a strong master encryption key in your phone.",
                  "A unique master encryption key is generated when you first time run the Global Input App and it will stay in your phone.",
                  "You can print out your master key and place it in a safe place, or you can pair it with another phone."
            ]

        }
  },
  pairing:{
    title:"Pair handsets",
    content1:["This example demonstrates that you can also easily restrict your service application to only those mobile devices that are pre-paired with your application service. If you use a different value for the service group id than the default one, only those handsets that are pre-paired can connect to your application service."
      ],
      link:{
                  text:"Please click on the following arrow to see how it works.",
                  uri:"/global-input-app-example/pairing"
            },


  }

};
export default textValues;
