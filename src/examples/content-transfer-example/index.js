import React, { useReducer, useRef, useEffect } from "react";
import { createMessageConnector } from 'global-input-message';

import * as actions from './actions';


import Initializing from './Initializing';
import WaitingForConnection from './WaitingForMobile';
import SessionFinished from './SessionFinished';
import MobileConnected from './MobileConnected';
import DisplayError from './DisplayError';


export default () => {
  const [state, dispatch] = useReducer(actions.reducer, actions.initialState);
  const mobile = useRef(null);

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
        actions.waitForMobile({ dispatch, connectionCode });
      }
    };
    const mobileConfig = buildMobileConfig({ dispatch, disconnect, waitForMobileToConnect });

    mobile.current.connect(mobileConfig);



    return () => {
      disconnect();
    }
  }, []);

  const { ActionType } = actions;

  switch (state.type) {
    
    
    case ActionType.SESSION_FINISHED:
      return (<SessionFinished />);
    case ActionType.WAITING_FOR_MOBILE:
      return (<WaitingForConnection {...state} />);
    case ActionType.MOBILE_CONNECTED:
    case ActionType.SET_CONTENT:
        return (<MobileConnected dispatch={dispatch} {...state} mobile={mobile.current}/>);      
    case ActionType.SET_ERROR_MESSAGE:
        return (<DisplayError {...state}/>);
    default:
      console.log("----type:"+state.type);
      return <Initializing />  


  }

};

const buildMobileConfig = ({ dispatch, disconnect, waitForMobileToConnect }) => {
  const onSenderConnected = (sender, senders) => {
    actions.mobileConnected({ dispatch });
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
        title: "Content Transfer",
        fields: [{
          label: "Content",
          id: "content",
          value: "",
          nLines: 10,
          operations: {
            onInput: content => actions.setContent({ dispatch, content })
          }
        },{
          type:"info",
          value:"You may paste content to transfer it to the connected application"
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
    onSenderDisconnected
  };


};