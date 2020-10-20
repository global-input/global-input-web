import React, {useState,useCallback} from "react";
import {decrypt} from 'global-input-react';
import TransferForm from './TransferForm';
import AddNewField from './AddNewField';
import DeleteField from './DeleteField';
import EditFormProperties from './EditFormProperties';
const PAGES={
        TRANSFER_FORM:"transfer-form",
        ADD_FIELD:"add-field",  
        DELETE_FIELDS:'delete-fields',
        EDIT_FORM_PROPERTIES:'edit-form-properties'      
};
const encryptionKey='TDwtv0dV6u';


const getQueryParam = (query,variable) => {
    if(!query){
         return null;
    }
    query=query.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
           var pair = vars[i].split('=');
           if (decodeURIComponent(pair[0]) === variable) {
               return decodeURIComponent(pair[1]);
           }
    }
    return null;
};
const decodeFormData = formData => {
    return JSON.parse(decrypt(formData,encryptionKey))
};
const buildInitialForm = ({location}) => {        
    const defaultForm={    
        id:"###username###@domain.com",
        title:"Transfer Form Data",
        label:"members",
        fields:[
            {id:"username",label:"Username", value:'',selected:false},
            {id:"password",label:"Password", value:'',selected:false},
            {id:"note",label:"Note",nLines:5, value:'',selected:false}
        ]
    };    
    if(!location || !location.search){
        return defaultForm;                
    }                                                
    var formDataString=getQueryParam(location.search, "formData");
    if(!formDataString){
        return defaultForm;

    }        
    try{
            var formFromQuery=decodeFormData(formDataString);
            if(formFromQuery){                    
                return formFromQuery;
            }                    
    }
    catch(e){
                        console.error(e+" while processing the formDataString");                                                  
    }
    
    return defaultForm;                       
};
export default (props:any)=>{    
    const [form,setForm]=useState(()=>buildInitialForm({location:props.location}));
    const [page,setPage]=useState(PAGES.TRANSFER_FORM);        
    const updateForm=useCallback(f=>setForm(f),[setForm]);
    const gotoAddField=useCallback(()=>setPage(PAGES.ADD_FIELD),[setPage]);
    const gotoTransfer=useCallback((newForm)=>{
          if(newForm){
            setForm(newForm);  
          }
          setPage(PAGES.TRANSFER_FORM)
        },[setPage]);
    const gotoDeleteFields=useCallback(()=>setPage(PAGES.DELETE_FIELDS),[setPage]);    
    const gotoEditFormProperties=useCallback(()=>setPage(PAGES.EDIT_FORM_PROPERTIES),[setPage]);    
    switch(page){
            case PAGES.TRANSFER_FORM:
                    return (<TransferForm form={form} 
                            updateForm={updateForm} 
                            gotoAddField={gotoAddField}
                            gotoDeleteFields={gotoDeleteFields}
                            gotoEditFormProperties={gotoEditFormProperties}/>)
            case PAGES.ADD_FIELD:
                    return (<AddNewField gotoTransfer={gotoTransfer} form={form}/>)
            case PAGES.DELETE_FIELDS:
                    return (<DeleteField form={form} gotoTransfer={gotoTransfer}/>)
            case PAGES.EDIT_FORM_PROPERTIES:
                    return (<EditFormProperties form={form} gotoTransfer={gotoTransfer}/>)    
            default:
                    return null;    
    }
    


}