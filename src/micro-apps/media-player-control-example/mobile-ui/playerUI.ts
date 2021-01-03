export const initDataId = 'video-player';

export const statusValue = (title: string, message: string) => {
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
export const fields = {
    selector: {
        id: "videoSelector",
        type: "button",
        label: "Play Different Video",
        viewId: "row1"
    },
    status: {
        id: "playerStatus",
        type: "info",
        value: statusValue('', ''),
        viewId: "row2"
    },
    slider: {
        id: "currentTimeSlider",
        type: "range",
        value: 0,
        minimumValue: 0,
        maximumValue: 100,
        step: 1,
        viewId: "row3"
    },
    rw: {
        id: "rwButton",
        type: "button",
        label: "RW",
        icon: "rw",
        viewId: "row4"
    },
    playPause: {
        id: "playPauseButton",
        type: "button",
        value: 0,
        label: "Play",
        icon: "play",
        options: [{ value: 0, label: "Play", icon: "play" }, { value: 1, label: "Pause", icon: "pause" }],
        viewId: "row4"
    },
    ff: {
        id: "ffButton",
        type: "button",
        label: "FF",
        icon: "ff",
        viewId: "row4"
    },
    begin: {
        id: "skipToBeginButton",
        type: "button",
        label: "Begin",
        icon: "skip-to-begin",
        viewId: "row5"
    },
    end: {
        id: "skipToEndButton",
        type: "button",
        label: "End",
        icon: "skip-to-end",
        viewId: "row5"
    }


};


export const initData = (title: string) => {
    return {
        id: initDataId,
        form: {
            title,
            fields: Object.values(fields)
        }
    };



}

export const sendStatus = (mobile, title: string, message: string) => {
    mobile.sendValue(fields.status.id, statusValue(title, message));
};

export const sendPlayButton = (mobile) => {
    mobile.sendValue(fields.playPause.id, fields.playPause.options[0].value);
};
export const sendPauseButton = (mobile) => {
    mobile.sendValue(fields.playPause.id, fields.playPause.options[1].value);
};

export const sendSliderValue = (mobile, sliderValue) => {
    mobile.sendValue(fields.slider.id, sliderValue);
};
