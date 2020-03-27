import React from 'react';
import LighBlueBackground from '../../page-components/themes/ligh-blue-background';
import MobileContentTransfer from './MobileContentTransfer';

export default ()=>(
          <LighBlueBackground.Page>
              <MobileContentTransfer theme={LighBlueBackground}/>
          </LighBlueBackground.Page>
        );
export {MobileContentTransfer};
