import React from 'react';
import BorderedWhite from '../../page-components/themes/bordered-white';


import MobileFormAutomation from './MobileFormAutomation';


export default class AboutFormOperation extends React.Component{
  render(){
      return(
        <BorderedWhite.Page>
                <MobileFormAutomation theme={BorderedWhite}/>
        </BorderedWhite.Page>

      )

  }

}
