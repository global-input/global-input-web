import React from "react";

import GlobalInputConnect from '../../components/global-input-connect';
import TextButton from "../../components/text-button"

import {styles} from "./styles";

const textContent={
    title:"Media Control App Example",
    githuburl:"https://github.com/global-input/media-player-control-example/"
}
export default class MediaPlayerControlExample extends React.Component{

  constructor(props){
      super(props);
      this.state=this.buildInitialState(props)

      this.mobile.init(props); //Initialize the mobile configuration
      //this.mobile.uiForPlayerPlayer(this.state.playing.video); //Mobile UI for player
      this.mobile.uiForSelectVideo();
  }
  buildInitialState(props){
      var st={

            connected:false,
            videoSelection:{
                  videos:[{
                        title:"Introduction Video",
                        synopsis:"This Introduction video demostrates that the Global Input App provides applications withe generic solution for mobile authentication, secure content transfer, mobile input and mobile control and second screen experience etc.",
                        mp4:"https://media.iterativesolution.co.uk/video/global_input_introduction.mp4"
                  },{
                    title:"Tutorial Part 1",
                    synopsis:"In this Global Input App tutorial video, you will learn how to install the Chrome extension and then use ir to sign in to web applications quickly and securely. You can subscribe and sign in to web applications without worrying about remembering your passwords for they are stored automatically into your phone",
                    mp4:"https://media.iterativesolution.co.uk/video/global_input_sign_in.mp4"
                  },{
                    title:"Authentication Demo",
                    synopsis:"This authentication demo demonstrate that you can use the Global Input App to sign in to applications in public view. You can also create mutltiple accounts, for example google accounts, and sign in without needing to know your auto-generated random passwords.",
                    mp4:"https://media.iterativesolution.co.uk/video/google-sign-in.mp4"
                  },{
                    title:"Copy and Paste Across Devices",
                    synopsis:"A very short demo demonstrating using Global Input App to copy and paste contents across devices",
                    mp4:"https://media.iterativesolution.co.uk/video/copy-and-paste.mp4"
                  }],
                  selectedIndex:0
            },
            playing:{
                  video:null,
                  currentTime:0
            },
      };
      st.playing.video=st.videoSelection.videos[st.videoSelection.selectedIndex];
      return st;
  }
  setCurrentTime(currentTime){
      var playing=this.state.playing;
      playing.currentTime=currentTime;
      this.setState(Object.assign({},this.state,{playing}));
  }
  getSelectedVideo(){
    var videoSelection=this.state.videoSelection;
    return videoSelection.videos[videoSelection.selectedIndex];
  }

  selectNextVideo(){
      var videoSelection=this.state.videoSelection;
      videoSelection.selectedIndex++;
      if(videoSelection.selectedIndex>=videoSelection.videos.length){
          videoSelection.selectedIndex=0;
      }
      this.setState(Object.assign({},this.state,{videoSelection}));
      if(this.mobile.isVideoSelectionUI()){
          this.mobile.setVideoMetadata(videoSelection.videos[videoSelection.selectedIndex]);
      }
  }
  changeVideo(video){
      if(this.videoPlayer){
          this.videoPlayer.pause();
          this.videoPlayer.childNodes[0].setAttribute('src', video.mp4);
          this.videoPlayer.load();
      }
      var playing=this.state.playing;
      playing.video=video;
      this.setState(Object.assign({},this.state,{playing}));

  }

  selectForPlay(){
      var videoSelection=this.state.videoSelection;
      var video=videoSelection.videos[videoSelection.selectedIndex];
      this.changeVideo(video);
      this.mobile.uiForPlayerPlayer(video);
  }
  selectPreviousVideo(){
      var videoSelection=this.state.videoSelection;
      videoSelection.selectedIndex--;
      if(videoSelection.selectedIndex<0){
          videoSelection.selectedIndex=videoSelection.videos.length-1;
      }
      this.setState(Object.assign({},this.state,{videoSelection}));
  }


