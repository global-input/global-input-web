import React, { useReducer, useState, useRef, useEffect } from "react";

import {useGlobalInputApp} from 'global-input-react';



import { PageContainer,Title, P,A,SelectionContainer} from './app-layout';
import CompanyContact from './CompanyContact';
import SendMessageAction from './SendMessageAction';
import DisplayApplicationInfo from './DisplayApplicationInfo';
import SendCompleteAction from './SendCompleteAction';

export default ({sendMessage}) => {
    
    const [action, setAction]=useState(ACTIONS.MAIN);
    const globalInputApp = useGlobalInputApp({initData});            

    useEffect(()=>{
        const {field}=globalInputApp;
        if(!field){
            return;
        }
        switch(field.id){
            case initData.form.fields[0].id:
                setAction(ACTIONS.CONTACT);
                break;
            case initData.form.fields[1].id:
                setAction(ACTIONS.SEND_MESSAGE);
                break;
        }
    },[globalInputApp.field]);
    const backToMain=()=>{        
            setAction(ACTIONS.MAIN);
            globalInputApp.setInitData(initData);
    }
    const onSendMessage=({firstName,lastName, email, phone,message})=>{
        if(sendMessage){
            sendMessage({firstName,lastName, email, phone,message});
        }
        else{
            mockSendMessage({firstName,lastName, email, phone,message}); 
        }
        setAction(ACTIONS.COMPLETE);             
    }

    const renderMain=()=>{
        switch(action){
            case ACTIONS.MAIN:
                return(
                <SelectionContainer>
                    <Title>Mobile Storage Example</Title>
                <P>Please operate on your mobile.</P>
                <P>If you click on the "{initData.form.fields[0].label}" button, the application sends our contact information to your mobile so you can save it into your mobile personal storage. 
                If you click on the "{initData.form.fields[1].label}" button, you will be able to use your mobile to fill in a form for sending messages to us. 
                You can save the content of the form into your mobile personal storage so that you can speed up the form operation by using the autofill feature.
                </P>
            <DisplayApplicationInfo/>
                    </SelectionContainer>
                
                );

            case ACTIONS.CONTACT:
                return(<CompanyContact globalInputApp={globalInputApp} backToMain={backToMain}/>);
            case ACTIONS.SEND_MESSAGE:
                return(<SendMessageAction globalInputApp={globalInputApp} backToMain={backToMain} onSendMessage={onSendMessage}/>);
            case ACTIONS.COMPLETE:
                return(<SendCompleteAction globalInputApp={globalInputApp} backToMain={backToMain}/>);
        }
  
    }    
    
    
   
   const {connectionMessage, WhenConnected,WhenWaiting, WhenDisconnected}=globalInputApp;  
      return (
        <PageContainer>                                  
            <WhenWaiting>
                <Title>Mobile Personal Storage Example</Title>
                {connectionMessage}
                <DisplayApplicationInfo/>            
            </WhenWaiting>
            <WhenDisconnected>
                <Title>Mobile Personal Storage Example</Title>
                <P>Disconnected, reload the page to try again</P>               
                <DisplayApplicationInfo/>
            </WhenDisconnected>
            <WhenConnected>
                {renderMain()}
            </WhenConnected>
            
        </PageContainer>
      );    

};






const ACTIONS={
    MAIN:1,
    CONTACT:2,
    SEND_MESSAGE:3,        
    COMPLETE:4
}



const initData={
    action:"input",
    dataType:"form",
    form:{          
          title:"Mobile Storage Example",          
          fields:[{            
            id:"contactInfo",
            label:"Save Our Contact Information",
            type:"button",
          },{            
            id:"sendMessageToUs",
            label:"Send Message To Us",
            type:"button"
          }]
    }
};



const mockSendMessage = async ({firstName,lastName,email,phone,message}) => {    
    return new Promise(function(resolve, reject){
         setTimeout(()=>{
             const messageBlob={firstName,lastName,email,phone,message};
             console.log("mock message sender completed:"+JSON.stringify(messageBlob));
         },1000);    
    });         
}