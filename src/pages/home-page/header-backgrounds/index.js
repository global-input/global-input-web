import React from 'react';
import { styles } from "./styles";
import { withResponsiveComponent } from '../../../app-layout/screen-media';

const _SimpleHeaderBackground = props => (<div style={styles.headerContainer.get()}>{props.children}</div>);

const _HomeHeaderBackground = props => (<div style={styles.homeHeaderContainer.get()}>{props.children}</div>);


const SimpleHeaderBackground = withResponsiveComponent(_SimpleHeaderBackground);

const HomeHeaderBackground = withResponsiveComponent(_HomeHeaderBackground);

export { SimpleHeaderBackground, HomeHeaderBackground };
