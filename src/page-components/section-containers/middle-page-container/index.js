import React from 'react';
import { styles } from './styles';

import { withResponsiveComponent } from '../../../app-layout/screen-media';

const MiddlePageContainer = props => (
  <div style={styles.container.get()}>
    {props.children}
  </div>
);

export default withResponsiveComponent(MiddlePageContainer);
