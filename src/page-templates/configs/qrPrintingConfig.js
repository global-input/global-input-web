const qrPrintingConfig={
    title:"Create Encrypted QR Codes",
    appSubtitle:"Encrypted QR Codes",
    menu:{
        link:"/global-input-app/qr-printing",
        linkText:"QR Code Printing",
         backLink:"/?scrollTo=qrPrinting",
         bookmark:"qrPrinting"
    },
    content:[
    "You can create encrypted QR Codes and print them out. A Global Input App instance can decrypt the encrypted QR Code only if it contains the same encryption key that was used for creating the encrypted QR code. Hence, you can pre-share one of the encryption keys in the app with another Global Input instance to transfer content securely via QR codes.",
    "Here, you can encrypt content on your Global Input App and send the encrypted content over to a JavaScript code in this page using the end-to-end encryption for printing out the QR code.",
    {type:"line", content:["This is also an example of how to use the ",{
      type:"a", content:"global-input-message", href:"https://github.com/global-input/global-input-message"
    }, " JavaScript library to implement a mobile control on a web application."]}],

    advert:{
            duration:8000,
            items:[{
              title:"Create Encrypted QR Codes",
              content:["Encrypt Content with Encryption Keys",
                      "Backup and Share Credentials"],
            },{
              title:"Scan to Decrypt the Content",
              content:["Transfer Encrypted Content via QR Code",
                      "Share Encryption Keys Securely"],
            },{
              title:"Data Transfer using End-to-End Encryption",
              content:["Transfer Content Between Devices",
                       "Scan to Start the Data Transfer"],
            }]

    },

    connecting:{
        title:"Encrypted QR Codes",
        content:"Loading..."
    },
    printed:{
        title:"QR Code",
        content:"Scan the QR Code below with your Global Input App"
    },

    connected:{
      title:"Encrypted QR Code",
      content:"Scan the QR Code below with your Global Input App"
    },
    senderConnected:{
        title:"Encrypted QR Code",
        content:"Press the \"Encrypt\" button in the Global Input App to compose an encrypted message. The encrypted content will be send over from the Global Input App to the \"Content\" field in the form here."
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
