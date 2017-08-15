const textValues={
  urls:{
    apk:"https://globalinput.co.uk/app/GlobalInputApp.apk",

  },
  home:{
     title:"Global Input Software",
     subtitle:"Connectings applications securely via phone camera",
     copyrightinfo:"Copyright © 2017-2022 by Iterative Solution Limited",
     content1:["The Global Input open-source software enables service applications running on computers, Smart TVs, or any other devices to transfer some activities securely to the mobile app to allow users to operate with their mobile devices. The communication between them is established using the end-to-end encryption and the keys are passed over to the mobile app via the mobile phone's camera.",
              "If you would like to try it out the Global Input software, please install the GlobalInput app on your mobile. Launch the app on your mobile and visit this page with a browser on your computer. And then you will be able to interact with the sample applications listed on this page with your mobile.",
              "Here we have listed some sample applications with their source codes to demonstrate how easy it is to extend a software application to have this capability.",
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
        title:"QR Code Printing Service",
        content1:["The QR Code Printing Service enables you to print QR code via your phone.",
                  "This demonstrates how a service can be run on a device such as computer, smart TV or IoT, and can be securely connected and controlled via the Global Input app. ",
                  "This brings the possibility of providing many types of electronic services in public places like train stations and airports. People can connect and operate on the devices securely via Global Input app. Even in the case of devices with no screen, a printed QR label/ticket can do the job."
        ],
        link:{
          text:"Please click on the following arrow to see how it works.",
          uri:"/global-input-app-example/qrcode-print"
        },
        content2:[
          "After launching the Global Input app on your phone, and point the camera to the QR code on the right, the app will be connected to the application. When this happens, the QR Code will be highlighted indicating that an user is connected to the service.",
          "When the app is connected to the service application, the service application sends the metadata information such as the title of the service, the fields and the buttons etc. to the app to allow you to interact with the service without looking at the computer or the TV screen.",
          "When the app receives the form from the service application, it identifies that the type of the data that service is requesting is QR code content. So it will present you with a list of data items in the app that matches the data type. After you have selected one of the items, the service form will be filled with the data that you have selected. For example, one of the data item is allow you to print the encrypted password on paper.  The password encryption key is generated on the first use and stay inside the app and will not be transmitted over the network. So only the phone that encrypts the password can decrypt it back. When app identifies a password via the phone camera, it immediately decrypts it and displays it on the screen."
        ],
        content3:[
          "In the source code shown above, the only part that related to Global Input is to build the metadata about service form and call the Global Input Component:"
        ]
  },

  signin:{
    title:"Sign In Example",
    content1:['The Sign In sample demonstrates that a service application can transfer the Sign In process to your mobile. This is useful because many users may prefer to enter their credentials via their mobile phone rather on the computers. This is especially true in public places. It is also possible that that users store their frequently used password on their mobile phone.  In the workplaces, it is easy to turn the mobile phone devices into the authentication devices while using the hot desks or company facilities.',
    "Also if the service application is running on a smart TV, entering the username and password via a remote control may not be so convenient, so it makes sense to transfer the Sign In process to the mobile.",
    "This is useful in any circumstances that needs to authenticat a user, whether to gain access to a device or a company facility"
     ],
     content2:["In the source code shown above, the only part that is related to the Global Input is to build the metadata about sign in form and call the Global Input Component. In the folling sour code listing, the part not related to the Global Input functionality is omitted "],
    link:{
      text:"Please click on the following arrow to see how it works.",
      uri:"/global-input-app-example/signinput"
    },
    complete:{
      uri:  "/global-input-app-example/signinput-complete",
      content1:[
        "Login Submitted. This is just an example of how Global Input enabled Sign In works. If you can clicked on Login button via your mobile, you will see how your mobile is connected sucurely to the Sign In form."
      ]
    }
  },
  simpleInput:{
    title:"Simple Input (two way) Example",
    content1:["This example demonstrates that it is also possible to enable the bidirectional operations. This means both the service applications and the Global Input app can be operated at the same time,  the changes will be reflected and synced on both screens as you can see.",
              "This might be useful if you would like to use both your mobile and computer to carry out some tasks, for example copy and paste some content from the Internet using your laptop and carry out the rest of the editing on your mobile."],
    link:{
                text:"Please click on the following arrow to see how it works.",
                uri:"/global-input-app-example/simple-input"
          },
    content2:["In the source code shown above, the only part that is related to the Global Input is to build the metadata about the edit form and call the Global Input Component. In the folling sour code listing, the part not related to the Global Input functionality is omitted "],
    complete:{
      uri:  "/global-input-app-example/simple-input-complete",
      content1:[
        "Edit Submitted. This is just an example of how Global Input enabled bidirectional operations. "
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
