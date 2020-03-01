import React, {useState, useEffect}  from "react";
import {Title, P, A,DisplayInputCopyField,InputWithLabel, TextButton,SelectableInput,SelectionContainer, RadioButton,CheckboxButton} from './app-layout';
import * as dataUtil from './dataUtil';
export const DisplayApplicationInfo= () => (
    <P>
        This example application demonstrates 
    how applications can use the <a href="https://github.com/global-input/global-input-react">Global Input App library</a> to achieve <A href="https://globalinput.co.uk/global-input-app/mobile-content-transfer">mobile form operations </A> like mobile authentication, mobile subscription to name a few.

    

    Its source code is available on <A href="https://github.com/global-input/transfer-form-data-example"> GitHub</A>. 
    If you are looking for a simpler example, try <a href="https://globalinput.co.uk/global-input-app/content-transfer">the content transfer example</a> 
    
    </P>  
  );

const renderBookMark=(bookmark,form)=>{
        if(!bookmark){
            return null;            
        }
        if(!form.fields.length){
            return null;
        }
        return(
            <P>
              You can save this form for future use by click <A href={bookmark}>here</A> and book mark the page loaded.  
            </P>
        );
} 
export const TransferFormData=({onFieldChanged,onToggleShowHide,form,visibility, globalInputApp,gotoAddField,gotoDeleteFields,gotoChangeForm,onFormFieldValueChanged,bookmark})=>{
    useEffect(()=>{  
        if(!globalInputApp.field){
            return;
        }
        if(dataUtil.visibility.buttonPressed(globalInputApp.field)){
                onToggleShowHide();        
        }
        else if(dataUtil.form.addFieldButtonPressed(globalInputApp.field)){
                gotoAddField();                       
        }
        else if(dataUtil.form.deleteFieldsButtonPressed(globalInputApp.field)){
                 gotoDeleteFields();
        }
        else if(dataUtil.form.changeButtonPressed(globalInputApp.field)){
            gotoChangeForm();
        }
        
        else {
                onFormFieldValueChanged(globalInputApp.field,globalInputApp.field.value);    
        }       
    },[globalInputApp.field]);    
    return(
        <>
            <Title>{form.title}</Title>
            {form.fields.map((formField,index)=>(<DisplayInputCopyField 
            field={formField} 
            key={formField.id} 
            hideValue={visibility.value===0} onChange={value=>onFieldChanged(formField,value)}/>))}
            <TextButton onClick={onToggleShowHide} label={visibility.label}/>
            {renderBookMark(bookmark, form)}
            <P>You may now operate on your mobile to transfer content to the form above.</P>
            <DisplayApplicationInfo/>

        </>
    );
}

export const AddNewField=({globalInputApp,gotoTransfer,addNewField})=>{    
      const [label,setLabel]=useState('');
      const [multiLine,setMultiLine]=useState(false);

      
    const setFormLabel=label=>{
        setLabel(label);
        dataUtil.addNewField.setFieldNameOnMobile(globalInputApp,label);
    };
    const onAddNewField=()=>{        
        if(!label.trim().length){
            return;
        }
        addNewField(label,multiLine);
    }
    useEffect(()=>{
        globalInputApp.setInitData(dataUtil.addNewField.getInitData({multiLine}));    
    },[]);
    useEffect(()=>{
        const {field}=globalInputApp;
        if(!field){
            return;
        }
        if(dataUtil.addNewField.cancelButtonPressed(field)){
            gotoTransfer();
        }
        else if(dataUtil.addNewField.labelFieldModified(field)){
            setLabel(field.value);
        }
        else if(dataUtil.addNewField.addNewButtonPressed(field)){
            onAddNewField();
        }
        const multiLineIndex=dataUtil.addNewField.pressedMultiLineOptionIndex(field);        
        if(multiLineIndex===0){                        
                setMultiLine(false);
        }
        else if(multiLineIndex===1){
                setMultiLine(true);            
        }
        
    },[globalInputApp.field]);

        return(
            <>
                <Title>Adding New Field</Title>
                <P>Enter the name of the new field </P>                            
                <InputWithLabel label="Name of the field" id="newFieldLabel"
                              onChange={setFormLabel}
                              value={label}/>
                <SelectionContainer>
                        <RadioButton name="singleMultiLine" checked={!multiLine} label="Single-line" onChange={()=>{
                            setMultiLine(false);
                            dataUtil.addNewField.setMultiLineOnMobile(globalInputApp,false);
                            }}/>
                        <RadioButton name="singleMultiLine" checked={multiLine} label="Multi-line" onChange={()=>{
                            setMultiLine(true);
                            dataUtil.addNewField.setMultiLineOnMobile(globalInputApp,true);
                        }}/>

                </SelectionContainer>                
            </>            
        );
};




