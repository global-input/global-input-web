import React from 'react';


import { Page } from "../../page-components/themes/blue-background";

import { withScrollToTop } from "../../components/screen-media";

import IconCard, { CardContainer } from "./icon-card";

import { pagesLinks } from '../../links-components';

import RenderPageMetadata from "../RenderPageMetadata";
import { MobileConnect } from '../../mobile';
import { config } from '../../configs';

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
  const initData = {
    form: {
      title: "Get App Page",
      fields: []
    }
  };
  return (
    <Page selected={config.paths.getAppScreen.path}>
      <RenderPageMetadata />
      <MobileConnect initData={initData} />
      <CardContainer>
        <IconCard titleIcon={images.appIcon}
          title="Global Input App"
          footerContent={mobileApp()}>
          Get our free and open-source mobile app to operate on a multi-device environment.



</IconCard>

        <IconCard titleIcon={images.extension}
          title="Browser Extension"
          footerContent={extension()}>
          Get our browser extension to use your mobile to operate on the
          websites loaded on your computer.
</IconCard>

      </CardContainer>





    </Page>
  )
};
export default withScrollToTop(GetAppPage, 'topContent');
