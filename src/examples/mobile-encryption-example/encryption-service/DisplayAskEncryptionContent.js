import React, {useEffect} from 'react';
import QRCode from "qrcode.react";
import PageContainer from '../generic-example-container';
import {Title,P,CenterContainer,TextAreaBox, TextButton,ErrorMessage} from '../basic-app-layout';
import * as actions from '../actions';


export default ({dispatch,mobile, content,errorMessage}) => {
    
    useEffect(()=>{        
            const mobileConfig=buildMobileConfig({dispatch});
            mobile.sendInitData(mobileConfig);                                       
    },[]);  
        const setContent= content => actions.encryptionService.setContent({content,dispatch});
        const onEncryptContent=()=>{
            
            if(!content){
                actions.encryptionService.setErrorMessage(dispatch,'Empty content cannot be encrypted!');
            }
            else{
                actions.encryptionService.encrypt(dispatch);
            }
            
        }
        return(
            <PageContainer>
                <P>Please paste the content you would like encrypt into the following text box, and then click the 'Encrypt' button</P>
                <CenterContainer type='right'>
                    <TextButton label="Encrypt" onClick={onEncryptContent}/>
                    <ErrorMessage errorMessage={errorMessage}/>
                    <CenterContainer>
                    <TextAreaBox onChange={evt=>setContent(evt.target.value)}/>
                    </CenterContainer>
                    
                </CenterContainer>
                
                

            </PageContainer>
        
        );
                     
};

const buildMobileConfig=({dispatch})=>{
        const setSize = size => actions.qrCodeService.setSize({dispatch,size});        
        const setLevel = level => actions.qrCodeService.setLevel({dispatch,level});        
        const printQRCode=()=>{
            window.print();
        };
        return {
            action:"input",
            dataType:"form", 
            form:{
                title:"Mobile Encryption",
                fields:[{
                    type:'info',
                    value: 'Please enter the content you would like to encrypt in the connected application running on your computer',
                }]
            }
        };
}