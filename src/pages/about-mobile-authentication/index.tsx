import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileAuthenticationAndBeyond from './MobileAuthenticationAndBeyond';
import RenderPageMetadata from "../RenderPageMetadata";
import { MobileConnect } from '../../mobile';

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
  return (
    <theme.Page>
      <MobileConnect initData={initData} />
      <MobileAuthenticationAndBeyond theme={theme} />
      <RenderPageMetadata title="Mobile Authentication" />
    </theme.Page>
  )
};
export { MobileAuthenticationAndBeyond };

export default AboutMobileAuthentication;