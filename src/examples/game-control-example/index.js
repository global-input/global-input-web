import React, { useReducer, useState, useRef, useEffect } from "react";
import {useGlobalInputApp} from 'global-input-react';
import * as dataUtil from './dataUtil';
import { PageContainer,Title, P,DisplayCanvas} from './app-layout';
export default ()=>{           
        const globalInputApp=useGlobalInputApp({initData:()=>dataUtil.getInitData()});
        const onCanvas=canvas=>{            
            dataUtil.game.initGame(canvas);            
        };
        
            const {connectionMessage, WhenConnected,WhenWaiting, WhenDisconnected}=globalInputApp;  
            return (
              <PageContainer>                      
                  
                  <WhenWaiting>
                      <Title>Mobile Control Example</Title>
                      {connectionMessage}                      
                  </WhenWaiting>
                  

      
                  
                  
                  <WhenDisconnected>
                      <P>Disconnected, reload the page to try again</P>               
                      
                      
                  </WhenDisconnected>
                  <WhenConnected>
                    <DisplayCanvas onCanvas={onCanvas}/>
                    
                  </WhenConnected>
                  
              </PageContainer>
            );     


}


