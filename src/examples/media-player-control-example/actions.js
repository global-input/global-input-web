import { useEffect } from 'react';

import { useGlobalInputApp } from 'global-input-react';
import * as videoControl from './videoControl';
import { QRCodeContainer } from './app-layout';



export const useMobile = ({ state, dispatch, videoPlayer }) => {
  const { initData, video, mobileControl } = state;
  const { mobile, connectionMessage } = useGlobalInputApp({ initData, renders: { QRCodeContainer } }, [initData]);

  useEffect(() => {
    dispatch({ type: ActionType.SET_MOBILE_CONTROL, mobileControl: MobileControl.SELECT_VIDEO });
  }, []);

  useEffect(() => {
    switch (mobileControl) {
      case MobileControl.SELECT_VIDEO:
        mobileUtil.switchToSelectVideoControl({ state, dispatch, mobile });
        break;
      case MobileControl.PLAY_VIDEO:
        mobileUtil.switchToPlayVideoControl({ state, dispatch, mobile, videoPlayer });
        break;
    }
  }, [mobileControl]);

  useEffect(() => {
    videoControl.setPlayVideoSource(videoPlayer.current, video);
    mobileUtil.onVideoChanged(state);
  }, [video]);


  return { connectionMessage };

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



const utils = {
  decreaseVideoIndex: videoIndex => {
    if (videoIndex <= 0) {
      return videos.length - 1;
    }
    else {
      return videoIndex - 1;
    }
  },
  increaseVideoIndex: videoIndex => {
    if (videoIndex >= (videos.length - 1)) {
      return 0;
    }
    else {
      return videoIndex + 1;
    }
  },
  buildTimeString: timestamp => {
    var mininutes = Math.floor(timestamp / 60) % 60;
    var hours = Math.floor(timestamp / 3600);
    var minutesString = mininutes.toString().length < 2 ? '0' + mininutes : mininutes.toString();

    var seconds = Math.floor(timestamp) % 60;
    var secondsString = seconds.toString().length < 2 ? '0' + seconds : seconds;
    var result = (hours > 0) ? (hours.toString() + ':' + minutesString + ':' + secondsString) : (minutesString + ':' + secondsString);
    return result.match(/^([0-9]+:)?[0-9]*:[0-9]*$/) ? result : '00:00';
  }
}






export const initialData = {
  initData: null,
  videoIndex: 0,
  video: videos[0],
  sliderPosition: 0,
  mobileConfig: null,
  mobile: null,
  mobileControl: null,

}


const ActionType = {
  SET_MOBILE: 1,
  PREVIOUS_VIDEO: 2,
  NEXT_VIDEO: 3,
  SET_MOBILE_CONTROL: 4
}
const MobileControl = {
  SELECT_VIDEO: "selectVideo",
  PLAY_VIDEO: "playVideo"
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_MOBILE:
      const { initData, mobile } = action;
      return { ...state, initData, mobile };
    case ActionType.PREVIOUS_VIDEO:
      {
        const videoIndex = utils.decreaseVideoIndex(state.videoIndex);
        const video = videos[videoIndex];
        return { ...state, videoIndex, video };
      }
    case ActionType.NEXT_VIDEO:
      {
        const videoIndex = utils.increaseVideoIndex(state.videoIndex);
        const video = videos[videoIndex];
        return { ...state, videoIndex, video };
      }
    case ActionType.SET_MOBILE_CONTROL:
      {
        const { mobileControl } = action;
        return { ...state, mobileControl };
      }
    default: return state;
  }
}







