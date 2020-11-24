import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileContentTransfer from './MobileContentTransfer';

import * as mobile from '../../mobile';
import * as mobileUI from '../../mobile-ui';
import { usePageTitle } from '../../page-metadata';
const AboutMobileContentTransfer = () => {

  usePageTitle('Mobile Content Transfer');
  return (
    <theme.Page>
      <mobile.MobileConnect initData={mobileUI.aboutContentTransfer.initData} onFieldChange={mobileUI.aboutContentTransfer.onFieldChange} />
      <MobileContentTransfer theme={theme} />
    </theme.Page>
  )
};
export default AboutMobileContentTransfer;
