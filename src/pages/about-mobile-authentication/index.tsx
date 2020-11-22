import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileAuthenticationAndBeyond from './MobileAuthenticationAndBeyond';

import { MobileConnect } from '../../mobile';
import { usePageTitle } from '../../page-metadata';

interface Props {
  title?: string;
}

const AboutMobileAuthentication: React.FC<Props> = ({ title }) => {
  const initData = {
    form: {
      title: "Mobile Authentication",
      fields: []
    }
  };
  usePageTitle('Mobile Authentication');
  return (
    <theme.Page>
      <MobileConnect initData={initData} />
      <MobileAuthenticationAndBeyond theme={theme} />
    </theme.Page>
  )
};

export default AboutMobileAuthentication;