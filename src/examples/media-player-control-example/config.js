
export const VIDEO_TITLE_ID="videoTitle";
export const VIDEO_SYNOPSIS_ID="synopsis";
export const PREVIOUS_VIDEO_ID="previousVideo";
export const NEXT_VIDEO_ID="nextVideo";
export const VIDEO_PLAYER_ID="videoPlayer";

export const VIDEO_SELECTOR_ID="videoSelector";
export const PLAYER_STATUS_FIELD_ID="playerStatus";
export const PLAY_PAUSE_BUTTON_ID="playPauseButton";
export const SLIDER_FIELD_ID="currentTimeSlider";
export const RW_BUTTON_ID="rwButton";
export const FF_BUTTON_ID="ffButton";
export const SKIP_TO_BEGIN_ID="skipToBeginButton";
export const SKIP_TO_END_ID="skipToEndButton";

export const selector =(title, synopsis)=>({  
  action: "input",
  id: VIDEO_SELECTOR_ID,
  dataType: "control",
  form: {
    title: "Select Video to Play",
    fields: [{
      id: VIDEO_TITLE_ID,
      type: "info",
      value: {
        type: "text",
        content: title,
        style: {
          fontSize: 18,
          marginTop: 20,
        }
      },
      viewId: "row1",
    }, {
      id: VIDEO_SYNOPSIS_ID,
      type: "info",
      value: synopsis,
      viewId: "row1"
    }, {
      id: PREVIOUS_VIDEO_ID,
      label: "Previous Video",
      type: "button",
      icon: "left",
      viewId: "row2"          
    }, {
      id: NEXT_VIDEO_ID,
      label: "Next Video",
      type: "button",
      icon: "right",
      viewId: "row2",
      
    }, {
      id: VIDEO_PLAYER_ID,
      label: "Play",
      type: "button",
      icon: "select",
      viewId: "row3"          
    }]
  }    
});



export const player=(title)=>{
    
    return {
      action: "input",
      dataType: "control",
      id: VIDEO_PLAYER_ID,
      form: {
        title: title,
        fields: [{
          id: VIDEO_SELECTOR_ID,
          type: "button",
          label: "Play Different Video",
          viewId: "row1"        
        }, {
          id: PLAYER_STATUS_FIELD_ID,
          type: "info",
          value:  buildPlayerStatusValue('',''),
          viewId: "row2"
        }, {
          id: SLIDER_FIELD_ID,
          type: "range",
          value: 0,
          minimumValue: 0,
          maximumValue: 100,
          step: 1,
          viewId: "row3"        
        }, {
          id: RW_BUTTON_ID,
          type: "button",
          label: "RW",
          icon: "rw",
          viewId: "row4"        
        },{
          id: PLAY_PAUSE_BUTTON_ID,
          type: "button",
          value: 0,
          label: "Play",
          icon: "play",
          options: [{ value: 0, label: "Play", icon: "play" }, { value: 1, label: "Pause", icon: "pause" }],
          viewId: "row4"        
        },{
          id: FF_BUTTON_ID,
          type: "button",
          label: "FF",
          icon: "ff",
          viewId: "row4"        
        }, {
          id: SKIP_TO_BEGIN_ID,
          type: "button",
          label: "Begin",
          icon: "skip-to-begin",
          viewId: "row5"        
        }, {
          id: SKIP_TO_END_ID,
          type: "button",
          label: "End",
          icon: "skip-to-end",
          viewId: "row5"        
        }
        ]
      }
    };
  };


export const buildPlayerStatusValue = (title, message) => {
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

  