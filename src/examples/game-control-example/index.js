import React, { useReducer, useState, useRef, useEffect } from "react";
import {useGlobalInputApp} from 'global-input-react';
import * as dataUtil from './dataUtil';
import { PageContainer,Title, P,DisplayCanvas,A} from './app-layout';

export default ()=>{           
        const globalInputApp=useGlobalInputApp({initData:dataUtil.mobile.getInitData});
        
        const onCanvas=canvas=>{                
            const onGameRunning=()=>{                                
                dataUtil.mobile.setPlayPauseButtonValue(globalInputApp,1);
                dataUtil.mobile.seGameStatus(globalInputApp,'Game Stated');
                
                
            }
            const onGameStopped=()=>{                
                 dataUtil.mobile.setPlayPauseButtonValue(globalInputApp,0);                
                 dataUtil.mobile.seGameStatus(globalInputApp,'Game Over');
            }
            const onGamePaused=()=>{
                 dataUtil.mobile.setPlayPauseButtonValue(globalInputApp,3);                
                 dataUtil.mobile.seGameStatus(globalInputApp,'Game Paused');
            }
            const onSpeedChanges=moveSpeed=>{
                dataUtil.mobile.setMoveSpeed(globalInputApp,moveSpeed);
            };
            const listeners={
                onGameRunning,
                onGameStopped,
                onGamePaused,
                onSpeedChanges
            };
            dataUtil.game.initGame(canvas,listeners);            
        };
        
            const {connectionMessage, WhenConnected,WhenWaiting, WhenDisconnected}=globalInputApp;  
            return (
              <PageContainer> 
                  <WhenWaiting>
                      <Title>Mobile Control Example</Title>
                      {connectionMessage} 
                      <DisplayApplicationInfo/>                     
                  </WhenWaiting>                  
                  <WhenDisconnected>
                  <Title>Mobile Control Example</Title>
                      <P>Disconnected, reload the page to try again</P>               
                      <DisplayApplicationInfo/>                     
                  </WhenDisconnected>
                  <WhenConnected>
                    <DisplayCanvas onCanvas={onCanvas}/>                    
                  </WhenConnected>
                  
              </PageContainer>
            );     


}


export const DisplayApplicationInfo= () => (
    <P>
        This is an example application demonstrating how web applications can use the <a href="https://github.com/global-input/global-input-react">Global Input App library</a> to implement <A href="https://globalinput.co.uk/global-input-app/mobile-input-control">mobile control</A> as part of the mobile integration. 
        Its source code is available on <A href="https://github.com/global-input/game-control-example"> GitHub</A>.    
    </P>  
  );



