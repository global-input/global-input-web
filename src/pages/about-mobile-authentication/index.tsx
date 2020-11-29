import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import { MobileAuthenticationAndBeyond } from './MobileAuthenticationAndBeyond';

import * as mobile from '../../mobile';
import * as mobileUI from '../../mobile-ui';
import { usePageTitle } from '../../page-metadata';

interface Props {
  title?: string;
}

export const AboutMobileAuthentication: React.FC<Props> = ({ title }) => {

  usePageTitle('Mobile Authentication');
  return (
    <theme.Page>
      <mobile.MobileConnect initData={mobileUI.aboutAuthentication.initData} onFieldChange={mobileUI.aboutAuthentication.onFieldChange} />
      <MobileAuthenticationAndBeyond theme={theme} />
    </theme.Page>
  )
};
