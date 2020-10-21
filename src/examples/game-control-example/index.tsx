import React from "react";


import {useGlobalInputApp} from 'global-input-react';
import { PageContainer,Title, P,DisplayCanvas,A} from './app-layout';
import * as game from "./game";


const speedTextField={
    id: "speed-text",
    type: "info",
    value: { type: "text", content: "30" },
    viewId: "row4",
};


const startPauseButton={
    id: "startPauseButton",
    type: "button",
    value: 0,
    label: "Start",
    options: [{ value: 0, label: "Start", icon: "play" }, 
              { value: 1, label: "Pause", icon: "pause" },
              { value: 3, label: "Resume", icon: "play" }],
    viewId: "footer",
    operations: { onInput: value => {
        switch(value){
                case 0:game.startGame(); break;
                case 1:game.pauseGame();break;
                case 3:game.resumeGame();break;
        }                        
    }}
};





const initData = {
        action: "input",
        dataType: "control",
        form: {
            title: "Mobile Control Example",                
            views: {
                viewId: {
                    footer: {
                        style: {
                            justifyContent: "space-between",
                            width: "100%",
                        }
                    }
                }    
            },
            fields: [{
                id: "gameStatus",
                type: "info",
                value: null,                    
                
            },{
                id: "upButton",
                type: "button",
                icon: "up",
                viewId: "row1",
                operations: { onInput: game.onUpButtonPressed}
            },{
                id: "leftButton",
                type: "button",
                icon: "left",
                viewId: "row2",
                operations: { onInput: game.onLeftButtonPressed}
            },{
                id: "infoField",
                type: "info",
                value: {
                    type: "view",
                    style: {
                        minWidth: 36,
                        minHeight: 36
                    },                        
                },                    
                viewId: "row2"
            },{
                id: "rightButton",
                type: "button",
                icon: "right",
                viewId: "row2",
                operations: { onInput: game.onRightButtonPressed }
            },{
                id: "downButton",
                type: "button",
                icon: "down",
                viewId: "row3",
                operations: { onInput: game.onDownButtonPressed }
            },{
                id: "speedDown",
                type: "button",
                label: "Speed Down",
                iconText: {
                    content: "-",
                    style: { fontSize: 36 },
                },
                style: {
                    borderColor: "green",
                    paddingRight: 10
                },
                viewId: "row4",
                operations: { onInput: game.speedDown }
            },speedTextField,{
                id: "speedUp",
                type: "button",
                label: "Speed Up",
                style: { borderColor: "green" },
                iconText: {
                    content: "+",
                    style: {
                        fontSize: 36,
                    }
                },
                viewId: "row4",
                operations: { onInput: game.speedUp }
            },startPauseButton]             
        }
    };


export default ()=>{
        const mobile=useGlobalInputApp({initData});
        
        const setMoveSpeed=(speed)=>{        
            var speedValue = {
                type: "text",
                content: speed
            };        
            mobile.sendValue(speedTextField.id,speedValue);
        };
        
        const seGameStatus = (message) => {
            const statusValue = {
                type: "view",
                style: {
                    color:'red'
                },
                content:message                       
            };
            mobile.sendValue('gameStatus',statusValue);                       
    
        };

        const onCanvas=(canvas:any)=>{                
            const onGameRunning=()=>{                                
                
                mobile.sendValue(startPauseButton.id,1);                       
                seGameStatus('Game Stated');                                
            }
            const onGameStopped=()=>{                                
                mobile.sendValue(startPauseButton.id,0);                       
                seGameStatus('Game Over');
            }
            const onGamePaused=()=>{                
                mobile.sendValue(startPauseButton.id,3);                             
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
                    <Title>Mobile Control Example</Title>                                        
                    <mobile.ConnectQR>
                        <P>
                        Scan with <a href="https://globalinput.co.uk/global-input-app/get-app" target="_blank"> Global Input App</a>
                        </P>
                        <DisplayApplicationInfo/> 
                    </mobile.ConnectQR>                
                {mobile.isDisconnected && (
                    <>                
                    <P>Disconnected, reload the page to try again</P>               
                    <DisplayApplicationInfo/>                     
                    </>
                )}             
                {mobile.isConnected && (
                  <DisplayCanvas onCanvas={onCanvas}/>                    
                )}       
                                                                                              
            </PageContainer>
          );  
}


export const DisplayApplicationInfo= () => (
    <P>
        This example application (with <A href="https://github.com/global-input/game-control-example">its source code</A>) demonstrates how web applications can use the <A href="https://github.com/global-input/global-input-react">extension library</A> to implement <a href="https://globalinput.co.uk/global-input-app/mobile-input-control">mobile control</a> as part of the mobile integration.         
    </P>  
  );



