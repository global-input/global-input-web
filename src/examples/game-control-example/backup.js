import React, { Component } from 'react'








import { styles } from "./styles";

import GlobalInputConnect from '../../components/global-input-connect';
import GameComponent from "./GameComponent";


const textContent = {
    title: "Game Control Example",
    githuburl: "https://github.com/global-input/game-control-example"
};

export default class GameControlExample extends Component {



    constructor(props) {
        super(props);
        this.state = { connected: false };
        this.mobile.init(props); //Initialize the mobile configuration
        this.mobile.uiForGameControl();
    }
    componentDidMount() {
        this.initGame(this.canvas);
        this.startGame();
        setTimeout(() => {
            this.stopGame();
        }, 5000);
    }



    render() {

        var barcodeContainerStyle = styles.barcodeContainer;
        if (this.state.connected) {
            barcodeContainerStyle = Object.assign({}, barcodeContainerStyle, { display: "none" });
        }

        var width = window.innerWidth - 50;
        var height = window.innerHeight - 50;



        return (
            <div style={styles.container}>

                <div style={styles.title}>
                    {textContent.title}
                </div>
                <div style={styles.githuburl}>
                    <a href={textContent.githuburl} target="_blank">{textContent.githuburl}</a>
                </div>
                <div style={styles.content}>

                    <canvas style={styles.canvas} width={width}
                        height={height} ref={canvas => this.canvas = canvas} />

                    <div style={barcodeContainerStyle}>
                        <div style={styles.barcode}>
                            <GlobalInputConnect mobileConfig={this.mobile.config}
                                ref={globalInputConnect => this.mobile.globalInputConnect = globalInputConnect}
                                connectingMessage="Connecting...."
                                connectedMessage="Scan with Global Input App"
                                reconnectOnDisconnect={true} />
                        </div>
                    </div>
                </div>
            </div>

        );

    }
    myGamePiece = null
    myObstacles = []
    myScore = 0

