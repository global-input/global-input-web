
import React, { useState} from "react";
import {useGlobalInputApp} from 'global-input-react';
import { PageContainer,Title, CheckboxButton,P,RadioButton,InputWithLabel,DisplayInputCopyField,SelectionContainer} from './app-layout';


const formFields={
    fieldToDelete:{
        id:"fieldsToDelete",
        label:"Select",
        type:"list",                
        selectType:"multiple",
        value:null,
        items:[]
    },
    cancel:{
        id:"cancelDelete",
        label:"Cancel",
        type:"button",
        viewId:"row1"
    },
    deleteSelected:{
        id:"deleteSelected",
        label:"Delete",
        type:"button",
        viewId:"row1"
    }

};
const createSelectableItems=form=>form.fields.map(f=>({
    label:f.label, 
    value:f.id,
    selected:false
}));


const initData = form => {
    const fieldToDelete={...formFields.fieldToDelete,items:createSelectableItems(form)};

    return {
       action: "input",
       dataType: "form",
       form:{
           title:"Deleting Fields",
           fields:[fieldToDelete,formFields.cancel,formFields.deleteSelected]
       }
     }
};      

const updateSelection = (items, values) => {
    const newItems=items.map(itm=>{
        if(values && values.length>0){
            for(let value of values){
                if(itm.value===value){
                    return {...itm, selected:true};
                }
            }
        }            
        return {...itm, selected:false};            
    });
    return newItems;
};  



export default ({gotoTransfer,form})=>{    
    const [items,setItems]=useState(()=>createSelectableItems(form));    
    const mobile = useGlobalInputApp({initData:()=>initData(form)});
    mobile.setOnchange(({field})=>{       
            switch(field.id){
                case formFields.fieldToDelete.id:
                    const newItems=updateSelection(items, field.value);
                    setItems(newItems);
                    break;
                case formFields.cancel.id:
                    gotoTransfer();
                    break;
                case formFields.deleteSelected.id:
                    if(!items||!items.length){
                        break;            
                    }
                    const itemsToDelete=items.filter(itm=>itm.selected);
                    if(!itemsToDelete.length){
                        break;
                    }                        
                    const fields=form.fields.filter(f=>{
                         const matchedItems=itemsToDelete.filter(itm=>itm.value===f.id);
                        return !matchedItems.length;
                    });  
                    
                    gotoTransfer({...form, fields}); 



            }
        
    });  
     
    
    return(
        <PageContainer>
            <mobile.ConnectQR/>
            {mobile.isConnected && (<>
            <Title>Deleting Fields</Title>
            <SelectionContainer>
                {items.map(item=>(                    
                <CheckboxButton 
                    label={item.label} 
                    checked={item.selected} onChange={()=>{
                        let values:any[]=[];                        
                        const newItems=items.map(itm=>{
                            let nitm=itm;
                            if(itm.value===item.value){                                
                                nitm={...itm, selected:!itm.selected};
                            }
                            if(nitm.selected){
                                values.push(nitm.value);
                            }
                            return nitm;
                        });                                                     
                        setItems(newItems);
                        mobile.sendValue(formFields.fieldToDelete.id,values);

                    }} 
                    key={item.value}/>)
                )}
            </SelectionContainer>   
            </>)}           
        </PageContainer>            
    );
}