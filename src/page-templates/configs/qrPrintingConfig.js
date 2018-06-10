const qrPrintingConfig={
    title:"Encrypted QR Code",
    appSubtitle:"Encrypted QR Code",
    menu:{
        link:"/global-input-app/qr-printing",
        linkText:"QR Code Printing",
         backLink:"/?scrollTo=qrPrinting",
         bookmark:"qrPrinting"
    },
    content:[
    "You can use Encrypted QR Codes store and transfer encrypted content in the form of papers or images.",
    "You can transfer content between two Global Input App instance securely without using network connection.",
    "The encrypted QR Code can only be decrypted if the Global Input App contains the same encryption key that was used in encrypting the content. ",
    "You can use the encryption keys to decide who can access the information in the QR codes",
    {type:"line", content:["Here you can encrypt the content in the Global Input App and send the encrypted content over to your computer via ",{type:"a", href:"https://github.com/global-input/global-input-node",content:"the webSocket server"}]},
    {type:"line", content:["This is also an example of how to use ",{
      type:"a", content:"the global-input-message", href:"https://github.com/global-input/global-input-message"
    }, " WebSocket JavaScript library  to implent the Global Input control on an application running on another device"]}],

    advert:{
            duration:10000,
            items:[{
              title:"Encrypted QR Codes",
              content:["Transfer the Encrypted Content Without Using the Network Connection",
                      "Use Encrypted QR Codes to Backup Encryption Keys",
                      "Use Encrypted QR Codes to Transfer Confidential Messages"],
              className: "animateLeftRight"
            },{
              title:"Use Papers to Backup Encryption Keys",
              content:["Use the Encrypted QR Code to Backup Encryption Keys",
                      "Scan to Import the Encryption Keys"],
              className: "animateAppearFromSmallToBig"
            },{
              title:"Open Source Solution",
              content:["Password Management, Encrypted Storage & Transfer",
                       "Device Control, Second Screen, All in One Solution",
                       "Extend Your Existing Applications into Mobile Devices"],
              className:"animateSideSlide"
            },{
              title:"Encrypted QR Codes",
              content:["Use the Encrypted QR Codes to Store and Transfer Encrypted Messages",
                      "Scan to Decrypt the Encrypted Messages"],
              className: "animateWithRotate"
            },{
              title:"Control the Access to the Content with the Encryption Keys",
              content:["Share Encryptions Keys with Password Encrypted QR Codes",
                      "Select Encrypt Key to Control Access to Data",
                       "Scan to Import Password-Encrypted Encryption Keys"],
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
        content:"Press the \"Encrypt\" button in the Global Input App to compose an encrypted message. The encrypted content will be send over from the Global Input App to the \"Content\" field in the form to use as the content of the QR code."
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
