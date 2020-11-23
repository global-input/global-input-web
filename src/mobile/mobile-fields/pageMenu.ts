import { config } from '../../configs';

export const FIELDS = {
    home: {
        id: 'back-to-website-home',
        type: 'button',
        label: 'Home',
        icon: 'home',
        viewId: "row9"
    },
    privacy: {
        id: 'website-privacy',
        type: 'button',
        label: 'Privacy',
        viewId: "row9",
    },
    contactUs: {
        id: 'website-contact-us',
        type: 'button',
        label: 'Contact Us',
        viewId: "row9",
    },
    getItFree: {
        id: 'website-get-it-free',
        type: 'button',
        label: 'Get It Free',
        viewId: "row9",
    }
};


export const onFieldChange = (field, history) => {
    switch (field.id) {
        case FIELDS.home.id:
            history.push('/');
            break;
        case FIELDS.privacy.id:
            history.push(config.paths.privacy.path);
            break;
        case FIELDS.contactUs.id:
            history.push(config.paths.contactUs.path);
            break;
        case FIELDS.getItFree.id:
            history.push(config.paths.getAppScreen.path);
            break;
        default:
            return false;
    }
    return true;
};
export const onHomeFieldChange = (field, history) => {
    switch (field.id) {
        case FIELDS.home.id:
            history.push('/');
            break;
        default:
            return false;
    }
    return true;
};
