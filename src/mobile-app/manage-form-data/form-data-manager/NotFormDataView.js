import React from 'react';


import manageFormDataTextConfig from '../../configs/manageFormDataTextConfig';
import menusConfig from '../../configs/menusConfig';



import DisplayBlockText from '../../components/display-text/DisplayBlockText';
import ViewWithTabMenu from '../../components/menu/ViewWithTabMenu';

const NotFormDataView=  ({menuItems, onCreateFormData}) => (
  <ViewWithTabMenu
    menuItems={menuItems}
    selected={menusConfig.manageFormData.menu}
    title={manageFormDataTextConfig.title}
    floatingButton={menusConfig.addRecord.menu}
    onPressFloatingIcon={onCreateFormData}>
    <DisplayBlockText content={manageFormDataTextConfig.noData.content} />
  </ViewWithTabMenu>
);

export default NotFormDataView;