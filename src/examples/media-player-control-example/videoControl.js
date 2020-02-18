import React from 'react';

let threadForSkip = null;
const stopSkipProcess = videoPlayer => {
  if (threadForSkip) {
    clearInterval(threadForSkip);
    threadForSkip = null;
    if (videoPlayer) {
      videoPlayer.playbackRate = 1;
    }
  }
};

const startSkipProcess = (videoPlayer, onFinish) => {
  stopSkipProcess(videoPlayer);
  if (!videoPlayer) {
    return;
  }
  let nextPosition = videoPlayer.currentTime - 0.1;

  threadForSkip = setInterval(() => {
    if (nextPosition <= 0) {
      videoPlayer.currentTime = 0;
      stopSkipProcess(videoPlayer);
      if (onFinish) {
        onFinish();
      }
    }
    else {
      videoPlayer.currentTime = nextPosition;
      nextPosition -= 2;
    }
  }, 500);
}

export const setPlayVideoSource = (videoPlayer, video) => {
  if (videoPlayer) {
    videoPlayer.pause();
    videoPlayer.childNodes[0].setAttribute('src', video.mp4);
    videoPlayer.load();
  }
};

export const playVideo = videoPlayer => {

  stopSkipProcess({ videoPlayer });
  if (videoPlayer) {
    videoPlayer.play();
    videoPlayer.playbackRate = 1;
  }
  else {
    console.log("videoPlayer is empty");
  }
};
export const pauseVideo = videoPlayer => {
  stopSkipProcess({ videoPlayer });
  if (videoPlayer) {
    try {
      videoPlayer.pause();
    }
    catch (error) {
      console.log("error when trying to pause the video:" + error);
    }
  }
}

export const calculateWatchWindowSize = ([width, height]) => {
  console.log("width::::" + width);
  console.log("height::::" + height);
  var w = width - 50;
  var h = height - 50;

  var videoHeight = h - 50;
  var videoWidth = 16 * videoHeight / 9;
  if (videoWidth > w) {
    videoWidth = w - 50;
    videoHeight = 9 * videoWidth / 16;
  }
  return { videoWidth, videoHeight };
};


export const rewindVideo = (videoPlayer, onFinish) => {
  if (!videoPlayer) {
    if (onFinish) {
      onFinish();
    }
    return;
  }
  stopSkipProcess(videoPlayer);
  videoPlayer.pause();
  startSkipProcess(videoPlayer, onFinish);
};

export const fastForwardVideo = videoPlayer => {
  stopSkipProcess();
  videoPlayer.playbackRate++;
  if (videoPlayer) {
    videoPlayer.play();
  }
}
export const skipToBegin = videoPlayer => {
  stopSkipProcess();
  videoPlayer.playbackRate = 1;
  if (videoPlayer) {
    videoPlayer.currentTime = 0;
  }
}

export const skipToEnd = videoPlayer => {
  stopSkipProcess();
  videoPlayer.playbackRate = 1;
  if (videoPlayer) {
    if (videoPlayer.duration && videoPlayer.duration > 2) {
      videoPlayer.currentTime = videoPlayer.duration - 1;
    }

  }
};
export const getVideoData = videoPlayer => {
  if (!videoPlayer) {
    return { currentTime: 0, duration: 0 }
  }
  const currentTime = videoPlayer.currentTime;
  const duration = videoPlayer.duration;
  return { currentTime, duration };
};

export const setCurrentTimeWithSlider = (videoPlayer, sliderPosition) => {
  if (!videoPlayer) {
    return;
  }
  if (!videoPlayer.duration) {
    return;
  }
  let currentTime = sliderPosition * videoPlayer.duration / 100;
  if (currentTime > videoPlayer.duration) {
    currentTime = videoPlayer.duration;
  }
  videoPlayer.currentTime = currentTime;
}



