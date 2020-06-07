import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';

import MobilePersonalStorage from './MobilePersonalStorage';

import RenderPageMetadata from "../RenderPageMetadata";
export default ()=>(
        <theme.Page>
                <MobilePersonalStorage theme={theme}/>
                <RenderPageMetadata title="Mobile Personal Storage"/>
        </theme.Page>

);
      

export {MobilePersonalStorage};
