const webSocketServerConfig={
  title:"Global Input WebSocket Server",
  menu:{
     link:"/global-input-app/developers/examples/proxyRepository",
     linkText:"WebSocket Server",
     bookmark:"websocketserver"
   },
   content:[{type:"line", content: ["The ",{type:"a", content:"global-input-node", href:"https://github.com/global-input/global-input-node"},"  is a Global Input WebSocket Server, which is used by the ", {type:"a",content:"global-input-message",href:"https://github.com/global-input/global-input-message"}," JavaScript library to transfer the end-to-end encrypted data between device applications."]},
            {type:"line", content: ["A ",  {type:"a", content:"receiver application",href:"https://github.com/global-input/global-input-message#receiver-application"}," uses a QR Code to share the URL of the WebSocket server and the API key required for connecrting to the WebSocket server. A ",{type:"a", content:"calling application", href:"https://github.com/global-input/global-input-message#calling-application"}," scans the QR code to obtain these communication parameters as well as the encryption key required for the end-to-end encryption."]}
          ],
    install:{
               link:"https://github.com/global-input/global-input-node",
            },
    startButton:"GitHub Repository"

}
export default webSocketServerConfig;
