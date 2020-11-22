import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import ContentEncryption from './ContentEncryption';

import { MobileConnect } from '../../mobile';
import { usePageTitle } from '../../page-metadata';


const AboutContentEncryption = () => {
  const initData = {
    form: {
      title: 'About Mobile Encryption',
      fields: []
    }
  };
  usePageTitle('Mobile Encryption');
  return (
    <theme.Page>
      <MobileConnect initData={initData} />
      <ContentEncryption theme={theme} />
    </theme.Page>
  );
};
export default AboutContentEncryption;
