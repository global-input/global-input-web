import React from 'react';
import {styles} from './styles';

import {withResponsiveComponent} from '../../components/screen-media';


const  _HomeTitleSection=({title,subtitle,description,children})=>(<div style={styles.homeTitleSection.get()}>
                    <div style={styles.title.get()}>{title}</div>
                    <div style={styles.subtitle.get()}>{subtitle}</div>
                    {displayDescription(description)}
                    {children}
        </div>);
const HomeTitleSection=withResponsiveComponent(_HomeTitleSection);

const displayDescription=description=>{
        if(!description){
                return null;
        }
        return (
                <div style={styles.description.get()}>{description}</div>
        );
}
const  PageTitleSection=({title,subtitle,children})=>(<div style={styles.pageTitleSection.container}>
                    <div style={styles.pageTitleSection.title}>{title}</div>
                    <div style={styles.pageTitleSection.subtitle}>{subtitle}</div>                    
                    {children}
        </div>);



const  ReadMorePageTitleSection=props=>(<div style={styles.readMorePage.container}>
                            <div style={styles.readMorePage.title}>{props.title}</div>
                            <div style={styles.readMorePage.subtitle}>{props.subtitle}</div>
                            {props.children}
                </div>);





export  {HomeTitleSection,PageTitleSection,ReadMorePageTitleSection};
