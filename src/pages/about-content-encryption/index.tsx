import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import ContentEncryption from './ContentEncryption';

import * as mobile from '../../mobile';
import { usePageTitle } from '../../page-metadata';


const AboutContentEncryption = () => {

  usePageTitle('Mobile Encryption');
  return (
    <theme.Page>
      <mobile.MobileConnect initData={mobile.ui.aboutEncryption.initData} onFieldChange={mobile.ui.aboutEncryption.onFieldChange} />
      <ContentEncryption theme={theme} />
    </theme.Page>
  );
};
export default AboutContentEncryption;
