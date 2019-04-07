import React from 'react';
import LighBlueBackground from '../../page-components/themes/ligh-blue-background';
import MobileTools from './MobileTools';

export default class AboutMobileTools extends React.Component{

  render(){
        return(
          <LighBlueBackground.Page>
              <MobileTools theme={LighBlueBackground}/>
          </LighBlueBackground.Page>
        );

  }

}

export {MobileTools};
