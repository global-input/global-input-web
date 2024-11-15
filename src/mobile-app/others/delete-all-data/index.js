import React, { useState } from 'react';


import {styles} from "./styles";



import settingsTextConfig from "../../configs/settingsTextConfig";
import menusConfig from "../../configs/menusConfig";

import ViewWithTabMenu from "../../components/menu/ViewWithTabMenu";

import {appdata} from "../../store";

const renderErrorMessage = errorMessage => {
    if(errorMessage){
      return (
        <div style={styles.inputContainer}>
          <span style={styles.errorMessage}>{errorMessage}</span>
        </div>
      );
    }
    else{
      return null;
    }
  }
const DeleteAllData = ({onBack})=>{
    
  const [errorMessage, setErrorMessage]=useState('');
  
  const onConfirmDeleteAllData = () => {
      appdata.clearAllForms();      
      onBack();
  }
  const onCancel = () => {      
      onBack();
  };  
  const  menuItems=[{
            menu:menusConfig.cancel.menu,
            onPress:onCancel
        },{
             menu:menusConfig.confirm.menu,
             onPress:onConfirmDeleteAllData
        }]; 
   
  return(
    <ViewWithTabMenu title={settingsTextConfig.deleteAllData.title}
    menuItems={menuItems} selected={menusConfig.others.menu}
    content={settingsTextConfig.deleteAllData.content}>
                            {renderErrorMessage(errorMessage)}
          </ViewWithTabMenu>
  );
  };

  export default DeleteAllData;