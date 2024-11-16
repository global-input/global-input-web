import React from 'react';


import appTextConfig  from "../configs/appTextConfig";
import menusConfig from "../configs/menusConfig";

import ViewWithTabMenu from "../components/menu/ViewWithTabMenu";


const PendingAuthorizartionView= ({ menuItems }) => (
  <ViewWithTabMenu
    title={appTextConfig.permissionPending.title}
    menuItems={menuItems} selected={menusConfig.eye.menu}
    content={appTextConfig.permissionPending.content} />
);
export default PendingAuthorizartionView;
