import React, {useState } from "react";

import useContentTransfer from './useContentTransfer';


import { PageContainer,Title, P, A,TextAreaBox, TextButton} from './app-layout';

export default () => {
  const {content, setContent,connectionMessage,WhenConnected,WhenDisconnected,setFieldValueById} = useContentTransfer();

  const copyToClipboard = () => {
    const el=document.getElementById("textContent") as HTMLInputElement;

    if(el){
      el.select();
    } 
    document.execCommand("Copy");
  }
      return (
        <PageContainer>          
            <Title>Content Transfer Application</Title>                        
            {connectionMessage}
            <WhenDisconnected>
               <P>Disconnected, reload the page to try again</P>              
            </WhenDisconnected>                                 
                <TextAreaBox id="textContent" onChange={(evt:any)=>{
                    console.log("--0----::::::");
                    setContent(evt.target.value);                    
                }} value={content} />
                <TextButton label="Copy" onClick={copyToClipboard} />              
              
            
            <P>This example application (with its <A href="https://github.com/global-input/content-transfer-example">source code</A>) demonstrate how you can use the <a href="https://github.com/global-input/global-input-react">extension library</a> to provide <A href="https://globalinput.co.uk/global-input-app/mobile-content-transfer">Mobile Content Transfer</A> functionality on a multi-device environment.
            Because of its simplicity, you may consider it as an "Hello World" example of the Mobile Integration offered by Global Input App.            
            </P>
        </PageContainer>
      );    

};
