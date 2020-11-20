import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import ContentEncryption from './ContentEncryption';
import RenderPageMetadata from "../RenderPageMetadata";
import { MobileConnect } from '../../mobile';


const AboutContentEncryption = () => {
  const initData = {
    form: {
      title: "About Mobile Encryption",
      fields: []
    }
  };

  return (
    <theme.Page>
      <MobileConnect initData={initData} />
      <ContentEncryption theme={theme} />
      <RenderPageMetadata title="Mobile Encryption" />/
    </theme.Page>
  );
};
export { ContentEncryption };
export default AboutContentEncryption;
