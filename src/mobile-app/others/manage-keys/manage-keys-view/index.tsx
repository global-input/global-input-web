import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import images from '../../../configs/images';
import menusConfig from '../../../configs/menusConfig';
import manageKeysTextConfig from '../../../configs/manageKeysTextConfig';

import ViewWithTabMenu from "../../../components/menu/ViewWithTabMenu";
import GenerateNewKey from "../generate-new-key";
import DisplayBlockText from "../../../components/display-text/DisplayBlockText";
import EncryptionKeyItemImported from './EncryptionKeyItemImported';
import { appdata } from '../../../store';

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
    CLIPBOARD_COPY_COMPLETE: 12
};

const createNewAction = () => ({
    type: ACT_TYPE.LIST_KEYS,
    startIndex: 0,
    items: [],
    endReached: false,
    numberRecordsInBatch: 50,
    selectedEncryptionKeyItem: null,
    password: ""
});

const populateItemsInAction = (action, encryptionKeyList) => {
    if (!encryptionKeyList) return;

    for (let i = 0; i < action.numberRecordsInBatch; i++) {
        if (action.startIndex >= encryptionKeyList.length) {
            action.endReached = true;
            break;
        }
        const encryptionKeyItem = encryptionKeyList[action.startIndex];
        action.items.push({
            encryptionKeyItem,
            key: encryptionKeyItem.encryptionKey
        });
        action.startIndex++;
    }
};

const getStateFromProps = ({ importDecryptedKey }) => {
    const encryptionKeyList = appdata.getEncryptionKeyList();
    const action = createNewAction();
    populateItemsInAction(action, encryptionKeyList);

    if (importDecryptedKey) {
        const matchedKeyItem = appdata.findEncryptionKeyByDecryptedValue(importDecryptedKey);
        action.selectedEncryptionKeyItem = matchedKeyItem || null;
        action.type = matchedKeyItem ? ACT_TYPE.VIEW_ITEM_DETAILS : ACT_TYPE.IMPORTING_KEY;
    }

    return action;
};

interface ManageKeysViewProps {
    importDecryptedKey?: string;
    menuItems?: any[];
    onBack?: () => void;
}
const ManageKeysView:React.FC<ManageKeysViewProps> = ({ importDecryptedKey, menuItems, onBack }) => {
    const [action, setAction] = useState(getStateFromProps({ importDecryptedKey }));

    useEffect(() => {
        setAction(getStateFromProps({ importDecryptedKey }));
    }, [importDecryptedKey]);

    const deleteEncryptionKeyItem = encryptionKeyItem => {
        appdata.deleteEncryptionKeyItem(encryptionKeyItem);
        toListView();
    };

    const toListView = () => {
        const action = getStateFromProps({ importDecryptedKey });
        action.type = ACT_TYPE.LIST_KEYS;
        setAction(action);
    };

    const importNewKey = (name, encryptionKey) => {
        const selectedEncryptionKeyItem = appdata.importNewKey(name, encryptionKey);
        setAction({ ...action, selectedEncryptionKeyItem, type: ACT_TYPE.KEY_IMPORTED });
    };

    const setSelectedItem = (selectedEncryptionKeyItem, type) => setAction({ ...action, selectedEncryptionKeyItem, type });
    const setActionType = (type) => setAction({ ...action, type });
    const loadNextBatchOfItems = () => {
        populateItemsInAction(action, appdata.getEncryptionKeyList());
        setAction({ ...action });
    };

    const onItemSelected = selectedItem => setSelectedItem(selectedItem.encryptionKeyItem, ACT_TYPE.VIEW_ITEM_DETAILS);
    const renderActiveIcon = encryptionKeyItem => appdata.isEncryptionKeyIsActive(encryptionKeyItem) && <Icon src={images.activeIcon} alt="Active Icon" />;

    const renderItemListItem = item => (
        <ItemContainer key={item.key} onClick={() => onItemSelected(item)}>
            <ItemRow>
                <ListContainer>
                    <ListValue>
                        <Icon src={images.key} alt="Key Icon" />
                        <KeyText>{item.encryptionKeyItem.name}</KeyText>
                    </ListValue>
                    {renderActiveIcon(item.encryptionKeyItem)}
                </ListContainer>
            </ItemRow>
        </ItemContainer>
    );

    const renderListItems = () => (
        <ViewWithTabMenu
            menuItems={menuItems || [{ menu: menusConfig.back.menu, onPress: onBack }]}
            selected={menusConfig.manageKeys.menu}
            title={manageKeysTextConfig.title}
            floatingButton={menusConfig.addRecord.menu}
            onPressFloatingIcon={() => setActionType(ACT_TYPE.GENERATE_NEW_KEY)}
        >
            <ListContainer>
                {action.items.map(renderItemListItem)}
            </ListContainer>
            <Content>
                <DisplayBlockText content={manageKeysTextConfig.content} />
            </Content>
        </ViewWithTabMenu>
    );

    const renderContent = () => {
        switch (action.type) {
            case ACT_TYPE.LIST_KEYS: return renderListItems();
            case ACT_TYPE.GENERATE_NEW_KEY: return <GenerateNewKey onBack={toListView} importNewKey={importNewKey} />;
            case ACT_TYPE.IMPORTING_KEY: return <GenerateNewKey onBack={toListView} importNewKey={importNewKey} importDecryptedKey={importDecryptedKey} />;
            case ACT_TYPE.KEY_IMPORTED: return (
                <EncryptionKeyItemImported
                    onBack={toListView}
                    encryptionKeyItem={action.selectedEncryptionKeyItem}                    
                    onQrCodeSelected={() => setSelectedItem(action.selectedEncryptionKeyItem, ACT_TYPE.PASSWORD_FOR_QR_CODE)}
                    onClipboardCopySelected={() => setSelectedItem(action.selectedEncryptionKeyItem, ACT_TYPE.PASSWORD_FOR_CLIPBOARD)}
                />
            );
            // Add other cases for rendering components based on `action.type`
            default: return null;
        }
    };

    return renderContent();
};

export default ManageKeysView;

// Styled Components
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ItemContainer = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;

const ItemRow = styled.div`
    display: flex;
    width: 100%;
`;

const ListValue = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;

const KeyText = styled.p`
    font-size: 16px;
    color: #333;
`;

const Content = styled.div`
    padding: 20px;
`;