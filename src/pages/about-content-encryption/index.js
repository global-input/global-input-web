import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import ContentEncryption from './ContentEncryption';
import RenderPageMetadata from "../RenderPageMetadata";

export default ()=>{  
        return(
          <theme.Page>
                <ContentEncryption theme={theme}/>
                <RenderPageMetadata title="Mobile Encryption"/>/
          </theme.Page>
        );  
};
export {ContentEncryption};
