import React from 'react';
import { View } from 'react-native';
import { Clipboard } from 'react-native';

import { generateRandomString } from '../global-input-message';
import { formDataUtil, appdata, domainForms } from '../store';
import { deviceInputTextConfig, encryptedQrCodeTextConfig, settingsTextConfig, menusConfig } from "../configs";

import { ViewWithTabMenu, DisplayBlockText } from "../components";

import { EncryptContentView } from '../qr-code-encryption';

import DeviceInputView from './device-input-view';
import MessageWithFormData from './message-with-form-data';
import { ManageFormData } from '../manage-form-data';



import ACT_TYPE from './ACT_TYPE';
import * as encryptDecryptData from './encrypt-decrypt-data';

import { styles } from './styles';

const MAX_NUMBER_OF_FIELDS = 100;

export const displayNotificationMessage = ({ messageTimerHandler, notificationMessage, setAction }) => {
  const setNotification = () => setAction(action => ({ ...action, notificationMessage }));
  const clearNotification = () => setAction(action => ({ ...action, notificationMessage: null }));
  if (messageTimerHandler.current) {
    clearTimeout(messageTimerHandler.current);
  }
  setNotification();
  messageTimerHandler.current = setTimeout(() => {
    clearNotification();
    messageTimerHandler.current = null;
  }, 2000);
};

export const printError = ({ notificationMessage, error, messageTimerHandler, setAction }) => {
  if (error) {
    console.log(notificationMessage + ":" + error + ":" + error.stack);
  }
  else {
    console.log(notificationMessage);
  }
  if (messageTimerHandler && setAction) {
    if (error) {
      displayNotificationMessage({ messageTimerHandler, notificationMessage, setAction });
    }
    else {
      displayNotificationMessage({ messageTimerHandler, notificationMessage, setAction });
    }

  }
};


export const sessionEndAction = action => ({
  ...action,
  actionType: ACT_TYPE.SESSION_END,
  formData: null,
  nextInitData: null
});

export const finishSessionAction = action => {
  var formData = getFormDataForSaving(action);
  if (formData) {
    return {
      ...action,
      actionType: ACT_TYPE.SAVE_FORM_DATA,
      formData,
      nextInitData: null
    };
  }
  return sessionEndAction(action);
};


const changeGlobalInputFields = ({ globalInputdata, fieldIndex, fieldId, value, onFieldChanged }) => {

  if (!globalInputdata || !globalInputdata.length || fieldIndex >= globalInputdata.length) {
    return globalInputdata;
  }
  const updatedFields = [];
  const autoSetDefaultOn = null;

  globalInputdata.forEach((gfield, index) => {
    if (index === fieldIndex || fieldId && fieldId == gfield.id) {
      if (gfield.autoSetDefaultOn) {
        autoSetDefaultOn = gfield.autoSetDefaultOn;
      }
      var field = { ...gfield, value };
      updatedFields.push(field);
      if (onFieldChanged) {
        onFieldChanged({ field, index });
      }
    }
    else {
      updatedFields.push(gfield);
    }
  });
  if (autoSetDefaultOn) {
    const matchedFields = globalInputdata.filter(gf => gf.id === autoSetDefaultOn);
    if (matchedFields.length) {
      matchedFields[0].value = value;
    }
  }
  return updatedFields;
};
const copyFieldsToGlobalInputFields = ({ globalInputdata, fieldvalues, onFieldChanged, isEncrypted = false }) => {
  if (!globalInputdata || !globalInputdata.length) {
    return globalInputdata;
  }
  const updatedFields = [];
  globalInputdata.forEach((gfield, index) => {
    let matchedFields = null;
    if (gfield.id) {
      const gfieldId = gfield.id.toLowerCase();
      matchedFields = fieldvalues.filter(f => {
        if (f.id) {
          return f.id.toLowerCase() === gfieldId;
        }
        return false;
      });
    }
    else if (gfield.label) {
      const gfieldLabel = gfield.label.toLowerCase();
      matchedFields = fieldvalues.filter(f => {
        if (f.label) {
          return f.label.toLowerCase() === gfieldLabel;
        }
        return false;
      });
    }
    if (matchedFields && matchedFields.length) {
      const value = isEncrypted ? appdata.decryptContent(matchedFields[0].value) : matchedFields[0].value;
      const field = { ...gfield, value };
      updatedFields.push(field);
      if (onFieldChanged) {
        onFieldChanged({ field, index });
      }
    }
    else {
      updatedFields.push(gfield);
    }
  });
  return updatedFields;
};

export const fillContentEncryptionForm = ({ content, label, setAction, onFieldChanged }) => {
  setAction(action => {

    var fieldvalues = [
      { label: 'Content', id: "content", value: content },
      { label: 'Label', id: "label", value: label }
    ];
    const globalInputdata = copyFieldsToGlobalInputFields({
      fieldvalues,
      globalInputdata: action.globalInputdata,
      onFieldChanged,
      isEncrypted: false
    });
    return { ...action, globalInputdata, actionType: ACT_TYPE.DEVICE_INPUT };
  });
}

