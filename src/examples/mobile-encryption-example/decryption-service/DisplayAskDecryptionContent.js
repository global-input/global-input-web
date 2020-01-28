import React, {useEffect} from 'react';
import PageContainer from '../generic-example-container';
import {Title,P,CenterContainer,TextAreaBox, TextButton,ErrorMessage} from '../basic-app-layout';
import * as actions from '../actions';


export default ({dispatch,mobile, content,errorMessage}) => {
    
    useEffect(()=>{        
            const mobileConfig=buildMobileConfig({dispatch});
            mobile.sendInitData(mobileConfig);                                       
    },[]);  
        const setContent= content => actions.decryptionService.setContent({content,dispatch});
        const onDecryptContent=()=>{
            
            if(!content){
                actions.decryptionService.setErrorMessage(dispatch,'Empty content');
            }
            else{
                actions.decryptionService.decrypt(dispatch);
            }
            
        }
        return(
            <PageContainer>
                <P>Please paste the encrypted content into the following text box, and then click the 'Decrypt' button</P>
                <CenterContainer type='right'>
                    <TextButton label="Decrypt" onClick={onDecryptContent}/>
                    <ErrorMessage errorMessage={errorMessage}/>
                    <CenterContainer>
                    <TextAreaBox onChange={evt=>setContent(evt.target.value)}/>
                    </CenterContainer>
                    
                </CenterContainer>
                
                

            </PageContainer>
        
        );
                     
};

const buildMobileConfig=({dispatch})=>{
        return {
            action:"input",
            dataType:"form", 
            form:{
                title:"Mobile Decryption",
                fields:[{
                    type:'info',
                    value: 'Please paste the encrypted content into the textbox being displayed by the connected application',
                }]
            }
        };
};