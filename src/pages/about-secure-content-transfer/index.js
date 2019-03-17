import React from 'react';
import BorderedWhite from '../../page-components/themes/bordered-white';




import MobileTransferFormData from './MobileTransferFormData';


export default class  AboutMobileTransferFormData extends React.Component{


  render(){
      return(
        <BorderedWhite.Page>
          <MobileTransferFormData theme={BorderedWhite}/>
        </BorderedWhite.Page>
      );

  }


}
