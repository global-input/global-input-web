import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileContentTransfer from './MobileContentTransfer';
import RenderPageMetadata from "../RenderPageMetadata";
export default ()=>(
          <theme.Page>
              <MobileContentTransfer theme={theme}/>
              <RenderPageMetadata title="Mobile Content Transfer"/>
          </theme.Page>
        );
export {MobileContentTransfer};
