import React, { useReducer, useState, useRef, useEffect } from "react";
import { PageContainer,Title, P,A} from './app-layout';
import DisplayApplicationInfo from './DisplayApplicationInfo';
export default ({globalInputApp,backToMain}) => {
    useEffect(()=>{
        globalInputApp.setInitData(initData);
    },[]);
    useEffect(() => {
        const { field } = globalInputApp;
        if (!field) {
            return null;
        }
        switch (field.id) {
            case initData.form.fields[1].id:                
                backToMain();
                break;            
        }
    }, [globalInputApp.field]);

    return(
    <>
    <P>Send Message Complete</P>
    <DisplayApplicationInfo/>
    </>);

    };



  const initData={
    action:"input",
    dataType:"form",
    form:{          
          title:"Send Message Completed",          
          fields:[{                        
            value:"The message is sent, you may press the 'Back' button to back to the main menu",
            type:"info",
          },{            
            id:"back",
            icon:"back",
            label:"Back",
            type:"button"
          }]
    }
};
