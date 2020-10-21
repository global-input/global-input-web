import React, { useRef, useState, useEffect } from "react";
import { useGlobalInputApp } from 'global-input-react';

import * as videoControl from './videoControl';
import { PageContainer, QRCodeContainer,P, useWindowSize, A } from './app-layout';


const selectorFields={
  id:"videoSelector",
  title:{
    id: "video-title",    
    type: "info",
    value: {
      type: "text",
      content: "",
      style: {
        fontSize: 18,
        marginTop: 20,
      }
    },
    viewId: "row1",
   }, 
   synopsis:{
    id: "synopsis",
    type: "info",
    value: "",
    viewId: "row1"
  }, 
  previous:{
    id: "previousVideo",
    label: "Previous Video",
    type: "button",
    icon: "left",
    viewId: "row2"          
  }, 
  next:{
    id: "nextVideo",
    label: "Next Video",
    type: "button",
    icon: "right",
    viewId: "row2",
    
  }, 
  play:{
    id: "videoPlayer",
    label: "Play",
    type: "button",
    icon: "select",
    viewId: "row3"          
  }

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

const playerFields={   
    id:"videoPlayer", 
    selector:{
    id: "videoSelector",
    type: "button",
    label: "Play Different Video",
    viewId: "row1"        
    }, 
    status:{
      id: "playerStatus",
      type: "info",
      value:  buildPlayerStatusValue('',''),
      viewId: "row2"
    },
    slider:{
      id: "currentTimeSlider",
      type: "range",
      value: 0,
      minimumValue: 0,
      maximumValue: 100,
      step: 1,
     viewId: "row3"        
    }, 
    rw:{
    id: "rwButton",
    type: "button",
    label: "RW",
    icon: "rw",
    viewId: "row4"        
   },
   playPause:{
    id: "playPauseButton",
    type: "button",
    value: 0,
    label: "Play",
    icon: "play",
    options: [{ value: 0, label: "Play", icon: "play" }, { value: 1, label: "Pause", icon: "pause" }],
    viewId: "row4"        
   },
   ff:{
    id: "ffButton",
    type: "button",
    label: "FF",
    icon: "ff",
    viewId: "row4"        
  }, 
  begin:{
    id: "skipToBeginButton",
    type: "button",
    label: "Begin",
    icon: "skip-to-begin",
    viewId: "row5"        
  }, 
  end:{
    id: "skipToEndButton",
    type: "button",
    label: "End",
    icon: "skip-to-end",
    viewId: "row5"        
  }

}



export const selector =(title, synopsis)=>{
  selectorFields.title.value.content=title;
  selectorFields.synopsis.value=synopsis;
    return {  
      action: "input",
      id: selectorFields.id,
      dataType: "control",
      form: {
        title: "Select Video to Play",
        fields: [selectorFields.title,
                selectorFields.synopsis,
                selectorFields.previous,
                selectorFields.next,
                selectorFields.play
                ]
      } 
  }   
};



export const player=(title)=>{
    
    return {
      action: "input",
      dataType: "control",
      id: playerFields.id,
      form: {
        title: title,
        fields: [
          playerFields.selector, 
          playerFields.status, 
          playerFields.slider, 
          playerFields.rw,
          playerFields.playPause,
          playerFields.ff,
          playerFields.begin,
          playerFields.end         
        ]
      }
    };
  };



export default () => {
  
  const [videoData, setVideoData] = useState(videoControl.getDefaultVideo());
  const videoPlayer = useRef(null);
  const mobile = useGlobalInputApp({ initData: selector(videoData.video.title, videoData.video.synopsis)});        
  
    const onChangeVideoData = videoData => {
      videoControl.setPlayVideoSource(videoPlayer.current, videoData.video);
      mobile.sendValue(selectorFields.title.id,videoData.video.title);
      mobile.sendValue(selectorFields.synopsis.id,videoData.video.synopsis);
      setVideoData(videoData);
    };
   const setPlayerStatus = (playerStatusTitle, playerStatusMessage) => {
        mobile.sendValue(playerFields.status.id,buildPlayerStatusValue(playerStatusTitle,playerStatusMessage));    
    };
    const showPlayButton= ()=>{
        mobile.sendValue(playerFields.playPause.id,0);        
    };
    const showPauseButton= ()=>{
        mobile.sendValue(playerFields.playPause.id,1);        
    };
    const setSliderValue= (sliderValue) => {
        mobile.sendValue(playerFields.slider.id,sliderValue);        
    };

    mobile.setOnchange(({field,initData,sendInitData}) => {      
      switch (initData.id===selectorFields.id && field.id) {
              case selectorFields.play.id:
                      videoControl.playVideo(videoPlayer.current);
                      sendInitData(player(videoData.video.title));                      
                      break;                        
              case selectorFields.previous.id:
                      onChangeVideoData(videoControl.getPreviousVideo(videoData));
                      break;
              case selectorFields.next.id:
                      onChangeVideoData(videoControl.getNextVideo(videoData));
                      break;
      }
      
      switch (initData.id===playerFields.id && field.id) {                        
              case playerFields.selector.id:
                      sendInitData(selector(videoData.video.title, videoData.video.synopsis));
                      break;                        
              case playerFields.slider.id:
                      videoControl.setCurrentTimeWithSlider(videoPlayer.current, field.value);
                      break;
              case playerFields.rw.id:
                      setPlayerStatus('<<', '');
                      showPauseButton();
                      videoControl.rewindVideo(videoPlayer.current, () => {
                              setPlayerStatus('Paused', 'Rewind complete');
                              showPlayButton();
                      });
                      break;
              case playerFields.playPause.id:
                      if(field.value){
                        videoControl.pauseVideo(videoPlayer.current);
                        showPlayButton();

                      }
                      else{
                        videoControl.playVideo(videoPlayer.current);                                
                        showPauseButton();
                      }                       
                      break;
              case playerFields.ff.id:                                
                      if (videoPlayer.current) {
                              videoControl.fastForwardVideo(videoPlayer.current);
                              const { playbackRate } = videoPlayer.current as any;
                              setPlayerStatus('>', `x  ${playbackRate}`);
                              showPauseButton();
                      }
                      break;
              case playerFields.begin.id:
                      videoControl.pauseVideo(videoPlayer.current);
                      videoControl.skipToBegin(videoPlayer.current);
                      setPlayerStatus('Paused', '');
                      showPauseButton();
                      break;
              case playerFields.end.id:
                      videoControl.pauseVideo(videoPlayer.current);
                      videoControl.skipToEnd(videoPlayer.current);
                      setPlayerStatus( 'Paused', '');
                      showPauseButton();
                      break;
      }

});





   const onPlay = () => {    
      setPlayerStatus('Playing', '');
      showPauseButton();
    };
    const onPause = () => {    
      setPlayerStatus('Paused', '');
      showPlayButton();
    };
    
    const onTimeUpdate = () => {
      const { duration, sliderValue } = videoControl.getVideoData(videoPlayer.current);
      if (!duration) {
        return;
      }
      if (videoControl.throttleSliderValue(sliderValue)) {
        setSliderValue(sliderValue);
      }
    };
    const onAbort = () => {    
      setPlayerStatus('Aborted', '');
      showPlayButton();
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
      setPlayerStatus('Completed', '');
      showPlayButton();
  };
  const onError = () => {    
    setPlayerStatus('Error', 'Something wrong in player');
    showPlayButton();
  };
  const onLoadedData = () => {

  };
  const onLoadedMetadata = () => {

  };
  const onLoadStart = () => {

  };
  const onPlaying = () => {    
    setPlayerStatus('Playing', '');
    showPauseButton();
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

  

  const [w,h] = useWindowSize();
  

  const { videoWidth, videoHeight } = videoControl.calculateWatchWindowSize(w,h );

  

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

      <mobile.ConnectQR container={QRCodeContainer}/>
      
      <P>This example application (with <A href="https://github.com/global-input/media-player-control-example">its source code</A>)
      demonstrate how you can use the <A href="https://github.com/global-input/global-input-react">extension library</A> to extend an existing media application
      to have <a href="https://globalinput.co.uk/global-input-app/second-screen-experience">Second Screen Experience</a>
      </P>
    </PageContainer>);


};






