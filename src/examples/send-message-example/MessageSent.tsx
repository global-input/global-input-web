import React, { useState, useRef, useEffect } from "react";
import {useGlobalInputApp} from 'global-input-react';
import {Title, P, PageContainer,A,DisplayInputCopyField,InputWithLabel, TextButton,SelectableInput,SelectionContainer, RadioButton,CheckboxButton} from './app-layout';
import DisplayApplicationInfo from './DisplayApplicationInfo';

const formFields={
    back:{            
        id:"back",
        icon:"back",
        label:"Back",
        type:"button"
      }
}

const initData = {
    action: "input",
    dataType: "form",
    form: {
        id: "mymessage@company.com",
        title: "Sending a Message",
        label: "contacts",
        fields: [{                        
            value:"The message is sent, you may press the 'Back' button to back to the main menu",
            type:"info",
          },
          formFields.back
        ]
    }
};






export default ({backToHome})=>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const mobile = useGlobalInputApp({initData});            
    mobile.setOnchange(({field})=>{
        
        switch(field.id){
            case formFields.back.id:
                backToHome();
                break;                   
            default:                
        }
    });
    return(
        <PageContainer>                                  
        
        <mobile.ConnectQR/>
            {mobile.isConnected && (<>

                <P>Send Message Complete</P>
    <DisplayApplicationInfo/>

        </>)}
        </PageContainer>                                  
    );                           
                   

};



