const qrPrintingConfig={
    title:"Encrypted QR Code",
    menu:{
        link:"/global-input-app/qr-printing",
        linkText:"QR Code Printing",
         backLink:"/?scrollTo=qrPrinting",
         bookmark:"qrPrinting"      
    },
    content:["Create and scan Encrypted QR Codes.",
    "Use papers or images to store or transfer encrypted content. You may prefer this if you do not want to use network or electronic storage to store or transfer some encrypted information.",
    "The encrypted QR Code can only be decrypted if the Global Input App contains the same encryption key that was used in encryption. ",
    "Here you can encrypt the content in the Global Input App and send the encrypted content over to your computer for printing the QR code.",
    "Click the button below to start"],

    advert:{
            duration:10000,
            items:[{
              title:"Create & Scan Encrypted QR Codes",
              content:["Transfer the Encrypted Content Between Your Devices Without Using the Network",
                      "Store and Transfer Content Using the Encrypted QR Codes"],
              className: "animateLeftRight"
            },{
              title:"Use Papers to Backup Encryption Keys",
              content:["Use the Encrypted QR Code to Backup Your Encryption Keys",
                      "Scan to Import the Encryption Keys"],
              className: "animateAppearFromSmallToBig"
            },{
              title:"Encrypted QR Codes",
              content:["Use the Encrypted QR Codes to Store and Transfer Encrypted Messages",
                      "Scan and Decrypt the Encrypted Messages"],
              className: "animateWithRotate"
            },{
              title:"Control the Access to the Content with the Encryption Keys",
              content:["Share Encryptions Keys with the Other Devices or Other People.",
                      "Select From the Encryption Keys in the Global Input App to Encrypt the Content"],
              className: "animateLeftRight"
            }]

    },

    connecting:{
        title:"Encrypted QR Code",
        content:"Loading..."
    },
    printed:{
        title:"QR Code",
        content:"Scan the QR Code below with the Global Input App"
    },

    connected:{
      title:"Encrypted QR Code",
      content:"Scan the QR Code below with the Global Input App on your mobile"
    },
    senderConnected:{
        title:"Encrypted QR Code",
        content:"Press the \"Encrypt\" button in the Global Input App to compose an encrypted message. The encrypted content will be send over from the Global Input App to here for use as the content of the QR code."
    },
    contentField:{
        label:"Content"
    },
    labelField:{
        label:"Label"
    },
    sizeField:{
        label:"Size"
    },
    levelField:{
        label:"Level"
    },
    clipboard:{
      copied:"The content of the text field is copied into your clipboard"
    },
    startButton:"Start",
    cancelButton:"Back",
    printButton:"Print",
    finishButton:"Back"
}
export default qrPrintingConfig;
