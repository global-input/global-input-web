import React from 'react';
import {styles} from './styles';

import {withResponsiveComponent} from '../../../components/screen-media';

const MiddlePageContainer=props=>(
          <div style={styles.container.get()}>
              {props.children}
          </div>
        );

export default withResponsiveComponent(MiddlePageContainer);
