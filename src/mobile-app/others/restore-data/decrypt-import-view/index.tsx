import React, { useState,useEffect } from 'react';

import menusConfig from "../../../configs/menusConfig";



import {appdata,formDataUtil} from "../../../store";
import PasswordDecrypt from "../password-decrypt"
import ManageKeysView from "../../manage-keys/manage-keys-view";
import {FormContentDataView} from '../form-content-data-view'
import {ManageFormData} from "../../../manage-form-data";
import ViewWithTabMenu from "../../../components/menu/ViewWithTabMenu";

const ACT_TYPE={
    NO_DATA:1,
    ASK_FOR_PASSWORD_FOR_ENCRYPTION_KEY:2,
    DECRYPTED:3,
    FORM_DATA_CONTENT:4,
    IMPORT_FORM_DATA:5,
    IMPORT_FORM_COMPLETED:6
};
const initialData={
    type:ACT_TYPE.NO_DATA,
    content:"",
    decryptedKey:"",
    formDataList:null,
    formData:null

  };

export const DATA_SOURCE_TYPE={
  CLIPBOARD:1,
  CONNECTED_DEVICE:2
}

export const DecryptImportView= ({onBack, content, dataSourceType=DATA_SOURCE_TYPE.CLIPBOARD})=>{
        const [action,setAction]=useState(initialData);
        let windowTitle="Clipboard";
        let nodataHelp=["Please copy the exported data into your clipboard."];  

        if(dataSourceType === DATA_SOURCE_TYPE.CONNECTED_DEVICE){
          windowTitle="Device Input";
          nodataHelp=["Please provide the exported form data content on the connected application."];    
        }

  
        const setContent = content => {        
              if(appdata.isFormDataText(content)){
                  setAction({...action, content,type:ACT_TYPE.FORM_DATA_CONTENT });            
              }
              else if(appdata.isPasswordEncryptedEncryptionKeyText(content)){
                  setAction({...action, content,type:ACT_TYPE.ASK_FOR_PASSWORD_FOR_ENCRYPTION_KEY });            
              }
              else if(appdata.isEncryptionKeyText(content)){
                  var decryptedKey=appdata.decryptEncryptionKeyText(content);
                  if(decryptedKey){
                    setAction({...action, decryptedKey, type:ACT_TYPE.DECRYPTED });              
                  }
                  else{
                    console.log("Failed to decrypt the key");
                    setAction({...action,  type:ACT_TYPE.NO_DATA });                            
                  }            
              }
          };

    
        const onEncryptionKeyDecrypted =  decryptedKey => {    
          setAction({...action, decryptedKey,type:ACT_TYPE.DECRYPTED,content:''});    
          
        };
        
        const onDecryptedFormData = formDataList => setAction({...action, formDataList,type:ACT_TYPE.IMPORT_FORM_DATA,content:''});        
        const importAllFormData = () => {
                var formDataList=action.formDataList
                if(formDataList && formDataList.length>0){
                    appdata.mergeFormDataList(formDataList);
                }        
                
                setAction({...action,type:ACT_TYPE.IMPORT_FORM_COMPLETED});    
        };
        const importFormData =formData => {
          if(formData.id){
            appdata.updateFormData(formData.id,formData);
            setAction({...action,formData, type:ACT_TYPE.IMPORT_FORM_COMPLETED});
          }
        };
        const onImportComplete = () => {
          if(action.formData){
              setAction({...action,formData:null, type:ACT_TYPE.IMPORT_FORM_DATA});
          }
          else{
              onBack();
          }
        };
        useEffect(()=>{
          setContent(content);
        },[content]);
    
    switch(action.type){
        case ACT_TYPE.ASK_FOR_PASSWORD_FOR_ENCRYPTION_KEY:  
                return(
                  <PasswordDecrypt content={action.content}
                  onBack={onBack}
                  onEncryptionKeyDecrypted={onEncryptionKeyDecrypted}/>
                );
        case ACT_TYPE.DECRYPTED: 
                {
                    const menuItems=[{
                          menu:menusConfig.back.menu,
                          onPress:onBack
                    }];      
                    return (
                        <ManageKeysView
                          menuItems={menuItems}
                          importDecryptedKey={action.decryptedKey}/>
                    );
                }
        case ACT_TYPE.FORM_DATA_CONTENT: return (
                    <FormContentDataView content={action.content} windowTitle={windowTitle}
                        onBack={onBack} onDecryptedFormData={onDecryptedFormData}/>
                        );
        case ACT_TYPE.IMPORT_FORM_DATA: 
              {
                    var menuItems=[{
                          menu:menusConfig.back.menu,
                          onPress:onBack
                    },{
                        menu:menusConfig.importAll.menu,
                        onPress:importAllFormData
                
                    }];
                    const formDataStorage={
                        getSavedFormContent:()=>action.formDataList,
                        getAllLabels:()=>{return formDataUtil.getAllLabelsFromFormDataList(action.formDataList);}
                
                    };
          
                  const  displayFormDataProperties={
                      title:windowTitle,
                      menuItems:[{
                          menu:menusConfig.importSingle.menu,
                          onSelect:importFormData
                      }]
                  }      
                return(<ManageFormData 
                  displayFormDataProperties={displayFormDataProperties}
                  menuItems={menuItems}
                  formDataStorage={formDataStorage}
                  title={windowTitle}
                  />);
              }

        case ACT_TYPE.IMPORT_FORM_COMPLETED: 
              {
                      const menuItems=[{},{
                            menu:menusConfig.ok.menu,
                            onPress:onImportComplete
                      },{}];
                      let help="Number of items imported: ";
                      if(action.formDataList){
                        help+=action.formDataList.length;
                      }
                      if(action.formData){
                        help=action.formData.id+" is imported into the app successfully.";
                      }
                    const content=[help];
                    return(
                          <ViewWithTabMenu title={windowTitle}
                          menuItems={menuItems}
                          selected={menusConfig.others.menu} content={content}/>
                      );
                }
        default: 
                {
                        var menuItems=[{
                            menu:menusConfig.back.menu,
                            onPress:onBack
                        }];              
                          return(
                            <ViewWithTabMenu title={windowTitle}
                            menuItems={menuItems}
                            selected={menusConfig.others.menu} content={nodataHelp}/>
                          );                        
                }
        }
  

};
