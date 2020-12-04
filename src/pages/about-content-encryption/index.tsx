import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import ContentEncryption from './ContentEncryption';

import { useConnectToMobile } from '../../mobile';
import * as mobileUI from '../../mobile-ui';
import { usePageTitle } from '../../page-metadata';


const AboutContentEncryption = () => {
  const { DisplayMobileConnect } = useConnectToMobile(mobileUI.aboutEncryption.initData, mobileUI.aboutEncryption.onFieldChange);

  usePageTitle('Mobile Encryption');
  return (
    <theme.Page>

      <ContentEncryption theme={theme} />
      <DisplayMobileConnect />
    </theme.Page>
  );
};
export default AboutContentEncryption;
