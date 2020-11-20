import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';
import SecondScreenExperience from './SecondScreenExperience';
import RenderPageMetadata from "../RenderPageMetadata";
import { MobileConnect } from '../../mobile';

const AboutSecondScreen = () => {
  const initData = {
    form: {
      title: "About Second Screen",
      fields: []
    }
  };

  return (
    <theme.Page>
      <MobileConnect initData={initData} />
      <SecondScreenExperience theme={theme} />
      <RenderPageMetadata title="Second Screen Experience" />
    </theme.Page>
  )
};
export { SecondScreenExperience };
export default AboutSecondScreen;