const mobileUtil = (() => {
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



  const onFastforward = ({ state, videoPlayer }) => {
    const { mobileControl, mobile } = state;
    setPlayerStatus({
      mobile,
      mobileControl,
      playerStatusTitle: 'Playing',
      playerStatusMessage: "x " + videoPlayer.current.playbackRate,
      playerButtonValue: 1
    });
  }

  const onRewinding = ({ state, videoPlayer }) => {
    const { mobileControl, mobile } = state;
    setPlayerStatus({
      mobile,
      mobileControl,
      playerStatusTitle: 'Rewinding',
      playerStatusMessage: '',
      playerButtonValue: 1
    });
  };



  const onVideoChanged = (state) => {
    const { mobile, initData, video } = state;
    if (!mobile || !initData) {
      return;
    }
    if (initData.id === 'selectVideo') {
      mobile.sendInputMessage(video.title, 0);
      mobile.sendInputMessage(video.synopsis, 1);
    }
  };
  const switchToPlayVideoControl = ({ state, dispatch, mobile, videoPlayer }) => {
    const { video } = state;
    const toSelectControl = () => {
      videoControl.pauseVideo(videoPlayer.current);
      dispatch({ type: ActionType.SET_MOBILE_CONTROL, mobileControl: MobileControl.SELECT_VIDEO });
    };
    const playVideo = () => {
      videoControl.playVideo(videoPlayer.current);
    };
    const pauseVideo = () => {
      videoControl.pauseVideo(videoPlayer.current);
      setPlayerStatus({
        mobile,
        mobileControl: MobileControl.PLAY_VIDEO,
        playerStatusTitle: 'Paused',
        playerStatusMessage: '',
        playerButtonValue: 0
      });
    };
    const fastForwardVideo = () => {

      videoControl.fastForwardVideo(videoPlayer.current);
      onFastforward({ state, videoPlayer });
    };
    const rewindVideo = () => {
      onRewinding({ state, videoPlayer });
      videoControl.rewindVideo(videoPlayer.current, () => {
        setPlayerStatus({
          mobile,
          mobileControl: MobileControl.PLAY_VIDEO,
          playerStatusTitle: 'Paused',
          playerStatusMessage: '',
          playerButtonValue: 0
        });
      });
    };
    const skipToBegin = () => {
      videoControl.pauseVideo(videoPlayer.current);
      videoControl.skipToBegin(videoPlayer.current);
      setPlayerStatus({
        mobile,
        mobileControl: MobileControl.PLAY_VIDEO,
        playerStatusTitle: 'Paused',
        playerStatusMessage: '',
        playerButtonValue: 0
      });
    };
    const skipToEnd = () => {
      videoControl.pauseVideo(videoPlayer.current);
      videoControl.skipToEnd(videoPlayer.current);
      setPlayerStatus({
        mobile,
        mobileControl: MobileControl.PLAY_VIDEO,
        playerStatusTitle: 'Paused',
        playerStatusMessage: '',
        playerButtonValue: 0
      });
    }
    const setSliderPosition = sliderPosition => {
      videoControl.setCurrentTimeWithSlider(videoPlayer.current, sliderPosition);
    }

    const initData = {
      action: "input",
      dataType: "control",
      id: 'playVideo',
      form: {
        title: video.title,
        fields: [{
          id: "changeVideo",
          type: "button",
          label: "Play Different Video",
          viewId: "row1",
          operations: { onInput: toSelectControl }
        }, {
          id: "playerStatus",
          type: "info",
          value: buildPlayerStatusValue('', ''),
          viewId: "row2"
        }, {
          id: "currentTime",
          type: "range",
          value: 0,
          minimumValue: 0,
          maximumValue: 100,
          step: 1,
          viewId: "row3",
          operations: { onInput: setSliderPosition }
        }, {
          id: "rwButton",
          type: "button",
          label: "RW",
          icon: "rw",
          viewId: "row4",
          operations: { onInput: rewindVideo }
        }, {
          id: "playPauseButton",
          type: "button",
          value: 0,
          label: "Play",
          icon: "play",
          options: [{ value: 0, label: "Play", icon: "play" }, { value: 1, label: "Pause", icon: "pause" }],
          viewId: "row4",
          operations: { onInput: value => value ? pauseVideo() : playVideo() }
        }, {
          id: "ffButton",
          type: "button",
          label: "FF",
          icon: "ff",
          viewId: "row4",
          operations: { onInput: fastForwardVideo }
        }, {
          id: "skipToBeginButton",
          type: "button",
          label: "Begin",
          icon: "skip-to-begin",
          viewId: "row5",
          operations: { onInput: skipToBegin }
        }, {
          id: "skipToEndButton",
          type: "button",
          label: "End",
          icon: "skip-to-end",
          viewId: "row5",
          operations: { onInput: skipToEnd }
        }
        ]
      }
    };
    dispatch({ type: ActionType.SET_MOBILE, initData, mobile });
    videoControl.playVideo(videoPlayer.current);
  };


  const switchToSelectVideoControl = ({ state, dispatch, mobile }) => {
    const onPrevious = () => {
      dispatch({ type: ActionType.PREVIOUS_VIDEO });
    };
    const onNext = () => {
      dispatch({ type: ActionType.NEXT_VIDEO });
    };
    const toPlayControl = () => {
      dispatch({ type: ActionType.SET_MOBILE_CONTROL, mobileControl: MobileControl.PLAY_VIDEO });
    };

    const { video } = state;
    const initData = {
      action: "input",
      id: 'selectVideo',
      dataType: "control",
      form: {
        title: "Select Video to Play",
        fields: [{
          id: "videoTitle",
          type: "info",
          value: {
            type: "text",
            content: video.title,
            style: {
              fontSize: 18,
              marginTop: 20,
            }
          },
          viewId: "row1",
        }, {
          id: "sunopsis",
          type: "info",
          value: video.synopsis,
          viewId: "row1"
        }, {
          id: "previousVideo",
          label: "Previous Video",
          type: "button",
          icon: "left",
          viewId: "row2",
          operations: { onInput: onPrevious }
        }, {
          id: "nextVideo",
          label: "Next Video",
          type: "button",
          icon: "right",
          viewId: "row2",
          operations: { onInput: onNext }
        }, {
          id: "play",
          label: "Play",
          type: "button",
          icon: "select",
          viewId: "row3",
          operations: { onInput: toPlayControl }
        }]
      }
    };
    dispatch({ type: ActionType.SET_MOBILE, initData, mobile });
  };

  const setPlayerStatus = ({ mobile, mobileControl, playerStatusTitle, playerStatusMessage, playerButtonValue }) => {
    if (mobileControl === MobileControl.PLAY_VIDEO) {
      const statusValue = buildPlayerStatusValue(playerStatusTitle, playerStatusMessage);
      mobile.sendInputMessage(statusValue, 1);
      mobile.sendInputMessage(playerButtonValue, 4);
    }
  };

  let cache = {
    sliderValueHolder: null
  };

  const sendCurrentTime = (mobile, currentTime, duration) => {
    var data = {
      sliderValue: {
        value: Math.floor(currentTime * 100 / duration),
        labels: {
          value: utils.buildTimeString(currentTime),
          minimumValue: utils.buildTimeString(0),
          maximumValue: utils.buildTimeString(duration)
        }
      },
      timestamp: (new Date()).getTime()
    };
    if ((!cache.sliderValueHolder) || (data.timestamp - cache.sliderValueHolder.timestamp) > 2000 || Math.abs(data.sliderValue.value - cache.sliderValueHolder.sliderValue.value) >= 5) {
      cache.sliderValueHolder = data;
      mobile.sendInputMessage(data.sliderValue, 2);
    }
  };


  return {
    onVideoChanged,
    switchToPlayVideoControl,
    switchToSelectVideoControl,
    setPlayerStatus,
    sendCurrentTime
  }
})();



