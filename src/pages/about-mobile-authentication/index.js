import React from 'react';
import LighBlueBackground from '../../page-components/themes/ligh-blue-background';
import MobileAuthenticationAndBeyond from './MobileAuthenticationAndBeyond';

const AboutMobileAuthentication=props=>{
        return(
          <LighBlueBackground.Page>
              <MobileAuthenticationAndBeyond theme={LighBlueBackground}/>
          </LighBlueBackground.Page>
        );
};
export default AboutMobileAuthentication;
