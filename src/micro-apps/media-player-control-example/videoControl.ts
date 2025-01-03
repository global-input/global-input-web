

let threadForSkip:number = 0;
const stopSkipProcess = videoPlayer => {
  if (threadForSkip) {
    clearInterval(threadForSkip);
    threadForSkip = 0;
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

  threadForSkip = window.setInterval(() => {
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
  
};

export const setMuted = (videoPlayer, muted) => {
  videoPlayer.muted = muted;
};


export const pauseVideo = videoPlayer => {
  stopSkipProcess({ videoPlayer });
  if (videoPlayer) {
    try {
      videoPlayer.pause();
    }
    catch (error) {
      console.log("error when trying to pause the video:" + error, error);
    }
  }
}

export const calculateWatchWindowSize = (width, height) => {
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
  stopSkipProcess(videoPlayer);
  videoPlayer.playbackRate++;
  if (videoPlayer) {
    videoPlayer.play();
  }
}
export const skipToBegin = videoPlayer => {
  stopSkipProcess(videoPlayer);
  videoPlayer.playbackRate = 1;
  if (videoPlayer) {
    videoPlayer.currentTime = 0;
  }
}

export const skipToEnd = videoPlayer => {
  stopSkipProcess(videoPlayer);
  videoPlayer.playbackRate = 1;
  if (videoPlayer) {
    if (videoPlayer.duration && videoPlayer.duration > 2) {
      videoPlayer.currentTime = videoPlayer.duration - 1;
    }

  }
};

export interface VideoData{
  title:string;
  synopsis:string;
  mp4:string;
}

const videos:VideoData[] = [{
  title: "Tutorial Part 1",
  synopsis: "In this Global Input App tutorial video, you will learn how to install the Chrome extension and then use ir to sign in to web applications quickly and securely. You can subscribe and sign in to web applications without worrying about remembering your passwords for they are stored automatically into your phone",
  mp4: "https://media.iterativesolution.co.uk/video/global_input_sign_in.mp4"
}, {
  title: "Authentication Demo",
  synopsis: "This authentication demo demonstrate that you can use the Global Input App to sign in to applications in public view. You can also create mutltiple accounts, for example google accounts, and sign in without needing to know your auto-generated random passwords.",
  mp4: "https://media.iterativesolution.co.uk/video/google-sign-in.mp4"
}, {
  title: "Copy and Paste Across Devices",
  synopsis: "A very short demo demonstrating using Global Input App to copy and paste contents across devices",
  mp4: "https://media.iterativesolution.co.uk/video/copy-and-paste.mp4"
}];





export const getDefaultVideo = () => {
  return videos[0];
};

export const getNextVideo = videoData => {
    const index=videos.indexOf(videoData);
    if(index===-1){
      console.warn("failed to find the next video");
      return videoData;
    }
    if((index+1)<videos.length){
        return videos[index+1];
    }
    return videos[0];
};
export const getPreviousVideo = videoData => {
  const index=videos.indexOf(videoData);
    if(index===-1){
      console.warn("failed to find the previous video");
      return videoData;
    }
    if((index-1)>=0){
        return videos[index-1];
    }
    return videos[videos.length-1];
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




let cachedSliderValueHolder:any= null

export const throttleSliderValue = (sliderValue) => {
  var data = {
    sliderValue,
    timestamp: (new Date()).getTime()
  };
  if(!cachedSliderValueHolder){
    cachedSliderValueHolder = data;
  }
  else if ((data.timestamp - cachedSliderValueHolder.timestamp) > 2000 || Math.abs(data.sliderValue.value - cachedSliderValueHolder.sliderValue.value) >= 5) {
    cachedSliderValueHolder = data;
    return true;
  }
  else {
    return false;
  }
};


const buildSliderValue = (currentTime, duration) => {
  return {
    value: Math.floor(currentTime * 100 / duration),
    labels: {
      value: buildTimeString(currentTime),
      minimumValue: buildTimeString(0),
      maximumValue: buildTimeString(duration)
    }
  };
};
export const getVideoPlayerData = videoPlayer => {
  const videoPlayerData = {
    currentTime: 0,
    duration: 0,
    sliderValue: {}
  }
  if (!videoPlayer) {
    return videoPlayerData;
  }
  videoPlayerData.currentTime = videoPlayer.currentTime;
  videoPlayerData.duration = videoPlayer.duration;
  if (!videoPlayerData.duration) {
    return videoPlayerData;
  }
  videoPlayerData.sliderValue = buildSliderValue(videoPlayerData.currentTime, videoPlayerData.duration);
  return videoPlayerData;
}



const buildTimeString = timestamp => {
  var mininutes = Math.floor(timestamp / 60) % 60;
  var hours = Math.floor(timestamp / 3600);
  var minutesString = mininutes.toString().length < 2 ? '0' + mininutes : mininutes.toString();

  var seconds = Math.floor(timestamp) % 60;
  var secondsString = seconds.toString().length < 2 ? '0' + seconds : seconds;
  var result = (hours > 0) ? (hours.toString() + ':' + minutesString + ':' + secondsString) : (minutesString + ':' + secondsString);
  return result.match(/^([0-9]+:)?[0-9]*:[0-9]*$/) ? result : '00:00';
}
