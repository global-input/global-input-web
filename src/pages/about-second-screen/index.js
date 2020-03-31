import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';
import SecondScreenExperience from './SecondScreenExperience';

export default ()=> (
          <theme.Page>
              <SecondScreenExperience theme={theme}/>
          </theme.Page>
        );
export {SecondScreenExperience};
