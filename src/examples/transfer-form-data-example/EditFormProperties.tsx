
import React, { useState} from "react";
import {useGlobalInputApp} from 'global-input-react';
import { PageContainer,Title, P,RadioButton,InputWithLabel,DisplayInputCopyField,SelectionContainer} from './app-layout';


const formFields={
    title:{
        id:"form-Title",
        label:"Form Title",
        type:"text",                
        value:''                
    },
    id:{
        id:"form-ID",
        label:"Form ID",
        type:"text",
        value:''                
    },
    label:{
        id:"form-Label",
        label:"Form Label",
        type:"text"                
    },
    cancel:{
        id:"cancel-Edit",
        label:"Cancel",
        type:"button",
        viewId:"row1"
    },
    update:{
        id:"update-Form",
        label:"Update",
        type:"button",
        viewId:"row1"
    }
};

const initData=form=>{
  const fields=[{...formFields.title,value:form.title},
    {...formFields.id,value:form.id},
    {...formFields.label,value:form.label},formFields.cancel,formFields.update];
    return {              
        action: "input",
        dataType: "form",
        form:{
            title:"Form Attributes",
            fields
        }
      };
};      
    
export default ({form,gotoTransfer})=>{
    const [title,setTitle]=useState(form.title);
    const [label,setLabel]=useState(form.label);
    const [id, setId]=useState(form.id);


    const mobile = useGlobalInputApp({initData:initData(form)});
    mobile.setOnchange(({field})=>{   
        
        switch(field.id){
            case formFields.cancel.id:
                        gotoTransfer();
                        break;
            case formFields.id.id:
                        setId(field.value);
                        break;
            case formFields.title.id:
                        setTitle(field.value);
                        break;
            case formFields.label.id:
                        setLabel(field.value);
                        break;
            case formFields.update.id:                        
                        if(id && id.trim()){                            
                            gotoTransfer({...form,title,id,label});
                        }
                        break;
            default:

            
        }             
    });  
        
    
    return(
        <PageContainer>
            <mobile.ConnectQR/>
            {mobile.isConnected && (<>
            <Title>Form Attributes</Title>            
            <InputWithLabel value={title} label="Form Title" onChange={value=>{
                setTitle(value);
                mobile.sendValue(formFields.title.id,value);                
            }}/>
            <InputWithLabel value={id} label="Form Id" onChange={value => {
                setId(value);
                mobile.sendValue(formFields.id.id,value);                
            }}/>
            <InputWithLabel value={label} label="Form Label" onChange={value=>{
                setLabel(value);
                mobile.sendValue(formFields.label.id,value);                
            }}/> 
            </>)}           
        </PageContainer>            
    );
}