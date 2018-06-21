import React, {Component} from 'react'



import {createMessageConnector} from "global-input-message";




import {config,images} from "../configs";



import {LoadingIcon,ShowHideButton,InputWithLabel,InputWithSelect,TextAreaWithSelect,TextButton,ClipboardButton,
  TextRadioButtons,NotificationMessage,DisplayStaticContent,DisplayTextImage} from "../components";

import {PageWithHeader,SectionHeader,DisplayLoading,DisplayQRCode,applicationPathConfig} from "../page-templates";
import {styles} from "./styles";


import GameComponent from "./GameComponent";
import GameArea from "./GameArea";

export default class GameExample extends Component {
  ACT_TYPE={
      CONNECTING:4,
      CONNECTED:5,
      SENDER_CONNECTED:6,
  }

 constructor(props){
      super(props);
      this.state=this.getStateFromProps(this.props);
 }
 componentWillUnmount(){
     this.disconnectGlobalInput();
 }

componentWillReceiveProps(nextProps){
     //this.setState(this.getStateFromProps(nextProps))
 }
 componentDidMount(){
   this.connectGlobalInput();
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
   canvas.width=480;
   canvas.height=270;
   this.canvasContext=canvas.getContext("2d");
   this.initGameState();
 }
 getStateFromProps(props){
         var action=this.createPlayControlAction();
         return {action, message:null};
 }
 setMessage(message){
          this.setState(Object.assign({}, this.state,{message}));
 }

isGameStarted(){
  return this.interval;
}
  startGame() {

    this.stopThread();
    this.initGameState();
    this.startThread();
    this.setToCanPause("Game Started");
  }
  resumeGame(){
    this.stopThread();
    this.startThread();
    this.setToCanPause("Game Paused");
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
      this.setToCanPlay("Game Over");
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
    if (this.frameNo == 1 || this.everyinterval(150)) {
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
    if ((this.frameNo / n) % 1 == 0) {return true;}
    return false;
}
speedUp(){
  this.myGamePiece.moveSpeed++;
  applicationPathConfig.gameExample.form.speedText.id
  this.sendMoveSpeed(this.myGamePiece.moveSpeed)
}
speedDown(){
  this.myGamePiece.moveSpeed--;
  this.sendMoveSpeed(this.myGamePiece.moveSpeed)
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




    getFields(action){
      return  action.options.initData.form.fields;
    }
    getField(index){
      var fields=this.getFields(this.state.action);
      return fields[index];
    }
    setFieldValue(index, value){
      this.getField(index).value=value;
      var action=this.state.action;
      this.setState({action});
    }
    onFieldValueChangged(value,index){
          this.setFieldValue(index,value);
          this.sendInputMessage(value,index);
    }
    setToCanPlay(message){
        this.sendInputMessage(applicationPathConfig.gameExample.START_PAUSE_BUTTON_STATUS.CAN_START,null,applicationPathConfig.gameExample.form.startPauseButton.id);
    //    this.sendPlayStatusMessage(message,"");
    }
    setToCanPause(message){
        this.sendInputMessage(applicationPathConfig.gameExample.START_PAUSE_BUTTON_STATUS.CAN_PAUSE,null,applicationPathConfig.gameExample.form.startPauseButton.id);
    //    this.sendPlayStatusMessage(message,"");
    }

    createPlayControlAction(){
      var action= {
                    actType:this.ACT_TYPE.CONNECTING,
                    connector:null,
                    connected:false,
                    senders:null,

                options:{
                                      url:config.url,
                                      apikey:config.apikey,
                                      securityGroup:config.securityGroup,

                            initData:{
                                action:"input",
                                dataType:"control",
                                form:{
                                  title:applicationPathConfig.gameExample.form.title,

                                  fields:[{
                                                    id:   applicationPathConfig.gameExample.form.upButton.id,
                                                    type: applicationPathConfig.gameExample.form.upButton.type,
                                                    label:applicationPathConfig.gameExample.form.upButton.label,
                                                    icon: applicationPathConfig.gameExample.form.upButton.icon,
                                                    viewId:applicationPathConfig.gameExample.form.upButton.viewId,
                                                    operations:{
                                                                  onInput: value=> this.onUpButtonPressed()
                                                    }
                                              },{
                                                          id:   applicationPathConfig.gameExample.form.leftButton.id,
                                                          type: applicationPathConfig.gameExample.form.leftButton.type,
                                                          label:applicationPathConfig.gameExample.form.leftButton.label,
                                                          icon: applicationPathConfig.gameExample.form.leftButton.icon,
                                                          viewId:applicationPathConfig.gameExample.form.leftButton.viewId,
                                                          operations:{
                                                                        onInput: value=>this.onLeftButtonPressed()
                                                          }
                                              },{
                                                          type: "info",
                                                          value:{
                                                              type:"view",
                                                              style:{
                                                                  minWidth:36,
                                                                  minHeight:36
                                                              }
                                                          },
                                                          viewId:applicationPathConfig.gameExample.form.leftButton.viewId,
                                              },{
                                                          id:   applicationPathConfig.gameExample.form.rightButton.id,
                                                          type: applicationPathConfig.gameExample.form.rightButton.type,
                                                          label:applicationPathConfig.gameExample.form.rightButton.label,
                                                          icon: applicationPathConfig.gameExample.form.rightButton.icon,
                                                          viewId:applicationPathConfig.gameExample.form.rightButton.viewId,
                                                          operations:{
                                                                        onInput: value=>this.onRightButtonPressed()
                                                                      }
                                              },{
                                                          id:   applicationPathConfig.gameExample.form.downButton.id,
                                                          type: applicationPathConfig.gameExample.form.downButton.type,
                                                          label:applicationPathConfig.gameExample.form.downButton.label,
                                                          icon: applicationPathConfig.gameExample.form.downButton.icon,
                                                          viewId:applicationPathConfig.gameExample.form.downButton.viewId,
                                                          operations:{
                                                                        onInput: value=>this.onDownButtonPressed()
                                                                        }
                                              },{
                                                          id:   applicationPathConfig.gameExample.form.speedDown.id,
                                                          type: applicationPathConfig.gameExample.form.speedDown.type,
                                                          label:applicationPathConfig.gameExample.form.speedDown.label,
                                                          iconText:{
                                                              content:applicationPathConfig.gameExample.form.speedDown.iconText,
                                                              style:{fontSize:36},
                                                          },
                                                          style:{
                                                              borderColor:"green",
                                                              paddingRight:10
                                                          },

                                                          icon: applicationPathConfig.gameExample.form.speedDown.icon,
                                                          viewId:applicationPathConfig.gameExample.form.speedDown.viewId,
                                                          operations:{
                                                                        onInput: value=>this.speedDown()

                                                          }
                                              },{
                                                          id:applicationPathConfig.gameExample.form.speedText.id,
                                                          type:applicationPathConfig.gameExample.form.speedText.type,
                                                          value:applicationPathConfig.gameExample.form.speedText.value,
                                                          viewId:applicationPathConfig.gameExample.form.speedText.viewId,
                                              },{
                                                          id:   applicationPathConfig.gameExample.form.speedUp.id,
                                                          type: applicationPathConfig.gameExample.form.speedUp.type,
                                                          label:applicationPathConfig.gameExample.form.speedUp.label,
                                                          style:{
                                                              borderColor:"green",
                                                          },
                                                          iconText:{
                                                                content:applicationPathConfig.gameExample.form.speedUp.iconText,
                                                                style:{
                                                                      fontSize:36,
                                                                }
                                                          },
                                                          label:applicationPathConfig.gameExample.form.speedUp.label,
                                                          icon: applicationPathConfig.gameExample.form.speedUp.icon,
                                                          viewId:applicationPathConfig.gameExample.form.speedUp.viewId,
                                                          operations:{
                                                                        onInput: value=>this.speedUp()

                                                          }
                                              },{
                                                label:applicationPathConfig.gameExample.form.backButton.label,
                                                type:applicationPathConfig.gameExample.form.backButton.type,
                                                icon:applicationPathConfig.gameExample.form.backButton.icon,
                                                viewId:applicationPathConfig.gameExample.form.backButton.viewId,
                                                operations:{
                                                      onInput: value=>{
                                                            this.connectGlobalInput();
                                                      }
                                                },
                                                container:{label:applicationPathConfig.gameExample.form.backButton.buttonText}
                                        },{
                                              id:   applicationPathConfig.gameExample.form.startPauseButton.id,
                                              type: applicationPathConfig.gameExample.form.startPauseButton.type,
                                              value:applicationPathConfig.gameExample.form.startPauseButton.value,
                                              label:applicationPathConfig.gameExample.form.startPauseButton.label,
                                              icon: applicationPathConfig.gameExample.form.startPauseButton.icon,
                                              options:applicationPathConfig.gameExample.form.startPauseButton.options,
                                              viewId:applicationPathConfig.gameExample.form.startPauseButton.viewId,
                                              operations:{
                                                            onInput: value=>{
                                                                    if(value){
                                                                      this.stopGame();
                                                                    }
                                                                    else {
                                                                      this.resumeGame();
                                                                    }

                                                            }
                                              }
                                        },{
                                                    id:   applicationPathConfig.gameExample.form.newGameButton.id,
                                                    type: applicationPathConfig.gameExample.form.newGameButton.type,
                                                    label:applicationPathConfig.gameExample.form.newGameButton.label,
                                                    container:{label:applicationPathConfig.gameExample.form.newGameButton.buttonText},
                                                    icon: applicationPathConfig.gameExample.form.newGameButton.icon,
                                                    viewId:applicationPathConfig.gameExample.form.newGameButton.viewId,
                                                    operations:{
                                                                  onInput: value=>this.startGame()
                                                    }
                                              }],
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
                          },
                          onSenderConnected:this.onSenderConnected.bind(this),
                          onSenderDisconnected:this.onSenderDisconnected.bind(this),
                          onRegistered:(next)=>{
                                  next();
                                  this.onConnected();
                          }
                        }
                  };

                  return action;

    }

    onSenderConnected(sender, senders){
         console.log("Sender Connected");
         var action=this.state.action;
         action.senders=senders;
         action.actType=this.ACT_TYPE.SENDER_CONNECTED;
         this.setState({action});
    }
    onSenderDisconnected(sender,senders){
        console.log("Sender Disconnected");
        this.connectGlobalInput();
   }
  onConnected(){
    var action=this.state.action;
    action.connected=true;
    action.actType=this.ACT_TYPE.CONNECTED;
    this.setState({action});
    if(this.props.onConnected){
      this.props.onConnected();
    }
  }

  disconnectGlobalInput(){
      var action=this.state.action;
      if(action.connector){
              action.connector.disconnect();
              action.connector=null;
      }
      this.setState(this.getStateFromProps(this.props));
  }
  isSenderConnected(){
    return this.state.action.actType===this.ACT_TYPE.SENDER_CONNECTED && this.state.action.connector;
  }
  sendInputMessage(message, fieldIndex, fieldId){
    if(this.isSenderConnected()){
       this.state.action.connector.sendInputMessage(message,fieldIndex, fieldId);
    }
  }
  sendMoveSpeed(speed){
       var speedValue=Object.assign({},applicationPathConfig.gameExample.form.speedText.value,{content:speed});

       this.sendInputMessage(speedValue,null,applicationPathConfig.gameExample.form.speedText.id);
  }


    connectGlobalInput(){
        var action=this.state.action;
        if(action.connector){
                action.connector.disconnect();
                action.connector=null;
                action.senders=[];
        }
        action.connector=createMessageConnector();
        action.actType=this.ACT_TYPE.CONNECTING;
        this.setState({action});
        action.connector.connect(action.options);
    }


    render(){
        var action=this.state.action;

        if(action.actType===this.ACT_TYPE.CONNECTED && action.connector){
              return this.renderConnected();
        }
        else if(action.actType===this.ACT_TYPE.SENDER_CONNECTED && action.connector){
              return this.renderSenderConnected();
        }
        else{
            return this.renderConnecting();
        }
    }

    renderConnecting(){

             return(
                <PageWithHeader advert={applicationPathConfig.gameExample.advert}
                  appSubtitle={applicationPathConfig.gameExample.appSubtitle}>
                    <div style={styles.content}>
                      <DisplayLoading title={applicationPathConfig.gameExample.connecting.title}
                        content={applicationPathConfig.gameExample.connecting.content}/>
                    </div>

                 </PageWithHeader>
           );

    }


    getMapItemKey(item,index){
        if(item.id){
              return item.id;
        }
        else if(item.label){
              return index+"_"+item.label;
        }
        else if(item.value){
                  return index+"_"+item.value;
        }
        else{
              return index;
        }


    }
    getMapItemKey(item,index){
        if(item.id){
              return item.id;
        }
        else if(item.label){
              return index+"_"+item.label;
        }
        else if(item.value){
                  return index+"_"+item.value;
        }
        else{
              return index;
        }


    }
renderAField(formField, index){

  var label=formField.id;
    var multiline=false;
    var key=this.getMapItemKey(formField,index);

    if(formField.label && formField.label.trim().length>1){
        label=formField.label;
    }
    if(formField.type==='button'){
      return null;
    }
    else if(formField.type==='info'){
      return (
        <DisplayStaticContent content={formField.value} key={key}/>
      );
    }


    if(formField.nLines && formField.nLines>1){
        multiline=true;
    }
    var inputType="password";
    if(this.state.action.show){
        inputType="text";
    }

    var fieldSelected=false;
    if(this.state.action.selectedFieldId===formField.id){
          fieldSelected=true;
    }


    if(multiline){
      return(
        <TextAreaWithSelect
          key={key}
                  rows={formField.nLines} cols={100}
                  onChange={this.onFieldValueChangged.bind(this)}
                  fieldIndex={index}
                  fieldId={formField.id}
                  value={formField.value}
                  label={label}
                  fieldSelected={fieldSelected}
                  setSelectedField={this.setSelectedField.bind(this)}/>
       );
    }
    else{


      return(
              <InputWithSelect key={key}
                      type={inputType}
                      onChange={this.onFieldValueChangged.bind(this)}
                      fieldIndex={index}
                      fieldId={formField.id}
                      value={formField.value}
                      label={label}
                      fieldSelected={fieldSelected}
                      setSelectedField={this.setSelectedField.bind(this)}/>
       );
    }




}


    renderConnected(){

      var qrCodeContent=this.state.action.connector.buildInputCodeData();

      return(
        <PageWithHeader advert={applicationPathConfig.gameExample.advert}
          appSubtitle={applicationPathConfig.gameExample.appSubtitle}>
          <div style={styles.content}>
              <DisplayQRCode

                content={applicationPathConfig.gameExample.connected.content}
                qrCodeContent={qrCodeContent} qrsize={this.state.action.qrsize}
                buttonLabel={applicationPathConfig.gameExample.cancelButton}
                link={applicationPathConfig.gameExample.menu.backLink}/>
            </div>
      </PageWithHeader>
      );



    }




    processError(message, error){
        var cache = [];
        var errorDetails=JSON.stringify(error, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
         });
         cache = null;
         console.warn(message+":"+errorDetails);
    }
    onError(error){
      this.processError("Player Error",error);
    }


    renderSenderConnected(){
          return(
            <PageWithHeader advert={applicationPathConfig.gameExample.advert}
              sectionHeaderContent={applicationPathConfig.gameExample.senderConnected.content}
              appSubtitle={applicationPathConfig.gameExample.appSubtitle}>
                <div style={styles.content}>
                      <GameArea initGame={this.initGame.bind(this)}/>
                  </div>
             </PageWithHeader>
          );

   }

}
