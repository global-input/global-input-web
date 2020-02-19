import React, { useRef, useEffect, useReducer } from "react";
import { useGlobalInputApp } from 'global-input-react';




import * as actions from './actions';
import * as videoControl from './videoControl';
import { PageContainer, P, QRCodeContainer, useWindowSize,A } from './app-layout';

export default () => {
  const videoPlayer = useRef(null);


  const [state, dispatch] = useReducer(actions.reducer, actions.initialData);
  const { initData, video, mobileControl } = state;
  const { connectionMessage,mobile,WhenWaiting,WhenDisconnected} = useGlobalInputApp({initData}, [initData]);

  useEffect(() => {
      actions.onVideoMounted({dispatch,videoPlayer});
  }, []);

  useEffect(() => {
    actions.onMobileControlChanged({state,mobileControl,mobile,videoPlayer,dispatch});    
  }, [mobileControl]);

  useEffect(() => {
    actions.onVideoChanged({state,videoPlayer});
  }, [video]);



  const onPlay = () => {
    actions.playerEvents.onPlayPause({ state, isPlaying: true });
  }
  const onPause = () => {
    actions.playerEvents.onPlayPause({ state, isPlaying: false });
  };
  const onTimeUpdate = () => {
    const { currentTime, duration } = videoControl.getVideoData(videoPlayer.current);
    actions.playerEvents.setCurrentTime({ state, currentTime, duration });
  };
  const onAbort = () => {
    actions.playerEvents.onAbort({ state, videoPlayer });
  };
  const onCanPlay = () => {
    actions.playerEvents.onCanPlay({ state, videoPlayer });
  }
  const onCanPlayThrough = () => {
    actions.playerEvents.onCanPlayThrough({ state, videoPlayer });
  };
  const onDurationChange = () => {
    actions.playerEvents.onDurationChange({ state, videoPlayer });
  };
  const onEncrypted = () => {
    actions.playerEvents.onEncrypted({ state, videoPlayer });
  };
  const onEnded = () => {
    actions.playerEvents.onEnded({ state, videoPlayer });
  };
  const onError = () => {
    actions.playerEvents.onError({ state, videoPlayer });
  };
  const onLoadedData = () => {
    actions.playerEvents.onLoadedData({ state, videoPlayer });
  };
  const onLoadedMetadata = () => {
    actions.playerEvents.onLoadedMetadata({ state, videoPlayer });
  };
  const onLoadStart = () => {
    actions.playerEvents.onLoadStart({ state, videoPlayer });
  };
  const onPlaying = () => {
    actions.playerEvents.onPlaying({ state, videoPlayer });
  };
  const onProgress = () => {
    actions.playerEvents.onProgress({ state, videoPlayer });
  };
  const onRateChange = () => {
    actions.playerEvents.onRateChange({ state, videoPlayer });
  };
  const onSeeked = () => {
    actions.playerEvents.onSeeked({ state, videoPlayer });
  };
  const onSeeking = () => {
    actions.playerEvents.onSeeking({ state, videoPlayer });
  };
  const onStalled = () => {
    actions.playerEvents.onStalled({ state, videoPlayer });
  };
  const onSuspend = () => {
    actions.playerEvents.onSuspend({ state, videoPlayer });
  };
  const onVolumeChange = () => {
    actions.playerEvents.onVolumeChange({ state, videoPlayer });
  };

  const onWaiting = () => {
    actions.playerEvents.onWaiting({ state, videoPlayer });
  };



  const windowSize = useWindowSize();

  const { videoWidth, videoHeight } = videoControl.calculateWatchWindowSize(windowSize);


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
        <source src={video.mp4} type="video/mp4" />
      </video>
      <WhenWaiting>
        <QRCodeContainer>
          {connectionMessage}      
        </QRCodeContainer>
      </WhenWaiting>
      <WhenDisconnected>
        <P>Disconnected, reload the page to try again.</P>
        
      </WhenDisconnected>
      
      
      <P>This is an <a href="https://globalinput.co.uk/global-input-app/second-screen-experience">Second Screen Experience application</a> example. Its source code is available on <A href="https://github.com/global-input/media-player-control-example">GitHub</A></P>
    </PageContainer>);


};





