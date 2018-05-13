const qrPrintingConfig={
    title:"Encrypted QR Code",
    menu:{
        link:"/global-input-app/qr-printing",
        linkText:"QR Code Printing",
         backLink:"/?scrollTo=qrPrinting"
    },
    content:["Global Input App allows you to create and scan Encrypted QR Codes. You can use encrypted QR codes to transfer encrypted content without the need for network. You can use papers or images to store or transfert encrypted content.",
    "The Global Input App can scan and decrypt the QR code only if it contains the same encryption key that was used for encrypting the content. Here you can send the encrypted content to your computer to print the QR code via your computer.",
      "Click the start button below to start"],
    topContent:["The Global Input App allows you to encrypt a content with any of your encryption keys, and send the enrypted content to your computer to create an Ecnyprted QR code for print."],

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
        content:"You need to encrypt the content on your mobile first by pressing the \"Encrypt\" button in the Global Input App. Then the encrypted content will be send over to the content field below."
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
    startButton:"START",
    cancelButton:"BACK",
    printButton:"PRINT",
    finishButton:"BACK"
}
export default qrPrintingConfig;