    initGameState() {
        this.myGamePiece = new GameComponent(this, 30, 30, "red", 10, 120);
        this.myGamePiece.gravity = 0.05;
        this.myScore = new GameComponent(this, "30px", "Consolas", "black", 280, 40, "text");
        this.frameNo = 0;
        this.myObstacles = [];
        this.updateGameArea();
    }
    initGame(canvas) {
        this.canvas = canvas;
        // canvas.width=480;
        // canvas.height=270;
        this.canvasContext = canvas.getContext("2d");
        this.initGameState();
    }
    isGameStarted() {
        return this.interval;
    }
    startGame() {

        this.stopThread();
        this.initGameState();
        this.startThread();
        this.mobile.showPauseButton();
    }
    resumeGame() {
        this.stopThread();
        this.startThread();


        this.mobile.showPauseButton();

    }
    startThread() {
        this.interval = setInterval(this.runGame.bind(this), 20);
    }
    stopThread() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }

    }
    runGame() {
        if (!this.updateGameArea()) {
            this.stopGame();
        }
    }
    stopGame() {
        this.stopThread();
        this.mobile.showPlayButton();


    }


    clearGame() {
        if (this.canvas) {
            this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

    }
    updateGameArea() {
        if (!this.canvas) {
            return;
        }
        var x, height, gap, minHeight, maxHeight, minGap, maxGap;
        for (var i = 0; i < this.myObstacles.length; i += 1) {
            if (this.myGamePiece.crashWith(this.myObstacles[i])) {
                return false;
            }
        }
        this.clearGame();
        this.frameNo += 1;
        if (this.frameNo === 1 || this.everyinterval(150)) {
            x = this.canvas.width;
            minHeight = 20;
            maxHeight = 200;
            height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
            minGap = 50;
            maxGap = 200;
            gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
            this.myObstacles.push(new GameComponent(this, 10, height, "green", x, 0));
            this.myObstacles.push(new GameComponent(this, 10, x - height - gap, "green", x, height + gap));
        }
        for (i = 0; i < this.myObstacles.length; i += 1) {
            this.myObstacles[i].x += -1;
            this.myObstacles[i].update();
        }
        this.myScore.text = "SCORE: " + this.frameNo;
        this.myScore.update();
        //this.myGamePiece.newPos();
        this.myGamePiece.update();
        return true;
    }

    everyinterval(n) {
        if ((this.frameNo / n) % 1 === 0) { return true; }
        return false;
    }
    speedUp() {
        this.myGamePiece.moveSpeed++;
        this.mobile.setMoveSpeed(this.myGamePiece.moveSpeed);
    }
    speedDown() {
        this.myGamePiece.moveSpeed--;
        this.mobile.setMoveSpeed(this.myGamePiece.moveSpeed);

    }
    accelerate(n) {
        this.myGamePiece.gravity = n;
    }
    onUpButtonPressed() {
        this.myGamePiece.moveUp();
        if (!this.isGameStarted()) {
            this.updateGameArea();
        }
    }

    onDownButtonPressed() {
        this.myGamePiece.moveDown();
        if (!this.isGameStarted()) {
            this.updateGameArea();
        }
    }
    onRightButtonPressed() {
        this.myGamePiece.moveRight();
        if (!this.isGameStarted()) {
            this.updateGameArea();
        }
    }
    onLeftButtonPressed() {
        this.myGamePiece.moveLeft();
        if (!this.isGameStarted()) {
            this.updateGameArea();
        }
    }

    /****************************All the Mobile UI interfaces are defined below ***********/

    mobile = {
        globalInputConnect: null,
        config: null,
        disconnect: () => {
            if (this.mobile.globalInputConnect) {
                this.mobile.globalInputConnect.disconnectGlobaInputApp();
            }
        },
        sendMessage: (message, fieldid) => {
            if (this.mobile.globalInputConnect) {
                this.mobile.globalInputConnect.sendInputMessage(message, null, fieldid);
            }
        },
        addField: (field, form) => {
            const findex = form.fields.length;
            var setMobileFieldFunction = value => {
                if (this.mobile.globalInputConnect) {
                    this.mobile.globalInputConnect.sendInputMessage(value, findex);
                }
            };
            form.fields.push(field);
            return setMobileFieldFunction;
        },
        init: (props) => {
            this.mobile.config = {
                url: props.url,
                apikey: props.apikey,
                securityGroup: props.securityGroup,
                initData: null,
                onSenderConnected: () => {

                    this.setState(Object.assign({}, this.state, { connected: true }));
                },
                onSenderDisconnected: () => {
                    this.setState(Object.assign({}, this.state, { connected: false }));
                }
            };
        },
        setInitData: initData => {
            this.mobile.config.initData = initData;
            if (this.mobile.globalInputConnect) {
                this.mobile.globalInputConnect.changeInitData(initData);
            }
        },
        uiForGameControl: () => {

            var initData = {
                action: "input",
                dataType: "control",
                form: {
                    title: "Game Control",
                    fields: [],
                    views: {
                        viewId: {
                            footer: {
                                style: {
                                    justifyContent: "space-between",
                                    width: "100%",
                                }
                            }
                        }


                    }
                }
            };

            const upButton = {
                id: "upButton",
                type: "button",
                icon: "up",
                viewId: "row1",
                operations: { onInput: value => this.onUpButtonPressed() }
            };
            this.mobile.addField(upButton, initData.form);

            const leftButton = {
                id: "leftButton",
                type: "button",
                icon: "left",
                viewId: "row2",
                operations: { onInput: value => this.onLeftButtonPressed() }
            };
            this.mobile.addField(leftButton, initData.form);


            const infoField = {
                id: "infoField",
                type: "info",
                value: {
                    type: "view",
                    style: {
                        minWidth: 36,
                        minHeight: 36
                    }
                },
                viewId: "row2"
            };

            this.mobile.addField(infoField, initData.form);

            const rightButton = {
                id: "rightButton",
                type: "button",
                icon: "right",
                viewId: "row2",
                operations: { onInput: value => this.onRightButtonPressed() }
            };
            this.mobile.addField(rightButton, initData.form);

            const downButton = {
                id: "downButton",
                type: "button",
                icon: "down",
                viewId: "row3",
                operations: { onInput: value => this.onDownButtonPressed() }
            };
            this.mobile.addField(downButton, initData.form);

            const speedDown = {
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
                operations: { onInput: value => this.speedDown() }
            };
            this.mobile.addField(speedDown, initData.form);

            const speedText = {
                id: "speedText",
                type: "info",
                value: { type: "text", content: "30" },
                viewId: "row4",
            };
            const sendSpeedText = this.mobile.addField(speedText, initData.form);


            this.mobile.setMoveSpeed = speed => {
                var speedValue = {
                    type: "text",
                    content: speed
                };
                sendSpeedText(speedValue);
            };
            const speedUp = {
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
                operations: { onInput: value => this.speedUp() }
            };
            this.mobile.addField(speedUp, initData.form);

            const backButton = {
                label: "Disconnect",
                type: "button",
                icon: "disconnect",
                viewId: "footer",
                operations: { onInput: value => this.mobile.globalInputConnect.disconnect() },
                container: { label: "" }
            };
            this.mobile.addField(backButton, initData.form);

            const startPauseButton = {
                id: "startPauseButton",
                type: "button",
                value: 0,
                label: "Start",
                options: [{ value: 0, label: "Start", icon: "play" }, { value: 1, label: "Pause", icon: "pause" }],
                viewId: "footer",
                operations: { onInput: value => value ? this.stopGame() : this.resumeGame() }
            };
            const changeStartPauseValue = this.mobile.addField(startPauseButton, initData.form);
            this.mobile.showPlayButton = () => changeStartPauseValue(0);
            this.mobile.showPauseButton = () => changeStartPauseValue(1);

            const newGameButton = {
                id: "newGrameButton",
                type: "button",
                label: "New Game",
                container: { label: "New Game" },
                icon: "reset",
                viewId: "footer",
                operations: { onInput: value => this.startGame() }
            };
            this.mobile.addField(newGameButton, initData.form);

            this.mobile.setInitData(initData);

        }
    }


}
