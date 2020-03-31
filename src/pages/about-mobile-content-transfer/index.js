import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileContentTransfer from './MobileContentTransfer';

export default ()=>(
          <theme.Page>
              <MobileContentTransfer theme={theme}/>
          </theme.Page>
        );
export {MobileContentTransfer};