export const DeleteFields=({globalInputApp,gotoTransfer,form,deleteFields})=>{  
    const [items,setItems]=useState(()=>dataUtil.deleteFields.createSelectableItems(form));    

    useEffect(()=>{
        console.log("------form:"+JSON.stringify(form));
        globalInputApp.setInitData(dataUtil.deleteFields.getInitData({form}));    
    },[]);
    
    useEffect(()=>{
        const {field}=globalInputApp;
        if(dataUtil.deleteFields.cancelButtonPressed(field)){
            gotoTransfer();
        }
        if(dataUtil.deleteFields.deleteButtonPressed(field)){
            deleteFields(items);            
        }
        else if(dataUtil.deleteFields.fieldSelected(field)){
            const newItems=dataUtil.deleteFields.updateSelection(items, field.value);
            setItems(newItems);
        }

    },[globalInputApp.field])
    const toggleSelect=item=>{
         const newItems=dataUtil.deleteFields.toggleSelect(items,item);
         dataUtil.deleteFields.updateSelectionOnMobile(globalInputApp,newItems);         
         setItems(newItems);
    };
    return (
        <>
            <Title>Deleting Fields</Title>
            <SelectionContainer>
                {items.map(item=>(
                <CheckboxButton 
                    label={item.label} value={item.value} 
                    checked={item.selected} onChange={()=>toggleSelect(item)} 
                    key={item.value}/>)
                )}
            </SelectionContainer>
            
        </>
    )
};

export const ChangeForm=({globalInputApp,gotoTransfer,form,changeFormAttributes})=>{
    const [formTitle,setFormTitle]=useState(form.title);
    const [formLabel,setFormLabel]=useState(form.label);
    const [formId, setFormId]=useState(form.id);

    useEffect(()=>{
        globalInputApp.setInitData(dataUtil.changeForm.getInitData({form}));    
    },[]);
    useEffect(()=>{
        const {field}=globalInputApp;
        if(dataUtil.changeForm.cancelButtonPressed(field)){
            gotoTransfer();
        }
        else if(dataUtil.changeForm.titleFieldModified(field)){
            setFormTitle(field.value);
        }
        else if(dataUtil.changeForm.idFieldModified(field)){
            setFormId(field.value);
        }
        else if(dataUtil.changeForm.labelFieldModified(field)){
            setFormLabel(field.value);
        }
        else if(dataUtil.changeForm.updateButtonPressed(field)){
            changeFormAttributes({formTitle,formLabel,formId});            
        }
    },[globalInputApp.field])
    
    return (
    <>
            <Title>Form Attributes</Title>            
            <InputWithLabel value={formTitle} label="Form Title" onChange={value=>{
                setFormTitle(value);
                dataUtil.changeForm.setFormTitleOnMobile(globalInputApp,value);           
            }}/>
            <InputWithLabel value={formId} label="Form Id" onChange={value => {
                setFormId(value);
                dataUtil.changeForm.setFormIdOnMobile(globalInputApp,value);           
            }}/>
            <InputWithLabel value={formLabel} label="Form Label" onChange={value=>{
                setFormLabel(value);
                dataUtil.changeForm.setFormLabelOnMobile(globalInputApp,value);           
            }}/>
    </>);
}