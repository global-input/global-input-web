import React, { useReducer, useState, useRef, useEffect } from "react";

import {useGlobalInputApp} from 'global-input-react';


import { PageContainer,Title, P, A,DisplaySelectableFormField,TextAreaBox, TextButton,QRCodeContainer } from './app-layout';

import * as dataUtil from './dataUtil';






export default ({globalInputApp, visibility,setVisibility,form,setForm}) => {
     
    const onToggleShowHide=()=>{
        const nextVisibility=dataUtil.visibility.getNext(visibility);                
        setVisibility(nextVisibility);
        const {setters}=globalInputApp;
        if(setters&& setters.length){              
            setters[setters.length-1](nextVisibility.value);
        }
    };
    const onFormFieldValueChanged= (field,value) => {                
        setForm(dataUtil.updateField({form,field,value}));        
    }
  
 useEffect(()=>{    
            const {setInitData}=globalInputApp
            const initData=dataUtil.buildInitData(form,visibility);
            setInitData(initData);                       
  },[]);
  
  useEffect(()=>{  
            if(!globalInputApp.field){
                return;
            }
            if(dataUtil.visibility.matchId(globalInputApp.field)){
                    onToggleShowHide();        
            }
            else{
                    onFormFieldValueChanged(globalInputApp.field,globalInputApp.field.value);    
            }       
  },[globalInputApp.field]);

  
      return (
        <PageContainer>          
            <Title>Mobile Form Automation</Title>
                {form.fields.map((formField,index)=>(<DisplaySelectableFormField 
                      field={formField} 
                      key={formField.id} 
                hideValue={visibility.value===0} onChange={value=>{
                        onFormFieldValueChanged(formField,value);
                        const {setters}=globalInputApp;
                        if(setters && index<setters.length){              
                            setters[index](value);                    
                        }

                    }}/>))}              
                    <TextButton onClick={onToggleShowHide} label={visibility.label}/>                     
            <P>This is an <a href="https://globalinput.co.uk/global-input-app/second-screen-experience">example application</a> demonstrating how web applications can use the <a href="https://github.com/global-input/global-input-react">Global Input App library</a> to implement <A href="https://globalinput.co.uk/global-input-app/mobile-content-transfer">mobile form operations such as mobile authentication.</A> 
            Its source code is available on <A href="https://github.com/global-input/transfer-form-data-example">GitHub</A></P>  
        </PageContainer>
      );    
};



