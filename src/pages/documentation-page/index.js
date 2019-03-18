import React from 'react';
import LighBlueBackground from '../../page-components/themes/ligh-blue-background';
import ChromeExtensionHelp from './ChromeExtensionHelp';
import {withScrollToTop} from '../../components/screen-media';
const _DocumentPage=props=>{
        return(
          <LighBlueBackground.Page>
              <ChromeExtensionHelp theme={LighBlueBackground}/>
          </LighBlueBackground.Page>
        );
};
const DocumentPage=withScrollToTop(_DocumentPage,'topContent');

export default DocumentPage;
