
export const FIELDS = {
    info: {
        id: "info",
        type: "info",
        value: "Please scan the QR Code displayed to pair your mobile app with the application."
    },
    back: {
        id: 'back',
        type: 'button',
        label: 'Back',
        viewId: "row1"
    }
}

export const initData = {
    form: {
        title: "Pairing",
        fields: Object.values(FIELDS)
    }
}

export const setOnchange = ({ mobile, back }) => {
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.back.id:
                back();
                break;
            default:
        }
    });
}