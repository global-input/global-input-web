import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import IntroducingMobileInputAndControl from './IntroducingMobileInputAndControl';
import { MobileConnect } from '../../mobile';
import { usePageTitle } from '../../page-metadata';

const AboutMobileInputControl: React.FC = () => {

  const initData = {
    form: {
      title: "About Input & Control",
      fields: []
    }
  };
  usePageTitle('Mobile Input &amp; Control');
  return (
    <theme.Page>
      <MobileConnect initData={initData} />
      <IntroducingMobileInputAndControl theme={theme} />
    </theme.Page>
  )
};


export default AboutMobileInputControl;
