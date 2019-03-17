import React from 'react';
import {styles} from './styles';

import {withResponsiveComponent} from '../../components/screen-media';


const  _HomeTitleSection=props=>(<div style={styles.homeTitleSection.get()}>
                    <div style={styles.title.get()}>{props.title}</div>
                    <div style={styles.subtitle.get()}>{props.subtitle}</div>
                    {props.children}
        </div>);
const HomeTitleSection=withResponsiveComponent(_HomeTitleSection);


const  PageTitleSection=props=>(<div style={styles.pageTitleSection}>
                    <div style={styles.title.get()}>{props.title}</div>
                    <div style={styles.subtitle.get()}>{props.subtitle}</div>
                    {props.children}
        </div>);







export  {HomeTitleSection,PageTitleSection};
