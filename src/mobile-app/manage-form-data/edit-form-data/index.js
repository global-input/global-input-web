/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

import { manageFormDataTextConfig } from '../../configs';

import ACT_TYPE from './ACT_TYPE.js';



import * as globalInput from './globalinput';

import * as formUtil from './formUtil';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

export default ({ formData, label, updateFormData, createFormData, onBack }) => {
  const globalInputConnector = useRef(null);
  const messageTimerHandler = useRef(null);
  const formIdField = useRef(null);
  const defaultFormId = useRef(null);
  const [data, setData] = useState(formUtil.getInitData({}));

  const onDisconnected = () => globalInput.onDisconnectGlobalInput({ globalInputConnector, setData });

  const onFormFieldChanged = ({ formField, index, value }) => globalInput.changeFormFieldValue({ globalInputConnector, formField, index, value });

  const onInput = (field, index, value) => setData(data => formUtil.changeGlobalInputFieldAction({ data, index, value }));


  const onConnectTransfer = () => globalInput.startConnect({ setData, globalInputConnector, onInput });



  useEffect(() => {
    const data = formUtil.buildInitData({ formData, label });
    if (!data.formData.id) {
      defaultFormId.current = data.formData.id = formUtil.getDefaultFormId();
      formIdField.current.focus();
    }
    setData(data);
    if (!formData) {
      formIdField.current.focus();
    }
    return () => {
      globalInput.disconnect(globalInputConnector);
      if (messageTimerHandler.current) {
        clearTimeout(messageTimerHandler.current);
        messageTimerHandler.current = null;
      }
    };
  }, [formData]);

  switch (data.actionType) {
    case ACT_TYPE.QR_CODE:
      return globalInput.renderDisplayQRCode({ data, setData });
    case ACT_TYPE.NEW_FIELD:
      return formUtil.renderCreateNewField({ data, setData });
    case ACT_TYPE.EDIT:
      const menuItems = formUtil.buildMenu({
        data,
        setData,
        onBack,
        messageTimerHandler,
        onDisconnected,
        onConnectTransfer,
        formIdField,
        formData,
        updateFormData,
        createFormData
      });
      const title = formData ? manageFormDataTextConfig.editForm.title : manageFormDataTextConfig.newForm.title;
      var selectTextOnFocusOnId = data.formData.id === defaultFormId.current;
      return formUtil.renderEditor({ menuItems, data, setData, formIdField, title, selectTextOnFocusOnId, onFormFieldChanged });

  }
};
