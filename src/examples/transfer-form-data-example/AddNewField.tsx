
import React, { useState} from "react";
import {useGlobalInputApp} from 'global-input-react';
import { PageContainer,Title, P,RadioButton,InputWithLabel,DisplayInputCopyField,SelectionContainer} from './app-layout';


const formFields={
    multiLine:{
        id:"multiLines",
        label:"Type",
        type:"list",
        selectType:"single",
        value:'single-line',
        items:[
            {value:"single-line", label:"Single-line"},
            {value:"multi-line", label:"Multi-line"}                            
        ]
    },    
    label:{
        id:"nameOfNewField",
        type:"text",
        value:""
    },
    cancel:{
        id:"cancelAdd",
        label:"Cancel",
        type:"button",
        viewId:"row1"               
    },
    add:{
        id:"addNewFieldToForm",
        label:"Add",
        type:"button",
        viewId:"row1"
    }
};

const initData= {
       action: "input",
       dataType: "form",
       form:{
           title:"Adding New Field",
           fields:[formFields.label,formFields.multiLine,formFields.cancel,formFields.add]
       }
     };      
    
     const createNewFormNewField=({form,label, multiLine})=>{
        let newLabel=label.trim();
            if(!newLabel){
                return form;
            }
            const nLines=multiLine?5:1;
            const id=newLabel.replace(' ',"_").toLowerCase();
            for(let f of form.fields){
                if(f.id===id){
                    return form;
                }
            }
            const fields=[...form.fields,{id,label:newLabel,value:'',nLines}];
            return {...form,fields}; 
    };

export default ({form,gotoTransfer})=>{
    const [label,setLabel]=useState('');
    const [multiLine,setMultiLine]=useState(false);
    const mobile = useGlobalInputApp({initData});
    mobile.setOnchange(({field})=>{        
        switch(field.id){
            case formFields.cancel.id:
                gotoTransfer();
                break;
            case formFields.label.id:
                setLabel(field.value as string);
                break;
            case formFields.multiLine.id:
                  if(field.value && field.value[0]=== formFields.multiLine.items[0].value){
                    setMultiLine(false);
                  }
                  else if(field.value && field.value[0]=== formFields.multiLine.items[1].value){
                    setMultiLine(true);
                  }
                  break;
            case formFields.add.id:                      
                    if(label.trim()){            
                        gotoTransfer(createNewFormNewField({form,label:label.trim(), multiLine})); 
                    }
                  break;
        }
    });  
        
    const changeMultiLine=multiLine=>{
        setMultiLine(multiLine);        
        if(multiLine){
            mobile.sendValue(formFields.multiLine.id,formFields.multiLine.items[1].value);
        }
        else{
            mobile.sendValue(formFields.multiLine.id,formFields.multiLine.items[0].value);
        }
    };
    return(
        <PageContainer>
            <Title>Adding New Field</Title>
            <mobile.ConnectQR/>
            {mobile.isConnected && (<>
                <P>Enter the name of the new field </P>
                
                <InputWithLabel label="Name of the field" id="newFieldLabel"
                            onChange={value=>{
                                setLabel(value);
                                mobile.sendValue(formFields.label.id,value);
                            }}
                            value={label}/>
                <SelectionContainer>
                        <RadioButton name="singleMultiLine" checked={!multiLine} label="Single-line" onChange={()=>{
                            changeMultiLine(false);                                                
                            }}/>
                        <RadioButton name="singleMultiLine" checked={multiLine} label="Multi-line" onChange={()=>{
                            changeMultiLine(true);                       
                        }}/>

                </SelectionContainer>                
            </>)}
        </PageContainer>            
    );
}