import GameComponent from './GameComponent';
let myGamePiece: GameComponent | null = null;
let myObstacles: GameComponent[] = [];
let myScore: GameComponent | null = null;
let interval: NodeJS.Timer | null = null;
let canvas: any = null;
let canvasContext: any = null;
let frameNo: number = 0;
let eventListeners: any = {};


const initGameState = () => {

    myGamePiece = new GameComponent(canvas, canvasContext, 30, 30, "red", 10, 120, 'rect');
    myGamePiece.gravity = 0.05;
    myScore = new GameComponent(canvas, canvasContext, "30px", "Consolas", "black", 280, 40, "text");
    frameNo = 0;
    myObstacles = [];
    updateGameArea();
};
export const initGame = (targetCanvas, listeners) => {
    canvas = targetCanvas;
    eventListeners = listeners;
    // canvas.width=480;
    // canvas.height=270;
    canvasContext = canvas && canvas.getContext("2d");
    initGameState();

};
const isGameStarted = () => {
    return interval;
};
const runGame = () => {
    if (!updateGameArea()) {
        stopGame();
    }
};
const startThread = () => {
    interval = setInterval(runGame, 20);
};
const stopThread = () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
};
export const stopGame = () => {
    stopThread();
    if (eventListeners.onGameStopped) {
        eventListeners.onGameStopped();
    }

}
export const pauseGame = () => {
    stopThread();
    if (eventListeners.onGamePaused) {
        eventListeners.onGamePaused();
    }

}


export const startGame = () => {
    stopThread();
    initGameState();
    startThread();
    if (eventListeners.onGameRunning) {
        eventListeners.onGameRunning();
    }
};
export const resumeGame = () => {
    stopThread();
    startThread();
    if (eventListeners.onGameRunning) {
        eventListeners.onGameRunning();
    }

};
const clearGame = () => {
    if (canvas) {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    }
};
const updateGameArea = () => {
    if (!canvas) {
        return;
    }
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (var i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece && myGamePiece.crashWith(myObstacles[i])) {
            return false;
        }
    }
    clearGame();
    frameNo += 1;
    if (frameNo === 1 || everyinterval(150)) {
        x = canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new GameComponent(canvas, canvasContext, 10, height, "green", x, 0, "react"));
        myObstacles.push(new GameComponent(canvas, canvasContext, 10, x - height - gap, "green", x, height + gap, "rect"));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    if (myScore) {
        myScore.text = "SCORE: " + frameNo;
        myScore.update();
    }

    //myGamePiece.newPos();
    myGamePiece && myGamePiece.update();
    return true;
};

const everyinterval = n => {
    if ((frameNo / n) % 1 === 0) { return true; }
    return false;
};

export const speedUp = () => {

    if (myGamePiece) {
        myGamePiece.moveSpeed++;
    }



    if (eventListeners.onSpeedChanges) {
        myGamePiece && eventListeners.onSpeedChanges(myGamePiece.moveSpeed);
    }

};
export const speedDown = () => {
    if (myGamePiece) {
        myGamePiece.moveSpeed--;
    }


    if (eventListeners.onSpeedChanges) {
        myGamePiece && eventListeners.onSpeedChanges(myGamePiece.moveSpeed);
    }
};
export const accelerate = n => {
    if (myGamePiece) {
        myGamePiece.gravity = n;
    }

};
export const onUpButtonPressed = () => {
    myGamePiece && myGamePiece.moveUp();
    if (!isGameStarted()) {
        updateGameArea();
    }
};
export const onDownButtonPressed = () => {
    myGamePiece && myGamePiece.moveDown();
    if (!isGameStarted()) {
        updateGameArea();
    }
};
export const onRightButtonPressed = () => {
    myGamePiece && myGamePiece.moveRight();
    if (!isGameStarted()) {
        updateGameArea();
    }
};
export const onLeftButtonPressed = () => {
    myGamePiece && myGamePiece.moveLeft();
    if (!isGameStarted()) {
        updateGameArea();
    }
};
