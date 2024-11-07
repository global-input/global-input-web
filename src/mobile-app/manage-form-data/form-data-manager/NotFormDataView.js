import React, {Component, PureComponent} from 'react';

import {manageFormDataTextConfig, menusConfig} from '../../configs';

import {DisplayBlockText, ViewWithTabMenu} from '../../components';

export default ({menuItems, onCreateFormData}) => (
  <ViewWithTabMenu
    menuItems={menuItems}
    selected={menusConfig.manageFormData.menu}
    title={manageFormDataTextConfig.title}
    floatingButton={menusConfig.addRecord.menu}
    onPressFloatingIcon={onCreateFormData}>
    <DisplayBlockText content={manageFormDataTextConfig.noData.content} />
  </ViewWithTabMenu>
);

