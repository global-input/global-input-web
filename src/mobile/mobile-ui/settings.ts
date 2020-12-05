
export const FIELDS = {
    url: {
        id: "proxy-url",
        type: 'text',
        value: '',
    },
    apikey: {
        id: "apikey",
        type: 'text',
        value: '',
    },
    securityGroup: {
        id: "securityGroup",
        type: 'text',
        value: '',
    },
    codeKey: {
        id: "codeKey",
        type: 'text',
        value: '',
    },
    back: {
        id: 'back',
        type: 'button',
        label: 'Back',
        viewId: "row1"
    },
    save: {
        id: 'saveSettings',
        type: 'button',
        label: 'Save',
        viewId: "row1"
    },
};

export const initData = (settings) => ({
    id: "connecting-settings",
    form: {
        title: "Connection Settings",
        fields: [{ ...FIELDS.url, value: settings.url },
        { ...FIELDS.apikey, value: settings.apikey },
        { ...FIELDS.securityGroup, value: settings.securityGroup },
        { ...FIELDS.codeKey, value: settings.codeKey },
        FIELDS.back,
        FIELDS.save]
    }
});

export const setOnchange = ({ mobile, setSettings, back, onSave }) => {
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.url.id:
                setSettings(setting => ({ ...setting, url: field.value as string }));
                break;
            case FIELDS.apikey.id:
                setSettings(setting => ({ ...setting, apikey: field.value as string }));
                break;
            case FIELDS.securityGroup.id:
                setSettings(setting => ({ ...setting, securityGroup: field.value as string }));
                break;
            case FIELDS.codeKey.id:
                setSettings(setting => ({ ...setting, codeKey: field.value as string }));
                break;
            case FIELDS.back.id:
                back();
                break;
            case FIELDS.save.id:
                onSave();
        }
    });

};