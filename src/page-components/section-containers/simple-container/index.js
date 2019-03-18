import React from 'react';
import {styles} from './styles';

import {withResponsiveComponent} from '../../../components/screen-media';

const SimpleContainer=props=>(
          <div style={styles.container}>
              {props.children}
          </div>
        );

export default SimpleContainer;
