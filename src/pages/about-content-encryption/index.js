import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import ContentEncryption from './ContentEncryption';

export default ()=>{  
        return(
          <theme.Page>
                <ContentEncryption theme={theme}/>
          </theme.Page>
        );  
};
export {ContentEncryption};
