import React, { useReducer, useState, useRef, useEffect } from "react";

import {useGlobalInputApp} from 'global-input-react';


import { PageContainer,Title, P, TextAreaBox, TextButton,QRCodeContainer } from './app-layout';

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
      }]
    },
  };
  const { connectionMessage,mobile} = useGlobalInputApp({initData,renders: { QRCodeContainer } });
  

  const copyToClipboard = () => {
    document.getElementById("textarea").select();
    document.execCommand("Copy");
  }

      return (
        <PageContainer>          
            {connectionMessage}            
            <TextAreaBox id="textarea" onChange={evt=>{
                setContent(evt.target.value);
                mobile.sendInputMessage(evt.target.value, 0);
            }} value={content} />
            <TextButton label="Copy" onClick={copyToClipboard} />
          
          <P>Paste content into the text box above to transfer to your mobile.</P>
        </PageContainer>
      );    

};
