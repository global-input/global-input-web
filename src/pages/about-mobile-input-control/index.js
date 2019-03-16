import React from 'react';
import BorderedWhite from '../../page-components/themes/bordered-white';

import IntroducingMobileInputAndControl from './IntroducingMobileInputAndControl';
export default class AboutMobileInputControl extends React.Component{

  render(){
        return(
          <BorderedWhite.Page>
              <IntroducingMobileInputAndControl theme={BorderedWhite}/>

          </BorderedWhite.Page>
        );

  }

}
