import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileContentTransfer from './MobileContentTransfer';
import RenderPageMetadata from "../RenderPageMetadata";
import { MobileConnect } from '../../mobile';
export default () => {
  const initData = {
    form: {
      title: "About Mobile Content Transfer",
      fields: []
    }
  };
  return (
    <theme.Page>
      <MobileConnect initData={initData} />
      <MobileContentTransfer theme={theme} />
      <RenderPageMetadata title="Mobile Content Transfer" />
    </theme.Page>
  )
};
export { MobileContentTransfer };