export const changeGlobalInputFieldAction = ({ action, globalInputdata, fieldIndex, fieldId, value, onFieldChanged }) => {  
  const newglobalInputdata = changeGlobalInputFields({
    globalInputdata,
    fieldId,
    fieldIndex,
    value,
    onFieldChanged
  });
  const actionType=ACT_TYPE.DEVICE_INPUT;
  if(action.actionType ===ACT_TYPE.EXPORT_FORM_DATA ){
      actionType=ACT_TYPE.EXPORT_FORM_DATA; //TODO:do we need to presever actionType?
  }    
  return { ...action, globalInputdata: newglobalInputdata, actionType};
};

export const onInputAction = (message, action) => {
  if (message.initData) {
    return changeInitDataAction(message.initData, action);
  } else if (message.data) {    
    try {
      return changeGlobalInputFieldAction({
        action,
        globalInputdata: action.globalInputdata,
        fieldIndex: message.data.index,
        fieldId: message.data.fieldId,
        value: message.data.value,
        onFieldChanged: null
      });
    } catch (error) {
      printError({
        notificationMessage:
          'failed to set global input field with received input',
        error
      });
    }
  }
  else {
    console.log("ignored the input message");
  }
  return action;
};

const isInputField = field => field && ((!field.type) || field.type === 'text' || field.type === 'secret');
const isExportFormField= field => field && field.type === 'export-form';
const isImportFormField= field => field && field.type === 'import-form' && field.value;





export const loadingData = {
  actionType: ACT_TYPE.LOADING,
  title: deviceInputTextConfig.connector.title,
  message: deviceInputTextConfig.connector.connectMessage,
};

export const switchToDeviceInput = config => initDataActionForDeviceInput(config.initData);

const initDataActionForDeviceInput = (initData) => {
        if (!initData || (!initData.form) || (!initData.form.fields) || (!initData.form.fields.length)) {
              return { actionType: ACT_TYPE.ERROR, message:'initData/form/fields is missing' };
        }

        var autofill = domainForms.getAutoFillData(initData);
        
        var showHideSecret = null;
        globalInputdata = initData.form.fields;
        let exportFormField = null;
        let importFormField =null;

        globalInputdata.forEach(dataitem => {
          if (isInputField(dataitem)) {
            if (!dataitem.value) {
              if (typeof dataitem.value === 'number') {
                dataitem.value = 0;
              }
              else {
                dataitem.value = "";
              }
            }
            if (dataitem.type === 'secret') {
              showHideSecret = {
                show: false
              }
            }
          }
          else if(isExportFormField(dataitem)){
            exportFormField=dataitem;      
          }
          else if(isImportFormField(dataitem)){
            importFormField=dataitem;
          }
        });

        let actionType = ACT_TYPE.DEVICE_INPUT;
        if(importFormField){
          actionType=ACT_TYPE.IMPORT_FORM_DATA;
        }
        return {
          globalInputdata,
          showHideSecret,
          autofill,
          initData,
          actionType,
          exportFormField,
          importFormField
        };
};

const countProcessableFields = initData => {
  let encryptFieldCount = 0;
  let decryptFieldCount = 0; 
  
  initData.form.fields.forEach(f => {
    if (!f) {
      console.warn("enpty field is encountered ");
    }
    else if (f.value && f.type === 'encrypt') {
      encryptFieldCount++;
    }
    else if (f.value && f.type === 'decrypt') {
      decryptFieldCount++;
    }        
  });
  return { encryptFieldCount, decryptFieldCount };
}

export const initDataAction = (initData) => {
  const buildErrorAction = message => {
    return { ...loadingData, actionType: ACT_TYPE.ERROR, message };
  };
  if (!initData.form) {
    return buildErrorAction('Empty form received');
  }
  else if (!initData.form.fields || !initData.form.fields.length) {
    return buildErrorAction('form fields missing');
  }
  else if (initData.form.fields.length > MAX_NUMBER_OF_FIELDS) {
    return buildErrorAction('The number of form fields exceeds the allowed limit');
  }  
  const { encryptFieldCount, decryptFieldCount} = countProcessableFields(initData);  
  if (encryptFieldCount) {
    return encryptDecryptData.initDataActionForEncryption(initData);
  }
  else if (decryptFieldCount) {
    return encryptDecryptData.initDataActionForDecryption(initData);
  }  
  else {
    return initDataActionForDeviceInput(initData);
  }
};

const changeInitDataAction = (initData, action) => {
  var formData = getFormDataForSaving(action);
  if (formData) {
    return {
      ...action,
      actionType: ACT_TYPE.SAVE_FORM_DATA,
      formData,
      nextInitData: initData
    };
  }
  if (!initData.dataType) {
    initData.dataType = 'form';
  }
  if (!initData.action) {
    initData.action = 'input';
  }  
  return initDataAction(initData, action);  
};

