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


const PLAYER_STATUS_FIELD_ID="playerStatus"
const PLAY_PAUSE_BUTTON_ID="playPauseButton";
const SLIDER_FIELD_ID="currentTimeSlider"



export const initData=(title)=>{
    
    return {
      action: "input",
      dataType: "control",
      id: 'playVideo',
      form: {
        title: title,
        fields: [{
          id: "changeVideo",
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
          id: "rwButton",
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
          id: "ffButton",
          type: "button",
          label: "FF",
          icon: "ff",
          viewId: "row4"        
        }, {
          id: "skipToBeginButton",
          type: "button",
          label: "Begin",
          icon: "skip-to-begin",
          viewId: "row5"        
        }, {
          id: "skipToEndButton",
          type: "button",
          label: "End",
          icon: "skip-to-end",
          viewId: "row5"        
        }
        ]
      }
    };
  };



export const setPlayerStatus =(globalInputApp,playerStatusTitle, playerStatusMessage)=>{
    globalInputApp.setFieldValueById(PLAYER_STATUS_FIELD_ID,buildPlayerStatusValue(playerStatusTitle,playerStatusMessage));    
};

export const showPlayButton= (globalInputApp)=>{
    globalInputApp.setFieldValueById(PLAY_PAUSE_BUTTON_ID,0);        
};
export const showPauseButton= (globalInputApp)=>{
    globalInputApp.setFieldValueById(PLAY_PAUSE_BUTTON_ID,1);        
};

export const setSliderValue= (globalInputApp,sliderValue) => {
  globalInputApp.setFieldValueById(SLIDER_FIELD_ID,sliderValue);        
}