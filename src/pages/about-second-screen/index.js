import React from 'react';

import LighBlueBackground from '../../page-components/themes/ligh-blue-background';
import SecondScreenExperience from './SecondScreenExperience';

export default ()=> (
          <LighBlueBackground.Page>
              <SecondScreenExperience theme={LighBlueBackground}/>
          </LighBlueBackground.Page>
        );
export {SecondScreenExperience};
