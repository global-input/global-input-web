import React, { useRef, useState } from "react";
import * as videoControl from './videoControl';

import {AppContainer,Footer,useWindowSize} from './components';
import {useConnectMobile,ConnectWindow, ConnectButton} from './mobile-ui';

const VideoApp: React.FC = () => {
  const [videoData, setVideoData] = useState(videoControl.getDefaultVideo());
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const [allowAudio,setAllowAudio]=useState(false);

  const {mobile, handlers} = useConnectMobile({videoPlayer,videoData,setVideoData,videoControl,allowAudio});
  const onPlay = () => handlers.onPlay();
  const onPause = () => handlers.onPause();
  const onTimeUpdate = () => handlers.onTimeUpdate(videoPlayer);
  const onAbort = () =>handlers.onAbort();
  const onCanPlay = () => {}
  const onCanPlayThrough = () => {};
  const onDurationChange = () => {};
  const onEncrypted = () => {};
  const onEnded = () => handlers.onEnded();

  const onError = () => handlers.onError();
  const onLoadedData = () => {};
  const onLoadedMetadata = () => {};
  const onLoadStart = () => {};
  const onPlaying = () => handlers.onPlaying();
  const onProgress = () => {};
  const onRateChange = () => {};
  const onSeeked = () => {};
  const onSeeking = () => {};
  const onStalled = () => {};
  const onSuspend = () => {};
  const onVolumeChange = () => {};
  const onWaiting = () => {};
  const [w, h] = useWindowSize();
  const { videoWidth, videoHeight } = videoControl.calculateWatchWindowSize(w, h);
  const onVideoClicked=()=>{
       setAllowAudio(true);
       handlers.audioEnabled();

  };
  return (
    <AppContainer>


      <video width={videoWidth} height={videoHeight}
        onClick={onVideoClicked}
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
        <source src={videoData.mp4} type="video/mp4" />
      </video>
      <ConnectWindow mobile={mobile}/>
      <Footer>
              <ConnectButton mobile={mobile}/>
      </Footer>



    </AppContainer>);


};


export default VideoApp;