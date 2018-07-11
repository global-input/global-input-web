import {images,pagelinks} from "../../../configs";
const webSocketServerConfig={
  title:"Global Input WebSocket Server",
  menu:{
     link:pagelinks.webSocketServer.link,
     linkText:"WebSocket Server",
     bookmark:pagelinks.webSocketServer.bookmark,
     url:pagelinks.webSocketServer.url,
   },
   content:["The Global Input WebSocket Server (global-input-node) is a WebSocket server, responsible for managing the connections from the  Global Input JavaScript library instances running on the client side. A client application has to include the correct API key value in order to be able to connect to the WebSocket server. Also the load balancing of the websocket connections is implemented via a Rest API call as shown in the following diagram.",
   {type:"centerImage",src:images.developers.webSocketServer},
   "When an application invokes the connect function on the Global Input JavaScript function, the library invokes a Rest API call to obtain the URL of the WebSocket node, and then establish the WebSocket connection to the WebSocket server node. This way, the Global Input WebSocket can do the load balancing on the WebSocket server nodes.",
    ["Please visit the ", {type:"a", content:"Global Input WebSocket Server (global-input-node) on GitHub", href:pagelinks.githubs.webSocketServer}," for information on how to install the Global Input WebSocket Server and how to use it."]
    ],


}
export default webSocketServerConfig;
