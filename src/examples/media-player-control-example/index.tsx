import React, { useRef, useState,useEffect} from "react";
import { useGlobalInputApp } from 'global-input-react';

import * as videoControl from './videoControl';
import { PageContainer, P, QRCodeContainer, useWindowSize,A } from './app-layout';





export default () => {
  
  const videoPlayer = useRef(null);
  const [videoData,setVideoData]=useState(videoControl.getDefaultVideo());
  const [initData,setInitData]=useState<any>(null);
  const globalInputApp = useGlobalInputApp({initData}, [initData]);
  
  
  const setPlayerStatusAttributes = (playerStatusTitle:string, playerStatusMessage:string, playerButtonValue:number) => {
    const {setStatusValue,setPlayerPauseButton}=getPlayerControlSetters(globalInputApp, initData);    
      const statusValue = buildPlayerStatusValue(playerStatusTitle, playerStatusMessage);
      setStatusValue(statusValue);      
      setPlayerPauseButton(playerButtonValue);    
  };
  
  
  const onPrevious=()=>{
    setVideoData(videoData=>videoControl.getPreviousVideo(videoData));
  };
  const onNext=()=>{
    setVideoData(videoData=>videoControl.getNextVideo(videoData));
  };
  const setSliderPosition= (sliderPosition:number) => {
      videoControl.setCurrentTimeWithSlider(videoPlayer.current, sliderPosition);
  };
  const rewindVideo=()=>{      
      setPlayerStatusAttributes('<<','',1);      
      videoControl.rewindVideo(videoPlayer.current, () => {
          setPlayerStatusAttributes('Paused','Rewind complete',0);
      });
  };
  const pauseVideo=()=>{
      videoControl.pauseVideo(videoPlayer.current);
  };
  const playVideo=()=>{
      videoControl.playVideo(videoPlayer.current);
  };
  const fastForwardVideo=()=>{
      videoControl.fastForwardVideo(videoPlayer.current);
      if(videoPlayer.current){      
        const {playbackRate}=videoPlayer.current as any;  
        setPlayerStatusAttributes('>',`x  ${playbackRate}`,1);      
      }
       
      
  };
  const skipToBegin=()=>{
    videoControl.pauseVideo(videoPlayer.current);
    videoControl.skipToBegin(videoPlayer.current);
    setPlayerStatusAttributes('Paused','',0);          
  };
  const skipToEnd=()=>{
      videoControl.pauseVideo(videoPlayer.current);
      videoControl.skipToEnd(videoPlayer.current);
      setPlayerStatusAttributes('Paused','',0);      
  };
  



  const switchToPlayerControl=()=>{
    const playerStatusValue=buildPlayerStatusValue('', '');
    setVideoData(videoData=>{
        const title=videoData.video.title;                
        const initData=buildPlayerControl({title,switchToSelectVideoControl, playerStatusValue,setSliderPosition,rewindVideo,pauseVideo,playVideo,fastForwardVideo,skipToBegin,skipToEnd});
        setInitData(initData);
        playVideo();
        return videoData;
    });
  };

  const switchToSelectVideoControl=()=>{
      
      setVideoData(videoData=>{
          const initData=buildSelectVideoControl({onPrevious,onNext,switchToPlayerControl,video:videoData.video});   
          setInitData(initData); 
      return videoData;
    });
    
  }
    
  useEffect(()=>{
    switchToSelectVideoControl();      
   },[]);


  useEffect(()=>{
    videoControl.setPlayVideoSource(videoPlayer.current,videoData.video);
    if(initData && initData.id==='selectVideo'){
        const {setters}=globalInputApp;        
        const [setTitle, setSynopsis]=setters;
        if(setTitle){
          setTitle(videoData.video.title);
        }
        if(setSynopsis){
          setSynopsis(videoData.video.synopsis);      
        }
    }     
  },[videoData]);
  
  const processPlayVideoUserEvent = (field:any)=>{
      switch(field.id){
          case 'changeVideo':return switchToSelectVideoControl();
          case 'currentTime':return setSliderPosition(field.value);
          case 'rwButton': return  rewindVideo();
          case 'playPauseButton': return field.value? pauseVideo():playVideo();
          case 'ffButton': return fastForwardVideo();
          case 'skipToBeginButton':return skipToBegin();
          case 'skipToEndButton': return skipToEnd();        
      }
  };
  useEffect(()=>{
      if(!globalInputApp.field){
        return;
      }
      if(initData.id==='playVideo'){
          processPlayVideoUserEvent(globalInputApp.field);
      }
  },[globalInputApp.field])





  const onPlay = () => {
    setPlayerStatusAttributes('Playing','',1);
  };
  const onPause = () => {
    setPlayerStatusAttributes('Paused','',0);    
  };

  const onTimeUpdate = () => {
    const { currentTime, duration } = videoControl.getVideoData(videoPlayer.current);    
    if (!duration) {
      return;
    }    
    const sliderValue=buildSliderValue(currentTime,duration);  
    if(videoControl.throttleSliderValue(sliderValue)){
      const {setSliderValue}=getPlayerControlSetters(globalInputApp, initData);    
      setSliderValue(sliderValue);    
    }     
  };
  const onAbort = () => {
    setPlayerStatusAttributes('Aborted','',0);     
  };
  
  const onCanPlay = () => {
    
  }
  const onCanPlayThrough = () => {
    
  };
  const onDurationChange = () => {
    
  };
  const onEncrypted = () => {
    
  };
  const onEnded = () => {    
    videoControl.skipToBegin(videoPlayer.current);
    setPlayerStatusAttributes('Completed','',0);         
  };
  const onError = () => {
    setPlayerStatusAttributes('Error','Something wrong in player',0);             
  };
  const onLoadedData = () => {
    
  };
  const onLoadedMetadata = () => {
    
  };
  const onLoadStart = () => {
    
  };
  const onPlaying = () => {
    setPlayerStatusAttributes('Playing','',1);    
  };
  const onProgress = () => {
    
  };
  const onRateChange = () => {
    
  };
  const onSeeked = () => {
    
  };
  const onSeeking = () => {
    
  };
  const onStalled = () => {
    
  };
  const onSuspend = () => {
    
  };
  const onVolumeChange = () => {
    
  };

  const onWaiting = () => {
    
  };



  const windowSize = useWindowSize();

  const { videoWidth, videoHeight } = videoControl.calculateWatchWindowSize(windowSize as [any,any]);

  const { connectionMessage,WhenWaiting,WhenDisconnected}=globalInputApp

  return (
    <PageContainer>
      <video width={videoWidth} height={videoHeight}
        id="videoplayer" autoPlay={false}
        muted={true}
        ref={videoPlayer}

         onAbort={onAbort}
        onCanPlay={onCanPlay}
        onCanPlayThrough={onCanPlayThrough}
        onDurationChange={onDurationChange}
        onEncrypted={onEncrypted}
        onEnded={onEnded}
        onError={onError}
        onLoadedData={onLoadedData}
        onLoadedMetadata={onLoadedMetadata}
        onLoadStart={onLoadStart}
        onPause={onPause}
        onPlay={onPlay}
       onPlaying={onPlaying}
        onProgress={onProgress}
        onRateChange={onRateChange}
        onSeeked={onSeeked}
        onSeeking={onSeeking}
        onStalled={onStalled}
        onSuspend={onSuspend}
        onTimeUpdate={onTimeUpdate}
        onVolumeChange={onVolumeChange}
        onWaiting={onWaiting}
        controls>
        <source src={videoData.video.mp4} type="video/mp4" />
      </video>
      <WhenWaiting>
        <QRCodeContainer>
          {connectionMessage}      
        </QRCodeContainer>
      </WhenWaiting>
      <WhenDisconnected>
        <P>Disconnected, reload the page to try again.</P>
        
      </WhenDisconnected>
      
      
      <P>This example application (with <A href="https://github.com/global-input/media-player-control-example">its source code</A>)
      demonstrate how you can use the <A href="https://github.com/global-input/global-input-react">extension library</A> to extend an existing media application 
      to have <a href="https://globalinput.co.uk/global-input-app/second-screen-experience">Second Screen Experience</a>
      </P>
    </PageContainer>);


};





