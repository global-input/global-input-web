import React from 'react';


import { Page } from "../../page-components/themes/blue-background";

import { withScrollToTop } from "../../app-layout/screen-media";

import IconCard, { CardContainer } from "./icon-card";

import { useConnectToMobile } from '../../mobile/use-connect-to-mobile';
import * as mobileUI from '../../mobile-ui';
import { config } from '../../configs';
import { usePageTitle } from '../../page-metadata';
import { useWindowSize } from '../../app-layout';
import {
  ChromeExtensionButton, FirefoxExtensionButton, AppStoreButton, PlayStoreButton,
  JSModuleButton, ReactModuleButton
} from '../../page-components/external-links';
import appIcon from './images/app-icon.png';
import extensionIcon from './images/extension.png';
import moduleIcon from './images/module.png';

const GetAppPage: React.FC = () => {
  const [width] = useWindowSize();
  const { DisplayMobileConnect } = useConnectToMobile(mobileUI.getIt.initData, mobileUI.getIt.onFieldChange);
  usePageTitle('Global Input App -  Get It Free');
  return (
    <Page selected={config.paths.getAppScreen.path} scWidth={width}>

      <CardContainer>
        <IconCard titleIcon={appIcon}
          title="Global Input App"
          footerContent={(<>
            <AppStoreButton />
            <PlayStoreButton />
          </>)} scWidth={width}>
          Free and open-source mobile app for operating on multi-device environments.
      </IconCard>

        <IconCard titleIcon={extensionIcon}
          title="Browser Extensions"
          footerContent={(<>
            <ChromeExtensionButton />
            <FirefoxExtensionButton />
          </>)} scWidth={width}>
          Browser extensions for using mobiles to operate on the
          websites loaded on computers.

        </IconCard>
      </CardContainer>
      <CardContainer>
        <IconCard titleIcon={moduleIcon}
          title="NPM Modules"
          footerContent={(<>
            <JSModuleButton />
            <ReactModuleButton />
          </>)} scWidth={width}>
          Modules for enabling applications to have mobile app interoperability.
        </IconCard>

      </CardContainer>
      <DisplayMobileConnect />
    </Page>

  )
};
export default withScrollToTop(GetAppPage, 'topContent');
