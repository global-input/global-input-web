import {pagelinks} from "../../configs";
const qrPrintingConfig={
    title:"Print & Scan Encrypted QR Codes",
    appSubtitle:"Encrypted QR Codes",
    menu:{
        link:pagelinks.samples.qrPrinting.link,
        linkText:"QR Code Printing",
         backLink:pagelinks.samples.qrPrinting.backLink,
         bookmark:pagelinks.samples.qrPrinting.bookmark
    },
    content:[
    "Print and scan encrypted QR Codes to share or backup content securely.",
    "Print & Scan Encryption Keys as Password-Protected QR Codes"],

    scrollingText:{
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
    startButton:"Try It",
    cancelButton:"Back",
    printButton:"Print",
    finishButton:"Back"
}
export default qrPrintingConfig;
