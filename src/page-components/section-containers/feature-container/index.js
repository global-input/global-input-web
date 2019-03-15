import React from 'react';
import {styles} from './styles';

export default class FeaturesContainer extends React.Component{

  render(){
    return(
      <div style={styles.container}>
            <div style={styles.title}>{this.props.titile}</div>
            {this.props.children}
      </div>
    );

  }

}
