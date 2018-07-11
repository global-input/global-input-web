import {pagelinks} from "../../configs";
const contentTransferConfig={
   menu:{
      link:pagelinks.samples.contentTransfer.link,
      linkText:"Content Transfer",
      backLink:pagelinks.samples.contentTransfer.backLink,
      bookmark:pagelinks.samples.contentTransfer.bookmark
    },
    title:"Encrypted Content Storage & Transfer",
    appSubtitle:"Content Transfer",
    content:[
             "Global Input App implements an encrypted storage in your device and data transfer between your devices using end-to-end encryption.",
             "This can be a useful tool for IT support team. A Global Input App instance can establish an encrypted communication with another instance, and then a data item can be created/edited collaboratively using both devices.",
             "The app can also connect to a JavaScript code to transfer data securely, create/edit content collaboratively. You may find it useful if you would like to type or copy some content from computer to your mobile securely or vice versa."],

    scrollingText:{
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
        title:"Encrypted Content Storage & Transfer",
        content:"Connecting..."
    },
    connected:{
        title:"Encrypted Content Storage & Transfer",
        content:"Scan the QR Code below with your Global Input App",
    },
    senderConnected:{
        title:"Encrypted Content Storage & Transfer",
        content:"You can now type the content on your mobile or on your computer, the content will appear on both.",
        moreInfo:[
                 "Global Input App makes it possible for you to own your data and the encryption that encrypts your data by storing your data encrypted in your device only, and allowing you manage encryptions keys that encrypts your data. You can create, export, import, manage and share the encryption keys in the app, while the encryptions keys are encrypted with your login app password.  All your data stays encrypted and it is decrypted only when it is needed, and the app provides data transfer between your devices using the end-to-end encryption. Please download and run the app following the link on top of the page, and then press the “+” button on the \”Data\” tab to create  new data entries. While you are creating or editing a data entry, you can press the QR button, which displays a QR code. If you scan the QR code with another Global Input App instance, you will be able to enter content on both devices and the entered content will be synchronized with both devices as you type.",
                  {type:"line", content:["It is also possible to transfer content between your Global Input App and a JavaScript code using end-to-end encryption. Please press the following \”Start\” button to start the JavaScript code in the page. The code receives mobile input events via a callback function. The callback function is registered to the ",{
                    type:"a", content:"global-input-message", href:"https://github.com/global-input/global-input-message"
                  }, " JavaScript library, which implements the logic encryption/decryption and forwarding the messages via ",{type:"a",content:"Global Input WebSocket server", href:"https://github.com/global-input/global-input-node"}]},
                  "Global Input not only can transfer data to other app instances, but also to other device applications. For example, here you can use the app to transfer content to JavaScript code in this page.",
                  "This example shows how an app can transfer content to JavaScript code in a web page, thus allowing you to transfer content from your mobile to your computer and vice versa."]
    },
    clipboard:{
      copied:"The content of the text field is copied into your clipboard"
    },
    contentField:{
      label:"Content"
    },
    copyButton:"Copy",
    startButton:"Try It",
    cancelButton:"Back",
    finishButton:"Back"
}
export default contentTransferConfig;
