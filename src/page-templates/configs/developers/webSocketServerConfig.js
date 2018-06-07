const webSocketServerConfig={
  title:"WebSocket Server",
  menu:{
     link:"/global-input-app/developers/examples/proxyRepository",
     linkText:"WebSocket Server",
     bookmark:"websocketserver"
   },
   content:["The global-input-node WebSocket server (Global Input WebSocket Server) is a WebSocket Server, which is implemented to support the data transfer between applications that use the global-input-message JavaScript library to transfer data via the end-to-end encryption. The global-input-message JavaScript library is available at: ",
            {type:"a",content:"https://github.com/global-input/global-input-message",href:"https://github.com/global-input/global-input-message"},
            "The WebSocket server uses API key values to assign the WebSocket workloads to one of the serving nodes (it can be the same node). The WebSocket server looks up the API key value contained in the request from its configuration to decide which WebSocket server node should serve the request. Hence, a WebSocket client application needs to be pre-configured to use one of the accepted API key values in order to be able to connect to the WebSocket server."],
    install:{
               link:"https://github.com/global-input/global-input-node",
            },
    startButton:"GitHub Repository"

}
export default webSocketServerConfig;
