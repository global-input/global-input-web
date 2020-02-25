export const mobile=(()=>{
    const getInitData=()=>{
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
        return initData;
    };
    
    
    const setMoveSpeed=(globalInputApp,speed)=>{        
        var speedValue = {
            type: "text",
            content: speed
        };        

        globalInputApp.setFieldValueById('speedText',speedValue);
    };
    const setPlayPauseButtonValue = (globalInputApp, value)=>{
        globalInputApp.setFieldValueById('startPauseButton',value);                       
    }
    const seGameStatus = (globalInputApp,message) => {
        const statusValue = {
            type: "view",
            style: {
                color:'red'
            },
            content:message                       
        };
        globalInputApp.setFieldValueById('gameStatus',statusValue);                       

    };
    return {
        getInitData,
        setMoveSpeed,
        setPlayPauseButtonValue,
        seGameStatus
    }
        
    
})();



class GameComponent{
    constructor(canvas,canvasContext,width, height, color, x, y, type){          
            this.type = type;
            this.score = 0;
            this.width = width;
            this.height = height;
            this.speedX = 0;
            this.speedY = 0;
            this.x = x;
            this.y = y;
            this.gravity = 0;
            this.moveSpeed = 30;
            this.canvas=canvas;
            this.canvasContext=canvasContext;
            this.color=color;
     }
     update() {
            var ctx = this.canvasContext;
            if (this.type === "text") {
                   ctx.font = this.width + " " + this.height;
                   ctx.fillStyle = this.color;
                   ctx.fillText(this.text, this.x, this.y);
             } else {
                   ctx.fillStyle = this.color;
                   ctx.fillRect(this.x, this.y, this.width, this.height);
             }
      }
      newPos() {
       this.moveSpeed += this.gravity;
       this.x += this.speedX;
       this.y += this.speedY + this.moveSpeed;
       this.hitBottom();
      }
      moveUp(){
          this.y-=this.moveSpeed;
          if(this.y<0){
              this.y=0;
          }
      }
      moveDown(){
        this.y+=this.moveSpeed;
        var rockbottom = this.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
      }
      moveRight(){
            this.x+=this.moveSpeed;
            var rockbottom = this.canvas.width - this.width;
            if (this.x > rockbottom) {
                this.x = rockbottom;
            }
      }
      moveLeft(){
            this.x-=this.moveSpeed;
            if (this.x <0) {
                this.x = 0;
            }
      }
      hitBottom(){
        var rockbottom = this.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.moveSpeed = 1;
        }
      }
      crashWith(otherobj){
             var myleft = this.x;
             var myright = this.x + (this.width);
             var mytop = this.y;
             var mybottom = this.y + (this.height);
             var otherleft = otherobj.x;
             var otherright = otherobj.x + (otherobj.width);
             var othertop = otherobj.y;
             var otherbottom = otherobj.y + (otherobj.height);
             var crash = true;
             if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
                 crash = false;
             }
             return crash;
      }


   }




   export const game= (()=>{
    let myGamePiece = null;
    let myObstacles = [];
    let myScore = 0;
    let interval=null;
    let canvas=null;
    let canvasContext=null;
    let frameNo=null; 
    let eventListeners={};

    
    const initGameState = () => {
        
        myGamePiece = new GameComponent(canvas, canvasContext,30, 30, "red", 10, 120);
        myGamePiece.gravity = 0.05;
        myScore = new GameComponent(canvas, canvasContext, "30px", "Consolas", "black", 280, 40, "text");
        frameNo = 0;
        myObstacles = [];
        updateGameArea();
    };
    const initGame = (targetCanvas, listeners) => {
        canvas = targetCanvas;
        eventListeners=listeners;        
        // canvas.width=480;
        // canvas.height=270;
        canvasContext = canvas.getContext("2d");
        initGameState();

    };
    const isGameStarted =() => {
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
    const stopThread = () =>  {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    };
    const stopGame = () => {
        stopThread();
        if(eventListeners.onGameStopped){
            eventListeners.onGameStopped();
        }
        
    }
    const pauseGame = () => {
        stopThread();
        if(eventListeners.onGamePaused){
            eventListeners.onGamePaused();
        }
        
    }

    
    const startGame = () => {        
        stopThread();        
        initGameState();
        startThread();
        if(eventListeners.onGameRunning){
            eventListeners.onGameRunning();
        }
    };
    const resumeGame = () => {
        stopThread();
        startThread();
        if(eventListeners.onGameRunning){
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
            if (myGamePiece.crashWith(myObstacles[i])) {
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
            myObstacles.push(new GameComponent(canvas, canvasContext, 10, height, "green", x, 0));
            myObstacles.push(new GameComponent(canvas, canvasContext, 10, x - height - gap, "green", x, height + gap));
        }
        for (i = 0; i < myObstacles.length; i += 1) {
            myObstacles[i].x += -1;
            myObstacles[i].update();
        }
        myScore.text = "SCORE: " + frameNo;
        myScore.update();
        //myGamePiece.newPos();
        myGamePiece.update();
        return true;
    };
    
    const everyinterval = n => {
        if ((frameNo / n) % 1 === 0) { return true; }
        return false;
    };

    const speedUp = () => {
        
        myGamePiece.moveSpeed++; 
        

        if(eventListeners.onSpeedChanges){
            eventListeners.onSpeedChanges(myGamePiece.moveSpeed);
        }      

    };
    const speedDown = () => {
        
        myGamePiece.moveSpeed--;
        
        if(eventListeners.onSpeedChanges){
            eventListeners.onSpeedChanges(myGamePiece.moveSpeed);
        }
    };
    const accelerate = n => {
        myGamePiece.gravity = n;
    };
    const onUpButtonPressed = () => {
        myGamePiece.moveUp();
        if (!isGameStarted()) {
            updateGameArea();
        }
    };
    const onDownButtonPressed = () =>  {
        myGamePiece.moveDown();
        if (!isGameStarted()) {
            updateGameArea();
        }
    };
    const onRightButtonPressed = () =>  {
        myGamePiece.moveRight();
        if (!isGameStarted()) {
            updateGameArea();
        }
    };
    const onLeftButtonPressed = () => {
        myGamePiece.moveLeft();
        if (!isGameStarted()) {
            updateGameArea();
        }
    };




    return {
        onUpButtonPressed,
        onLeftButtonPressed,
        onRightButtonPressed,
        onDownButtonPressed,
        speedDown,
        speedUp,
        stopGame,
        pauseGame,
        resumeGame,
        startGame,
        initGame
    }

    
})();