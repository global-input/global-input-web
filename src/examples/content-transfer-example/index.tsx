import React, {useState } from "react";

import {useGlobalInputApp} from 'global-input-react';


import { PageContainer,Title, P, A,TextAreaBox, TextButton} from './app-layout';


const contentField={
  id: "content",
  label: "Content",      
  value: "",
  nLines: 10      
};
const initData = {
  action: "input",
  dataType: "form",
  form: {
    title: "Content Transfer",
    fields: [contentField,{
      id:"info",
      type:"info",
      value:"You may paste content in the text box above to transfer it into the connected application."
    }]
  },
};

export default () => {
  const [content, setContent] = useState(''); 
  const mobile = useGlobalInputApp({initData});  


  const copyToClipboard = () => {
    const el=document.getElementById("textContent") as HTMLInputElement;

    if(el){
      el.select();
    } 
    document.execCommand("Copy");
  }
  mobile.setOnchange(({field})=>{
    switch(field.id){
        case contentField.id:
          setContent(field.value as string);
          break;     
    }    
  });
      return (
        <PageContainer>          
            <Title>Content Transfer Application</Title>                        
            <mobile.ConnectQR/>            
              {mobile.isConnected && (
                <>
                <TextAreaBox id="textContent" onChange={(evt:any)=>{                    
                    setContent(evt.target.value);
                    mobile.sendValue(contentField.id,evt.target.value);
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
