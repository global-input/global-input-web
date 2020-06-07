import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import IntroducingMobileInputAndControl from './IntroducingMobileInputAndControl';
import RenderPageMetadata from "../RenderPageMetadata";
export default () =>(
          <theme.Page>
              <IntroducingMobileInputAndControl theme={theme}/>
              <RenderPageMetadata title="Mobile Input &amp; Control"/>
          </theme.Page>
        );
export  {IntroducingMobileInputAndControl};
