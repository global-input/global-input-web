import React, {Component} from 'react'








import {styles} from "./styles";

import GlobalInputConnect from '../../components/global-input-connect';
import GameComponent from "./GameComponent";
import GameArea from "./GameArea";

const textContent={
    title:"Game Control Example",
    githuburl:"https://github.com/global-input/game-control-example"
};

export default class GameControlExample extends Component {



    constructor(props){
        super(props);
        this.initMobileData(props);
    }

    initMobileData(props){
              this.mobile={
                    globalInputConnect:null,
                    sendMessage:(message, fieldid)=>{
                          if(this.mobile.globalInputConnect){
                                this.mobile.globalInputConnect.sendInputMessage(message,null,fieldid);
                          }

                    },
                    config:{
                                  url:props.url,
                                  apikey:props.apikey,
                                  securityGroup:props.securityGroup,
                                  initData:{
                                      action:"input",
                                      dataType:"control",
                                      form:{
                                        title:"Game Control",
                                        fields:[],
                                        views:{
                                            viewIds:{
                                                  footer:{
                                                     style:{
                                                          justifyContent:"space-between",
                                                          width:"100%",
                                                     }
                                                  }
                                            }

                                        }
                                      }
                                  }
                    },
                    addField: field=>this.mobile.config.initData.form.fields.push(field)
              };
              const upButton={
                        id:   "upButton",
                        type: "button",
                        icon: "up",
                        viewId:"row1",
                        operations:{onInput: value=> this.onUpButtonPressed()}
              };
              this.mobile.addField(upButton);

              const leftButton={
                        id:   "leftButton",
                        type: "button",
                        icon: "left",
                        viewId:"row2",
                        operations:{onInput: value=>this.onLeftButtonPressed()}
              };
              this.mobile.addField(leftButton);


              const infoField={
                        id:"infoField",
                        type: "info",
                        value:{
                        type:"view",
                        style:{
                            minWidth:36,
                            minHeight:36
                            }
                        },
                        viewId:"row2"
               };
              this.mobile.addField(infoField);

              const rightButton={
                      id:   "rightButton",
                      type: "button",
                      icon: "right",
                      viewId:"row2",
                      operations:{onInput: value=>this.onRightButtonPressed()}
               };
              this.mobile.addField(rightButton);

              const downButton={
                        id:   "downButton",
                        type: "button",
                        icon: "down",
                        viewId:"row3",
                        operations:{onInput: value=>this.onDownButtonPressed()}
               };
              this.mobile.addField(downButton);


              const speedDown={
                        id:   "speedDown",
                        type: "button",
                        label:"Speed Down",
                        iconText:{
                            content:"-",
                            style:{fontSize:36},
                        },
                        style:{
                            borderColor:"green",
                            paddingRight:10
                        },
                        viewId:"row4",
                        operations:{onInput: value=>this.speedDown()}
               };
              this.mobile.addField(speedDown);

              const speedText={
                    id:"speedText",
                    type:"info",
                    value:{type:"text",content:"30"},
                    viewId:"row4",
              }
              this.mobile.addField(speedText);


              this.mobile.setMoveSpeed=speed=>{
                   var speedValue={
                     type:"text",
                     content:speed
                   };
                   this.mobile.sendMessage(speedValue,speedText.id);
              };



              const speedUp={
                    id:    "speedUp",
                    type:  "button",
                    label: "Speed Up",
                    style:{borderColor:"green"},
                    iconText:{
                          content:"+",
                          style:{
                                fontSize:36,
                          }
                    },
                    viewId:"row4",
                    operations:{onInput: value=>this.speedUp()}
              };
              this.mobile.addField(speedUp);

              const backButton={
                    label:"Disconnect",
                    type:"button",
                    icon:"disconnect",
                    viewId:"footer",
                    operations:{onInput: value=>this.connectGlobalInput()},
                    container:{label:""}
              }
              this.mobile.addField(backButton);

              const startPauseButton={
                    id:   "startPauseButton",
                    type: "button",
                    value:0,
                    label:"Start",
                    options:[{value:0,label:"Start",icon:"play"},{value:1,label:"Pause",icon:"pause"}],
                    viewId:"footer",
                    operations:{onInput: value => value?this.stopGame():this.resumeGame()}
              };
              this.mobile.addField(startPauseButton);

              this.mobile.showPlayButton = () => this.mobile.sendMessage(0,startPauseButton.id);
              this.mobile.showPauseButton= () => this.mobile.sendMessage(1,startPauseButton.id);


              const newGameButton={
                    id:  "newGrameButton",
                    type: "button",
                    label:"New Game",
                    container:{label:"New Game"},
                    icon: "reset",
                    viewId:"footer",
                    operations:{onInput: value=>this.startGame()}
              };
              this.mobile.addField(newGameButton);




    }

