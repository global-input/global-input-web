import React, { useRef, useState, useEffect } from "react";
import { useGlobalInputApp } from 'global-input-react';
import * as config from './config';
import * as videoControl from './videoControl';
import { PageContainer, QRCodeContainer,P, useWindowSize, A } from './app-layout';


export default () => {
  
  const [videoData, setVideoData] = useState(videoControl.getDefaultVideo());
  const videoPlayer = useRef(null);
  const mobile = useGlobalInputApp({ initData: config.selector(videoData.video.title, videoData.video.synopsis)});        
  
    const onChangeVideoData = videoData => {
      videoControl.setPlayVideoSource(videoPlayer.current, videoData.video);
      mobile.sendValue(config.VIDEO_TITLE_ID,videoData.video.title);
      mobile.sendValue(config.VIDEO_SYNOPSIS_ID,videoData.video.synopsis);
      setVideoData(videoData);
    };
   const setPlayerStatus = (playerStatusTitle, playerStatusMessage) => {
        mobile.sendValue(config.PLAYER_STATUS_FIELD_ID,config.buildPlayerStatusValue(playerStatusTitle,playerStatusMessage));    
    };
    const showPlayButton= ()=>{
        mobile.sendValue(config.PLAY_PAUSE_BUTTON_ID,0);        
    };
    const showPauseButton= ()=>{
        mobile.sendValue(config.PLAY_PAUSE_BUTTON_ID,1);        
    };
    const setSliderValue= (sliderValue) => {
        mobile.sendValue(config.SLIDER_FIELD_ID,sliderValue);        
    };

    mobile.setOnchange(({field,initData,sendInitData}) => {      
      switch (initData.id===config.VIDEO_SELECTOR_ID && field.id) {
              case config.VIDEO_PLAYER_ID:
                      videoControl.playVideo(videoPlayer.current);
                      sendInitData(config.player(videoData.video.title));
                      break;                        
              case config.PREVIOUS_VIDEO_ID:
                      onChangeVideoData(videoControl.getPreviousVideo(videoData));
                      break;
              case config.NEXT_VIDEO_ID:
                      onChangeVideoData(videoControl.getNextVideo(videoData));
                      break;
      }
      
      switch (initData.id===config.VIDEO_PLAYER_ID && field.id) {                        
              case config.VIDEO_SELECTOR_ID:
                      sendInitData(config.selector(videoData.video.title, videoData.video.synopsis));
                      break;                        
              case config.SLIDER_FIELD_ID:
                      videoControl.setCurrentTimeWithSlider(videoPlayer.current, field.value);
                      break;
              case config.RW_BUTTON_ID:
                      setPlayerStatus('<<', '');
                      showPauseButton();
                      videoControl.rewindVideo(videoPlayer.current, () => {
                              setPlayerStatus('Paused', 'Rewind complete');
                              showPlayButton();
                      });
                      break;
              case config.PLAY_PAUSE_BUTTON_ID:
                      field.value ? videoControl.pauseVideo(videoPlayer.current) : videoControl.playVideo(videoPlayer.current);                                
                      break;
              case config.FF_BUTTON_ID:                                
                      if (videoPlayer.current) {
                              videoControl.fastForwardVideo(videoPlayer.current);
                              const { playbackRate } = videoPlayer.current as any;
                              setPlayerStatus('>', `x  ${playbackRate}`);
                              showPauseButton();
                      }
                      break;
              case config.SKIP_TO_BEGIN_ID:
                      videoControl.pauseVideo(videoPlayer.current);
                      videoControl.skipToBegin(videoPlayer.current);
                      setPlayerStatus('Paused', '');
                      showPauseButton();
                      break;
              case config.SKIP_TO_END_ID:
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






