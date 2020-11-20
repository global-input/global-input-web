import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import IntroducingMobileInputAndControl from './IntroducingMobileInputAndControl';
import RenderPageMetadata from "../RenderPageMetadata";
import { MobileConnect } from '../../mobile';


const AboutMobileInputControl: React.FC = () => {

  const initData = {
    form: {
      title: "About Input & Control",
      fields: []
    }
  };
  return (
    <theme.Page>
      <MobileConnect initData={initData} />
      <IntroducingMobileInputAndControl theme={theme} />
      <RenderPageMetadata title="Mobile Input &amp; Control" />
    </theme.Page>
  )
};
export { IntroducingMobileInputAndControl };

export default AboutMobileInputControl;
