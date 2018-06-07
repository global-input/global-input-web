const introductionToJSlibraryConfig={
  title:"The WebSocket JavaScript Library",
  menu:{
     link:"/global-input-app/developers/examples/jslibrary",
     linkText:"JavaScript Library",
     bookmark:"globalinputmessage"
   },
   content:[{type:"line",content:["The ",{type:"a",content:"global-input-message WebSocket JavaScript Library",href:"https://github.com/global-input/global-input-message"}," is a JavaScript library for transferring data between applications using the end-to-end encryption."]},
            "The end-to-end encryption and the message transporting logic are implemented transparently inside the global-input-message JavaScript library and the WebSocket server. This enables the WebSocket client applications concentrate on the business logic. An application can simply pass unencrypted messages to the global-input-message JavaScript library. The global-input-message JavaScript library encrypts the message content with the end-to-end encryption and forwards them over to the destination. On the receiving end, the global-input-message JavaScript library receives the encrypted messages, decrypt them and forward the decrypted messages to the callback function that the application has provided.",
          "An application can declaratively specify properties of the UI elements on the mobile screen and receive the corresponding data when the user interacts with them."],
    install:{
               link:"https://github.com/global-input/global-input-message",
            },
    startButton:"GitHub Repository"

}
export default introductionToJSlibraryConfig;
