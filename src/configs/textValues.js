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
    documentation:{
      link:"/global-input-app/documentation",
      linkText:"Documentation"
    },
    pricing:{
      link:"/global-input-app/pricing",
      linkText:"Pricing"
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
     universalApp:{
        title:"A Universal Mobile App",
        content:[
          "The Global Input App is a universal mobile app for carrying out input operations on applications running on Smart TVs, Set top boxes, computers and other devices including your IoT products.",
          "With the mobile app, you will be able to operate on various applications running on various devices just by scanning the QR code displayed, and the app wil decide what to do based on the data contained inside the QR code.",
          "The Global Input App allows the service applications to transfer some of its operations or processes to the mobile app, so that the users can operate or control via their mobile.",
          "This brings the mobile app development environment into your service application, please visit  [our documentations](/global-input-app/documentation) for details"
        ]
     },
     endToEnd:{
        title:"End-to-end Encryption",
        content:[
           "The communication between service application and the Global Input App is initiated by scanning the QR code to obtain the encryption key as well as the other information necessary for establishing the communication.",
           "The end-to-end encryption ensures nothing between service application and the mobile app can intercept the communication.",
           "A unique and strong encryption key will be generated for each session on the service application side and transferred via the QR code to achieve the maximum security. ",
           "Nothing is stored or processed on the server side. Everything is encrypted inside the devices and transferred to and from service application. The authentication and autherization happens on the service application side.",
           "With the help of this secure communication channel, the service application will be able to instructs the mobile app to display any form and receive events from the mobile app. please visit  [our documentations](global-input-app/documentation) for details."

        ]
     },
     identification:{
        title:"Identification via mobile",
        content:[
          "The Global Input App allows you to use your mobile to automate the sign in operations on web and business applications.",
          "No embarrassement anymore when you need to sign in on a big screen in a conference room while everybody is looking at what you are typing. You just need to scan the QR code displayed, and your mobile app will sign in for you.",
          "For example, you can use  the Global Input App to automate the sign in operations on JIRA, Confluence, Gitlab, Github and your Wordpress websites.",
          "You no longer need to remember long passwords or make your passwords memorable. You can use a randomly generated password and save it to you Global Input App.  Note that the data are not stored and managed centrally on the server. All your data are encrypted and stored in your mobile phone only. You own your own data and nobody manage it for you. You can backup your data with the [QR Code Printing Service](/global-input-app/qr-printing) if you are worry about loosing your phone. In the business applications, your IT support will reset your passwords in this case anyway.",
          "With help of Global Input App, every business system can now uses a completely different and complex password for each user. Even if one of the systems is compremised and the user credentails are revealed, the other systems will be safe.",
          "This is particularly important in the today's businessa world because it is getting increasingly  difficult to anticipate and overcome the human and system vulneraribilities, especially it is difficult to avoid the human errors. So it is always beneficial if we can easily contain the damage when a part of our business system is compromised.",
          "In the same way, the Global Input App also allows you automate the identification process to give access to some company facilities."
        ]
     },
     automateProcess:{
        title:"Automate your business processes via mobile",
        content:[
          "The Global Input App not only can automate the sign in operations, it also makes it possible to automate the other common operations in your business applications.",
          "The operations and actities along with required data can be configured and saved into your mobile, so that Global Input app can automate the process for you.",
          "You just need to scan the QR code displayed, and your mobile app will start the configured operations on your business application automatically.",
          "For example if you always do a set of operations as soon as you have signed in, then you can set them up in your app, so that it can be repeated after the sign in operations. Or you can display the QR code where you can automate the process via your mobile phone."
        ]
     }



  },
  pricing:{
    software:{
       title:"Free to use",
       content:[
          "The Global Input App running on your mobile does not use any back-end services, so it is completely free to use.",
          "If you have implemented service applications and are using the Global Input library to power your software product, you may be probably using the shared proxy websocket server provided by us. This is free to use on faire-usage policy.",
          "If you wish to install the proxy server into your cloud or on-premises infrastructure, you can download it yourselve from [the github repository](https://github.com/global-input/global-input-node). You can also build the docker image from it or you can download the docker image from the docker-hub. In this case you will be in comple control and will manage workload etc yourself, but we hope you can contact us to let us know you are using it that way. This will at least inspire us to improve the software further and will provide some support for free, for example we may provide you with some free support to help you to install it in the most efficient way on your cloud or on-premise network.",
       ]
    },
    proxyfarm:{
       title:"Dedicated Websocket proxy server farm (starts from £20)",
       content:[
          "If you are business customer, and you wish to use our websocket proxy server farm dedicated for you only, please contact us, we will provide you with an api key which lets your service application to use a dedicated proxy server farm separate from the shared one to ensure the smooth and reliable user experience.",
          "A dedicated proxy server farm starts with £20 per month depends on the number of Global Input App users tring to connect to your service application at the same time."
       ]
    },


  },

  documentation:{
   getStarted:{
     title:"Get Started",
     content:[
       "Please install the Global Input App on your mobile from [Apple App Store](https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4) or [Google Play Store](https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB), and then test it out by scanning the QR code on the top of the [home page](/).",
       "Then you can download the [chrome extension](https://github.com/global-input/chrome-extension) to  use the Gloabal Input App to automate the Sign In process on the various business applications such as Confluence, JIRA, GitLab, GitHub, LucidChart, etc.",
       "If you have a word press website,  you can use [the instructions in this github repository](https://github.com/global-input/wordpress-login) to automate the Sign In process on your website.",
       "Alternatively, you can play around online with this [the React JS example](https://jsfiddle.net/dilshat/3crLw63v/) or [this JavaScript example](https://jsfiddle.net/dilshat/c5fvyxqa/) to make your JavaScript application support the Global Input App.",
     ]
   },
   installation:{
         title:"React JS application",
         content:[
            "Type the following to install the Global Input React JS library into your application:",
            "```npm install --save global-input-react```",
            "Then you can import the Global Input component in your application:",
            "```import {CodeDataRenderer} from \"global-input-react\";```",
            " and the use it to display the Global Input QR Code in your ```render()``` function:",
            "```<CodeDataRenderer service={this}  config={globalInputConfig} level=\"H\" size=\"300\" showControl={true}/>```",
            "Following describes the attributes used:",
            "<div class='subheader'>The <span class='codeFragment'> service</span> attribute </div>",
            "The ```service``` attribute accepts the component that holds and display the QR code. Normally you just need to pass the value ```this``` as shown in the example.",
            "<div class='subheader'>The <span class='codeFragment'> config</span> attribute </div>",

            "The ```config``` attribute accepts the data that describes the form that you would like to display on the mobile screen. The data also contains the references to the callback functions that you would like to be invoked when the user interact with the form.",
            "In the above example, the value of the variable ```globalInputConfig``` is passed as the value of ```config``` attribute, so you need to define the ```globalInputConfig``` variable within your ```render()``` function or anywhere in your code. Following describes the the example data used in [the Sign In example application](https://jsfiddle.net/dilshat/3crLw63v/):",
            "```var globaInputConfig = {``` // starting to define the variable called 'globaInputConfig'. ",
            "```initData:{```// starting to define the data used for initialising the mobile app.",
            "```form:{```// starting to define the form to be displayed on the form.",
            "```title:\"Sign In\",``` // the tile of the form will be 'Sign In'.",
            "```fields:[{``` //starting to define a set of form fields to be displayed on the form starting with the first.",
            "```label: \"Email address\",``` // the label of the field is 'Email Address'.",
            "```operations:{ onInput:setUsername}``` // when the user types on the field, the callback function 'setUsername(username)' will be called.  ",
            "```},{``` // begins to define the next form field.",
            "```label:\"Password\",``` // the label of the field is 'Password'.",
            "```type:\"secret\",``` // the type of the field is secret, so it will display stars on the mobile screen as user types on the field. ",
            "```operations:{onInput:setPassword}``` // when the user types on the field, the callback function setPassword(password) will be called.",
            "```},{``` // begins to define the next form field.",
            "```type: \"button\,``` // the button will be displayed.",
            "```label:\"Login\",``` // The label of the button is \"Login\"",
            "```operations:{onInput:login}``` // the callback function 'login()' will be invoked when the user pressed on the button",
            "```}]``` //finish the definition of the form fields",
            "```}``` //final boundary of the data definition",
            "<div class='subheader'>The <span class='codeFragment'> level</span> attribute </div>",
            "The ```level``` attribute defines error correction level of the QR code. It can be one of ```H```, ```Q```, ```M```, ```L```",
            "<div class='subheader'>The <span class='codeFragment'> size</span> attribute </div>",
            "The ```size``` attribute defines size of the QR code in pixel",
            "More information can be found in the [github repository](https://github.com/global-input/global-input-react)"






         ]

   },


    content:[

       "Please install the Global Input App on your mobile from [Apple App Store](https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4) or [Google Play Store](https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB).",
       "You may be already running the Global Input App on your mobile app and have tried the app by scanning the QR code on the top of the page. You may try the app on the QR Code Printing Service by clicking on the menu on the top of this page. The QR Code Printing Service is a Single Page Application with any back-end services. ",


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

        passwordPring:{
            title:"Password Printing",
            content:[
                  "You can now put your passwords on the stickers. They will be revealed only via your phone camera and can be imported into your phone.",
                  "You can now print your passwords on papers. They will be revealed only via your phone camera and can be imported into your phone.",
                  "You can now place your passwords on the confluence page where you placed the links to login pages. They will be revealed only via your phone camera and can imported into your phone.",
                  "The passwords in the QR Codes are encrypted with a strong master encryption key in your phone.",
                  "A unique master encryption key is generated when you first time run the Global Input App and it will stay in your phone.",
                  "You can print out your master key and place it in a safe place, or you can pair it with another phone.",
                  "This service application is a single page application that do not use back-end services, its source code is available as part of this website at the following github repository",
                  "[https://github.com/global-input/global-input-web](https://github.com/global-input/global-input-web)",
                  "This also demonstrates that a website or service applicatios that are providing service can transfer any input form or control to the Global Input App so that users can operate on the mobile."
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
