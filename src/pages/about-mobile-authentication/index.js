import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileAuthenticationAndBeyond from './MobileAuthenticationAndBeyond';

export default ()=>(
          <theme.Page>
              <MobileAuthenticationAndBeyond theme={theme}/>
          </theme.Page>
        );
export {MobileAuthenticationAndBeyond};
