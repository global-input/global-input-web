import React from 'react';
import { manageFormDataTextConfig, menusConfig } from '../../configs';
import { createMessageConnector } from '../../global-input-message';
import { appdata } from '../../store';
import { QRCodeView } from '../../qr-code-view';
import ACT_TYPE from './ACT_TYPE';

export const disconnect = globalInputConnector => {
  if (globalInputConnector.current) {
    globalInputConnector.current.disconnect();
    globalInputConnector.current = null;
  }
}
export const onDisconnectGlobalInput = ({ globalInputConnector, setData }) => {
  disconnect(globalInputConnector);
  setData(data => ({ ...data, actionType: ACT_TYPE.EDIT, globalInputState: null }));
}
export const startConnect = ({ setData, globalInputConnector, onInput }) => {

  const onConnected = () =>
    setData(data => {
      var globalInputState = {
        title: manageFormDataTextConfig.qrcode.title.connected,
        codedata: globalInputConnector.current.buildInputCodeData(),
        senders: null
      };
      return { ...data, globalInputState, actionType: ACT_TYPE.QR_CODE };
    });
  const onSenderConnected = (sender, senders) =>
    setData(data => {
      console.log('---sender connected');
      const title = manageFormDataTextConfig.qrcode.title.connected;
      const globalInputState = { ...data.globalInputState, title, senders };
      return { ...data, globalInputState, actionType: ACT_TYPE.EDIT };
    });
  const onSenderDisconnected = (sender, senders) => onDisconnectGlobalInput({ globalInputConnector, setData });

  const onFinishReceived = () => onSenderDisconnected(globalInputConnector, setData);

  const createConnectConfig = formData => {
    const fields = [];
    formData.fields.forEach((field, index) => {
      let formField = {
        label: field.label,
        id: field.id,
        value: field.value,
        nLines: field.nLines,
        operations: {
          onInput: v => onInput(field, index, v)
        }
      };
      if (!formField.label) {
        formField.label = formField.id;
      }
      fields.push(formField);
    });
    fields.push({
      id: 'disconnect',
      label: 'Finish',
      type: 'button',
      operations: {
        onInput: onFinishReceived
      }
    });
    return {
      url: appdata.getProxyURL(),
      apikey: appdata.getApikey(),
      securityGroup: appdata.getSecurityGroup(),
      initData: {
        form: {
          id: formData.id,
          title: formData.id,
          label: formData.label,
          fields
        }
      },
      action: 'input',
      dataType: 'login',
      onSenderConnected,
      onSenderDisconnected,
      onRegistered: () => {
        onConnected();
      }
    };
  };
  disconnect(globalInputConnector);
  globalInputConnector.current = createMessageConnector();
  setData(data => {
    const globalInputState = {
      title: manageFormDataTextConfig.qrcode.title.connecting,
      senders: null
    };
    const connectConfig = createConnectConfig(data.formData);
    globalInputConnector.current.connect(connectConfig);
    console.log('-----connecting.....');
    return { ...data, globalInputState };
  });
};

export const changeFormFieldValue = ({
  globalInputConnector,
  formField,
  index,
  value
}) => {
  if (globalInputConnector.current) {
    globalInputConnector.current.sendInputMessage(value, index);
  }
};

export const renderDisplayQRCode = ({ data, setData }) => {
  const toEditView = () =>
    setData(data => ({ ...data, actionType: ACT_TYPE.EDIT }));

  var menuItems = [{}, { menu: menusConfig.ok.menu, onPress: toEditView }, {}];
  var qrcodeContent = data.globalInputState.codedata;
  return (
    <QRCodeView
      title={data.globalInputState.title}
      qrcodeContent={qrcodeContent}
      help={manageFormDataTextConfig.qrcode.content}
      help2={manageFormDataTextConfig.qrcode.content2}
      menuItems={menuItems}
    />
  );
};
