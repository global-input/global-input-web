import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import ContentEncryption from './ContentEncryption';



import { useMobile } from '../../mobile-ui/aboutEncryption';
import { usePageTitle } from '../../page-metadata';


const AboutContentEncryption = () => {
  const MobileConnect = useMobile();

  usePageTitle('Mobile Encryption');
  return (
    <theme.Page>

      <ContentEncryption theme={theme} />
      <MobileConnect />
    </theme.Page>
  );
};
export default AboutContentEncryption;
