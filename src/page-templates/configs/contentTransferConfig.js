const contentTransferConfig={
   menu:{
      link:"/global-input-app/content-transfer",
      linkText:"Content Transfer",
      backLink:"/?scrollTo=contentTransfer",
      bookmark:"contentTransfer"      
    },
    advert:{
            duration:10000,
            items:[{
              title:"Live Transfer Between Your Mobile and Your Computers",
              content:["The End-To-End Encryption for Data Transfer",
                      "Encrypted Data Transfer Between the Global Input App and the JavaScript Code On the Page"],
              className: "animateLeftRight"
            },{
              title:"Type On Your Mobile or On Your Computer Keyboard",
              content:["Live Content Transfer Between the Global Input App and the the JavaScript Code On the Page",
                      "Share the Encruption Key via the QR Code for the End-To-End Encryption"],
              className: "animateAppearFromSmallToBig"
            },{
              title:"Encrypted Content Transfer Between Your Mobile and Your Computer",
              content:["No More Typing Master Password on Computers, Transfer Only the Content You Need",
                      "Transfer Content From Your Mobile to Your Computer via the End-To-End Encryption"],
              className: "animateWithRotate"
            }]

    },
    title:"Content Transfer Using the End-To-End Encryption",
    content:["You can transfer content between the Global Input App instances running on different mobiles by pressing the \"Transfer\" button in the Form Editor screen in the Global Input App.",
              "Here you can transfer content from mobile to your computer or vice versa.",
              "Click the start button below to start"],



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
        content:"You can now type content on your mobile or on your computer, the content will appear on both of them.",
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
