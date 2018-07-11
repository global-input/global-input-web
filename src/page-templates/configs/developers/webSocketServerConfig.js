import {images,pagelinks} from "../../../configs";
const webSocketServerConfig={
  title:"Global Input WebSocket Server",
  menu:{
     link:"/global-input-app/developers/examples/proxyRepository",
     linkText:"WebSocket Server",
     bookmark:"websocketserver",
     url:function(){return this.link+"?scrollTo="+this.bookmark}
   },
   content:["The Global Input WebSocket Server (global-input-node) is a WebSocket server, responsible for managing the connections from the  Global Input JavaScript library instances running on the client side. A client application has to include the correct API key value in order to be able to connect to the WebSocket server. Also the load balancing of the websocket connections is implemented via a Rest API call as shown in the following diagram.",
   {type:"centerImage",src:images.developers.webSocketServer},
   "When an application invokes the connect function on the Global Input JavaScript function, the library first obtains the URL of the actual serving WebSocket node via a Rest API call, and then establish the WebSocket connection to the actual serving node. This ways Global Input WebSocket can manage WebSocket server nodes, and do load balancing.",
    ["Please visit the ", {type:"a", content:"Global Input WebSocket Server (global-input-node) on GitHub", href:pagelinks.githubs.webSocketServer}," for information on how to install the Global Input WebSocket Server and how to use it."]
    ],


}
export default webSocketServerConfig;
