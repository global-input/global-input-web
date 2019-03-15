import React from 'react';
import BorderedWhite from '../../page-components/themes/bordered-white';



import {Link} from 'react-router-dom'

import {styles,images} from './styles';
import TopHeaderSection from "../../page-components/top-header-section";

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