const buildSelectVideoControl=({onPrevious,onNext,switchToPlayerControl,video})=>{
          
    return {
      action: "input",
      id: 'selectVideo',
      dataType: "control",
      form: {
        title: "Select Video to Play",
        fields: [{
          id: "videoTitle",
          type: "info",
          value: {
            type: "text",
            content: video.title,
            style: {
              fontSize: 18,
              marginTop: 20,
            }
          },
          viewId: "row1",
        }, {
          id: "sunopsis",
          type: "info",
          value: video.synopsis,
          viewId: "row1"
        }, {
          id: "previousVideo",
          label: "Previous Video",
          type: "button",
          icon: "left",
          viewId: "row2",
          operations: { onInput: onPrevious }
        }, {
          id: "nextVideo",
          label: "Next Video",
          type: "button",
          icon: "right",
          viewId: "row2",
          operations: { onInput: onNext }
        }, {
          id: "play",
          label: "Play",
          type: "button",
          icon: "select",
          viewId: "row3",
          operations: { onInput: switchToPlayerControl }
        }]
      }
    };    
}



const buildPlayerControl = ({title,switchToSelectVideoControl, playerStatusValue,setSliderPosition,rewindVideo,pauseVideo,playVideo,fastForwardVideo,skipToBegin,skipToEnd})=>{
  return {
    action: "input",
    dataType: "control",
    id: 'playVideo',
    form: {
      title: title,
      fields: [{
        id: "changeVideo",
        type: "button",
        label: "Play Different Video",
        viewId: "row1"        
      }, {
        id: "playerStatus",
        type: "info",
        value:  playerStatusValue,
        viewId: "row2"
      }, {
        id: "currentTime",
        type: "range",
        value: 0,
        minimumValue: 0,
        maximumValue: 100,
        step: 1,
        viewId: "row3"        
      }, {
        id: "rwButton",
        type: "button",
        label: "RW",
        icon: "rw",
        viewId: "row4"        
      }, {
        id: "playPauseButton",
        type: "button",
        value: 0,
        label: "Play",
        icon: "play",
        options: [{ value: 0, label: "Play", icon: "play" }, { value: 1, label: "Pause", icon: "pause" }],
        viewId: "row4"        
      }, {
        id: "ffButton",
        type: "button",
        label: "FF",
        icon: "ff",
        viewId: "row4"        
      }, {
        id: "skipToBeginButton",
        type: "button",
        label: "Begin",
        icon: "skip-to-begin",
        viewId: "row5"        
      }, {
        id: "skipToEndButton",
        type: "button",
        label: "End",
        icon: "skip-to-end",
        viewId: "row5"        
      }
      ]
    }
  };
};
const getPlayerControlSetters = (globalInputApp,initData) => {
  const defaultSetters={
    setStatusValue: ()=>{},
    setSliderValue: ()=>{},
    setPlayerPauseButton:()=>{}      
  };
  if(!initData || initData.id!=='playVideo'){          
          return defaultSetters;
  }
  const {setters}=globalInputApp;
  if(!setters){
    return defaultSetters;
  }
  const [setChangeVideoButton,setStatusValue,setSliderValue,setRWButton,setPlayerPauseButton]=setters;
  if(!setStatusValue){
    return defaultSetters;
  }      
  return {setStatusValue,setSliderValue,setPlayerPauseButton};      
};

