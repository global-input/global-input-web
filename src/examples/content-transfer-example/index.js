import React, { useReducer, useState, useRef, useEffect } from "react";
import QRCode from "qrcode.react";
import useGlobalInputApp, { MobileState } from './useGlobalInputApp';
import PageContainer from './generic-example-container';
import { Title, P, ContentContainer, TextAreaBox, TextButton, ErrorMessage } from './basic-app-layout';

const contentElementID = "content";

export default () => {
  const [content, setContent] = useState('');
  const initData = {
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
          onInput: setContent
        }
      }, {
        type: "info",
        value: "You may paste content to transfer it to the connected application"
      }]
    },
  };
  const { mobile, mobileState, connectionCode, errorMessage } = useGlobalInputApp({initData});
  console.log("--------useMobile----:"+mobile);

  const copyToClipboard = () => {
    document.getElementById(contentElementID).select();
    document.execCommand("Copy");
  }

  switch (mobileState) {

    case MobileState.MOBILE_DISCONNECTED:
      return (
        <PageContainer>
          <Title>Session Finished</Title>
          <P>Global Input App has terminated the connection. You may reload the page to start again.</P>
        </PageContainer>
      )
    case MobileState.WAITING_FOR_MOBILE:
      return (
        <PageContainer>
          <QRCode value={connectionCode} level='H' size={400} />
          <P>Scan with Global Input App</P>
        </PageContainer>
      );
    case MobileState.MOBILE_CONNECTED:
      const onContentChange = evt => {
        setContent(evt.target.value);
        mobile.sendInputMessage(evt.target.value, 0);
      }
      return (
        <PageContainer>
          <ContentContainer>
            <Title>Content Transfer</Title>
            <TextAreaBox id={contentElementID} onChange={onContentChange} value={content} />
            <TextButton label="Copy" onClick={copyToClipboard} />
          </ContentContainer>
          <P>You can paste content to the text box above to transfer it to your mobile.</P>
        </PageContainer>
      );
    case MobileState.ERROR:
      return (
        <PageContainer>
          <Title>Error</Title>
          <P>{errorMessage}</P>
        </PageContainer>
      );
    default:
      return (
        <PageContainer>
          <Title>Wait</Title>
          <P>Initializing...</P>
        </PageContainer>
      );
  }

};
