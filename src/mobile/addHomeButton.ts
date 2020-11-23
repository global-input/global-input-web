import * as globalInput from 'global-input-react';////global-input-react////

export const home = {
    id: 'back-to-website-home',
    type: 'button',
    label: 'Home',
    icon: 'home',
    viewId: "row9"
};

export const onFieldChange = (field, history) => {
    switch (field.id) {
        case home.id:
            history.push('/');
            break;
        default:
            return false;
    }
    return true;
};

const matchIds = ['mobile-encryption-main', 'transfer-form', 'second-screen-video-selector',
    'game-controller', 'mobile-secure-storage-example', 'content-transfer-example'];


export const addToInitData = (initData: globalInput.InitData | (() => globalInput.InitData)): globalInput.InitData => {
    if (typeof initData === 'function') {
        initData = initData();
    }
    if ((!initData.id) || matchIds.indexOf(initData.id) === -1) {
        return initData;
    }
    const fields = [...initData.form.fields, home];
    const form = { ...initData.form, fields };
    return { ...initData, form };
};
