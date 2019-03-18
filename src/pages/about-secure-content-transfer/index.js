import React from 'react';

import LighBlueBackground from '../../page-components/themes/ligh-blue-background';



import MobileTransferFormData from './MobileTransferFormData';


export default class  AboutMobileTransferFormData extends React.Component{


  render(){
      return(
        <LighBlueBackground.Page>
          <MobileTransferFormData theme={LighBlueBackground}/>
        </LighBlueBackground.Page>
      );

  }


}
