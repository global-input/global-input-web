import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileAuthenticationAndBeyond from './MobileAuthenticationAndBeyond';
import RenderPageMetadata from "../RenderPageMetadata";
import { useMobile } from '../../mobile';

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
  const mobile = useMobile(initData);
  mobile.setOnFieldChange((field) => { });
  return (
    <theme.Page>
      <MobileAuthenticationAndBeyond theme={theme} />
      <RenderPageMetadata title="Mobile Authentication" />
    </theme.Page>
  )
};
export { MobileAuthenticationAndBeyond };

export default AboutMobileAuthentication;