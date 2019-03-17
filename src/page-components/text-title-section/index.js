import React from 'react';
import {styles} from './styles';

import {withResponsiveComponent} from '../../components/screen-media';


const  TextTitleSection=props=>(<div style={styles.headerSection.get()}>
                    <div style={styles.title.get()}>{props.title}</div>
                    <div style={styles.subtitle.get()}>{props.subtitle}</div>
                    {props.children}
        </div>);
const ResponsiveTextTitleSection=withResponsiveComponent(TextTitleSection);
export default ResponsiveTextTitleSection;
