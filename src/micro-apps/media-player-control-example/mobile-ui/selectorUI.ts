import * as mobileUI from '../../../micro-apps/mobile-ui'; ////website

export const initDataId = "second-screen-video-selector";


export const fields = {
    title: {
        id: "video-title",
        type: "info",
        value: {
            type: "text",
            content: "",
            style: {
                fontSize: 18,
                marginTop: 20,
            }
        },
        viewId: "row1",
    },
    synopsis: {
        id: "synopsis",
        type: "info",
        value: "",
        viewId: "row1"
    },
    previous: {
        id: "previousVideo",
        label: "Previous Video",
        type: "button",
        icon: "left",
        viewId: "row2"
    },
    next: {
        id: "nextVideo",
        label: "Next Video",
        type: "button",
        icon: "right",
        viewId: "row2",

    },
    play: {
        id: "videoPlayer",
        label: "Play",
        type: "button",
        icon: "select",
        viewId: "row3"
    },backToWebsiteHome:mobileUI.home////website
};

const titleValue = (title: string) => {
    return { ...fields.title.value, content: title };
}
export const initData = (title: string, synopsis: string) => ({
    id: initDataId,
    form: {
        title: "Select Video to Play",
        fields: [
            { ...fields.title, value: titleValue(title) },
            { ...fields.synopsis, value: synopsis },
            fields.previous,
            fields.next,
            fields.play
            ,fields.backToWebsiteHome////website
        ]
    }
});


export const sendTitle = (mobile, title: string) => {
    mobile.sendValue(fields.title.id, titleValue(title));
};

export const sendSynopsis = (mobile, synopsis: string) => {
    mobile.sendValue(fields.synopsis.id, synopsis);
}