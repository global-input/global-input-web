import React from 'react';
import BorderedWhite from '../../page-components/themes/bordered-white';
import MobileAuthenticationAndBeyon from './MobileAuthenticationAndBeyon';

export default class AboutMobileAuthentication extends React.Component{

  render(){
        return(
          <BorderedWhite.Page>
              <MobileAuthenticationAndBeyon theme={BorderedWhite}/>
          </BorderedWhite.Page>
        );

  }

}
