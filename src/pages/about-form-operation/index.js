import React from 'react';

import LighBlueBackground from '../../page-components/themes/ligh-blue-background';

import MobileFormAutomation from './MobileFormAutomation';


export default class AboutFormOperation extends React.Component{
  render(){
      return(
        <LighBlueBackground.Page>
                <MobileFormAutomation theme={LighBlueBackground}/>
        </LighBlueBackground.Page>

      )

  }

}