    render(){
          var w = window.innerWidth-50;
          var h = window.innerHeight-50;

          var videoHeight=h-50;
          var videoWidth=16*videoHeight/9;
          if(videoWidth>w){
              videoWidth=w-50;
              videoHeight=9*videoWidth/16;
          }

      return(
        <div style={styles.container}>

        <div style={styles.title}>
            {textContent.title}
        </div>
        <div style={styles.githuburl}>
            <a href={textContent.githuburl} target="_blank">{textContent.githuburl}</a>
        </div>

        <GlobalInputConnect mobileConfig={this.mobile.config}
          ref={globalInputConnect =>this.mobile.globalInputConnect=globalInputConnect}
          connectingMessage="Connecting...."
          connectedMessage="Scan with Global Input App">
                <GameArea initGame={this.initGame.bind(this)}/>
          </GlobalInputConnect>
        </div>

      );

    }
    myGamePiece=null
    myObstacles = []
    myScore=0

    initGameState(){
         this.myGamePiece = new GameComponent(this,30, 30, "red", 10, 120);
         this.myGamePiece.gravity = 0.05;
         this.myScore = new GameComponent(this,"30px", "Consolas", "black", 280, 40, "text");
         this.frameNo = 0;
         this.myObstacles=[];
         this.updateGameArea();
     }
    initGame(canvas){
      this.canvas=canvas;
      // canvas.width=480;
      // canvas.height=270;
      this.canvasContext=canvas.getContext("2d");
      this.initGameState();
    }
    isGameStarted(){
          return this.interval;
    }
    startGame() {

    this.stopThread();
    this.initGameState();
    this.startThread();
    this.mobile.showPauseButton();
}
    resumeGame(){
      this.stopThread();
      this.startThread();


      this.mobile.showPauseButton();

    }
    startThread(){
      this.interval = setInterval(this.runGame.bind(this), 20);
    }
    stopThread(){
      if(this.interval){
          clearInterval(this.interval);
          this.interval=null;
      }

    }
    runGame(){
        if(!this.updateGameArea()){
              this.stopGame();
        }
    }
    stopGame(){
        this.stopThread();
        this.mobile.showPlayButton();


    }


    clearGame() {
         this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
     updateGameArea() {

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
          height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
          minGap = 50;
          maxGap = 200;
          gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
          this.myObstacles.push(new GameComponent(this,10, height, "green", x, 0));
          this.myObstacles.push(new GameComponent(this,10, x - height - gap, "green", x, height + gap));
      }
      for (i = 0; i < this.myObstacles.length; i += 1) {
          this.myObstacles[i].x += -1;
          this.myObstacles[i].update();
      }
      this.myScore.text="SCORE: " + this.frameNo;
      this.myScore.update();
      //this.myGamePiece.newPos();
      this.myGamePiece.update();
      return true;
    }

    everyinterval(n) {
      if ((this.frameNo / n) % 1 === 0) {return true;}
      return false;
    }
    speedUp(){
    this.myGamePiece.moveSpeed++;
    this.mobile.setMoveSpeed(this.myGamePiece.moveSpeed);
    }
    speedDown(){
    this.myGamePiece.moveSpeed--;
    this.mobile.setMoveSpeed(this.myGamePiece.moveSpeed);

    }
    accelerate(n) {
      this.myGamePiece.gravity = n;
    }
    onUpButtonPressed(){
      this.myGamePiece.moveUp();
      if(!this.isGameStarted()){
         this.updateGameArea();
      }
    }

    onDownButtonPressed(){
    this.myGamePiece.moveDown();
    if(!this.isGameStarted()){
       this.updateGameArea();
    }
    }
    onRightButtonPressed(){
    this.myGamePiece.moveRight();
    if(!this.isGameStarted()){
       this.updateGameArea();
    }
    }
    onLeftButtonPressed(){
    this.myGamePiece.moveLeft();
    if(!this.isGameStarted()){
       this.updateGameArea();
    }
    }





}
