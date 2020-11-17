import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';
import MobileContentTransfer from './MobileContentTransfer';
import RenderPageMetadata from "../RenderPageMetadata";
import { useMobile } from '../../mobile';
export default () => {
  const initData = {
    form: {
      title: "About Mobile Content Transfer",
      fields: []
    }
  };
  const mobile = useMobile(initData);
  mobile.setOnFieldChange((field) => { });

  return (
    <theme.Page>
      <MobileContentTransfer theme={theme} />
      <RenderPageMetadata title="Mobile Content Transfer" />
    </theme.Page>
  )
};
export { MobileContentTransfer };
