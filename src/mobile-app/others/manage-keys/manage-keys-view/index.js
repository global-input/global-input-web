// index.js

import React, { useState, useEffect } from 'react';

import { styles } from '../styles';

import images from '../../../configs/images';
import menusConfig from '../../../configs/menusConfig';
import manageKeysTextConfig from '../../../configs/manageKeysTextConfig';

import ViewWithTabMenu from "../../../components/menu/ViewWithTabMenu";
import GenerateNewKey from "../generate-new-key";
import DisplayBlockText from "../../../components/display-text/DisplayBlockText";
import EncryptionKeyItemImported from './EncryptionKeyItemImported';




import EncryptionKeyItemActivated from "./EncryptionKeyItemActivated";
import ViewEncryptionKeyDetails from "../view-encryption-key-details";
import DeletingEncryptionKey from "./DeletingEncryptionKey";
import PasswordInputView from "../password-input-view";
                            
import {QRCodeView} from "../../../qr-code-view";
import ClipboardCopyView from "../../../clipboard-copy-view";



import { appdata, formDataUtil } from '../../../store';
import * as appStore from '../../../store';
import {logger} from 'global-input-logging';
const ACT_TYPE = {
  LIST_KEYS: 1,
  GENERATE_NEW_KEY: 2,
  IMPORTING_KEY: 3,
  KEY_IMPORTED: 4,
  KEY_ACTIVATED: 5,
  VIEW_ITEM_DETAILS: 6,
  DELETING_KEY: 7,
  PASSWORD_FOR_QR_CODE: 8,
  DISPLAY_QR_CODE: 9,
  PASSWORD_FOR_CLIPBOARD: 10,
  DISPLAY_CLIPBOARD: 11,
  CLIPBOARD_COPY_COMPLETE: 12,
};

const createNewAction = () => ({
  type: ACT_TYPE.LIST_KEYS,
  startIndex: 0,
  items: [],
  endReached: false,
  numberRecordsInBatch: 50,
  selectedEncryptionKeyItem: null,
  password: '',
});

const populateItemsInAction = (action, encryptionKeyList) => {
  if (!encryptionKeyList) {
    logger.log('encryptionKeyList is null');
    return;
  }
  for (let counter = 0; counter < action.numberRecordsInBatch; counter++) {
    if (action.startIndex >= encryptionKeyList.length) {
      action.endReached = true;
      break;
    }
    const encryptionKeyItem = encryptionKeyList[action.startIndex];
    
    action.items.push({
      encryptionKeyItem,
      key: encryptionKeyItem.lockedKeyValue,
    });
    action.startIndex++;
  }
};

const getStateFromProps =  () => {
  const encryptionKeyList = appdata.getEncryptionKeyList();
  const action = createNewAction();
  populateItemsInAction(action, encryptionKeyList);
  
  return action;
};

