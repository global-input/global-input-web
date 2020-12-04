import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileContentTransfer from './MobileContentTransfer';


import { useConnectToMobile } from '../../mobile';
import * as mobileUI from '../../mobile-ui';
import { usePageTitle } from '../../page-metadata';
const AboutMobileContentTransfer = () => {
  const { DisplayMobileConnect } = useConnectToMobile(mobileUI.aboutContentTransfer.initData, mobileUI.aboutContentTransfer.onFieldChange);
  usePageTitle('Mobile Content Transfer');
  return (
    <theme.Page>

      <MobileContentTransfer theme={theme} />
      <DisplayMobileConnect />
    </theme.Page>
  )
};
export default AboutMobileContentTransfer;
