import React, {useState, useEffect } from "react";

import {useGlobalInputApp} from 'global-input-react';


import { PageContainer,Title, P, A,TextAreaBox, TextButton} from './app-layout';


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

export default () => {
  const [content, setContent] = useState('');  

  const onFieldChanged=({field})=>{
    if(field.id===initData.form.fields[0].id){
        setContent(field.value);
    }
  }
  const globalInputApp = useGlobalInputApp({initData,onFieldChanged}); 
  
  const copyToClipboard = () => {
    const el=document.getElementById("textContent") as HTMLInputElement;

    if(el){
      el.select();
    } 
    document.execCommand("Copy");
  }
  
    const {connectionMessage,WhenConnected,WhenDisconnected}=globalInputApp;
      return (
        <PageContainer>          
            <Title>Content Transfer Application</Title>                        
            {connectionMessage}
            <WhenConnected>
                <TextAreaBox id="textContent" onChange={(evt:any)=>{
                    setContent(evt.target.value);
                    const {setFieldValueById}=globalInputApp;
                    setFieldValueById(initData.form.fields[0].id,evt.target.value);
                }} value={content} />
                <TextButton label="Copy" onClick={copyToClipboard} />              
              <P>Paste content into the text box above to transfer to your mobile.</P>
            </WhenConnected>
            <WhenDisconnected>
               <P>Disconnected, reload the page to try again</P>
               <TextAreaBox id="textContent" value={content} onChange={()=>{}}/>
                <TextButton label="Copy" onClick={copyToClipboard} />
            </WhenDisconnected>                     
            <P>This example application (with its <A href="https://github.com/global-input/content-transfer-example">source code</A>) demonstrate how you can use the <a href="https://github.com/global-input/global-input-react">extension library</a> to provide <A href="https://globalinput.co.uk/global-input-app/mobile-content-transfer">Mobile Content Transfer</A> functionality on a multi-device environment.
            Because of its simplicity, you may consider it as an "Hello World" example of the Mobile Integration offered by Global Input App.            
            </P>
        </PageContainer>
      );    

};
