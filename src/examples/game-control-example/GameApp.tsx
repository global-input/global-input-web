import React from "react";


import { useMobile } from './mobile';
import { PageContainer, Title, P, DisplayCanvas, A, AppFooter, MessageButton, MessageLink } from './app-layout';
import * as game from "./game";

interface Props {
    connectionSettings: () => void;
}
const GameApp: React.FC<Props> = ({ connectionSettings }) => {
    const mobile = useMobile(initData);

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

    const onCanvas = (canvas: any) => {
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
        const listeners = {
            onGameRunning,
            onGameStopped,
            onGamePaused,
            onSpeedChanges
        };
        game.initGame(canvas, listeners);
    };

    return (
        <PageContainer>
            <Title>Global Input App Mobile Control Example</Title>
            {(!mobile.isConnected) && (
                <>
                    <mobile.ConnectQR />
                    <AppFooter>
                        <MessageButton label="Settings" onClick={connectionSettings} />
                        <MessageLink href="https://github.com/global-input/game-control-example">Source Code</MessageLink>
                    </AppFooter>
                </>
            )}



            {mobile.isConnected && (
                <DisplayCanvas onCanvas={onCanvas} />
            )}

        </PageContainer>
    );
}


export const DisplayApplicationInfo = () => (
    <P>
        This example application (with <A href="https://github.com/global-input/game-control-example">its source code</A>) demonstrates how web applications can use the <A href="https://github.com/global-input/global-input-react">extension library</A> to implement <a href="https://globalinput.co.uk/global-input-app/mobile-input-control">mobile control</a> as part of the mobile integration.
    </P>
);


const FIELDS = {
    status: {
        id: "gameStatus",
        type: "info",
        value: null,

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
    info: {
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
        label: "Start",
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
const initData = {
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
        fields: Object.values(FIELDS)
    }
};


export default GameApp;