  buildTimeString(timestamp) {
      var mininutes = Math.floor(timestamp / 60) % 60;
      var hours = Math.floor(timestamp / 3600);
      var minutesString = mininutes.toString().length < 2 ? '0' + mininutes : mininutes.toString();

      var seconds = Math.floor(timestamp) % 60;
      var secondsString = seconds.toString().length < 2 ? '0' + seconds : seconds;
      var result = (hours > 0) ? (hours.toString() + ':' + minutesString + ':' + secondsString) : (minutesString + ':' + secondsString);
      return result.match(/^([0-9]+:)?[0-9]*:[0-9]*$/) ? result : '00:00';
  }

  onSliderChanged(sliderPosition){
    console.log("sliderPosition:"+sliderPosition);
    if(this.videoPlayer && this.videoPlayer.duration){
        this.videoPlayer.currentTime=sliderPosition*this.videoPlayer.duration/100;
    }
  }

  rewind(){
          console.log("rewinding");
          if(this.videoPlayer){
            this.stopSkipProcess();
            this.videoPlayer.pause();
            this.startSkipProcess();
            if(this.mobile.isPlayerUI()){
                this.mobile.setPlayerStatus("Rewinding","");
            }

          }
  }
  startSkipProcess(){
      this.stopSkipProcess();
      this.threadForSkip=setInterval(()=>{
      var nextPosition=this.videoPlayer.currentTime -0.1;
      if(nextPosition<=0){
        this.videoPlayer.currentTime=0;
        this.stopSkipProcess();
      }
      else{
          this.videoPlayer.currentTime=nextPosition;
      }
    },30);
  }
  stopSkipProcess(){
    if(this.threadForSkip){
      clearInterval(this.threadForSkip);
      this.threadForSkip=null;
      this.videoPlayer.playbackRate=1;
    }
  }

  pauseVideo(){
      this.stopSkipProcess();
      if(this.videoPlayer){
          this.videoPlayer.pause();
          this.videoPlayer.playbackRate=1;
       }
  }

  fastForward(){
    this.stopSkipProcess();
    this.videoPlayer.playbackRate++;
    if(this.videoPlayer){
        this.videoPlayer.play();
        if(this.mobile.isPlayerUI()){
          this.mobile.setPlayerStatus("Playing","x "+this.videoPlayer.playbackRate);
        }
    }
  }



  skipToBegin(){
    this.stopSkipProcess();
      if(this.videoPlayer){
          this.videoPlayer.currentTime=0;
          this.videoPlayer.playbackRate=1;
          if(this.mobile.isPlayerUI()){
              this.mobile.setCurrentTime(0,this.videoPlayer.duration);
          }
      }
  }

  skipToEnd(){
    this.stopSkipProcess();
    this.videoPlayer.currentTime=this.videoPlayer.duration;
    this.videoPlayer.playbackRate=1;
    if(this.videoPlayer && this.mobile.isPlayerUI()){
        this.mobile.setCurrentTime(this.videoPlayer.duration,this.videoPlayer.duration);
    }
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
        var playerStatus="";


        if(this.videoPlayer && this.videoPlayer.duration){
              var currentTimeString=this.buildTimeString(this.state.playing.currentTime);
              var durationString=this.buildTimeString(this.videoPlayer.duration);
              playerStatus=currentTimeString+"/"+durationString;
        }
        var barcodeContainerStyle=styles.barcodeContainer;
        if(this.state.connected){
            barcodeContainerStyle=Object.assign({},barcodeContainerStyle,{display:"none"});
        }





    return(
      <div style={styles.container}>

        <div style={styles.title}>
            {textContent.title}
        </div>
        <div style={styles.githuburl}>
            <a href={textContent.githuburl} target="_blank">{textContent.githuburl}</a>
        </div>
        <div style={styles.videoContainer}>
          <video width={videoWidth} height={videoHeight}
              id="videoplayer" autoPlay={false}
              muted={true}
              ref={videoPlayer=>this.videoPlayer=videoPlayer}
              onAbort={this.onAbort.bind(this)}
              onCanPlay={this.onCanPlay.bind(this)}
              onCanPlayThrough={this.onCanPlayThrough.bind(this)}
              onDurationChange={this.onDurationChange.bind(this)}
              onEncrypted={this.onEncrypted.bind(this)}
              onEnded={this.onEnded.bind(this)}
              onError={this.onError.bind(this)}
              onLoadedData={this.onLoadedData.bind(this)}
              onLoadedMetadata={this.onLoadedMetadata.bind(this)}
              onLoadStart={this.onLoadStart.bind(this)}
              onPause={this.onPause.bind(this)}
              onPlay={this.onPlay.bind(this)}
              onPlaying={this.onPlaying.bind(this)}
              onProgress={this.onProgress.bind(this)}
              onRateChange={this.onRateChange.bind(this)}
              onSeeked={this.onSeeked.bind(this)}
              onSeeking={this.onSeeking.bind(this)}
              onStalled={this.onStalled.bind(this)}
              onSuspend={this.onSuspend.bind(this)}
              onTimeUpdate={this.onTimeUpdate.bind(this)}
              onVolumeChange={this.onVolumeChange.bind(this)}
              onWaiting={this.onWaiting.bind(this)}
              controls>
                <source src={this.state.playing.video.mp4} type="video/mp4"/>
            </video>
            <div style={styles.playHeadInfo}>{playerStatus}</div>
            <div style={barcodeContainerStyle}>
                <div style={styles.barcode}>
                  <GlobalInputConnect mobileConfig={this.mobile.config}
                    ref={globalInputConnect =>this.mobile.globalInputConnect=globalInputConnect}
                    connectingMessage="Connecting...."
                    connectedMessage="Scan with Global Input App"
                    reconnectOnDisconnect={true}/>
              </div>
            </div>


        </div>

    </div>


    );

  }





