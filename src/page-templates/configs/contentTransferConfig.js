const contentTransferConfig={
   menu:{
      link:"/global-input-app/content-transfer",
      linkText:"Content Transfer",
      backLink:"/?scrollTo=contentTransfer",
      bookmark:"contentTransfer"
    },
    title:"Encrypted Content Transfer",
    appSubtitle:"Content Transfer",
    content:["You can use the Global Input App to transfer content between your devices using end-to-end encryption.",
             "Global Input not only can transfer data to other app instances, but also to other device applications. For example, here you can use the app to transfer content to JavaScript code in this page.",
              {type:"line", content:["This example shows how an app can transfer content to ",{
                type:"a", content:"JavaScript code", href:"https://github.com/global-input/global-input-message"
              }, "  in a webpage, thus allowing you to transfer content from your mobile to your computer and vice versa."]}],

    advert:{
            duration:8000,
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
        content:"Scan the QR Code below with your Global Input App"
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
