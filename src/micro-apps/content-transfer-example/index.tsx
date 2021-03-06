import React, { useState } from "react";
import { useHistory } from 'react-router-dom'; ////website
/*
import { useGlobalInputApp,ConnectQR } from 'global-input-react';
*/
import { useMobile,ConnectWidget } from '../../mobile';

import { PageContainer, Title, P, A, TextAreaBox, TextButton } from './app-layout';
import * as mobileUI from '../../micro-apps/mobile-ui'; ////website

const App: React.FC = () => {
  const [content, setContent] = useState('');
  const history = useHistory();////website
/*
  const mobile = useGlobalInputApp({ initData });
*/
 const mobile = useMobile(initData, true);
  mobile.setOnchange(({ field }) => {
    switch (field.id) {
      case FIELDS.contentField.id:
        setContent(field.value as string);
        break;
      default:
      mobileUI.onFieldChange(field, history); ////website

    }
  });

  const copyToClipboard = () => {
    const el = document.getElementById("textContent") as HTMLInputElement;
    if (el) {
      el.select();
    }
    document.execCommand("Copy");
  }
const ConnectQR=ConnectWidget;
  return (
    <PageContainer>
      <Title>Content Transfer Application</Title>
      <ConnectQR mobile={mobile}/>
      {mobile.isError && (<P>{mobile.errorMessage}</P>)}
      {mobile.isConnectionDenied && (<P>You can only use one mobile app per session. Disconnect to start a new session.</P>)}
      {mobile.isConnected && (
        <>
          <TextAreaBox id="textContent" onChange={(evt: any) => {
            setContent(evt.target.value);
            mobile.sendValue(FIELDS.contentField.id, evt.target.value);
          }} value={content} />
          <TextButton label="Copy" onClick={copyToClipboard} />
        </>
      )}

      <P>This example application (with its <A href="https://github.com/global-input/content-transfer-example">source code</A>) demonstrate how you can use the <a href="https://github.com/global-input/global-input-react">extension library</a> to provide <A href="https://globalinput.co.uk/global-input-app/mobile-content-transfer">Mobile Content Transfer</A> functionality on a multi-device environment.
            Because of its simplicity, you may consider it as an "Hello World" example of the Mobile Integration offered by Global Input App.
            </P>
    </PageContainer>
  );

};

const FIELDS = {
  contentField: {
    id: "content",
    label: "Content",
    value: "",
    nLines: 10
  },
  info: {
    id: "info",
    type: "info",
    value: "You may paste content in the text box above to transfer it into the connected application."
  }
};
mobileUI.add(FIELDS);////website
const initData = {
  id: 'content-transfer-example',
  form: {
    title: "Content Transfer",
    fields: Object.values(FIELDS)
  }
};

export default App;