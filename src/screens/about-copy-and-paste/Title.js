import React from 'react';


import {styles,images} from './styles';



export default class Title extends React.Component{

  render(){
        return(<div style={styles.card.title.get()}>{this.props.children}</div>);
  }

}
