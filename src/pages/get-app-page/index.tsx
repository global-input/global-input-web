import React from 'react';


import { Page } from "../../page-components/themes/blue-background";

import { withScrollToTop } from "../../app-layout/screen-media";

import IconCard, { CardContainer } from "./icon-card";

import { pagesLinks } from '../../page-components/links-components';


import * as mobile from '../../mobile';
import * as mobileUI from '../../mobile-ui';
import { config } from '../../configs';
import { usePageTitle } from '../../page-metadata';
import { useWindowSize } from '../../app-layout';
const { AppStoreButton, PlayStoreButton, ChromeExtensionButton, FirefoxExtensionButton } = pagesLinks.buttons;


const images = {
  appIcon: require('./images/app-icon.png'),
  extension: require('./images/extension.png'),
}


const mobileApp = () => (
  <>
    <AppStoreButton />
    <PlayStoreButton />
  </>

);
const extension = () => (
  <>
    <ChromeExtensionButton />
    <FirefoxExtensionButton />
  </>

);


const GetAppPage = () => {
  const [width] = useWindowSize();
  usePageTitle('Global Input App -  Get It Free');
  return (
    <Page selected={config.paths.getAppScreen.path} scWidth={width}>
      <mobile.MobileConnect initData={mobileUI.getIt.initData} onFieldChange={mobileUI.getIt.onFieldChange} />
      <CardContainer>
        <IconCard titleIcon={images.appIcon}
          title="Global Input App"
          footerContent={mobileApp()} scWidth={width}>
          Get our free and open-source mobile app to operate on a multi-device environment.



</IconCard>

        <IconCard titleIcon={images.extension}
          title="Browser Extension"
          footerContent={extension()} scWidth={width}>
          Get our browser extension to use your mobile to operate on the
          websites loaded on your computer.

        </IconCard>

      </CardContainer>





    </Page>
  )
};
export default withScrollToTop(GetAppPage, 'topContent');
