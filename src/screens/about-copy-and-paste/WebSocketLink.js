import React from 'react';


import {styles,images} from './styles';



export default class WebSocketLink extends React.Component{
  githuburt="https://github.com/global-input/global-input-node"
  render(){
        return(<a style={styles.card.link} href={this.githuburt} target="_blank">WebSocket Proxy Server</a>);
  }

}
