import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileAuthenticationAndBeyond from './MobileAuthenticationAndBeyond';

import * as mobile from '../../mobile';
import { usePageTitle } from '../../page-metadata';

interface Props {
  title?: string;
}

const AboutMobileAuthentication: React.FC<Props> = ({ title }) => {

  usePageTitle('Mobile Authentication');
  return (
    <theme.Page>
      <mobile.MobileConnect initData={mobile.aboutAuthentication.initData} onFieldChange={mobile.aboutAuthentication.onFieldChange} />
      <MobileAuthenticationAndBeyond theme={theme} />
    </theme.Page>
  )
};

export default AboutMobileAuthentication;