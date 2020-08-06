import React, {useState } from "react";

import {useGlobalInputApp} from 'global-input-react';


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
  const [content, changeContent] = useState(''); 
  const onFieldChanged=({field})=>{
    if(field.id===initData.form.fields[0].id){
        changeContent(field.value);
    }
  }
  const globalInputApp = useGlobalInputApp({initData,onFieldChanged});
  const setContent=content=>{
    
    changeContent(content);    
    if(globalInputApp.setFieldValueById){
        globalInputApp.setFieldValueById(initData.form.fields[0].id,content);
    }
}
  return {...globalInputApp,content,setContent};
};
