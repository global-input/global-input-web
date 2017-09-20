const textValues={
  urls:{
    apk:"https://globalinput.co.uk/app/GlobalInputApp.apk",

  },
  company:{
    title:"Iterative Solution",
    link:"https://iterativesolution.co.uk",
    tags:"Innovation and Excellence",
    home:{
      link:"https://iterativesolution.co.uk",
      linkText:"HOME"
    },
    mobileForBusiness:{
      link:"https://iterativesolution.co.uk/mobile-for-business/",
      linkText:"MOBILE FOR BUSINESS"
    },
    mobileForBusiness:{
      link:"https://iterativesolution.co.uk/computer-vision-ai/",
      linkText:"COMPUTER VISION & AI"
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

     content1:[
       "The Global Input App allows users to connect their mobile to the service applications running on computers, Smart TVs, Set Top Boxes or IoT devices to operate on them just by pointing the mobile camera to the QR codes",
        "Before going further, please install the Global Input App on your mobile from [Apple App Store](https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4) or [Google Play Store](https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB) and try it out",
        "If you are already running the Global Input App on your mobile and are visiting this website with your computer, you can either click on the example scenarios listed below and try to operate on them with your mobile, or you can go straight on [chrome extension](https://github.com/global-input/chrome-extension) and [word press changes](https://github.com/global-input/wordpress-login) to enable the Global Input Software on your website or your browser to enjoy how quickly and safely sign into your business applications.",

        "If you are javascript developer, you may like to play around with the code yourself with [the React JS example](https://jsfiddle.net/dilshat/26jh68wv/) and [the plain JavaScript example](https://jsfiddle.net/dilshat/c5fvyxqa/) or you may have look the documentation and code samples on the following github repositories",
        "[https://github.com/global-input/global-input-react](https://github.com/global-input/global-input-react)",
        "[https://github.com/global-input/global-input-message](https://github.com/global-input/global-input-message)",

        "We are using our Global Input App to [sign into our websites](https://iterativesolution.co.uk/wp-admin/), which is powered by Wordpress.  We are using it everyday on our business applications such as Jira, Confluece, GitLab, Github, lucidchart etc.  We are also using it on the media software products that we have developed ourselves. ",
        "We can login very quickly just by pointing the mobile camera to the QR code regardless of how long and how complex the password is! And none of us have to remember the long passwords anymore. We don't have such hesitation or embarrassment when we need to sign into the services via the big screen devices while everybody else in the room is watching. And now you can do the same. In your workplace, you may often have to work on a shared computer and you need to login into many applications and each have different passwords. For security purposes, each service application should have different and long password, and you need to sign in very quickly. All can be now solved with the Global Input mobile app solution.",
        "You may think what will happen if you lose your mobile. You can print out passwords on papers and only your mobile can decrypt it and display it on your mobile screen! And then you can print out your master encryption key and lock it in your safebox. When you have a new phone, install the Global Input App on your new phone and point the mobile camera to the master QR code and your phone will recognize it automatically and import it into your phone. This will pair your new phone with your old phone!",
        "If you install [this Chrome extension](https://github.com/global-input/chrome-extension), you will be able to use the Global Input App on the Jira, Confluence, GitLab etc business applications.",
        "The following examples are written using the React.js framework. You can also have look at [here](https://github.com/global-input/global-input-message) if your application is not written in ReactJS. We are in the process of preparing the libraries for other programming languages as well, so please watch this space.",
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
        content1:["The QR Code Printing Service enables you to print a QR code via your phone.",
                  "This demonstrates how a service running on devices such as computers, smart TVs or IoTs can be securely connected to and controlled via the Global Input mobile app. ",
                  "Bringing the possibility of providing many types of electronic services in public places such as train stations and airports where people can connect and operate on devices securely via the Global Input app. Even in the case of devices with no screen, a printed QR label/ticket can do the job."
        ],
        link:{
          text:"Please click on the following arrow to see how it works.",
          uri:"/global-input-app-example/qrcode-print"
        },
        content2:[
          "After launching the Global Input app on your phone, point the camera to the QR code on the right and the app will connect to the application. When this happens, the QR Code will be highlighted indicating that a user is connected to the service.",
          "When the app is connected to the service application, the service application sends the metadata information such as the title of the service, the fields and the buttons etc. to the app to allow the user to interact with the service directly via the app.",
          "When the app receives the form from the service application, it identifies that the type of data that the service is requesting is QR code content. Consequently, it will present you with a list of data items in the app that matches the data type. After you have selected one of these items, the service form will be filled with the data that you have selected. For example, one of the data items is to allow you to print the encrypted password on paper. In this case, the password encryption key is generated on the first use and will stay inside the app and won't be transmitted over the network. Therefore, only the phone that encrypts the password can decrypt it back. When the app identifies a password via the phone camera, it immediately decrypts it and displays it on the screen."
        ],
        content3:[
          "In the source code shown above, the only part that is related to the Global Input is to build the metadata about the service form and call the Global Input Component:"
        ]
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
