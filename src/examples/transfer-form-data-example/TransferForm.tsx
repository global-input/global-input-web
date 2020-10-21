import React,{useState} from "react";
import {useGlobalInputApp} from 'global-input-react';
import { PageContainer,Title, P,DisplayInputCopyField} from './app-layout';

const formFields={
    visibility:{
        id:"fieldValueVisibility",
        type:'button',  
        viewId: "row2",            
        options: [{ value: 0, label: 'Show' }, { value: 1, label: 'Hide'}],        
        value:0
    },
    addNewField:{
        id:"addNew",
        label:"Add",
        type:"button",
        viewId:"row1"               
    },
    changeForm:{
        id:"changeForm",
        type:"button",
        label:"Edit Form Attributes",
        viewId:"row2"
    },
    deleteFields:{
        id:"deleteFields",
        type:"button",
        label:"Delete Fields",
        viewId:"row1"
    }
};

const initData = (form,vis) => {
    const fields:object[]=[formFields.addNewField];
    if(form && form.fields && form.fields.length){
        fields.push(formFields.deleteFields);                
    }
    fields.push(formFields.changeForm);
    fields.push({...formFields.visibility,value:vis.value});    
    form.fields.forEach(f=>fields.push({...f}));         
    return {
        action: "input",
        dataType: "form",
        form:{...form,fields}
    };
};




export default ({form,updateForm,gotoAddField,gotoDeleteFields,gotoEditFormProperties})=>{                
    const [visibility, setVisibility]=useState(formFields.visibility.options[1]);    
    const mobile = useGlobalInputApp({initData:()=>initData(form,visibility)});

    const onFieldChanged=(fieldId,value)=>{
            let fieldModified=false;
            const fields=form.fields.map(f=>{
                if(f.id===fieldId){
                    fieldModified=true;
                    return {...f,value};
                }
                else{
                    return f;
                }
            });
            if(fieldModified){
                updateForm({...form,fields});
            }   
    }
    mobile.setOnchange(({field})=>{
        switch(field.id){
            case formFields.visibility.id:                
                const vis=visibility===formFields.visibility.options[0]?formFields.visibility.options[1]:formFields.visibility.options[0];                
                setVisibility(vis);
                mobile.sendValue(field.id as string,vis.value);
                break;
            case formFields.addNewField.id:
                gotoAddField();
                break;
            case formFields.deleteFields.id:
                gotoDeleteFields();
                break;
            case formFields.changeForm.id:
                gotoEditFormProperties();                
            default:
                onFieldChanged(field.id,field.value);             
        }              
    });

return (
    <PageContainer>
            {!mobile.isConnected && (
                <Title>Mobile Authentication &amp; Form Data Transfer</Title>
            )}
             <mobile.ConnectQR/>
            {mobile.isConnected && (<>
                <Title>{form.title}</Title>
                {form.fields.map((formField,index)=>(<DisplayInputCopyField 
                onToggleSelection={null}
            field={formField} 
            key={formField.id} 
            hideValue={visibility.value===0} 
            onChange={value=>{
                onFieldChanged(formField.id,value);                
                mobile.sendValue(formField.id,value);                
            }}/>))}
            

            </>)}
    </PageContainer>
)

}