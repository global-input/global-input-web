import React from 'react';
import LighBlueBackground from '../../page-components/themes/ligh-blue-background';
import CopyAndPaste from './CopyAndPaste';

export default class AboutCopyAndPaste extends React.Component{

  render(){
        return(
          <LighBlueBackground.Page>
              <CopyAndPaste theme={LighBlueBackground}/>
          </LighBlueBackground.Page>
        );

  }

}

export {CopyAndPaste};
