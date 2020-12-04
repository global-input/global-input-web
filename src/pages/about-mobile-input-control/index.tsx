import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import IntroducingMobileInputAndControl from './IntroducingMobileInputAndControl';

import { useMobile } from '../../mobile-ui/aboutControl';
import { usePageTitle } from '../../page-metadata';

const AboutMobileInputControl: React.FC = () => {
  usePageTitle('Mobile Input &amp; Control');
  const MobileConnect = useMobile();
  return (
    <theme.Page>
      <IntroducingMobileInputAndControl theme={theme} />
      <MobileConnect />
    </theme.Page>
  )
};


export default AboutMobileInputControl;
