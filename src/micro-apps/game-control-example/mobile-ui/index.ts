import {useState} from 'react';
import { useHistory } from 'react-router-dom'; ////website
import { useMobile, ConnectWindow, ConnectButton } from '../mobile';

import * as mobileUI from '../../micro-apps/mobile-ui'; ////website
import * as game from "../game";

export * from '../mobile';

const FIELDS = {
    status: {
        id: "gameStatus",
        type: "info",
        value: " ",
    },
    score: {
        id: "score",
        type: "info",
        value: " ",
    },
    up: {
        id: "upButton",
        type: "button",
        icon: "up",
        viewId: "row1",
        operations: { onInput: game.onUpButtonPressed }
    },
    left: {
        id: "leftButton",
        type: "button",
        icon: "left",
        viewId: "row2",
        operations: { onInput: game.onLeftButtonPressed }
    },

    right: {
        id: "rightButton",
        type: "button",
        icon: "right",
        viewId: "row2",
        operations: { onInput: game.onRightButtonPressed }
    },
    down: {
        id: "downButton",
        type: "button",
        icon: "down",
        viewId: "row3",
        operations: { onInput: game.onDownButtonPressed }
    },
    speed: {
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
    },
    speedText: {
        id: "speed-text",
        type: "info",
        value: { type: "text", content: "30" },
        viewId: "row4",
    },
    speedUp: {
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
    },
    startPause: {
        id: "startPauseButton",
        type: "button",
        value: 0,
        label: "row5",
        options: [{ value: 0, label: "Start", icon: "play" },
        { value: 1, label: "Pause", icon: "pause" },
        { value: 2, label: "Resume", icon: "play" }],
        viewId: "footer",
        operations: {
            onInput: value => {
                switch (value) {
                    case 0: game.startGame(); break;
                    case 1: game.pauseGame(); break;
                    case 2: game.resumeGame(); break;
                }
            }
        }
    }
};

mobileUI.add(FIELDS);////website
const initData = {
    id: 'game-controller',
    form: {
        title: "Mobile Control Example",
        views: {
            viewIds: {
                row2: {
                    style: {
                        justifyContent: "space-between",

                        width: "100%",
                        maxWidth:300,

                    }

                },
                row4:{
                    style: {
                        justifyContent: "space-between",

                        width: "100%",
                        maxWidth:300,

                    }
                },
                row5: {
                    style: {
                        justifyContent: "center",
                        width: "100%",
                    }
                }
            }
        },
        fields: Object.values(FIELDS)
    }
};


export const useConnectMobile =() => {
    const history = useHistory();////website
    const mobile = useMobile(initData, true);
    const [score,setScore]=useState(0);

    mobile.setOnchange(({field}) => {////website
    mobileUI.onFieldChange(field, history); ////website
    });////website


    const setMoveSpeed = (speed) => {
        var speedValue = {
            type: "text",
            content: speed
        };
        mobile.sendValue(FIELDS.speedText.id, speedValue);
    };

    const seGameStatus = (message) => {
        const statusValue = {
            type: "view",
            style: {
                color: 'red'
            },
            content: message
        };
        mobile.sendValue(FIELDS.status.id, statusValue);

    };
    const onGameRunning = () => {
        mobile.sendValue(FIELDS.startPause.id, FIELDS.startPause.options[1].value);
        seGameStatus('Game Stated');
    }
    const onGameStopped = () => {
            mobile.sendValue(FIELDS.startPause.id, FIELDS.startPause.options[0].value);
            seGameStatus('Game Over');
    }
    const onGamePaused = () => {
            mobile.sendValue(FIELDS.startPause.id, FIELDS.startPause.options[2].value);
            seGameStatus('Game Paused');
    }
    const onSpeedChanges = (moveSpeed: number) => {
            setMoveSpeed(moveSpeed);
    };
    const onFrameNo=(fameNo)=>{
        setScore(fameNo);
        mobile.sendValue(FIELDS.score.id,`Score:${fameNo}`);
    }
    const listeners = {
            onGameRunning,
            onGameStopped,
            onGamePaused,
            onSpeedChanges,
            onFrameNo
    };
    return {mobile,listeners};
}
