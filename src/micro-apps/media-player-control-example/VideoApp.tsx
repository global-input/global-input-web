import React, { useRef, useState } from "react";
import { useHistory } from 'react-router-dom'; ////website
import { useMobile } from './mobile';
import * as videoControl from './videoControl';
import { AppFooter, MessageButton, MessageLink, PageContainer, QRCodeContainer, P, useWindowSize, A } from './app-layout';
import * as selectorUI from './selectorUI';
import * as playerUI from './playerUI';
import * as mobileUI from '../../micro-apps/mobile-ui'; ////website

interface Props {
  connectionSettings: () => void
}
const VideoApp: React.FC<Props> = ({ connectionSettings }) => {
  const history = useHistory();////website
  const [videoData, setVideoData] = useState(videoControl.getDefaultVideo());
  const videoPlayer = useRef(null);

  const mobile = useMobile(() => selectorUI.initData(videoData.video.title, videoData.video.synopsis));

  const onChangeVideoData = videoData => {
    videoControl.setPlayVideoSource(videoPlayer.current, videoData.video);
    selectorUI.sendTitle(mobile, videoData.video.title);
    selectorUI.sendSynopsis(mobile, videoData.video.synopsis);
    setVideoData(videoData);
  };

  mobile.setOnchange(({ field }) => {
    switch (mobile.initData.id === selectorUI.initDataId && field.id) {
      case selectorUI.fields.play.id:
        videoControl.playVideo(videoPlayer.current);
        mobile.sendInitData(playerUI.initData(videoData.video.title));
        break;
      case selectorUI.fields.previous.id:
        onChangeVideoData(videoControl.getPreviousVideo(videoData));
        break;
      case selectorUI.fields.next.id:
        onChangeVideoData(videoControl.getNextVideo(videoData));
        break;
      default:
      mobileUI.onFieldChange(field,history)////website
    }

    switch (mobile.initData.id === playerUI.initDataId && field.id) {
      case playerUI.fields.selector.id:
        mobile.sendInitData(selectorUI.initData(videoData.video.title, videoData.video.synopsis));
        break;
      case playerUI.fields.slider.id:
        videoControl.setCurrentTimeWithSlider(videoPlayer.current, field.value);
        break;
      case playerUI.fields.rw.id:
        playerUI.sendStatus(mobile, '<<', '');
        playerUI.sendPauseButton(mobile);
        videoControl.rewindVideo(videoPlayer.current, () => {
          playerUI.sendStatus(mobile, 'Paused', 'Rewind complete');
          playerUI.sendPlayButton(mobile);
        });
        break;
      case playerUI.fields.playPause.id:
        if (field.value) {
          videoControl.pauseVideo(videoPlayer.current);
          playerUI.sendPlayButton(mobile);
        }
        else {
          videoControl.playVideo(videoPlayer.current);
          playerUI.sendPauseButton(mobile);
        }
        break;
      case playerUI.fields.ff.id:
        if (videoPlayer.current) {
          videoControl.fastForwardVideo(videoPlayer.current);
          const { playbackRate } = videoPlayer.current as any;
          playerUI.sendStatus(mobile, '>', `x  ${playbackRate}`);
          playerUI.sendPauseButton(mobile);
        }
        break;
      case playerUI.fields.begin.id:
        videoControl.pauseVideo(videoPlayer.current);
        videoControl.skipToBegin(videoPlayer.current);
        playerUI.sendStatus(mobile, 'Paused', '');
        playerUI.sendPauseButton(mobile);
        break;
      case playerUI.fields.end.id:
        videoControl.pauseVideo(videoPlayer.current);
        videoControl.skipToEnd(videoPlayer.current);
        playerUI.sendStatus(mobile, 'Paused', '');
        playerUI.sendPauseButton(mobile);
        break;
    }

  });
  const onPlay = () => {
    playerUI.sendStatus(mobile, 'Playing', '');
    playerUI.sendPauseButton(mobile);
  };
  const onPause = () => {
    playerUI.sendStatus(mobile, 'Paused', '');
    playerUI.sendPlayButton(mobile);
  };

  const onTimeUpdate = () => {
    const { duration, sliderValue } = videoControl.getVideoData(videoPlayer.current);
    if (!duration) {
      return;
    }
    if (videoControl.throttleSliderValue(sliderValue)) {
      playerUI.sendSliderValue(mobile, sliderValue);
    }
  };
  const onAbort = () => {
    playerUI.sendStatus(mobile, 'Aborted', '');
    playerUI.sendPlayButton(mobile);
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
    playerUI.sendStatus(mobile, 'Completed', '');
    playerUI.sendPlayButton(mobile);
  };
  const onError = () => {
    playerUI.sendStatus(mobile, 'Error', 'Something wrong in player');
    playerUI.sendPlayButton(mobile);
  };
  const onLoadedData = () => {

  };
  const onLoadedMetadata = () => {

  };
  const onLoadStart = () => {

  };
  const onPlaying = () => {
    playerUI.sendStatus(mobile, 'Playing', '');
    playerUI.sendPauseButton(mobile);
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



  const [w, h] = useWindowSize();


  const { videoWidth, videoHeight } = videoControl.calculateWatchWindowSize(w, h);



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
      <QRCodeContainer>
        <mobile.ConnectQR />
      </QRCodeContainer>





      <AppFooter>
        <MessageButton label="Settings" onClick={connectionSettings} />
        <MessageLink href="https://github.com/global-input/media-player-control-example">Source Code</MessageLink>
      </AppFooter>

      <P>This example application (with <A href="https://github.com/global-input/media-player-control-example">its source code</A>)
      demonstrate how you can use the <A href="https://github.com/global-input/global-input-react">extension library</A> to extend an existing media application
      to have <a href="https://globalinput.co.uk/global-input-app/second-screen-experience">Second Screen Experience</a>
      </P>

    </PageContainer>);


};


export default VideoApp;