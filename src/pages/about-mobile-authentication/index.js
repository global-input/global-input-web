import React from 'react';
import BorderedWhite from '../../page-components/themes/bordered-white';
import MobileAuthenticationAndBeyond from './MobileAuthenticationAndBeyond';

const AboutMobileAuthentication=props=>{
        return(
          <BorderedWhite.Page>
              <MobileAuthenticationAndBeyond theme={BorderedWhite}/>
          </BorderedWhite.Page>
        );
};
export default AboutMobileAuthentication;