export const playerEvents = {
  setCurrentTime: ({ state, currentTime, duration }) => {
    const { mobileControl, mobile } = state;
    if (mobileControl !== MobileControl.PLAY_VIDEO) {
      return;
    }
    if (!duration) {
      return;
    }
    mobileUtil.sendCurrentTime(mobile, currentTime, duration);
  },
  onPlayPause: ({ state, isPlaying }) => {
    const { mobileControl, mobile } = state;
    mobileUtil.setPlayerStatus({
      mobile,
      mobileControl,
      playerStatusTitle: isPlaying ? 'Playing' : 'Paused',
      playerStatusMessage: '',
      playerButtonValue: isPlaying ? 1 : 0
    });
  },
  onAbort: ({ state, videoPlayer }) => {
    const { mobileControl, mobile } = state;
    mobileUtil.setPlayerStatus({
      mobile,
      mobileControl,
      playerStatusTitle: 'Aborted',
      playerStatusMessage: '',
      playerButtonValue: 0
    });
  },
  onCanPlay: ({ state, videoPlayer }) => {
  },
  onCanPlayThrough: ({ state, videoPlayer }) => {
  },
  onDurationChange: ({ state, videoPlayer }) => {
  },
  onEncrypted: ({ state, videoPlayer }) => {
  },
  onEnded: ({ state, videoPlayer }) => {
    const { mobileControl, mobile } = state;
    videoControl.skipToBegin(videoPlayer.current);
    mobileUtil.setPlayerStatus({
      mobile,
      mobileControl,
      playerStatusTitle: 'Completed',
      playerStatusMessage: '',
      playerButtonValue: 0
    });
  },
  onError: ({ state, videoPlayer }) => {
    const { mobileControl, mobile } = state;
    mobileUtil.setPlayerStatus({
      mobile,
      mobileControl,
      playerStatusTitle: 'Error',
      playerStatusMessage: 'Something wrong in player',
      playerButtonValue: 0
    });
  },
  onLoadedData: ({ state, videoPlayer }) => {
  },
  onLoadedMetadata: ({ state, videoPlayer }) => {
  },
  onLoadStart: ({ state, videoPlayer }) => {
  },
  onPlaying: ({ state, videoPlayer }) => {
    const { mobileControl, mobile } = state;
    mobileUtil.setPlayerStatus({
      mobile,
      mobileControl,
      playerStatusTitle: 'Playing',
      playerStatusMessage: '',
      playerButtonValue: 1
    });
  },
  onProgress: ({ state, videoPlayer }) => {
  },
  onRateChange: ({ state, videoPlayer }) => {
  },
  onSeeked: ({ state, videoPlayer }) => {
  },
  onSeeking: ({ state, videoPlayer }) => {
  },
  onStalled: ({ state, videoPlayer }) => {
    const { mobileControl, mobile } = state;
    mobileUtil.setPlayerStatus({
      mobile,
      mobileControl,
      playerStatusTitle: 'Stalled',
      playerStatusMessage: '',
      playerButtonValue: 0
    });
  },
  onSuspend: ({ state, videoPlayer }) => {
  },
  onVolumeChange: ({ state, videoPlayer }) => {
  },
  onWaiting: ({ state, videoPlayer }) => {
  },


};

