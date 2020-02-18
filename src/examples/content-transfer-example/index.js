import React, { useReducer, useState, useRef, useEffect } from "react";

//import {useGlobalInputApp} from 'global-input-react';
import useGlobalInputApp from './useGlobalInputApp';
import PageContainer from './generic-example-container';
import { Title, P, ContentContainer, TextAreaBox, TextButton } from './basic-app-layout';

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
  const { connectionMessage,mobile} = useGlobalInputApp({initData});
  

  const copyToClipboard = () => {
    document.getElementById(contentElementID).select();
    document.execCommand("Copy");
  }

      return (
        <PageContainer>
          <ContentContainer>
            {connectionMessage}
            <Title>Content Transfer</Title>
            <TextAreaBox id={contentElementID} onChange={evt=>{
                setContent(evt.target.value);
                mobile.sendInputMessage(evt.target.value, 0);
            }} value={content} />
            <TextButton label="Copy" onClick={copyToClipboard} />
          </ContentContainer>
          <P>You can paste content to the text box above to transfer it to your mobile.</P>
        </PageContainer>
      );    

};
