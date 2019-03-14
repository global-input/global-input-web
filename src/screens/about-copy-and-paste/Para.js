import React from 'react';


import {styles,images} from './styles';



export default class Para extends React.Component{

  render(){
        return(<div style={styles.card.paragraph.get()}>{this.props.children}</div>);
  }

}