  playVideo(){
    this.stopSkipProcess();
    if(this.videoPlayer){
        this.videoPlayer.play();
    }
  }

  getVideoPlayRate(){
    return this.videoPlayer.playbackRate;
  }

  onAbort(){
    if(this.mobile.isPlayerUI()){
        this.mobile.setPlayerStatus("Aborted","");
        this.mobile.showPlayButton();
    }
  }
  onCanPlay(){

  }
  onCanPlayThrough(){

  }
  onDurationChange(){

  }
  onEncrypted(){

  }
  onEnded(){
    if(this.mobile.isPlayerUI()){
      this.mobile.setPlayerStatus("Completed","");
      this.mobile.showPlayButton();
    }
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
    if(this.mobile.isPlayerUI()){
      this.mobile.setPlayerStatus("Player Error","");
      this.mobile.showPlayButton();
    }
  }
  onLoadedData(){
    if(this.videoPlayer){
      this.videoPlayer.scrollIntoView();
    }
  }
  onLoadedMetadata(){
    var duration=this.videoPlayer.duration;
    var currentTime=this.videoPlayer.currentTime;
    if(!duration){
      return;
    }
    if(this.mobile.isPlayerUI()){
      this.mobile.setCurrentTime(currentTime,duration);
    }
  }

  onLoadStart(){

  }
  onPause(){
    if(this.mobile.isPlayerUI()){
        this.mobile.setPlayerStatus("Paused","");
        this.mobile.showPlayButton();
    }
  }
  onPlay(){
    if(this.mobile.isPlayerUI()){
        this.mobile.setPlayerStatus("Playing", "");
        this.mobile.showPauseButton();
    }
  }

  onPlaying(){
    if(this.mobile.isPlayerUI()){
        this.mobile.showPauseButton();
      }
  }

  onProgress(){

  }
  onRateChange(){

  }
  onSeeked(){

  }
  onSeeking(){

  }
  onStalled(){
    if(this.mobile.isPlayerUI()){
      this.mobile.setPlayerStatus("Stalled","");
      this.mobile.showPlayButton();
    }

  }
  onSuspend(){

  }
  onTimeUpdate(){
      let currentTime=this.videoPlayer.currentTime;
      let duration=this.videoPlayer.duration;
      if(!duration){
            return;
      }
      if(Math.round(currentTime)!==Math.round(this.state.playing.currentTime)){
        if(this.mobile.isPlayerUI()){
            this.mobile.setCurrentTime(currentTime,duration);
        }
          this.setCurrentTime(currentTime);
      }



  }
  onVolumeChange(){

  }
  onWaiting(){
    if(this.mobile.isPlayerUI()){
        this.mobile.setPlayerStatus("Loading...","");
    }
  }


/****************************All the Mobile UI interfaces are defined below ***********/

