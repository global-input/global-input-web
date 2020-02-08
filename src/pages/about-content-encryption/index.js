import React from 'react';
import LighBlueBackground from '../../page-components/themes/ligh-blue-background';

import ContentEncryption from './ContentEncryption';

export default ()=>{  
        return(
          <LighBlueBackground.Page>
                <ContentEncryption theme={LighBlueBackground}/>
          </LighBlueBackground.Page>
        );  
};
export {ContentEncryption};
