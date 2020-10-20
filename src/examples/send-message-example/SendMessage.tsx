import React, { useState, useRef, useEffect } from "react";
import {useGlobalInputApp} from 'global-input-react';
import {Title, P, PageContainer,A,DisplayInputCopyField,InputWithLabel, TextButton,SelectableInput,SelectionContainer, RadioButton,CheckboxButton} from './app-layout';

const formFields={
    firstName:{
        id: "first_name",
        type: "text",
        label: "First Name",
        value: ""
    }, 
    lastName:{
        id: "last_name",
        type: "text",
        label: "Last Name",
        value: ""
    }, 
    email:{
        id: "email",
        type: "text",
        label: "Email",
        value: ""
    }, 
    phone:{
        id: "phone",
        type: "text",
        label: "Phone",
        value: ""
    },
    message:{
        id: "message",
        type: "text",
        label: "Message",
        value: "",
        nLines: 5
    }, 
    cancel:{
        id: "cancel",
        label: "Cancel",
        type: "button",
        viewId: "footer"
    }, 
    send:{
        id: "send",
        label: "Send",
        type: "button",
        viewId: "footer"
    }
}

const initData = {
    action: "input",
    dataType: "form",
    form: {
        id: "mymessage@company.com",
        title: "Sending a Message",
        label: "contacts",
        fields: Object.values(formFields)            
    }
};






export default ({backToHome,onSendMessage})=>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const mobile = useGlobalInputApp({initData});            
    mobile.setOnchange(({field})=>{
        const {id,value}=field;
        switch(id){
            case formFields.cancel.id:
                backToHome();
                break;       
            case formFields.send.id:
                onSendMessage({ firstName, lastName, email, phone, message });
                break;         
            case formFields.firstName.id:
                setFirstName(value as string);
                break;
            case formFields.lastName.id:
                setLastName(value as string);
                break;
            case formFields.email.id:
                setEmail(value as string);
                break;
            case formFields.phone.id:
                setPhone(value as string);
                break;
            case formFields.message.id:
                setMessage(value as string);
                break;            
            default:                
        }
    });
    return(
        <PageContainer>                                  
        
        <mobile.ConnectQR/>
            {mobile.isConnected && (<>

                <Title>Send Message</Title>
            <P>You may fill the form below both here or on your mobile and then press the "Send" button on your mobile.</P>
            <InputWithLabel label={formFields.firstName.label} id={formFields.firstName.id}
                onChange={value => {
                    setFirstName(value);
                    mobile.sendValue(formFields.firstName.id,value);                    
                }}
                value={firstName} />
            <InputWithLabel label={formFields.lastName.label} id={formFields.lastName.id}
                onChange={value => {
                    setLastName(value);
                    mobile.sendValue(formFields.lastName.id,value);                    
                }}
                value={lastName} />
            <InputWithLabel label={formFields.email.label} id={formFields.email.id}
                onChange={value => {
                    setEmail(value);
                    mobile.sendValue(formFields.email.id,value);                    
                }}
                value={email} />
            <InputWithLabel label={formFields.phone.label} id={formFields.phone.id}
                onChange={value => {
                    setPhone(value);
                    mobile.sendValue(formFields.phone.id,value);                    
                }}
                value={phone} />
            <InputWithLabel label={formFields.message.label} type="textarea"
                id={formFields.message.id}
                onChange={value => {
                    setMessage(value);
                    mobile.sendValue(formFields.message.id,value);                    
                }}
                value={message} />
            <P>
                You may save the content of the form into your mobile app for later use so that the application can repeatedly request your personal data without centrally storing them beyond the lifetime of the current service workflow. 
            </P>
        </>)}
        </PageContainer>                                  
    );                           
                   

};



