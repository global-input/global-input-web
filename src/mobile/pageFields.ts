import { config } from '../configs';
import * as exampleFields from './exampleFields';
import * as addHomeButton from './addHomeButton';
import * as contactUsFields from './contactUsFields';

const FIELDS = {
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


const onFieldChange = (field, history) => {
    switch (field.id) {
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

export const home = {
    initData: {
        id: "website-home",
        form: {
            title: "Home",
            fields: [{
                type: "info",
                value: "Welcome to Global Input App home page!"
            }, ...Object.values(exampleFields.FIELDS), ...Object.values(FIELDS)]
        }
    },
    onFieldChange: (field, history) => {
        if (exampleFields.onFieldChange(field, history)) {
            return true;
        }
        if (onFieldChange(field, history)) {
            return true;
        }
        return false;
    }
}



export const aboutEncryption = {
    initData: {
        form: {
            title: 'About Mobile Encryption',
            fields: [addHomeButton.home]
        }
    },
    onFieldChange: addHomeButton.onFieldChange
};

export const aboutAuthentication = {
    initData: {
        form: {
            title: "Mobile Authentication",
            fields: [exampleFields.FIELDS.transferForm, addHomeButton.home]
        }
    },
    onFieldChange: (field, history) => {
        if (exampleFields.onFieldChange(field, history)) {
            return true;
        }
        if (addHomeButton.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }
};


export const aboutContentTransfer = {
    initData: {
        form: {
            title: "About Mobile Content Transfer",
            fields: [addHomeButton.home]
        }
    },
    onFieldChange: (field, history) => {
        if (addHomeButton.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }
};



export const aboutControl = {
    initData: {
        form: {
            title: "About Input & Control",
            fields: [addHomeButton.home]
        }
    },
    onFieldChange: (field, history) => {
        if (addHomeButton.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }
};


export const aboutStorage = {
    initData: {
        form: {
            title: "About Mobile Secure Storage",
            fields: [addHomeButton.home]
        }
    },
    onFieldChange: (field, history) => {
        if (addHomeButton.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }

};

export const aboutSecondScreen = {
    initData: {
        form: {
            title: "About Second Screen Experience",
            fields: [addHomeButton.home]
        }
    },
    onFieldChange: (field, history) => {
        if (addHomeButton.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }

};

export const contactUs = {
    initData: {
        id: 'iterative-contact-us',
        form: {
            id: "iterative@contact",
            title: "Contact Us",
            fields: Object.values(contactUsFields.FIELDS)
        }
    },
    onFieldChange: contactUsFields.onFieldChange
};


export const getIt = {
    initData: {
        form: {
            title: "Get App Page",
            fields: [{
                type: 'info',
                value: 'You can install the browser extension to connect your mobile to your browser'
            }, addHomeButton.home]
        }
    },
    onFieldChange: (field, history) => {
        if (addHomeButton.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }
};

export const privacy = {
    initData: {
        id: 'privacy-policy',
        form: {
            title: "Privacy Policy",
            fields: [{
                type: "info",
                value: "You can now read our privacy policy on the big screen."
            }, addHomeButton.home]
        }
    },
    onFieldChange: (field, history) => {
        if (addHomeButton.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }

}