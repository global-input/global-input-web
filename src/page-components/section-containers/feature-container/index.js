import React from 'react';
import {styles} from './styles';

const FeaturesContainer=props=>{
    return(
      <div style={styles.container}>
            <div style={styles.title}>{props.title}</div>
            {props.children}
      </div>
    );

};

export default FeaturesContainer;
