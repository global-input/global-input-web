import React, { useReducer, useState, useRef, useEffect } from "react";
import { PageContainer,Title, P,A} from './app-layout';
export default ({globalInputApp}) => {
    useEffect(()=>{
        globalInputApp.setInitData(initData);
    },[]);

    return(
    <>
    <P>Send Message Complete</P>
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
