import React from 'react';
import { styles } from '../styles';

import EditorWithTabMenu from '../../components/menu/EditorWithTabMenu';
import ViewWithTabMenu from '../../components/menu/ViewWithTabMenu';
import DisplayBlockText from '../../components/display-text/DisplayBlockText';
import images from "../../configs/images";
import deviceInputTextConfig from "../../configs/deviceInputTextConfig";
import menusConfig from  "../../configs/menusConfig";
import ACT_TYPE from '../ACT_TYPE';
import { generateRandomString } from 'global-input-message';
import * as renders from './renders';
import { appdata } from '../../store';

export const DeviceInputView = ({
  action,
  setAction,
  onFieldChanged,
  onDisconnect,
  onGlobalInputDataChanged,
  appMenu,
  displayNotificationMessage,
  onPairingData,
  onSaveFormData,
  formDataToSave,
}) => {
  
  const onSelectField = (fieldSelection) =>
    setAction({ ...action, fieldSelection });

  const copyFieldToClipboard = () => {
    if (action.fieldSelection && action.fieldSelection.dataitem.value) {
      navigator.clipboard
        .writeText(action.fieldSelection.dataitem.value)
        .then(() => {
          displayNotificationMessage(deviceInputTextConfig.clipboard.message);
        })
        .catch((err) => {
          console.error('Could not copy text: ', err);
        });
    }
  };

  const pasteClipboardToField = () => {
    if (action.fieldSelection) {
      navigator.clipboard
        .readText()
        .then((clipboardContent) => {
          if (clipboardContent && clipboardContent.length > 0) {
            onGlobalInputDataChanged(
              clipboardContent,
              action.fieldSelection.index
            );
          }
        })
        .catch((err) => {
          console.error('Failed to read clipboard contents: ', err);
        });
    }
  };

  const randomizeFieldValue = () => {
    if (action.fieldSelection) {
      var randomValue = generateRandomString(11);
      onGlobalInputDataChanged(randomValue, action.fieldSelection.index);
    }
  };

  const clearSelectedField = () => {
    if (action.fieldSelection) {
      onGlobalInputDataChanged('', action.fieldSelection.index);
    }
  };

  const onUnselectField = () =>
    setAction({ ...action, fieldSelection: null });

  const onEncryptSecret = () =>    
    setAction({ ...action, actionType: ACT_TYPE.ENCRYPT_SECRET });

  const onEncryptionKey = () => {
    setAction({ ...action, actionType: ACT_TYPE.MASTER_KEY });
  };

  const onHideSecret = () => {
    var showHideSecret = { ...action.showHideSecret, show: false };
    setAction({ ...action, showHideSecret });
  };

  const onShowSecret = () => {
    var showHideSecret = { ...action.showHideSecret, show: true };
    setAction({ ...action, showHideSecret });
  };

  const onListAllForm = () => {
    setAction({ ...action, actionType: ACT_TYPE.ALL_FORMS_DATA });
  };

  const listMatchedForm = () =>
    setAction({ ...action, actionType: ACT_TYPE.MATCHED_FORMS_DATA });

  const exportFormData = () => {
    const content = appdata.exportFormContentAsText();
    const exportFormField = action.exportFormField;
    const newField = { ...exportFormField, value: content };
    onFieldChanged({ field: newField });
    setAction({ ...action, exportFormField: null });
  };

  const buildMenuItemForDeviceInput = () => {
    
    let menuItems = null;
    if (action.fieldSelection) {
      menuItems = [
        {
          menu: menusConfig.clipboardCopy.menu,
          onPress: copyFieldToClipboard,
        },
        {
          menu: menusConfig.clipboardPaste.menu,
          onPress: pasteClipboardToField,
        },
        { menu: menusConfig.random.menu, onPress: randomizeFieldValue },
        { menu: menusConfig.clearField.menu, onPress: clearSelectedField },
        { menu: menusConfig.unselect.menu, onPress: onUnselectField },
      ];
    } else {
      menuItems = [{ menu: menusConfig.disconnect.menu, onPress: onDisconnect }];

      if (action.initData.dataType === 'qrcode') {
        
        menuItems.push({
          menu: menusConfig.encrypt.menu,
          onPress: onEncryptSecret,
        });
        menuItems.push({
          menu: menusConfig.protectedEncryptionKey.menu,
          onPress: onEncryptionKey,
        });
        menuItems.push({
          menu: menusConfig.serviceData.menu,
          onPress: onPairingData,
        });
      }
      if (formDataToSave) {
        menuItems.push({
          menu: menusConfig.save.menu,
          onPress: onSaveFormData,
        });
      }
      if (action.showHideSecret) {
        if (action.showHideSecret.show) {
          menuItems.push({
            menu: menusConfig.hideSecret.menu,
            onPress: onHideSecret,
          });
        } else {
          menuItems.push({
            menu: menusConfig.showSecret.menu,
            onPress: onShowSecret,
          });
        }
      }
      if (appdata.hasFormContent()) {
        menuItems.push({
          menu: menusConfig.selectFromFormDataList.menu,
          onPress: onListAllForm,
        });
        if (action.autofill) {
          menuItems.push({
            menu: menusConfig.selectMatched.menu,
            onPress: listMatchedForm,
          });
        }
      }
    }
    return menuItems;
  };

  const buildMenuItemsForExport = () => {
    let menuItems = [
      { menu: menusConfig.disconnect.menu, onPress: onDisconnect },
      {
        menu: menusConfig.export.menu,
        onPress: exportFormData,
      },
    ];
    return menuItems;
  };

  const buildMenuItems = () => {
    if (action.exportFormField) {
      return buildMenuItemsForExport();
    }
    return buildMenuItemForDeviceInput();
  };

  if (!action.globalInputdata) {
    return (
      <ViewWithTabMenu
        menuItems={appMenu}
        title={deviceInputTextConfig.emptyFieldsReceived.title}
        message={deviceInputTextConfig.emptyFieldsReceived.content}
      />
    );
  }
  if (action.initData.action !== 'input') {
    return (
      <ViewWithTabMenu menuItems={appMenu} title="Error">
        <div style={styles.contentCenter}>
          <DisplayBlockText
            title={'Error'}
            content={'Action not implemented: ' + action.initData.action}
          />
        </div>
      </ViewWithTabMenu>
    );
  }

  const menuItems = buildMenuItems();
  var viewIds = new Set();
  return (
    <EditorWithTabMenu
      title={deviceInputTextConfig.title}
      titleIcon={images.app.icons.connected}
      menuItems={menuItems}
      selected={menusConfig.eye.menu}
      notificationMessage={action.notificationMessage}
    >
      <div style={styles.content}>
        {renders.renderFormTitle({ initData: action.initData })}
        {renders.renderGlobalInputFields({
          globalInputdata: action.globalInputdata,
          viewIds,
          onGlobalInputDataChanged,
          fieldSelection: action.fieldSelection,
          onSelectField,
          showHideSecret: action.showHideSecret,
        })}
        {renders.renderViews({
          initData: action.initData,
          globalInputdata: action.globalInputdata,
          viewIds,
          onGlobalInputDataChanged,
          fieldSelection: action.fieldSelection,
          onSelectField,
          showHideSecret: action.showHideSecret,
        })}
      </div>
    </EditorWithTabMenu>
  );
};