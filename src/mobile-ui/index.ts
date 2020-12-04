import * as exampleFields from './exampleFields';
import * as contactUsFields from './contactUsFields';
import * as pageMenu from './pageMenu';



export const home = {
    initData: {
        id: "website-home",
        form: {
            title: "Home",
            views: {
                viewIds: {
                    row9: {
                        style: {
                            borderWidth: 1,
                            borderColor: '#EEEEEE'
                        }
                    }
                }
            },
            fields: [{
                type: "info",
                value: "Welcome to Global Input App home page!"
            }, ...Object.values(exampleFields.FIELDS), pageMenu.FIELDS.privacy, pageMenu.FIELDS.contactUs, pageMenu.FIELDS.getItFree]
        }
    },
    onFieldChange: (field, history) => {
        if (exampleFields.onFieldChange(field, history)) {
            return true;
        }
        if (pageMenu.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }
}



export const aboutEncryption = {
    initData: {
        form: {
            title: 'About Mobile Encryption',
            fields: [pageMenu.FIELDS.home]
        }
    },
    onFieldChange: pageMenu.onHomeFieldChange
};

export const aboutAuthentication = {
    initData: {
        form: {
            title: "Mobile Authentication",
            fields: [exampleFields.FIELDS.transferForm, pageMenu.FIELDS.home]
        }
    },
    onFieldChange: (field, history) => {
        if (exampleFields.onFieldChange(field, history)) {
            return true;
        }
        if (pageMenu.onHomeFieldChange(field, history)) {
            return true;
        }
        return false;
    }
};


export const aboutContentTransfer = {
    initData: {
        form: {
            title: "About Mobile Content Transfer",
            fields: Object.values(pageMenu.FIELDS)
        }
    },
    onFieldChange: (field, history) => {
        if (pageMenu.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }
};



export const aboutControl = {
    initData: {
        form: {
            title: "About Input & Control",
            fields: Object.values(pageMenu.FIELDS)
        }
    },
    onFieldChange: (field, history) => {
        if (pageMenu.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }
};


export const aboutStorage = {
    initData: {
        form: {
            title: "About Mobile Secure Storage",
            fields: Object.values(pageMenu.FIELDS)
        }
    },
    onFieldChange: (field, history) => {
        if (pageMenu.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }

};

export const aboutSecondScreen = {
    initData: {
        form: {
            title: "About Second Screen Experience",
            fields: Object.values(pageMenu.FIELDS)
        }
    },
    onFieldChange: (field, history) => {
        if (pageMenu.onFieldChange(field, history)) {
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
            }, pageMenu.FIELDS.home, pageMenu.FIELDS.privacy, pageMenu.FIELDS.contactUs]
        }
    },
    onFieldChange: (field, history) => {
        if (pageMenu.onFieldChange(field, history)) {
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
            }, pageMenu.FIELDS.home, pageMenu.FIELDS.contactUs, pageMenu.FIELDS.getItFree]
        }
    },
    onFieldChange: (field, history) => {
        if (pageMenu.onFieldChange(field, history)) {
            return true;
        }
        return false;
    }

}