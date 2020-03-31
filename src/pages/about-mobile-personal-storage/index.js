import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';

import MobilePersonalStorage from './MobilePersonalStorage';


export default ()=>(
        <theme.Page>
                <MobilePersonalStorage theme={theme}/>
        </theme.Page>

);
      

export {MobilePersonalStorage};