const buildFormDataFromInput = (initData, globalInputdata) => {
  if (!initData) {
    return null;
  }
  if (!initData.form) {
    return null;
  }
  var formId = initData.form.id;
  if (!formId) {
    return null;
  }
  if (!globalInputdata) {
    return null;
  }
  if (initData.dataType !== 'form') {
    return null;
  }
  var formLabel = initData.form.label;
  var formData = {
    id: formId,
    label: formLabel,
    fields: []
  };
  globalInputdata.forEach(f => {
    if (f && f.id) {
      if ((!f.type) || f.type === "text" || f.type === 'secret') {
        var field = {
          id: f.id,
          value: f.value,
          label: f.label,
          nLines: f.nLines
        };
        formData.fields.push(field);
      }
    }
  });
  if (formData.fields.length > 0) {
    return formData;
  }
  else {
    return null;
  }
};

export const getFormDataForSaving = action => {
  if (formDataUtil.isInitDataFormData(action.initData)) {
    var formData = buildFormDataFromInput(action.initData, action.globalInputdata);
    if (formDataUtil.shouldSaveFormData(formData, appdata)) {
      return formData;
    }
  }
  return null;
};




export const saveFormData = action => {
  var formData = getFormDataForSaving(action);
  if (formData) {
    var formDataToSave = formDataUtil.convertToStoreFormData(formData, appdata);
    appdata.mergeFormData(formDataToSave);
    return formDataToSave;
  }
  return null;
};






export const renderFormDataList = ({ action, setAction, dataRange, messageTimerHandler, onFieldChanged }) => {

  const toDeviceInput = () => setAction({ ...action, actionType: ACT_TYPE.DEVICE_INPUT });

  const formDataList = dataRange === 'autofill' ? action.autofill.formDataList : appdata.getSavedFormContent();

  let menuItems = [{
    menu: menusConfig.back.menu,
    onPress: toDeviceInput
  }];

  const formDataStorage = {
    getSavedFormContent: () => formDataList,
    getAllLabels: () => formDataUtil.getAllLabelsFromFormDataList(formDataList)
  };

  const autoFillWithFormData = formContent => {
    try {
      const globalInputdata = copyFieldsToGlobalInputFields({
        fieldvalues: formContent.fields,
        globalInputdata: action.globalInputdata,
        onFieldChanged,
        isEncrypted: true
      });
      setAction({ ...action, globalInputdata, actionType: ACT_TYPE.DEVICE_INPUT });
    } catch (error) {
      printError({
        notificationMessage: deviceInputTextConfig.decryptFailed.message,
        error,
        setAction,
        messageTimerHandler
      });

    }
  };



  let displayFormDataProperties = {
    title: deviceInputTextConfig.formData.title,
    menuItems: [
      {
        menu: menusConfig.selectFormData.menu,
        onSelect: autoFillWithFormData
      }
    ]
  };


  return (
    <ManageFormData
      menuItems={menuItems}
      formDataStorage={formDataStorage}
      title={deviceInputTextConfig.formData.title}
      displayFormDataProperties={displayFormDataProperties}
      onBack={toDeviceInput}
    />
  );
};



export const renderSaveFormData = ({ action, setAction }) => {

  const gotoNextStep = () => {
    if (action.nextInitData) {
      const initData = action.nextInitData;
      setAction(initDataAction(initData, action));
    } else {
      setAction(sessionEndAction(action));
    }
  };
  var menuItems = [
    { menu: menusConfig.discard.menu, onPress: () => gotoNextStep() },
    {
      menu: menusConfig.save.menu, onPress: () => {
        saveFormData(action);
        gotoNextStep();
      }
    }];

  var title = deviceInputTextConfig.saveFormData.title;
  var content1 = deviceInputTextConfig.saveFormData.content1;
  var content2 = deviceInputTextConfig.saveFormData.content2;

  if (action.nextInitData) {
    title = deviceInputTextConfig.nextDataTransfer.title;
    content1 = deviceInputTextConfig.nextDataTransfer.content1;
    content2 = deviceInputTextConfig.nextDataTransfer.content2;
  }

  return (
    <MessageWithFormData
      title={title}
      formData={action.formData}
      menuItems={menuItems}
      content1={content1}
      content2={content2}
    />
  );
};









export const renderSessionEnd = ({ menuItems }) => {
  return (<ViewWithTabMenu
    menuItems={menuItems}
    title={deviceInputTextConfig.sessionEnded.title}
    message={deviceInputTextConfig.sessionEnded.content} />);
};


export const renderEncryptSecret = ({ action, setAction, onFieldChanged, messageTimerHandler }) => {
  const toDeviceInput = () => setAction({ ...action, actionType: ACT_TYPE.DEVICE_INPUT });

  let menuItems = [{ menu: menusConfig.back.menu, onPress: toDeviceInput }];

  const onEncryptedContent = (content, label) => {
    console.log("--------content:" + content + " label:" + label);
    try {
      fillContentEncryptionForm({ content, label, setAction, onFieldChanged });
    } catch (error) {
      printError({
        notificationMessage: deviceInputTextConfig.decryptFailed.message,
        error,
        setAction,
        messageTimerHandler
      });
    }
  };

  return (
    <EncryptContentView
      menuItems={menuItems}
      title={encryptedQrCodeTextConfig.fillContent.title}
      help={encryptedQrCodeTextConfig.fillContent.content}
      onContentEncrypted={onEncryptedContent}
    />
  );
};
