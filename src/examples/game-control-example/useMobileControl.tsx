import {useGlobalInputApp} from 'global-input-react';

export default (game)=>{
    var initData = {
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
            },{
                id: "speedText",
                type: "info",
                value: { type: "text", content: "30" },
                viewId: "row4",
            },{
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
            },{
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
            }]             
        }
    };
    const globalInputApp=useGlobalInputApp({initData});
    const setMoveSpeed=(speed)=>{        
        var speedValue = {
            type: "text",
            content: speed
        };        
        globalInputApp.setFieldValueById('speedText',speedValue);
    };
    const setPlayPauseButtonValue = (value)=>{
        globalInputApp.setFieldValueById('startPauseButton',value);                       
    };
    const seGameStatus = (message) => {
        const statusValue = {
            type: "view",
            style: {
                color:'red'
            },
            content:message                       
        };
        globalInputApp.setFieldValueById('gameStatus',statusValue);                       

    };
    return {...globalInputApp,setMoveSpeed,setPlayPauseButtonValue,seGameStatus}

};

