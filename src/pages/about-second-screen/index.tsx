import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';
import SecondScreenExperience from './SecondScreenExperience';
import RenderPageMetadata from "../RenderPageMetadata";
import { useMobile } from '../../mobile';

const AboutSecondScreen = () => {
  const initData = {
    form: {
      title: "About Second Screen",
      fields: []
    }
  };
  const mobile = useMobile(initData, false);
  mobile.setOnFieldChange((field) => { });

  return (
    <theme.Page>
      <SecondScreenExperience theme={theme} />
      <RenderPageMetadata title="Second Screen Experience" />
    </theme.Page>
  )
};
export { SecondScreenExperience };
export default AboutSecondScreen;
