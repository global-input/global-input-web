import React, {useState, useEffect } from "react";

import {useGlobalInputApp} from 'global-input-react';
import {P} from './app-layout';

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
  const {connectionMessage,WhenDisconnected} = globalInputApp;

  

  const SecondScreenConnection=()=>(
    <>
           {connectionMessage}
            <WhenDisconnected>
               <P>Disconnected, reload the page to try again</P>              
            </WhenDisconnected>  
    </>
  );
  return {content,    
    setContent:content=>{    
        setContent(content);    
        if(globalInputApp.setFieldValueById){
              globalInputApp.setFieldValueById(initData.form.fields[0].id,content);
         }
     },
     SecondScreenConnection
    };
};
