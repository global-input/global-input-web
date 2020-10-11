import React  from 'react';
import { useGlobalInputApp } from 'global-input-react';
import {Title,P,ContentContainer,ErrorMessage} from '../app-layout';
import * as actions from '../actions';
const FIELDS={
    BACK:"backOnError"
}
const initData = errorMessage => ({
    action:"input",
    dataType:"form", 
    form:{
        title:"Decryption Failure",
        fields:[{
            type:'info',
            value: errorMessage,
        },{
            id:FIELDS.BACK,
            type:"button",
            label:"Back",
            icon:"back"            
        }]
    }
});
export default ({dispatch,mobile, errorMessage}) => {
    const {setOnFieldChanged}=useGlobalInputApp({initData:()=>initData(errorMessage),mobile},[errorMessage]);
    setOnFieldChanged(({field})=>{
          switch(field.id){
                case FIELDS.BACK:
                    actions.decryptionService.init({ dispatch });
                    break;
          }
        });
    
        
        return(
            <>
                <Title>Decryption Failure</Title>
                <ContentContainer>                    
                    <ErrorMessage errorMessage={errorMessage}/>                    
                </ContentContainer>
            </>
        
        );
                     
};

