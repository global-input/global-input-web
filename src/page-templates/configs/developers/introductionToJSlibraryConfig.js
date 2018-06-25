const introductionToJSlibraryConfig={
  title:"Global Input JavaScript Library",
  menu:{
     link:"/global-input-app/developers/examples/jslibrary",
     linkText:"JavaScript Library",
     bookmark:"globalinputmessage"
   },
   content:[{type:"line",content:["The ",{type:"a",content:"global-input-message",href:"https://github.com/global-input/global-input-message"}," is a WebSocket JavaScript library for transferring data between applications using the end-to-end encryption. Global Input App and the ",{type:"a", content:"receiver applications", href:"https://github.com/global-input/global-input-message#receiver-application"}," uses this library to transfer data securely between each other."]},
            {type:"line",content:["The end-to-end encryption and the message transporting logic are implemented transparently inside the ",{type:"a",content:"global-input-message",href:"https://github.com/global-input/global-input-message"}, " JavaScript library and the ",{type:"a",content:"WebSocket server", href:"https://github.com/global-input/global-input-node"},". The application can simply pass unencrypted messages to the ",{type:"a",content:"global-input-message",href:"https://github.com/global-input/global-input-message"}, " JavaScript library. The ", {type:"a",content:"global-input-message",href:"https://github.com/global-input/global-input-message"}, " JavaScript library encrypts the message content using the end-to-end encryption and forwards them over to the destination. On the receiving end, the ", {type:"a",content:"global-input-message",href:"https://github.com/global-input/global-input-message"}, " JavaScript library receives the encrypted messages, decrypts them and forwards the decrypted messages to the callback function that the application has provided."]}],
    install:{
               link:"https://github.com/global-input/global-input-message",
            },
    startButton:"GitHub Repository"

}
export default introductionToJSlibraryConfig;
