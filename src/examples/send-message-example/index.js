import React, { useReducer, useState, useRef, useEffect } from "react";

import {useGlobalInputApp} from 'global-input-react';



import { PageContainer,Title, P,A} from './app-layout';

import * as dataUtil from './dataUtil';




const ACTIONS={
        CONTACT:1,
        SEND_MESSAGE:2,        
        COMPLETE:4
}


export default ({location}) => {
    
    const [action, setAction]=useState(ACTIONS.CONTACT);
    const globalInputApp = useGlobalInputApp({initData:dataUtil.contact.getInitData});            

    useEffect(()=>{
        const {field}=globalInputApp;
        if(dataUtil.contact.isSendMessageButtonPressed(field)){
            setAction(ACTIONS.SEND_MESSAGE);
            globalInputApp.setInitData(dataUtil.sendMessage.getInitData);
        }
    },[globalInputApp.field]);


    const renderMain=()=>{
        switch(action){
            case ACTIONS.CONTACT:
                return(
                    <>
                        <Title>Our Contact Details</Title>
                        <P>Our contact details are displayed on your mobile screen. You can save it into your mobile storage by pressing the "save" button</P>
                        <P>You can continue to the next step by pressing the "Send Message To Us" button on your mobile</P>
                    </>
                );                        
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



export const DisplayApplicationInfo= () => (
    <P>
        This is an example application demonstrating how web applications can use the <a href="https://github.com/global-input/global-input-react">Global Input App library</a> to implement <A href="https://globalinput.co.uk/global-input-app/mobile-personal-storage">Mobile Personal Storage</A> as part of the mobile integration solution. 
    Its source code is available on <A href="https://github.com/global-input/send-message-example"> GitHub</A>    
    </P>  
  );

