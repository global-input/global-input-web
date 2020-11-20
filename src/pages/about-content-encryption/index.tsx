import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import ContentEncryption from './ContentEncryption';
import RenderPageMetadata from "../RenderPageMetadata";
import { useMobile } from '../../mobile';


const AboutContentEncryption = () => {
  const initData = {
    form: {
      title: "About Mobile Encryption",
      fields: []
    }
  };
  const mobile = useMobile(initData, false);
  mobile.setOnFieldChange((field) => { });
  return (
    <theme.Page>
      <ContentEncryption theme={theme} />
      <RenderPageMetadata title="Mobile Encryption" />/
    </theme.Page>
  );
};
export { ContentEncryption };
export default AboutContentEncryption;
