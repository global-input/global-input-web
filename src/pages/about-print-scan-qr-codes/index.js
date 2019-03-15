import React from 'react';
import BorderedWhite from '../../page-components/themes/bordered-white';

import ContentEncryption from './ContentEncryption';
import ExportEncryptionKeys from './ExportEncryptionKeys';
import ExportAppSettings from './ExportAppSettings';
export default class AboutCopyAndPaste extends React.Component{

  render(){
        return(
          <BorderedWhite.Page>
                <ContentEncryption theme={BorderedWhite}/>
                <ExportEncryptionKeys theme={BorderedWhite}/>
                <ExportAppSettings theme={BorderedWhite}/>
          </BorderedWhite.Page>
        );

  }

}
