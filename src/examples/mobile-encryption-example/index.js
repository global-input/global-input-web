import React, { useReducer, useState, useRef, useEffect } from 'react';
import { createMessageConnector } from 'global-input-message'; ////global-input-message////

import * as actions from './actions';
import DisplayConnecting from './DisplayConnecting';
import DisplayErrorMessage from './DisplayErrorMessage';
import DisplayConnectionCode from './DisplayConnectionCode';
import DisplayServiceSelection from './DisplayServiceSelection';
import DisplaySessionDisconnected from './DisplaySessionDisconnected';


import DisplayQRCodeServiceContentLabel from './qr-code-service/DisplayQRCodeServiceContentLabel';
import DisplayGenerateQRCode from './qr-code-service/DisplayGenerateQRCode';

import DisplayAskEncriptionContent from './encryption-service/DisplayAskEncryptionContent';
import DisplayEncryptingContent from './encryption-service/DisplayEncryptingContent';

import DisplayAskDecryptionContent from './decryption-service/DisplayAskDecryptionContent';
import DisplayDecryptingContent from './decryption-service/DisplayDecryptingContent';
import DecryptionFailed from './decryption-service/DecryptionFailed';

export default () => {

      const [state, dispatch] = useReducer(actions.reducer, actions.initialState);
      const mobile = useRef(null);
      const mobileConfig = useRef(null);
      const backToServiceSelection = () => {
            console.log("back to service selection");
            actions.selectService({ dispatch });
            mobile.current.sendInitData(mobileConfig.current.initData);
      };

      useEffect(() => {
            mobile.current = createMessageConnector();
            const disconnect = () => {
                  if (!mobile.current) {
                        return;
                  }
                  mobile.current.disconnect();
                  mobile.current = null;
            };
            const waitForMobileToConnect = () => {
                  if (mobile.current) {
                        const connectionCode = mobile.current.buildInputCodeData();
                        console.log("[[" + connectionCode + "]]");
                        actions.displayQRCode({ dispatch, connectionCode });
                  }
            };
            mobileConfig.current = buildMobileConfig({ dispatch, disconnect, waitForMobileToConnect });

            mobile.current.connect(mobileConfig.current);



            return () => {
                  disconnect();
            }
      }, []);
      const { ActionType } = actions;

      switch (state.type) {
            
            case ActionType.CONNECTING:
                  
                  if (state.errorMessage) {
                        return (<DisplayErrorMessage {...state} />);
                  }
                  else {
                        return (<DisplayConnecting {...state} />);
                  }
            case ActionType.DISPLAY_CODE:
                  return (<DisplayConnectionCode {...state} />);
            case ActionType.SELECT_SERVICE:
                  return (<DisplayServiceSelection {...state} />);
            case ActionType.QRCODE_SERVICE.INIT:
            case ActionType.QRCODE_SERVICE.SET_CONTENT:
            case ActionType.QRCODE_SERVICE.SET_LABEL:
                  return (<DisplayQRCodeServiceContentLabel
                        dispatch={dispatch}
                        backToServiceSelection={backToServiceSelection}
                        mobile={mobile.current}
                        {...actions.qrCodeService.getData(state)} />);
            case ActionType.QRCODE_SERVICE.GENERATE_QR_CODE:
            case ActionType.QRCODE_SERVICE.SET_LEVEL:
            case ActionType.QRCODE_SERVICE.SET_SIZE:
                  return (<DisplayGenerateQRCode dispatch={dispatch}
                        mobile={mobile.current}
                        {...actions.qrCodeService.getData(state)} />)
            case ActionType.SESSION_FINISHED:
                  return (<DisplaySessionDisconnected />);

            case ActionType.ENCRYPTION_SERVICE.INIT:
            case ActionType.ENCRYPTION_SERVICE.SET_CONTENT:
            case ActionType.ENCRYPTION_SERVICE.SET_ERROR_MESSAGE:
                  return (
                        <DisplayAskEncriptionContent
                              dispatch={dispatch}
                              backToServiceSelection={backToServiceSelection}
                              mobile={mobile.current}
                              {...actions.encryptionService.getData(state)} />
                  );

            case ActionType.ENCRYPTION_SERVICE.ENCRYPT:
            case ActionType.ENCRYPTION_SERVICE.SET_ENCRYPTED_CONTENT:

                  return (<DisplayEncryptingContent
                        dispatch={dispatch}
                        mobile={mobile.current}
                        {...actions.encryptionService.getData(state)} />);

            case ActionType.DECRYPTION_SERVICE.INIT:
            case ActionType.DECRYPTION_SERVICE.SET_CONTENT:
                  return (
                        <DisplayAskDecryptionContent
                              dispatch={dispatch}
                              mobile={mobile.current}
                              backToServiceSelection={backToServiceSelection}
                              {...actions.decryptionService.getData(state)} />
                  );

            case ActionType.DECRYPTION_SERVICE.DECRYPT:
            case ActionType.DECRYPTION_SERVICE.SET_DECRYPTED_CONTENT:

                  return (<DisplayDecryptingContent
                        dispatch={dispatch}
                        mobile={mobile.current}
                        {...actions.decryptionService.getData(state)} />);
            
            case ActionType.DECRYPTION_SERVICE.FAILED:
                  return (<DecryptionFailed mobile={mobile.current} 
                        dispatch={dispatch}
                        {...actions.decryptionService.getData(state)}/>);


            default: return (<DisplayErrorMessage {...state} />);
      }
};




const buildMobileConfig = ({ dispatch, disconnect, waitForMobileToConnect }) => {
      const onSenderConnected = (sender, senders) => {
            actions.selectService({ dispatch });
      };
      const onSenderDisconnected = (sender, senders) => {
            disconnect();
            actions.onFinish({ dispatch });
      };
      const onError = errorMessage => {
            actions.setErrorMessage({ dispatch, errorMessage });
      };
      return {
            initData: {
                  action: "input",
                  dataType: "form",
                  form: {
                        title: "Mobile Encryption Services",
                        fields: [{
                              type: "button",
                              label: "Encrypted QR Code",
                              icon: "qrcode",
                              viewId: "row1",
                              operations: { onInput: () => actions.qrCodeService.init({ dispatch }) }

                        }, {
                              type: "button",
                              label: "Encrypt",
                              icon: "encrypt",
                              viewId: "foot",
                              operations: { onInput: () => actions.encryptionService.init({ dispatch }) }
                        }, {
                              type: "button",
                              icon: "decrypt",
                              label: "Decrypt",
                              viewId: "foot",
                              operations: { onInput: () => actions.decryptionService.init({ dispatch }) }
                        }]
                  },
            },
            onRegistered: next => {
                  next();
                  waitForMobileToConnect();
            },
            onRegisterFailed: function (registeredMessage) {
                  onError(registeredMessage);
            },
            onSenderConnected,
            onSenderDisconnected,
            apikey: "k7jc3QcMPKEXGW5UC",
            securityGroup: "1CNbWCFpsbmRQuKdd",
            aes: "dfhrhahfhhfsdhlnnnlkfjlihjc3QcMPKEXGW5UC",
            client: "thisShouldBeUniqueId"
            //url:"http://localhost:1337"
      };


};