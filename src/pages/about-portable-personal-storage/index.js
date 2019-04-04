import React from 'react';

import LighBlueBackground from '../../page-components/themes/ligh-blue-background';

import PortablePersonalStorage from './PortablePersonalStorage';


export default class AboutPortablePersonalStorage extends React.Component{
  render(){
      return(
        <LighBlueBackground.Page>
                <PortablePersonalStorage theme={LighBlueBackground}/>
        </LighBlueBackground.Page>

      )

  }

}

export {PortablePersonalStorage};