  mobile={
        globalInputConnect:null,
        config:null,
        uiID:null,
        isVideoSelectionUI:function(){
          return this.uiID==='select';
        },
        isPlayerUI:function(){
          return this.uiID==='player';
        },
        disconnect:()=>{
            if(this.mobile.globalInputConnect){
                this.mobile.globalInputConnect.disconnectGlobaInputApp();
            }
        },
        sendMessage:(message, fieldid)=>{
              if(this.mobile.globalInputConnect){
                    this.mobile.globalInputConnect.sendInputMessage(message,null,fieldid);
              }
        },
        addField:(field, form)=>{
              const findex=form.fields.length;
              var setMobileFieldFunction=value=>{
                  if(this.mobile.globalInputConnect){
                      this.mobile.globalInputConnect.sendInputMessage(value,findex);
                  }
              };
              form.fields.push(field);
              return setMobileFieldFunction;
        },
        init:(props)=>{
              this.mobile.config={
                    url:props.url,
                    apikey:props.apikey,
                    securityGroup:props.securityGroup,
                    initData:null,
                    onSenderConnected:()=>{

                            this.setState(Object.assign({},this.state,{connected:true}));
                    },
                    onSenderDisconnected:()=>{
                        this.setState(Object.assign({}, this.state,{connected:false}));
                    }
               };
        },
        setInitData:initData=>{
              this.mobile.config.initData=initData;
              if(this.mobile.globalInputConnect){
                      this.mobile.globalInputConnect.changeInitData(initData);
              }
        },
        uiForSelectVideo:videoSelection=>{
              this.mobile.uiID="select"
              var video=this.getSelectedVideo();
              var initData={
                      action:"input",
                      dataType:"control",
                      form:{
                                title:"Select Video to Play",
                                fields:[]
                      }
             };

             const videoTitleField={
                  id:"videoTitle",
                  type:"info",
                  value:{
                        type:"text",
                        content:video.title,
                        style:{
                                  fontSize:18,
                                  marginTop:20,
                        }
                  },
                  viewId:"row1",
              };
              const sendVideoTitle=this.mobile.addField(videoTitleField,initData.form);

             const videoSynopsis={
                   id:"sunopsis",
                   type:"info",
                   value:video.synopsis,
                   viewId:"row1"
             };
             const sendVideoSynopsis=this.mobile.addField(videoSynopsis,initData.form);

             this.mobile.setVideoMetadata=video=>{
                sendVideoTitle(video.title);
                sendVideoSynopsis(video.synopsis);
             };


             const leftButton={
                       id:   "leftButton",
                       label:"Previous Video",
                       type: "button",
                       icon: "left",
                       viewId:"row2",
                       operations:{onInput: value=>this.selectPreviousVideo()}
             };
             this.mobile.addField(leftButton,initData.form);
             const rightButton={
                       id:   "Button",
                       label:"Next Video",
                       type: "button",
                       icon: "right",
                       viewId:"row2",
                       operations:{onInput: value=>this.selectNextVideo()}
             };
            this.mobile.addField(rightButton,initData.form);
             const selectButton={
                       id:   "Button",
                       label:"Select for Play",
                       type: "button",
                       icon: "select",
                       viewId:"row3",
                       operations:{onInput: value=>this.selectForPlay()}
             };
            this.mobile.addField(selectButton,initData.form);
            this.mobile.setInitData(initData);

        },
        uiForPlayerPlayer:video=>{
               this.mobile.uiID="player";
               var initData={
                       action:"input",
                       dataType:"control",
                       form:{
                                 title:video.title,
                                 fields:[]
                       }
              };
              const changeVideoButton={
                     id:   "changeVideo",
                     type: "button",
                     label:"Play Different Video",
                     viewId:"row1",
                     operations:{onInput: value=>this.mobile.uiForSelectVideo()}
              };
               this.mobile.addField(changeVideoButton,initData.form);

               const buildPlayerStatusValue= (title, message) => {
                       var statusValue={
                           type:"view",
                           style:{
                             borderColor:"#rgba(72,128,237,0.5)",
                             borderWidth:1,
                             marginTop:5,
                             minWidth:80,
                             minHeight:80,
                           },
                           content:[{
                               type:"text",
                               content:"",
                               style:{
                                   fontSize:14
                               }
                             },{
                                 type:"text",
                                 content:"",
                                 style:{
                                     fontSize:14
                                 }
                               }]

                      };
                      if(title){
                         statusValue.content[0].content=title;
                         statusValue.content[1].content=message;
                     }
                     return statusValue;
               };
               const playerStatusField={
                     id:"playerStatus",
                     type:"info",
                     value:buildPlayerStatusValue(),
                     viewId:"row2"
               };
               const sendPlayerStatus=this.mobile.addField(playerStatusField,initData.form);

               this.mobile.setPlayerStatus=(title, message)=>{
                   const playStatusValue=buildPlayerStatusValue(title,message);
                   sendPlayerStatus(playStatusValue);
               };
               const currentTimeField={
                         id:"currentTime",
                         type:"range",
                         value:0,
                         minimumValue:0,
                         maximumValue:100,
                         step:1,
                         viewId:"row3",
                         operations:{onInput:value=>this.onSliderChanged(value)}
               };
               const sendCurrentTime=this.mobile.addField(currentTimeField,initData.form);
               this.mobile.setCurrentTime=(currentTime, duration)=>{
                         if(!duration){
                               return;
                         }
                         var data={
                               sliderValue:{
                                     value:Math.floor(currentTime*100/duration),
                                     labels:{
                                                 value:  this.buildTimeString(currentTime),
                                                 minimumValue: this.buildTimeString(0),
                                                 maximumValue: this.buildTimeString(duration)
                                             }
                               },
                               timestamp:(new Date()).getTime()
                         };


                         if((!this.cache) || (data.timestamp-this.cache.timestamp)>2000 && Math.abs(data.sliderValue.value-this.cache.sliderValue.value)>=5){
                             this.cache=data;
                             sendCurrentTime(data.sliderValue);
                         }
               };
               const rwButtonField={
                      id:   "rwButton",
                      type: "button",
                      label:"RW",
                      icon: "rw",
                      viewId:"row4",
                      operations:{onInput: value=>this.rewind()}
               };
               this.mobile.addField(rwButtonField,initData.form);


               const playPauseButtonField={
                      id:   "playPauseButton",
                      type: "button",
                      value: 0,
                      label:"Play",
                      icon: "play",
                      options:[{value:0,label:"Play",icon:"play"},{value:1,label:"Pause",icon:"pause"}],
                      viewId:"row4",
                      operations:{onInput: value=>value?this.pauseVideo():this.playVideo()}
               };
               const sendPlayPauseButtonStatus=this.mobile.addField(playPauseButtonField,initData.form);
               this.mobile.showPlayButton = () => sendPlayPauseButtonStatus(0);
               this.mobile.showPauseButton= () => sendPlayPauseButtonStatus(1);

               const ffButtonField={
                     id:   "ffButton",
                     type: "button",
                     label:"FF",
                     icon: "ff",
                     viewId:"row4",
                     operations:{onInput: value=>this.fastForward()}
               };
               this.mobile.addField(ffButtonField,initData.form);

               const skipToBeginButtonField={
                     id:   "skipToBeginButton",
                     type: "button",
                     label:"Begin",
                     icon: "skip-to-begin",
                     viewId:"row5",
                     operations:{onInput: value=>this.skipToBegin()}
               };
               this.mobile.addField(skipToBeginButtonField,initData.form);

               const skipToEndButtonField={
                     id:   "skipToEndButton",
                     type: "button",
                     label:"End",
                     icon: "skip-to-end",
                     viewId:"row5",
                     operations:{onInput: value=>this.skipToEnd()}
               };
               this.mobile.addField(skipToEndButtonField,initData.form);
               this.mobile.setInitData(initData);
        }
   }



}
