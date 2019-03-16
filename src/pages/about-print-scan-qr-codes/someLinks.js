import React from 'react';



import examples from "../examples";
import {config} from '../../configs';

const exampleLinks=[examples.linkItems.qrPrinting];

const someLinks={
  example:{
    List:props=>(<props.theme.ListLinks items={exampleLinks}/>),
    Link:props=>(<props.theme.Link to={examples.linkItems.qrPrinting.path}>{examples.linkItems.qrPrinting.linkText}</props.theme.Link>)
  },
  WebSocketServer:props=>(<props.theme.A href={config.links.websocket.url}>WebSocket Proxy Server</props.theme.A>)
};

export default someLinks;
