import React from 'react';
import LighBlueBackground from '../../page-components/themes/ligh-blue-background';

import ContentEncryption from './ContentEncryption';
import ExportEncryptionKeys from './ExportEncryptionKeys';
import ExportAppSettings from './ExportAppSettings';
export default class AboutCopyAndPaste extends React.Component{

  render(){
        return(
          <LighBlueBackground.Page>
                <ContentEncryption theme={LighBlueBackground}/>
                <ExportEncryptionKeys theme={LighBlueBackground}/>
                <ExportAppSettings theme={LighBlueBackground}/>
          </LighBlueBackground.Page>
        );

  }

}
