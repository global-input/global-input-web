import React, {useState, useEffect } from "react";

import {useGlobalInputApp} from 'global-input-react';


import { PageContainer,Title, P, A,TextAreaBox, TextButton} from './app-layout';

export default () => {
  const [content, setContent] = useState('');  
  const globalInputApp = useGlobalInputApp({initData}); 

  const copyToClipboard = () => {
    document.getElementById("textContent").select();
    document.execCommand("Copy");
  }
  useEffect(()=>{
      const {field}=globalInputApp;
      if(field && field.id===initData.form.fields[0].id){
        setContent(field.value);
      }

  },[globalInputApp.field])

    const {connectionMessage,WhenConnected,WhenDisconnected}=globalInputApp;
      return (
        <PageContainer>          
            <Title>Content Transfer Application</Title>                        
            {connectionMessage}
            <WhenConnected>
                <TextAreaBox id="textContent" onChange={evt=>{
                    setContent(evt.target.value);
                    const {setFieldValueById}=globalInputApp;
                    setFieldValueById(initData.form.fields[0].id,evt.target.value);
                }} value={content} />
                <TextButton label="Copy" onClick={copyToClipboard} />              
              <P>Paste content into the text box above to transfer to your mobile.</P>
            </WhenConnected>
            <WhenDisconnected>
               <P>Disconnected, reload the page to try again</P>
               <TextAreaBox id="textContent" readOnly={true} value={content} />
                <TextButton label="Copy" onClick={copyToClipboard} />
            </WhenDisconnected>                     
            <P>This is an <a href="https://globalinput.co.uk/global-input-app/second-screen-experience">example application</a> demonstrating how web applications can use the <a href="https://github.com/global-input/global-input-react">Global Input App library</a> to implement <A href="https://globalinput.co.uk/global-input-app/mobile-content-transfer">mobile content transfer.</A> 
            Its source code is available on <A href="https://github.com/global-input/content-transfer-example">GitHub</A></P>  
        </PageContainer>
      );    

};
const initData = {
  action: "input",
  dataType: "form",
  form: {
    title: "Content Transfer",
    fields: [{
      label: "Content",
      id: "content",
      value: "",
      nLines: 10      
    },{
      id:"info",
      type:"info",
      value:"You may paste content in the text box above to transfer it into the connected application."
    }]
  },
};