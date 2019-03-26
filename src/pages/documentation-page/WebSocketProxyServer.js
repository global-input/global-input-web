import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';





const {WebSocketServer,JSExtension,ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen,ListAllExamples} = examplesLinks;

const images={
    websocket:require('./images/websocket-server.png'),
    inputMessage:require('./images/global-input-messages.png'),

  };

const WebSocketProxyServer = props =>{

        const {P, Title, Title2,ode,Concept, FirstSection,NextSection,Diagram}=props.theme;

        return(

       <React.Fragment>
        <FirstSection>
              <Title>WebSocket Proxy Server</Title>
        <P>
            <Diagram image={images.websocket}/>
            The <WebSocketServer {...props}> GIA WebSocket Server </WebSocketServer> manages connections between <JSExtension {...props}>GIA JS Extension</JSExtension> instances.
            A client application has to include the correct API key value in order to be able to connect to the WebSocket server. Also, the load balancing of the WebSocket connections is implemented via a Rest API call as shown in the following diagram.

            When an application invokes the connect function on the Global Input JavaScript function, the library invokes a Rest API call to obtain the URL of the WebSocket node, and then establish the WebSocket connection to the WebSocket server node. This way, the Global Input WebSocket can do the load balancing on the WebSocket server nodes.

            Please visit the Global Input WebSocket Server (global-input-node) on GitHub for information on how to install the Global Input WebSocket Server and how to use it.
        </P>
        <P>
            <Title2>How It Works</Title2>
            A device application connects to a Global Input WebSocket server and waits for a Global Input App to connect. This can be explained in a familiar way by comparing it with the client-server model. In the client-server model, a server application connects to the network layer of the server/host and waits for a connection from a client application. Like a client application needs to know the network address of the server application in order to connect, the Global Input App needs to know the necessary information on how to connect to the device application as well. The Global Input App obtains this information from the QR code, which is displayed by the device application. The content of the QR code is produced by the Global Input JavaScript library, and it contains the following information:
            <ul>
              <li>
                URL of the WebSocket server that the device application has connected to.
              </li>
              <li>
                API Key value required for connecting to the WebSocket server.
              </li>
              <li>
                Session value of the connection that the device application is attached to. The session value uniquely identifies the connection that device application is attached to in the WebSocket server. If we use the client-server analogy, the session value can be comparable to the port number that the server application is listening to.
              </li>
              <li>
                The Encryption key for encrypting the message content. This is generated within the device application on the fly and will be shared only via QR code with the Global Input App. Hence, even the WebSocket server will not be able to decrypt the message content.
              </li>
              <li>
                Security Group Key. This value can be different from the default value when the device application wants to allow connection from only those Global Input App instances that are pre-paired with the device application. In this case, this value will be passed to the WebSocket server to filter/authenticate the incoming messages before forwarding them to the device application. In the client-server analogy, this is like API Key value used by API Gateway to authenticate/filter the incoming message before forwarding them to the service application.
              </li>
            </ul>
            When a user scans the QR code with his/her Global Input App, the app will be able to connect to the device application, and the connection will be secured with the end-to-end encryption. The sequence of the actions for this to happen explained in the following sequence diagram:
            <Diagram image={images.inputMessage}/>

        </P>


      </FirstSection>


        </React.Fragment>

);

};
WebSocketProxyServer.menu={
    id:"webSocketProxyServer",
    label:"WebSocket Proxy Server"
}
export default WebSocketProxyServer;
