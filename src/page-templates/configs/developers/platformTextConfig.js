import {images, pagelinks} from "../../../configs";
const platformTextConfig={
  appTitle:"Global Input App",
  appSubtitle:"Platform",
  menu:{
    link:pagelinks.platform.link,
    
    linkText:"Help"
  },
  platform:{
       title:"Global Input Platform",
       content:["Global Input platform is an open-source platform, which allows device and web applications to be extended to have mobile input and mobile control functionalities without developing separate mobile apps. An application can declaratively specify mobile user interface components and the callback functions to receive mobile input events. The platform is responsible for sending and receiving messages using end-to-end encryption etc. It consists of following components:",
        {type:"ul", content:[
          {type:"scroll",content:"Global Input JavaScript Library", to:pagelinks.jslibrary.bookmark},
          {type:"scroll",content:"Global Input WebSocket Server", to:pagelinks.webSocketServer.bookmark},
          {type:"link",content:"Global Input App", link:pagelinks.app.link}
        ]},
        "The Global Input JavaScript library and the Global Input WebSocket server implements the end-to-end encryption and the message transporting logic transparently. A client application passes the unencrypted messages to the Global Input JavaScript library, without worrying about the encryption and the delivery of the messages. The library encrypts the message content and forwards them to the destination. On the receiving end, the JavaScript library receives the encrypted messages, decrypt them and forward the decrypted messages to the callback function that the application has provided when connected to the library. Because of the communication is secured with the end-to-end encryption, it is like Global Input App is connected directly to the Device via cable as shown in the following picture.",
        {type:"centerImage",src:images.developers.globalInputPlatform},
        "The platform enables the mobile device and the web application to transfer data securely and provides a wide range of functions:",
        {type:"ul",content:[
          [{type:"link",content:"User authentication via mobile", link:pagelinks.samples.formData.url()}," initiated by scanning QR codes for applications."],
[{type:"link",content:"Second screen input & control",link:pagelinks.samples.mediaPlayer.url()}," for media applications."],
[{type:"link",content:"Mobile input & control",link:pagelinks.samples.gameControl.url()}," for IoT, Smart TV and web applications."],
[{type:"link",content:"Form automation",link:pagelinks.samples.sendMessage.url()}," using mobile device."],
[{type:"link",content:"Password management",link:pagelinks.samples.chromeExtension.url()}," in user’s device."],
[{type:"link",content:"Backup and transfer",link:pagelinks.samples.qrPrinting.url()}," confidential information."]
                           ]
        },

{type:"sub",title:"Features",
                     content:[{
                       type:"ul",
                       content:[
                         ["Users only need to install a ",{type:"link", content:"single app",link:pagelinks.app.link}," to use across multiple web applications."],
                         [{type:"link", content:"The mobile app",link:pagelinks.app.link}," on its own provides password management and secure data transfer across mobile devices and computers."],
                         "No need to develop separate mobile apps for extending device and web applications to have mobile input and control.",
                         "The logic in the mobile input and control can be implemented within the application itself reusing the existing application logic.",
                         "Content can be transferred between the mobile device to the web application.",
                         "Content is stored and managed by users securely on the mobile device.",
                         "No data is stored on a remote server.",
                         "No subscription, no user details needs to be saved outside users’ device.",
                         "Library is completely open-source."
                       ]
                     }

                     ]
    },


    ["Please  ",{type:"link", content:"install the app",link:pagelinks.app.link}, " and explore the following use cases in action. You may find ",{type:"link", content:"many reasons",link:pagelinks.app.reasons.url()}," why the app can become an essential tool in a corporate environment. If you are interested in how it works and would like to extend your web applications to allow users to use their mobile to operate on them, please visit the ",{type:"link", content:"platform page",link:pagelinks.platform.link},"."]



      ]
  },
 howItWorks:{
      title:"How It Works",
      bookmark:"howitworks",
      content:["A device application connects to a Global Input WebSocket server and waits for a Global Input App to connect. This  can be explained in a familiar way by comparing it with the client-server model. In the client-server model, a server application connects to the network layer of the server/host and waits for connection from a client application. Like a client application needs to know the network address of the server application in order to connect, the Global Input App needs to know the necessary information on how to connect to the device application as well. The Global Input App obtains this information from the QR code, which is displayed by the device application.  The content of the QR code is produced by the Global Input JavaScript library, and it contains the following information:",
      {type:"ul", content:[
          "URL of the WebSocket server that the device application has connected to.",
          "API Key value required for connecting to the WebSocket server.",
          "Session value of the connection that the device application is attached to. The session value uniquely identifies the connection that device application is attached to in the WebSocket server. If we use the client-server analogy, the session value can be comparable to the port number that the server application is listening to.",
          "Encryption key for encrypting the message content. This is generated within the device application on the fly and will be shared only via QR code with the Global Input App.  Hence,  even the WebSocket server will not be able to decrypt the message content.",
          "Security Group Key. This value can be different from the default value when the device application wants to allow connection from only those Global Input App instances that are pre-paired with the device application. In this case, this value will be passed to the WebSocket server to filter/authenticate the incoming messages before forwarding them to the device application. In the client-server analogy, this is like API Key value used by API Gateway to authenticate/filter the incoming message before forwarding them to the service application."
      ]},
      "When a user scans the QR code with his/her Global Input App, the app will be able to connect to the device application, and the connection will be secured with the end-to-end encryption. The sequence of the actions for this to happen explained in the following sequence diagram:",
      {type:"centerImage",src:images.developers.globaInputMessages}

      ]
 },
  aboutText:[{
              type:"line",
              content:["Enable your web applications with ",
                       {content:"global-input-message", type:"a",href:"https://github.com/global-input/global-input-message"},
                       " JavaScript library"
                      ],
              }
          ],
  scrollingText:{
      duration:8000,
      items:[{
        title:"Single Mobile App",
        content:["Mobile Input & Control for Device and Web Applications",
                "Second Screen Experience for Media Applications"],
      },{
        title:"Mobile Input, Mobile Control & Second Screen Experience",
        content:["Mobile Solution for Device Applications",
                "Single Mobile for Multiple Device Applications"]
      },{
        title:"Automate Sign In & Forms",
        content:["Let Users Have Control Over their Own Data",
                "Encrypted Data Storage, Mobile Input & Control"],
      }]
  },


};
export default platformTextConfig;
