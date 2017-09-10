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
     subtitle:"A Universal input mobile app solution",
     copyrightinfo:"Copyright © 2017-2022 by Iterative Solution Limited",

     content1:["The Global Input open-source software enables service applications running on computers, Smart TVs, or any other devices to transfer specific activities securely to the mobile app, allowing users to operate with their mobile devices. The communication between them is established by using end-to-end encryption where the keys are passed over to the mobile app via the mobile phone's camera.",
      ],
      appInstall:{
          preContent:"Please free install Global Input mobile app on your mobile from ",
          iosApp:{
            link:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",
            linkText:" Apple App Store "
          },
          androidApp:{
            link:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",
            linkText:" Google Play Store "
          },
          postContent:", and launch the app and visit this page on your computer browser. Then you will be able to operate on the sample applications listed on this page via your mobile.",
      },

      content2:[               
               "Here we have listed some sample applications with their source codes to demonstrate how easy it is to extend a software application to gain this capability.",
               "Most of the examples given here are in React.js framework, but it is equally simple to use plain old Javascript code or jQuery. The Java libraries are also available for the Java web applications rendering the page on the server side. We are in the process of writing the libraries for other programming languages as well.",
       ],
      email:{
         link:"mailto:info@iterativesolution.co.uk?Subject=Global Input",
         pretext:"If you have any suggestions you can ",
         linkText:"write to us "
      },
      work:{
        pretext:"or you are welcome to ",
        link:"https://github.com/global-input/global-input-web",
        linkText:"work together with us"
      },
  },
  qrcode:{
        title:"QR Code Printing",
        content1:["The QR Code Printing Service enables you to print a QR code via your phone.",
                  "This demonstrates how a service can be run on devices such as computers, smart TVs or IoTs, and can be securely connected and controlled via the Global Input app. ",
                  "Bringing the possibility of providing many types of electronic services in public places such as train stations and airports where people can connect and operate on devices securely via the Global Input app. Even in the case of devices with no screen, a printed QR label/ticket can do the job."
        ],
        link:{
          text:"Please click on the following arrow to see how it works.",
          uri:"/global-input-app-example/qrcode-print"
        },
        content2:[
          "After launching the Global Input app on your phone, point the camera to the QR code on the right and the app will connect to the application. When this happens, the QR Code will be highlighted indicating that a user is connected to the service.",
          "When the app is connected to the service application, the service application sends the metadata information such as the title of the service, the fields and the buttons etc. to the app to allow you to interact with the service without looking at the computer or the TV screen.",
          "When the app receives the form from the service application, it identifies that the type of data that the service is requesting is QR code content. Consequently, it will present you with a list of data items in the app that matches the data type. After you have selected one of these items, the service form will be filled with the data that you have selected. For example, one of the data items is to allow you to print the encrypted password on paper. In this case, the password encryption key is generated on the first use and will stay inside the app and won't be transmitted over the network. Therefore, only the phone that encrypts the password can decrypt it back. When the app identifies a password via the phone camera, it immediately decrypts it and displays it on the screen."
        ],
        content3:[
          "In the source code shown above, the only part that is related to the Global Input is to build the metadata about the service form and call the Global Input Component:"
        ]
  },

  signin:{
    title:"Sign In Example",
    content1:['The Sign In sample demonstrates that a service application can transfer the Sign In process to your mobile. This is useful because many users may prefer to enter their credentials via their mobile phone instead of on the computers. This is especially apparant in public places. It is also possible for users to store their frequently used password on their mobile phone. Additionally, in workplaces it is easy to turn mobile phone devices into authentication devices while using the hot desks or company facilities.',
    "Also, if the service application is running on a smart TV, entering the username and password via a remote control may not be so convenient, so it makes sense to transfer the Sign In process to the mobile.",
    "This is practical in any circumstances that needs to authenticate a user, whether to gain access to a device or a company facility."
     ],
     content2:["In the source code shown above, the only part that is related to the Global Input is to build the metadata about the sign in form and call the Global Input Component. In the folling source code listing, the part not related to the Global Input functionality is omitted "],
    link:{
      text:"Please click on the following arrow to see how it works.",
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
    content1:["This example demonstrates that it is also possible to enable the bidirectional operations. This means both the service applications and the Global Input app can be operated at the same time. Here, the changes will be reflected and synced on both screens as you can see.",
              "This might be useful if you would like to use both your mobile and computer to carry out some tasks, for example copy and paste some content from the Internet using your laptop and carry out the rest of the editing on your mobile."],
    link:{
                text:"Please click on the following arrow to see how it works.",
                uri:"/global-input-app-example/simple-input"
          },
    content2:["In the source code shown above, the only part that is related to the Global Input is to build the metadata about the edit form and call the Global Input Component. In the following source code listing, the part not related to the Global Input functionality is omitted "],
    complete:{
      uri:  "/global-input-app-example/simple-input-complete",
      content1:[
        "Edit Submitted. This is just an example of how Global Input enabled bidirectional operations functions. "
      ]
    }
  },
  pairing:{
    title:"Pair handsets",
    content1:["This example demonstrates that you can also easily restrict your service application to only those that are pre-paired with your application service. If you use a different value for the service group id than the default one, only those handsets that are pre-paired can connect to your application service."
      ],
      link:{
                  text:"Please click on the following arrow to see how it works.",
                  uri:"/global-input-app-example/pairing"
            },


  }

};
export default textValues;
