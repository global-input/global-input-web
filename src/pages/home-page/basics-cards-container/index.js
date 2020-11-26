import React from 'react';
import { styles } from './styles';

import { withResponsiveComponent } from '../../../app-layout/screen-media';

const BasicCardsContainer = props => (
  <div style={styles.cardContainer.get()}>
    {props.children}
  </div>
);

export default withResponsiveComponent(BasicCardsContainer);;
