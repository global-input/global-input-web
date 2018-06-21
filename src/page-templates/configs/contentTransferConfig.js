const contentTransferConfig={
   menu:{
      link:"/global-input-app/content-transfer",
      linkText:"Content Transfer",
      backLink:"/?scrollTo=contentTransfer",
      bookmark:"contentTransfer"
    },
    title:"Encrypted Content Transfer",
    appSubtitle:"Content Transfer",
    content:["Transfer content live between your Global Input App instance and a computer using the end-to-end encryption.",
              {type:"line", content:["This also shows how to use ",{
                type:"a", content:"the global-input-message", href:"https://github.com/global-input/global-input-message"
              }, " WebSocket JavaScript library  to enable an application to transfer content to/from the Global Input App"]}],

    advert:{
            duration:10000,
            items:[{
              title:"Live Data Transfer from One Device to Another",
              content:["The End-to-End Encryption Between the Global Input App and the JavaScript Code On the Page",
                      "The Open Source Solution to Bring Mobile Device to Your Application"],
              className: "animateLeftRight"
            },{
              title:"Open Source Solution",
              content:["Password Management, Encrypted Storage & Transfer",
                       "Device Control, Second Screen, All in One Solution",
                       "Extend Your Existing Applications into Mobile Devices"],
              className:"animateSideSlide"
            },{
              title:"Data Transfer Between Your Devices",
              content:["Data Transfer via the End-To-End Encryption",
                      "Encrypted Data Transfer via Open Source WebSocket Server"],
              className: "animateAppearFromSmallToBig"
            }]

    },



    connecting:{
        title:"Encrypted Content Transfer",
        content:"Connecting..."
    },
    connected:{
        title:"Encrypted Content Transfer",
        content:"Scan the QR Code below with the Global Input App on your mobile"
    },
    senderConnected:{
        title:"Encrypted Content Transfer",
        content:"You can now type content on your mobile or on your computer, the content will appear on both.",
    },
    clipboard:{
      copied:"The content of the text field is copied into your clipboard"
    },
    contentField:{
      label:"Content"
    },
    copyButton:"Copy",
    startButton:"Start",
    cancelButton:"Back",
    finishButton:"Back"
}
export default contentTransferConfig;
