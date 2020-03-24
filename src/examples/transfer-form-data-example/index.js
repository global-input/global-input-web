import React, { useReducer, useState, useRef, useEffect } from "react";

import {useGlobalInputApp} from 'global-input-react';



import { PageContainer,Title, P} from './app-layout';

import * as dataUtil from './dataUtil';
import {AddNewField,TransferFormData,DisplayApplicationInfo,DeleteFields, ChangeForm} from './renders';



const ACTIONS={
        TRANSFER:1,
        ADD_NEW_FIELD:2,
        DELETE_FIELDS:3,
        CHANGE_FORM:4
}

const AppTitle=()=>(
    <Title>Mobile Authentication &amp; Form Data Transfer</Title>
);
export default ({location}) => {
    const [form,setForm]=useState(()=>dataUtil.form.buildInitialForm({location}));
    const [visibility, setVisibility]=useState(()=>dataUtil.visibility.getDefaultOption());
    const [initData, setInitData]=useState(null);
    const [action, setAction]=useState(ACTIONS.TRANSFER);
    const [bookmark,setBookmark]=useState(null);


    

    const globalInputApp = useGlobalInputApp({initData},[initData]);
    
     
    const onToggleShowHide=()=>{
        const nextVisibility=dataUtil.visibility.getNext(visibility);                
        setVisibility(nextVisibility);
        dataUtil.form.setMobileVisibilityValue(globalInputApp,nextVisibility.value);        
     };
     const onFormFieldValueChanged= (field,value) => {                
        setForm(dataUtil.form.updateField({form,field,value}));        
     };

    const gotoAddField=()=>{
         setAction(ACTIONS.ADD_NEW_FIELD);            
    };
    const gotoDeleteFields=()=>{
        setAction(ACTIONS.DELETE_FIELDS);            
    };
    const gotoChangeForm=()=>{
        setAction(ACTIONS.CHANGE_FORM);            
    };   
    
    const gotoTransfer=(newForm=form)=>{                
        setAction(ACTIONS.TRANSFER);                       
        const initData=dataUtil.form.getInitData(newForm,visibility);      
        setInitData(initData);        
    };
    const onFormModified=newForm=>{
        setForm(newForm);                
        const bookmark=dataUtil.form.createBookmark(newForm);
        setBookmark(bookmark); 
        if(newForm.fields.length){
            gotoTransfer(newForm);             
        }
        else{
            gotoAddField();
        }

        
    }
    const addNewField=(label,multiLine)=>{
        const newForm=dataUtil.form.createNewFormNewField({form,label, multiLine});                
        onFormModified(newForm);
    };
    const deleteFields=items=>{
        const newForm=dataUtil.form.createNewFormDeleteFields({form,items});                
        onFormModified(newForm);
    }
    const changeFormAttributes=({formTitle, formId, formLabel})=>{
        const newForm=dataUtil.form.createNewFormWithAttributes({form,formTitle, formId, formLabel});                
        onFormModified(newForm);

    };

    useEffect(()=>{
        gotoTransfer();
    },[]);

  
  const renderMain=()=>{
        const props={        
            onFieldChanged:(formField,value)=>{    
                onFormFieldValueChanged(formField,value);
                dataUtil.form.setMobileFieldValue(globalInputApp,formField,value);
            },
            onToggleShowHide,
            onFormFieldValueChanged,
            gotoAddField,
            gotoDeleteFields,
            gotoChangeForm,
            form,
            visibility,
            globalInputApp,
            bookmark        
        };
        
        switch(action){
            case ACTIONS.TRANSFER:
                        return (<TransferFormData {...props}/>)
            case ACTIONS.ADD_NEW_FIELD: 
                        return (<AddNewField globalInputApp={globalInputApp} gotoTransfer={gotoTransfer} addNewField={addNewField}/>);
            case ACTIONS.DELETE_FIELDS:
                        return (<DeleteFields globalInputApp={globalInputApp} gotoTransfer={gotoTransfer} form={form} deleteFields={deleteFields}/>)
            case ACTIONS.CHANGE_FORM:
                        return (<ChangeForm globalInputApp={globalInputApp} gotoTransfer={gotoTransfer} form={form} changeFormAttributes={changeFormAttributes}/>)
            default:
                return null;
        }
  };
   
   const {connectionMessage, WhenConnected,WhenWaiting, WhenDisconnected}=globalInputApp;  
      return (
        <PageContainer>                      
            
            <WhenWaiting>
                <AppTitle/>
                
                {connectionMessage}
                <DisplayApplicationInfo/>            
            </WhenWaiting>

            
            
            <WhenDisconnected>
            <AppTitle/>
                <P>Disconnected, reload the page to try again</P>               
                <DisplayApplicationInfo/>
            </WhenDisconnected>
            <WhenConnected>
                {renderMain()}
            </WhenConnected>
            
        </PageContainer>
      );    

};



