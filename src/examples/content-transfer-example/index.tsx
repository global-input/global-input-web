import React, {useState } from "react";

import useSecondScreen from './useSecondScreen';


import { PageContainer,Title, P, A,TextAreaBox, TextButton} from './app-layout';

export default () => {
  const {content, setContent,SecondScreenConnection} = useSecondScreen();

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
            <SecondScreenConnection/>            
                <TextAreaBox id="textContent" onChange={(evt:any)=>{                    
                    setContent(evt.target.value);                    
                }} value={content} />
                <TextButton label="Copy" onClick={copyToClipboard} />              
              
            
            <P>This example application (with its <A href="https://github.com/global-input/content-transfer-example">source code</A>) demonstrate how you can use the <a href="https://github.com/global-input/global-input-react">extension library</a> to provide <A href="https://globalinput.co.uk/global-input-app/mobile-content-transfer">Mobile Content Transfer</A> functionality on a multi-device environment.
            Because of its simplicity, you may consider it as an "Hello World" example of the Mobile Integration offered by Global Input App.            
            </P>
        </PageContainer>
      );    

};
