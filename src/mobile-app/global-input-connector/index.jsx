import React, { useState, useEffect, useRef } from 'react';
import { styles } from './styles';
import ViewWithTabMenu from "../components/menu/ViewWithTabMenu";
import DisplayBlockText from "../components/display-text/DisplayBlockText";
import {DeviceInputView} from './device-input-view';
import {ImportFormData} from './import-form-data';
import ExportEncryptedEncryptionKey from './export-encrypted-encryption-key';
import ACT_TYPE from './ACT_TYPE';
import * as globalInput from './globalInput';
import * as formData from './formData';
import * as encryptDecryptData from './encrypt-decrypt-data';
import settingsTextConfig from '../configs/settingsTextConfig';



const compatibility = 1;

const GlobalInputConnector = ({ codedata, toCameraView, menuItems }) => {
  const messageTimerHandler = useRef(null);
  const globalInputConnector = useRef(null);
  const [action, setAction] = useState(formData.loadingData);

  useEffect(() => {
    const onDisconnected = () => setAction(formData.finishSessionAction);
    const onInput = (message) => {
      setAction((action) => {
        const newAction = formData.onInputAction(message, action);
        return newAction;
      });
    };

    const onDeviceConnected = (initData) =>
      setAction((action) => formData.initDataAction(initData, action));

    if (codedata.protocolVersion && codedata.protocolVersion > compatibility) {
      setAction((action) => ({
        ...action,
        actionType: ACT_TYPE.ERROR,
        title: 'Version Incompatible',
        message: 'Please update your Global Input App and try again',
      }));
    } else {
      globalInput.connect({
        globalInputConnector,
        codedata,
        setAction,
        onDisconnected,
        onInput,
        onDeviceConnected,
      });
    }
    return () => globalInput.disconnect({ globalInputConnector });
  }, [codedata]);

  const disconnectFromDevice = () =>
    globalInput.disconnect({ globalInputConnector });

  const getGlobalInputParingData = () =>
    globalInput.getPairingData({ globalInputConnector });

  const sendFieldToDevice = ({ field, index }) =>
    globalInput.sendFieldToDevice({ globalInputConnector, field, index });

  const fillContentEncryptionForm = (content, label) =>
    formData.fillContentEncryptionForm({
      content,
      label,
      setAction,
      onFieldChanged: sendFieldToDevice,
    });

  const onDisconnect = () => {    
    disconnectFromDevice();
    setAction(formData.sessionEndAction(action));
  };

  const renderExportEncryptionKey = () => {
    return (
      <ExportEncryptedEncryptionKey
        onCancel={toDeviceInput}
        onCompleted={fillContentEncryptionForm}
      />
    );
  };

  const switchToDeviceInput = (config) =>
    setAction(formData.switchToDeviceInput(config));

  const toDeviceInput = () =>
    setAction({ ...action, actionType: ACT_TYPE.DEVICE_INPUT });

  const onGlobalInputDataChanged = (value, fieldIndex) => {
    try {
      setAction((action) =>
        formData.changeGlobalInputFieldAction({
          action,
          globalInputdata: action.globalInputdata,
          fieldIndex,
          fieldId: action.globalInputdata[fieldIndex].id,
          value,
          onFieldChanged: sendFieldToDevice,
        })
      );
    } catch (error) {
      formData.printError({
        notificationMessage: 'Failed to set global input field',
        error,
        setAction,
        messageTimerHandler,
      });
    }
  };

  const displayNotificationMessage = (notificationMessage) => {
    formData.displayNotificationMessage({
      messageTimerHandler,
      notificationMessage,
      setAction,
    });
  };

  const onSaveFormData = () => {
    if (formData.saveFormData(action)) {
      displayNotificationMessage('Data saved');
    }
  };

  const onPairingData = () => {
    try {
      fillContentEncryptionForm({
        content: getGlobalInputParingData(),
        label: settingsTextConfig.serviceData.title,
        setAction,
        onFieldChanged: sendFieldToDevice,
      });
    } catch (error) {
      formData.printError({
        notificationMessage: 'Failed to retrieve the settings data',
        error,
        setAction,
        messageTimerHandler,
      });
    }
  };

  const formDataToSave = formData.getFormDataForSaving(action);

  switch (action.actionType) {
    case ACT_TYPE.ERROR:
      return (
        <ViewWithTabMenu menuItems={menuItems} title="Error">
          <div style={styles.contentCenter}>
            <DisplayBlockText title={action.title} content={action.message} />
          </div>
        </ViewWithTabMenu>
      );

    case ACT_TYPE.SESSION_END:
      return formData.renderSessionEnd({ menuItems });

    case ACT_TYPE.MATCHED_FORMS_DATA:
      return formData.renderFormDataList({
        action,
        setAction,
        dataRange: 'autofill',
        messageTimerHandler,
        onFieldChanged: sendFieldToDevice,
      });

    case ACT_TYPE.ALL_FORMS_DATA:
      return formData.renderFormDataList({
        action,
        setAction,
        dataRange: 'all',
        messageTimerHandler,
        onFieldChanged: sendFieldToDevice,
      });

    case ACT_TYPE.SAVE_FORM_DATA:
      return formData.renderSaveFormData({ action, setAction });

    case ACT_TYPE.ENCRYPT_SECRET:
      return formData.renderEncryptSecret({
        action,
        setAction,
        onFieldChanged: sendFieldToDevice,
        messageTimerHandler,
      });

    case ACT_TYPE.MASTER_KEY:
      return renderExportEncryptionKey();

    case ACT_TYPE.DEVICE_INPUT:
      return (
        <DeviceInputView
          action={action}
          setAction={setAction}
          onFieldChanged={sendFieldToDevice}
          onDisconnect={onDisconnect}
          formDataToSave={formDataToSave}
          onGlobalInputDataChanged={onGlobalInputDataChanged}
          appMenu={menuItems}
          displayNotificationMessage={displayNotificationMessage}
          onPairingData={onPairingData}
          onSaveFormData={onSaveFormData}
        />
      );

    case ACT_TYPE.IMPORT_FORM_DATA:
      return (
        <ImportFormData
          action={action}
          setAction={setAction}
          onFinish={toDeviceInput}
        />
      );

    case ACT_TYPE.ENCRYPT_SELECT_KEY:
      return encryptDecryptData.renderEncryptSelectKey({
        action,
        setAction,
        onDisconnect,
      });

    case ACT_TYPE.DECRYPT_SELECT_KEY:
      return encryptDecryptData.renderDecryptSelectKey({
        action,
        setAction,
        onDisconnect,
      });

    case ACT_TYPE.ENCRYPT_SEND_RESULT:
      return encryptDecryptData.renderEncryptSendResult({
        action,
        setAction,
        onDisconnect,
        sendFieldToDevice,
        onFinish: switchToDeviceInput,
      });

    case ACT_TYPE.DECRYPT_SEND_RESULT:
      return encryptDecryptData.renderDecryptSendResult({
        action,
        setAction,
        onDisconnect,
        sendFieldToDevice,
        onFinish: switchToDeviceInput,
      });

    case ACT_TYPE.LOADING:
      return (
        <ViewWithTabMenu menuItems={menuItems} title="Wait">
          <div style={styles.contentCenter}>
            <DisplayBlockText title={action.title} content={action.message} />
          </div>
        </ViewWithTabMenu>
      );

    default:
      return (
        <ViewWithTabMenu menuItems={menuItems} title="Unknown Data">
          <div style={styles.contentCenter}>
            <DisplayBlockText
              title="Data Error"
              content="The device application connected has sent configuration data that your Global Input App could not understand. You may need to update your app to connect to the device application."
            />
          </div>
        </ViewWithTabMenu>
      );
  }
};

export default GlobalInputConnector;