export default function ManageKeysView({
  importDecryptedKey =null,
  menuItems,
  onBack =null,
}) {
  const [action, setAction] = useState(() =>
    getStateFromProps()
  );

  useEffect(()=>{
    const processImportDecryptedKey= async ()=>{
      const matchedKeyItem = await appdata.findEncryptionKeyByDecryptedValue(
        importDecryptedKey
      );
      if (matchedKeyItem) {
        setAction({
          ...action,
          selectedEncryptionKeyItem: matchedKeyItem,
          type: ACT_TYPE.VIEW_ITEM_DETAILS,
        });
      } else {
        setAction({
          ...action,
          type: ACT_TYPE.IMPORTING_KEY,
        });
      }
      
    };
    
    if (importDecryptedKey) {
      processImportDecryptedKey();
    }

  },[])

  const deleteEncryptionKeyItem = (encryptionKeyItem) => {
    appStore.deleteEncryptionKeyItem(encryptionKeyItem);
    toListView();
  };

  const onDeletingEncryptionKeyItem = (selectedEncryptionKeyItem) =>
    setAction({
      ...action,
      selectedEncryptionKeyItem,
      type: ACT_TYPE.DELETING_KEY,
    });

  const onQrCodeSelected = (selectedEncryptionKeyItem) =>
    setAction({
      ...action,
      selectedEncryptionKeyItem,
      type: ACT_TYPE.PASSWORD_FOR_QR_CODE,
    });

  const onClipboardCopySelected = (selectedEncryptionKeyItem) =>
    setAction({
      ...action,
      selectedEncryptionKeyItem,
      type: ACT_TYPE.PASSWORD_FOR_CLIPBOARD,
    });

  const toClipboardCopyComplete = () =>
    setAction({ ...action, type: ACT_TYPE.CLIPBOARD_COPY_COMPLETE });

  const loadNextBatchOfItems = (currentAction) => {
    const encryptionKeyList = appdata.getEncryptionKeyList();
    populateItemsInAction(currentAction, encryptionKeyList);
    setAction({ ...currentAction });
  };

  const onEndReached = () => {
    if (!action.endReached) {
      loadNextBatchOfItems(action);
    }
  };

  const onItemSelected = (selectedItem) => {
    const selectedEncryptionKeyItem = selectedItem.encryptionKeyItem;
    setAction({
      ...action,
      selectedEncryptionKeyItem,
      type: ACT_TYPE.VIEW_ITEM_DETAILS,
    });
  };

  const toBackToItemDetails = () => {
    setAction({ ...action, type: ACT_TYPE.VIEW_ITEM_DETAILS });
  };

  const onSelectGenerateNewKey = () => {
    setAction({ ...action, type: ACT_TYPE.GENERATE_NEW_KEY });
  };

  const toListView = () => {
    const newAction = getStateFromProps({ importDecryptedKey });
    newAction.type = ACT_TYPE.LIST_KEYS;
    setAction(newAction);
  };

  const importNewKey = async (name, encryptionKey) => {
    const selectedEncryptionKeyItem = await appStore.addNewEncryptionKey(
      name,
      encryptionKey,      
    );
    setAction({
      ...action,
      selectedEncryptionKeyItem,
      type: ACT_TYPE.KEY_IMPORTED,
    });
  };

  const displayQRCode = (password) => {
    setAction({ ...action, password, type: ACT_TYPE.DISPLAY_QR_CODE });
  };

  const displayExportToClipboard = (password) => {
    setAction({ ...action, password, type: ACT_TYPE.DISPLAY_CLIPBOARD });
  };

  const activateEncryptionKey = (encryptionKeyItem) => {
    appStore.activateEncryptionKey(encryptionKeyItem);
    setAction({ ...action, type: ACT_TYPE.KEY_ACTIVATED });
  };

  const updateEncryptionKeyName = (encryptionKeyItem, newName) => {
    action.selectedEncryptionKeyItem.name = newName;
    appdata.updateEncryptionKey(action.selectedEncryptionKeyItem);
    setAction({ ...action });
  };

  const renderActiveIcon = (encryptionKeyItem) => {
    
    if (appStore.isEncryptionKeyIsActive(encryptionKeyItem.encryptionKeyItem)) {    
      return (
        <img src={images.activeIcon} style={styles.itemIcon} alt="Active" />
      );
    } else {
      return null;
    }
  };

  const renderItemListItem = (item) => {
    return (
      <div
        onClick={() => {
          onItemSelected(item);
        }}
        style={styles.itemRecord}
      >
        <div style={styles.itemRow}>
          <div style={styles.listContainer}>
            <div style={styles.listvalue}>
              <img src={images.key} style={styles.itemIcon} alt="Key" />
              <div style={styles.keyText}>{item.encryptionKeyItem.name}</div>
            </div>
            {renderActiveIcon(item)}
          </div>
        </div>
      </div>
    );
  };

  const renderListItems = () => {    
    const defaultMenus = [
      {
        menu: menusConfig.back.menu,
        onPress: onBack,
      },
    ];
    return (
      <ViewWithTabMenu
        menuItems={menuItems || defaultMenus}
        selected={menusConfig.manageKeys.menu}
        title={manageKeysTextConfig.title}
        floatingButton={menusConfig.addRecord.menu}
        onPressFloatingIcon={onSelectGenerateNewKey}
      >
        
        {action.items.map((item) => (
          <div key={item.key}>{renderItemListItem(item)}</div>
        ))}
        <div style={styles.content}>
          <DisplayBlockText content={manageKeysTextConfig.content} />
        </div>
      </ViewWithTabMenu>
    );
  };

  const renderGenerateNewKey = () => {
    return <GenerateNewKey onBack={toListView} importNewKey={importNewKey} />;
  };

  const renderImportingKey = () => {
    return (
      <GenerateNewKey
        onBack={toListView}
        importNewKey={importNewKey}
        importDecryptedKey={importDecryptedKey}
      />
    );
  };

  const renderEncryptionKeyImported = () => {
    return (
      <EncryptionKeyItemImported
        onBack={toListView}
        encryptionKeyItem={action.selectedEncryptionKeyItem}
        activateEncryptionKey={activateEncryptionKey}
        onQrCodeSelected={onQrCodeSelected}
        onClipboardCopySelected={onClipboardCopySelected}
      />
    );
  };

  const renderEncryptionKeyActivated = () => {
    return (
      <EncryptionKeyItemActivated
        onBack={toListView}
        encryptionKeyItem={action.selectedEncryptionKeyItem}
      />
    );
  };

  const renderViewItemDetails = () => {
    return (
      <ViewEncryptionKeyDetails
        onBack={toListView}
        encryptionKeyItem={action.selectedEncryptionKeyItem}
        activateEncryptionKey={activateEncryptionKey}
        updateEncryptionKeyName={updateEncryptionKeyName}
        onDeletingEncryptionKeyItem={onDeletingEncryptionKeyItem}
        onQrCodeSelected={onQrCodeSelected}
        onClipboardCopySelected={onClipboardCopySelected}
      />
    );
  };

  const renderDeletingEncryptionKey = () => {
    return (
      <DeletingEncryptionKey
        encryptionKeyItem={action.selectedEncryptionKeyItem}
        deleteEncryptionKey={deleteEncryptionKeyItem}
        onBack={toBackToItemDetails}
      />
    );
  };

  const renderPasswordForQRCode = () => {
    return (
      <PasswordInputView
        encryptionKeyItem={action.selectedEncryptionKeyItem}
        title={manageKeysTextConfig.export.qrcode.password.title}
        placeHolder={manageKeysTextConfig.export.qrcode.password.placeHolder}
        help1={manageKeysTextConfig.export.qrcode.password.content1}
        help2={manageKeysTextConfig.export.qrcode.password.content2}
        nextStep={displayQRCode}
        onBack={toBackToItemDetails}
      />
    );
  };

  const renderPasswordForClipboard = () => {
    return (
      <PasswordInputView
        encryptionKeyItem={action.selectedEncryptionKeyItem}
        title={manageKeysTextConfig.export.textContent.password.title}
        placeHolder={manageKeysTextConfig.export.textContent.password.placeHolder}
        help1={manageKeysTextConfig.export.textContent.password.content1}
        help2={manageKeysTextConfig.export.textContent.password.content2}
        nextStep={displayExportToClipboard}
        onBack={toBackToItemDetails}
      />
    );
  };

  const RenderQRCode =  () => { 
    const [content, setContent] = useState(null);
    useEffect( () => {
      const doEncryption = async () => {
      const encryptedContent = await appdata.exportEncryptionKeyItemWithPassword(
        action.selectedEncryptionKeyItem,
        action.password
      );
      if(encryptedContent){
        setContent(encryptedContent);
        };
      };
      doEncryption();
    },[]);
    
    
    const menuItems = [
      {},
      {
        menu: menusConfig.ok.menu,
        onPress: toListView,
      },
      {},
    ];
                               
    const help2 = formDataUtil.buildTextContentResolved(
      action.selectedEncryptionKeyItem,
      manageKeysTextConfig.export.qrcode.content2
    );
    return (
      <QRCodeView
        title={manageKeysTextConfig.export.qrcode.title}
        help={manageKeysTextConfig.export.qrcode.content}
        help2={help2}
        qrcodeContent={content}
        menuItems={menuItems}
      />
    );
  };

  const RenderDisplayClipboardCopy =  () => {
    const [encryptedContent, setEncryptedContent] = useState('');
    useEffect( () => {
      const doEncryption = async () => {
      const encryptedContent = await appdata.exportEncryptionKeyItemAsText(
        action.selectedEncryptionKeyItem,
        action.password
      );
      if(encryptedContent){
        setEncryptedContent(encryptedContent);
        };
      };
      doEncryption();

    },[]);
    
    return (
      <ClipboardCopyView
        title={manageKeysTextConfig.export.textContent.clipboard.title}
        content1={manageKeysTextConfig.export.textContent.clipboard.content1}
        content2={manageKeysTextConfig.export.textContent.clipboard.content2}
        content={encryptedContent}
        onNextStep={toClipboardCopyComplete}
        onBack={toBackToItemDetails}
      />
    );
  };

  const renderClipboardCopyComplete = () => {
    const menuItems = [
      {},
      {
        menu: menusConfig.ok.menu,
        onPress: toListView,
      },
      {},
    ];
    const content = formDataUtil.buildTextContentResolved(
      action.selectedEncryptionKeyItem,
      manageKeysTextConfig.export.textContent.complete.content
    );
    return (
      <ViewWithTabMenu
        title={manageKeysTextConfig.export.textContent.complete.title}
        content={content}
        menuItems={menuItems}
      />
    );
  };

  useEffect(() => {
    setAction(getStateFromProps({ importDecryptedKey }));
  }, [importDecryptedKey]);

  switch (action.type) {
    case ACT_TYPE.LIST_KEYS:
      return renderListItems();
    case ACT_TYPE.GENERATE_NEW_KEY:
      return renderGenerateNewKey();
    case ACT_TYPE.IMPORTING_KEY:
      return renderImportingKey();
    case ACT_TYPE.KEY_IMPORTED:
      return renderEncryptionKeyImported();
    case ACT_TYPE.KEY_ACTIVATED:
      return renderEncryptionKeyActivated();
    case ACT_TYPE.VIEW_ITEM_DETAILS:
      return renderViewItemDetails();
    case ACT_TYPE.DELETING_KEY:
      return renderDeletingEncryptionKey();
    case ACT_TYPE.PASSWORD_FOR_QR_CODE:
      return renderPasswordForQRCode();
    case ACT_TYPE.DISPLAY_QR_CODE:
      return <RenderQRCode />;
    case ACT_TYPE.PASSWORD_FOR_CLIPBOARD:
      return renderPasswordForClipboard();
    case ACT_TYPE.DISPLAY_CLIPBOARD:
      return <RenderDisplayClipboardCopy/>
    case ACT_TYPE.CLIPBOARD_COPY_COMPLETE:
      return renderClipboardCopyComplete();
    default:
      return null;
  }
}