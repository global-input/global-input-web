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

     content1:["If you have service applications running on computers, Smart TVs, Set Top Boxes or IoT devices,  and you would like to allow your users to use their mobile to operate on them just by pointing the phone camera to the QR codes, you come to the right place. ",
        "Before going further, please install the Global Input App on your mobile from [Apple App Store](https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4) or [Google Play Store](https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB) and try it out",
        "If you are already running the Global Input mobile app and visiting this website with your computer, you can click on the example services listed below and try to operate on them with your mobile.",
        "If you have already tried the example services listed below, you may play around with the code yourself with [this example]( https://jsfiddle.net/dilshat/26jh68wv/). ",
        "After that you may be able understand why we are excited about it. We are using our Global Input App to [sign into our websites](https://iterativesolution.co.uk/wp-admin/), which is powered by the Wordpress.  We are using it everyday on our business applications such as Jira, Confluece, GitLab etc.  We are also using it on the media software products that we have developed ourselves. ",
        "We can login very quickly just by pointing the mobile camera to the QR code regardless of how long and how complex the password is! And none of us have to remember them anymore. We don't have any more hesitation or embarrassment when we need to sign into the services via the big screen devices while everybody watching. And now you can do the same. In your workplace, you may often have to work on a shared computer and you need to login into many applications and each have different passwords. And for the security reasons, each service application should have different and long passwords, and you need to sign in very quickly. All can be now resolved with the Global Input mobile app solution.",
        "You may think what will happen if you loose your mobile. You can print out passwords on papers and only your mobile can decrypt it and display it on your mobile screen! And then you can print out your master encryption key and lock it in your safebox out of reach anybody. When you have a new phone, install the Global Input App on your new phone and point the mobile camera to the master QR code and your phone will recognize it automatically and import it into your phone. This will pair your new phone with your old phone!",
        "The Global Input Software is available at github",
        "[https://github.com/global-input/global-input-react](https://github.com/global-input/global-input-react)",
        "[https://github.com/global-input/global-input-message](https://github.com/global-input/global-input-message)",
        "Or if you want to play around with the source right now,  have a look at [this example](https://jsfiddle.net/dilshat/26jh68wv/) or [this example](https://jsfiddle.net/dilshat/c5fvyxqa/) or if you would like to make your wordpress website to support the Global Input App, then, have a look at [this](https://github.com/global-input/wordpress-login)",
        "Also if you install [this Chrome extension](https://github.com/global-input/chrome-extension), you will be able to use Global Input App on Jira, Confluence, GitLab etc business applications.",
        "the following example are written in React.js framework. You can also have look at [here](https://github.com/global-input/global-input-message) if your application is not written in ReactJS. We are in the process of preparing the libraries for other programming language as well, so please watch this space.",
      ],

  },


  signin:{
    title:"Sign In Example",
    content1:['The Sign In sample demonstrates that a service application can transfer the Sign In process to your mobile. This is useful because many users may prefer to enter their credentials via their mobile phone instead of on a computer. This is especially apparant in public places. It is also possible for users to store their frequently used passwords on their mobile phone. Additionally, in workplaces it is easy to turn mobile phone devices into authentication devices while using hot desks or company facilities.',
    "Also, if the service application is running on a smart TV, entering the username and password via a remote control may not be so convenient, so it makes sense to transfer the Sign In process to the mobile.",
    "This is practical in any circumstances that needs user authentication, whether to gain access to a device or to a company facility."
     ],
     content2:["In the source code shown above, the only part that is related to the Global Input is to build the metadata for the sign in form and call the Global Input Component. In the folling source code listing, the part not related to the Global Input functionality is omitted."],
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
