import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileContentTransfer from './MobileContentTransfer';

import { MobileConnect } from '../../mobile';
import { usePageTitle } from '../../page-metadata';
const AboutMobileContentTransfer = () => {
  const initData = {
    form: {
      title: "About Mobile Content Transfer",
      fields: []
    }
  };
  usePageTitle('Mobile Content Transfer');
  return (
    <theme.Page>
      <MobileConnect initData={initData} />
      <MobileContentTransfer theme={theme} />
    </theme.Page>
  )
};
export default AboutMobileContentTransfer;
