

import {manageKeysTextConfig} from "../../configs";

import {appdata } from "../../store";

  

const populateItemsInAction = (action, encryptionKeyList) => {
    if (!encryptionKeyList) {
      console.log("encryptionKeyList is null");
      return action;
    }
    
    let {endReached,startIndex,numberRocordsInBatch}=action;
    let items=[...action.items];
    for (var counter = 0; counter < numberRocordsInBatch; counter++) {
      if (startIndex >= encryptionKeyList.length) {
        endReached = true;
        break;
      }
      var encryptionKeyItem = encryptionKeyList[startIndex];
      items.push({
        encryptionKeyItem,
        key: encryptionKeyItem.encryptionKey
      });
      startIndex++;
    }
    return {...action, items,endReached,startIndex};
  }

 export const buildInitialData = () => {
    var encryptionKeyList = appdata.getEncryptionKeyList();
    var activeEncryptionKey = appdata.getDecryptedActiveEncryptionKey();
    var selectedEncryptionKeyItem = appdata.findEncryptionKeyByDecryptedValue(activeEncryptionKey);
    var action = {
      password: "",
      errorMessage: "",
      startIndex: 0,
      items: [],
      endReached: false,
      numberRocordsInBatch: 50,
      selectedEncryptionKeyItem
    };
    return populateItemsInAction(action, encryptionKeyList);
    
  }
export const exportEncryptionKey = ({action, setAction, onCompleted}) => {
    const setErrorMessage = errorMessage =>  setAction({...action, errorMessage});    
    try {            
         
            if (!password) {
                setErrorMessage(manageKeysTextConfig.errorMessages.passwordIsmissing);
            }
            else if (password.length < 5) {
                setErrorMessage(manageKeysTextConfig.errorMessages.passwordTooShort);
            }
            else {
                var encryptedContent = appdata.exportEncryptionKeyItemWithPassword(action.selectedEncryptionKeyItem, password);
                var codedataname = manageKeysTextConfig.export.qrcode.title;
                onCompleted(encryptedContent,codedataname);                
            }
    }
    catch (error) {
      console.log(error);
      setErrorMessage(manageKeysTextConfig.errorMessages.failedToEncrypt + error);      
    }
  }
  const loadNextBatchOfItems = action => {
    var encryptionKeyList = appdata.getEncryptionKeyList();
    return populateItemsInAction(action, encryptionKeyList);  
  };

  export const onEndReached = ({action,setAction}) =>{  
    if (!action.endReached) {
        setAction(loadNextBatchOfItems(action));
    }
  };
  export const setPassword =({password, action, setAction}) => setAction({...action, password,errorMessage:""});    
  

