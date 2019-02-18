import React from "react";
import GlobalInputConnect from "../../components/global-input-connect";
import {styles} from "./styles";
export default class MediaPlayerControlExample extends React.Component{

  constructor(props){
      super(props);
      this.state={currentTime:null};
      this.initMobileData(props);
  }
  setCurrentTime(currentTime){
      this.setState({currentTime});
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
                                      title:"Video Player Control",
                                      fields:[]
                                    }
                                }
                  },
                  addField: field=>this.mobile.config.initData.form.fields.push(field)
            };
            const videoTitle={
                  id:"videoTitle",
                  type:"info",
                  value:{
                            type:"text",
                            content:"Big Buck Bunny",
                            style:{
                                      fontSize:18,
                                      marginTop:20,
                            }
                  },
                  viewId:"videoTitle",
            };
            this.mobile.addField(videoTitle);

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
          const playerStatus={
                  id:"playerStatus",
                  type:"info",
                  value:buildPlayerStatusValue(),
                  viewId:"playerStatus"
          };
          this.mobile.addField(playerStatus);

          this.mobile.setPlayerStatus=(title, message)=>{
                const playStatusValue=buildPlayerStatusValue(title,message);
                this.mobile.sendMessage(playStatusValue,playerStatus.id);
          };

          const currentTime={
                    id:"currentTime",
                    type:"range",
                    value:0,
                    minimumValue:0,
                    maximumValue:100,
                    step:1,
                    operations:{onInput:value=>this.onSliderChanged(value)}
          };
          this.mobile.addField(currentTime);

          this.mobile.setCurrentTime=(currentTime, duration)=>{
                    if(!duration){
                          return;
                    }
                    const sliderValue={
                          value:Math.floor(currentTime*100/duration),
                          labels:{
                                      value:  this.buildTimeString(currentTime),
                                      minimumValue: this.buildTimeString(0),
                                      maximumValue: this.buildTimeString(duration)
                                  }
                    };
                    this.mobile.sendMessage(sliderValue,currentTime.id);
          };

         const rwButton={
                  id:   "rwButton",
                  type: "button",
                  label:"RW",
                  icon: "rw",
                  viewId:"rwButton",
                  operations:{onInput: value=>this.rewind()}
         };
         this.mobile.addField(rwButton);

         const playPauseButton={
                  id:   "playPauseButton",
                  type: "button",
                  value: 0,
                  label:"Play",
                  icon: "play",
                  options:[{value:0,label:"Play",icon:"play"},{value:1,label:"Pause",icon:"pause"}],
                  viewId:"row1",
                  operations:{onInput: value=>value?this.pauseVideo():this.playVideo()}
          };
          this.mobile.addField(playPauseButton);
          this.mobile.showPlayButton = () => this.mobile.sendMessage(0,playPauseButton.id);
          this.mobile.showPauseButton= () => this.mobile.sendMessage(1,playPauseButton.id);


        const ffButton={
              id:   "ffButton",
              type: "button",
              label:"FF",
              icon: "ff",
              viewId:"row1",
              operations:{onInput: value=>this.fastForward()}
        };
        this.mobile.addField(ffButton);

        const skipToBeginButton={
            id:   "skipToBeginButton",
            type: "button",
            label:"Begin",
            icon: "skip-to-begin",
            viewId:"row2",
            operations:{onInput: value=>this.skipToBegin()}
        };
        this.mobile.addField(skipToBeginButton);

        const skipToEndButton={
              id:   "skipToEndButton",
              type: "button",
              label:"End",
              icon: "skip-to-end",
              viewId:"row2",
              operations:{onInput: value=>this.skipToEnd()}
        };
        this.mobile.addField(skipToEndButton);
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
            this.mobile.setPlayerStatus("Rewinding","");
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
        this.mobile.setPlayerStatus("Playing","x "+this.videoPlayer.playbackRate);
    }
  }



  skipToBegin(){
    this.stopSkipProcess();
      if(this.videoPlayer){
          this.videoPlayer.currentTime=0;
          this.videoPlayer.playbackRate=1;
          this.mobile.setCurrentTime(0,this.videoPlayer.duration);
      }
  }

  skipToEnd(){
    this.stopSkipProcess();
    this.videoPlayer.currentTime=this.videoPlayer.duration;
    this.videoPlayer.playbackRate=1;
    if(this.videoPlayer){
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

    return(

      <GlobalInputConnect mobileConfig={this.mobile.config}
        ref={globalInputConnect =>this.mobile.globalInputConnect=globalInputConnect}
        connectingMessage="Connecting...."
        connectedMessage="Scan with Global Input App">

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
                    <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4"/>
                    <source src="http://clips.vorwaerts-gmbh.de/VfE.webm" type="video/webm"/>
                    <source src="http://clips.vorwaerts-gmbh.de/VfE.ogv" type="video/ogg"/>
                </video>
                {this.renderCurrentTime()}
        </GlobalInputConnect>
      

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
      this.mobile.setPlayerStatus("Aborted","");
      this.mobile.showPlayButton();
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
    this.mobile.setPlayerStatus("Completed","");
    this.mobile.showPlayButton();
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
    this.mobile.setPlayerStatus("Player Error","");
    this.mobile.showPlayButton();
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
    this.mobile.setCurrentTime(currentTime,duration);
  }

  onLoadStart(){

  }
  onPause(){
      this.mobile.setPlayerStatus("Paused","");
      this.mobile.showPlayButton();
  }
  onPlay(){

  }

  onPlaying(){
      this.mobile.showPauseButton();
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

      this.mobile.setPlayerStatus("Stalled","");
      this.mobile.showPlayButton();

  }
  onSuspend(){

  }
  onTimeUpdate(){
      var currentTime=this.videoPlayer.currentTime;
      if(Math.round(currentTime)!==Math.round(this.state.currentTime)){
          this.setCurrentTime(currentTime);
      }
      var duration=this.videoPlayer.duration;
      var currentTime=this.videoPlayer.currentTime;
      if(!duration){
        return;
      }
      var nowTime=(new Date()).getTime();
      var sliderValue={
                  value:Math.floor(currentTime*100/duration),
                  sentTime:nowTime
                };
      if(this.sliderValue && (sliderValue.sentTime-this.sliderValue.sentTime)<2000 && (sliderValue.value-this.sliderValue.value)<5){
            return;
      }
      this.sliderValue=sliderValue;
      this.mobile.setCurrentTime(currentTime,duration);
  }
  onVolumeChange(){

  }
  onWaiting(){
      this.mobile.setPlayerStatus("Loading...","");
  }
  renderCurrentTime(){

    if(this.videoPlayer){
      var currentTimeString=this.buildTimeString(this.state.currentTime);
      var durationString=this.buildTimeString(this.videoPlayer.duration);
      return(<div>{currentTimeString}/{durationString}</div>);
    }
    else{
      return null;
    }

  }



}
