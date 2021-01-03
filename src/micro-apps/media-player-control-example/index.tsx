import React, { useRef, useState } from "react";
import * as videoControl from './videoControl';
import { AppFooter,  MessageLink, PageContainer, P, useWindowSize, A } from './app-layout';
import {useConnectMobile,ConnectWindow, ConnectButton} from './mobile-ui';

const VideoApp: React.FC = () => {
  const [videoData, setVideoData] = useState(videoControl.getDefaultVideo());
  const videoPlayer = useRef(null);
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
  };
  return (
    <PageContainer>
        <MessageLink href="https://github.com/global-input/media-player-control-example">Source Code</MessageLink>

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
        <source src={videoData.video.mp4} type="video/mp4" />
      </video>
      <ConnectWindow mobile={mobile}/>
      <AppFooter>
              <ConnectButton mobile={mobile}/>
      </AppFooter>
      <P>This example application (with <A href="https://github.com/global-input/media-player-control-example">its source code</A>)
      demonstrate how you can use the <A href="https://github.com/global-input/global-input-react">extension library</A> to extend an existing media application
      to have <a href="https://globalinput.co.uk/global-input-app/second-screen-experience">Second Screen Experience</a>
      </P>

    </PageContainer>);


};


export default VideoApp;