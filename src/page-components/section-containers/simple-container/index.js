import React from 'react';
import { styles } from './styles';

const SimpleContainer = props => (
  <div style={styles.container}>
    {props.children}
  </div>
);

export default SimpleContainer;
