

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


const videos = [{
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

const buildVideo = index => {
  return {
    index,
    video:videos[index]
  };
};



const decreaseVideoIndex =videoIndex => {
  if (videoIndex <= 0) {
    return videos.length - 1;
  }
  else {
    return videoIndex - 1;
  }
};
const increaseVideoIndex =videoIndex => {
  if (videoIndex >= (videos.length - 1)) {
    return 0;
  }
  else {
    return videoIndex + 1;
  }
};
export const getDefaultVideo =()=>{
  return buildVideo(0);
};

export const getNextVideo = videoData =>{
    const index=increaseVideoIndex(videoData.index);
    return buildVideo(index);
};
export const getPreviousVideo = videoData =>{
  const index=decreaseVideoIndex(videoData.index);
  return buildVideo(index);
};


let cache = {
  sliderValueHolder: null
};
export const throttleSliderValue = (sliderValue) => {
  var data = {
    sliderValue,
    timestamp: (new Date()).getTime()
  };
  if ((!cache.sliderValueHolder) || (data.timestamp - cache.sliderValueHolder.timestamp) > 2000 || Math.abs(data.sliderValue.value - cache.sliderValueHolder.sliderValue.value) >= 5) {
    cache.sliderValueHolder = data;
    return true;
  }
  else{
    return false;    
  }
};

