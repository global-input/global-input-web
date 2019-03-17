import React from 'react';
import {styles} from './styles';

import {withResponsiveComponent} from '../../../components/screen-media';

const BacicsCardsContainer=props=>(
          <div style={styles.cardContainer.get()}>
              {props.children}
          </div>
        );
const ResponsiveBacicsCardsContainer=withResponsiveComponent(BacicsCardsContainer);
export default ResponsiveBacicsCardsContainer;
