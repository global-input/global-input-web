import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileAuthenticationAndBeyond from './MobileAuthenticationAndBeyond';
import RenderPageMetadata from "../RenderPageMetadata";


export default ({title})=>(
          <theme.Page>
              <MobileAuthenticationAndBeyond theme={theme}/>
              <RenderPageMetadata title="Mobile Authentication"/>
          </theme.Page>
        );
export {MobileAuthenticationAndBeyond};
