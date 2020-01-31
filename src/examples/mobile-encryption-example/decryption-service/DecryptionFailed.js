import React, {useEffect} from 'react';
import PageContainer from '../generic-example-container';
import {Title,P,ContentContainer,TextAreaBox, TextButton,ErrorMessage} from '../basic-app-layout';
import * as actions from '../actions';


export default ({dispatch,mobile, errorMessage}) => {
    
    useEffect(()=>{        
            const mobileConfig=buildMobileConfig({dispatch,errorMessage});
            mobile.sendInitData(mobileConfig);                                       
    },[]);  
        
        return(
            <PageContainer>
                <Title>Decryption Failure</Title>
                <ContentContainer>                    
                    <ErrorMessage errorMessage={errorMessage}/>                    
                </ContentContainer>
            </PageContainer>
        
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