const contentTransferConfig={
   menu:{
      link:"/global-input-app/content-transfer",
      linkText:"Content Transfer",
      backLink:"/?scrollTo=contentTransfer",
      bookmark:"contentTransfer"
    },
    title:"Encrypted Content Transfer",
    appSubtitle:"Content Transfer",
    content:["You can use the Global Input App to transfer content between your devices using the end-to-end encryption. You can use the app to transfer content to other Global Input App instance or vice versa.",
             "Here, you can use the app to transfer content to a JavaScript code in this page. This allows you to transfer content between your mobile and your computer.",
              {type:"line", content:["This is also also an example of how to use ",{
                type:"a", content:"the global-input-message", href:"https://github.com/global-input/global-input-message"
              }, " WebSocket JavaScript library to introduce the mobile input or control to a JavaScript application."]}],

    advert:{
            duration:5000,
            items:[{
              title:"End-to-End Encrypted Data Transfer",
              content:["Transfer Content Between Devices",
                      "Scan to Start the Data Transfer"],
              },{
              title:"Sinle Mobile Solution",
              content:["Password Management, Encrypted Storage & Data Transfer",
                       "Mobile Input & Control for Device and Web Applications"],
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
        content:"You can now type the content on your mobile or on your computer, the content will appear on both.",
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