const buildPlayerStatusValue = (title, message) => {
  return {
    type: "view",
    style: {
      borderColor: "#rgba(72,128,237,0.5)",
      backgroundColor: "#rgba(72,128,237,0.5)",
      borderWidth: 1,
      marginTop: 5,
      minWidth: "100%",
      minHeight: 80,
    },
    content: [{
      type: "text",
      content: title,
      style: {
        fontSize: 18,
        color: "white"
      }
    }, {
      type: "text",
      content: message,
      style: {
        fontSize: 14,
        color: "white"
      }
    }]

  };
};

const buildTimeString= timestamp => {
  var mininutes = Math.floor(timestamp / 60) % 60;
  var hours = Math.floor(timestamp / 3600);
  var minutesString = mininutes.toString().length < 2 ? '0' + mininutes : mininutes.toString();

  var seconds = Math.floor(timestamp) % 60;
  var secondsString = seconds.toString().length < 2 ? '0' + seconds : seconds;
  var result = (hours > 0) ? (hours.toString() + ':' + minutesString + ':' + secondsString) : (minutesString + ':' + secondsString);
  return result.match(/^([0-9]+:)?[0-9]*:[0-9]*$/) ? result : '00:00';
}
const buildSliderValue=(currentTime, duration)=>{
  return {
    value: Math.floor(currentTime * 100 / duration),
    labels: {
      value: buildTimeString(currentTime),
      minimumValue: buildTimeString(0),
      maximumValue: buildTimeString(duration)
    }
  };
};


