import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileContentTransfer from './MobileContentTransfer';

import { useMobile } from '../../mobile-ui/aboutContentTransfer';
import { usePageTitle } from '../../page-metadata';
const AboutMobileContentTransfer = () => {
  const MobileConnect = useMobile();
  usePageTitle('Mobile Content Transfer');
  return (
    <theme.Page>
      <MobileContentTransfer theme={theme} />
      <MobileConnect />
    </theme.Page>
  )
};
export default AboutMobileContentTransfer;
