import React from 'react';


import {Title, P, Page} from "../../page-components/themes/blue-background";

import {withScrollToTop} from "../../components/screen-media";

import IconCard,{CardContainer} from "./icon-card";
import {WhiteRoundButton,BlueRoundButton,ImageExternalLink,ImageButton,TransparentButton} from '../../page-components/round-buttons';
import {config} from '../../configs';




const images={
  appIcon:require('./images/app-icon.png'),
  appStore:require('./images/app-store.png'),
  playStore:require('./images/play-store.png'),
  extension:require('./images/extension.png'),
  chrome:require('./images/chrome.png'),
  firefox:require('./images/firefox-addons.png'),
}


const mobileApp=()=>(
  <>
      <ImageButton image={images.appStore} href={config.links.appdownload.appStore}/>
      <ImageButton image={images.playStore} href={config.links.appdownload.playStore}/>
  </>

);
const extension=()=>(
  <>
      <ImageButton image={images.chrome} href={config.links.chromeExtension.url}/>
      <ImageButton image={images.firefox} href={config.links.firefox.url}/>
  </>

);


const GetAppPage=props=>(
        <Page>
<CardContainer>
<IconCard titleIcon={images.appIcon}
                  title="Global Input App" 
                  footerContent={mobileApp()}>
   Get our free and open-source mobile app
</IconCard>

<IconCard titleIcon={images.extension}
                  title="Browser Extension" 
                  footerContent={extension()}>
   Get our browser extension to use your mobile to operate on the 
   websites loaded on your computer.
</IconCard>

</CardContainer>

         



        </Page>
      );
export default withScrollToTop(GetAppPage,'topContent');

