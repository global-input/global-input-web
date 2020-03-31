
import React from 'react';

import {styles} from './styles';

import {withResponsiveComponent} from '../../../components/screen-media';
import PageFooter from '../../../page-components/themes/page-footer';

const FooterSection = () =>(<div style={styles.container}>
            <PageFooter/>


        </div>);
    

const ResponsiveFooterSection=withResponsiveComponent(FooterSection);

export default ResponsiveFooterSection;


