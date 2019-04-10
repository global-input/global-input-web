import React from 'react';

import LighBlueBackground from '../../page-components/themes/ligh-blue-background';

import MobilePersonalStorage from './MobilePersonalStorage';


export default class AboutMobilePersonalStorage extends React.Component{
  render(){
      return(
        <LighBlueBackground.Page>
                <MobilePersonalStorage theme={LighBlueBackground}/>
        </LighBlueBackground.Page>

      )

  }

}

export {MobilePersonalStorage};
