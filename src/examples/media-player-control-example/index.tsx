import React, { useRef, useState, useEffect } from "react";


import * as videoControl from './videoControl';
import { PageContainer, P, useWindowSize, A } from './app-layout';
import useSecondScreen from './useSecondScreen';

export default () => {

  const videoPlayer = useRef(null);
  const { secondScreenControl, SecondScreenConnection, videoData } = useSecondScreen(videoPlayer);

  const onPlay = () => {    
      secondScreenControl.setPlayerStatus('Playing', '');
      secondScreenControl.showPauseButton();
  };
  const onPause = () => {    
      secondScreenControl.setPlayerStatus('Paused', '');
      secondScreenControl.showPlayButton();
  };

  const onTimeUpdate = () => {
    const { duration, sliderValue } = videoControl.getVideoData(videoPlayer.current);
    if (!duration) {
      return;
    }
    if (videoControl.throttleSliderValue(sliderValue)) {
      secondScreenControl.setSliderValue(sliderValue);
    }
  };
  const onAbort = () => {    
    secondScreenControl.setPlayerStatus('Aborted', '');
    secondScreenControl.showPlayButton();
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
      secondScreenControl.setPlayerStatus('Completed', '');
      secondScreenControl.showPlayButton();
  };
  const onError = () => {    
    secondScreenControl.setPlayerStatus('Error', 'Something wrong in player');
    secondScreenControl.showPlayButton();
  };
  const onLoadedData = () => {

  };
  const onLoadedMetadata = () => {

  };
  const onLoadStart = () => {

  };
  const onPlaying = () => {    
    secondScreenControl.setPlayerStatus('Playing', '');
    secondScreenControl.showPauseButton();
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

  const { videoWidth, videoHeight } = videoControl.calculateWatchWindowSize(windowSize as [any, any]);



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
      <SecondScreenConnection />
      <P>This example application (with <A href="https://github.com/global-input/media-player-control-example">its source code</A>)
      demonstrate how you can use the <A href="https://github.com/global-input/global-input-react">extension library</A> to extend an existing media application
      to have <a href="https://globalinput.co.uk/global-input-app/second-screen-experience">Second Screen Experience</a>
      </P>
    </PageContainer>);


};






