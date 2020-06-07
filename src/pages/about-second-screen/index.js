import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';
import SecondScreenExperience from './SecondScreenExperience';
import RenderPageMetadata from "../RenderPageMetadata";

export default ()=> (
          <theme.Page>
              <SecondScreenExperience theme={theme}/>
              <RenderPageMetadata title="Second Screen Experience"/>
          </theme.Page>
        );
export {SecondScreenExperience};
