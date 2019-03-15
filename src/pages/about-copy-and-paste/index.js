import React from 'react';
import BorderedWhite from '../../page-components/themes/bordered-white';
import CopyAndPaste from './CopyAndPaste';

export default class AboutCopyAndPaste extends React.Component{

  render(){
        return(
          <BorderedWhite.Page>
              <CopyAndPaste theme={BorderedWhite}/>
          </BorderedWhite.Page>
        );

  }

}
