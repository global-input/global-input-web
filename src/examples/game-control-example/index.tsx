import React from "react";


import useMobileControl from './useMobileControl';
import { PageContainer,Title, P,DisplayCanvas,A} from './app-layout';
import * as game from "./game";

export default ()=>{
        const {connectionMessage, WhenConnected,WhenWaiting, WhenDisconnected,
            setMoveSpeed,setPlayPauseButtonValue,seGameStatus}=useMobileControl(game);

        const onCanvas=(canvas:any)=>{                
            const onGameRunning=()=>{                                
                setPlayPauseButtonValue(1);
                seGameStatus('Game Stated');                                
            }
            const onGameStopped=()=>{                
                setPlayPauseButtonValue(0);                
                seGameStatus('Game Over');
            }
            const onGamePaused=()=>{
                setPlayPauseButtonValue(3);                
                seGameStatus('Game Paused');
            }
            const onSpeedChanges=(moveSpeed:number)=>{
                setMoveSpeed(moveSpeed);
            };
            const listeners={
                onGameRunning,
                onGameStopped,
                onGamePaused,
                onSpeedChanges
            };
            game.initGame(canvas,listeners);            
        };

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
        This example application (with <A href="https://github.com/global-input/game-control-example">its source code</A>) demonstrates how web applications can use the <A href="https://github.com/global-input/global-input-react">extension library</A> to implement <a href="https://globalinput.co.uk/global-input-app/mobile-input-control">mobile control</a> as part of the mobile integration.         
    </P>  
  );



