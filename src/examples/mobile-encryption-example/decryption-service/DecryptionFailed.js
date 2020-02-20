import React, {useEffect} from 'react';

import {Title,P,ContentContainer,ErrorMessage} from '../app-layout';
import * as actions from '../actions';


export default ({dispatch,globalInputApp, errorMessage}) => {
    
    useEffect(()=>{        
            const mobileConfig=buildMobileConfig({dispatch,errorMessage});
            globalInputApp.setInitData(mobileConfig);                                       
    },[]);  
        
        return(
            <>
                <Title>Decryption Failure</Title>
                <ContentContainer>                    
                    <ErrorMessage errorMessage={errorMessage}/>                    
                </ContentContainer>
            </>
        
        );
                     
};

const buildMobileConfig=({dispatch,errorMessage})=>{
        return {
            action:"input",
            dataType:"form", 
            form:{
                title:"Decryption Failure",
                fields:[{
                    type:'info',
                    value: errorMessage,
                },{
                    type:"button",
                    label:"Back",
                    icon:"back",                    
                    operations:{
                        onInput:()=>actions.decryptionService.init({ dispatch })        
                    }
                }]
            }
        };
};