

import manageKeysTextConfig from "../../configs/manageKeysTextConfig";

import {appdata } from "../../store";

 import {logger} from '../../logging'; 

const populateItemsInAction = (action, encryptionKeyList) => {
  if (!encryptionKeyList) {
    logger.log("encryptionKeyList is null");
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
  
  var selectedEncryptionKeyItem = appdata.getActiveEncryptionKeyItem();
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
export const exportEncryptionKey = async ({action, setAction, onCompleted}) => {
  const setErrorMessage = errorMessage =>  setAction({...action, errorMessage});    
  try {            
       
          if (!action?.password) {
              setErrorMessage(manageKeysTextConfig.errorMessages.passwordIsmissing);
          }
          else if (action?.password?.length < 5) {
              setErrorMessage(manageKeysTextConfig.errorMessages.passwordTooShort);
          }
          else {
              var encryptedContent = await appdata.exportEncryptionKeyItemWithPassword(action.selectedEncryptionKeyItem, action?.password);
              var codedataname = manageKeysTextConfig.export.qrcode.title;
              onCompleted(encryptedContent,codedataname);                
          }
  }
  catch (error) {
    logger.error("error:"+error,error);
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


