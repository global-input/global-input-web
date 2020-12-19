import { config } from '../configs';

export const FIELDS = {
    home: {
        id: 'back-to-website-home',
        type: 'button',
        label: 'Home',
        viewId: "row1"
    },
    privacy: {
        id: 'website-privacy',
        type: 'button',
        label: 'Privacy',
        viewId: "row1",
        style:{
            backgroundColor:'white'
        }
    },
    contactUs: {
        id: 'website-contact-us',
        type: 'button',
        label: 'Contact Us',
        viewId: "row1",
        style:{
            backgroundColor:'white'
        }
    },
    getItFree: {
        id: 'website-get-it-free',
        type: 'button',
        label: 'Get It',
        viewId: "row1",
        style:{
            backgroundColor:'white'
        }
    },
    mobileAuthentication:{
        id: 'about-mobile-authentication',
        type: 'button',
        label: 'Mobile Authentication',
        viewId: "row1",
        style:{
            backgroundColor:'white'
        }
    },
    mobileInputControl:{
        id: 'about-mobile-input-control',
        type: 'button',
        label: 'Mobile Control',
        viewId: "row1",
        style:{
            backgroundColor:'white'
        }
    },
    secondScreen:{
        id: 'about-second-screen',
        type: 'button',
        label: 'Second Screen',
        viewId: "row1",
        style:{
            backgroundColor:'white'
        }
    },
    mobileEncryption:{
        id: 'about-mobile-encryption',
        type: 'button',
        label: 'Mobile Encryption',
        viewId: "row1",
        style:{
            backgroundColor:'white'
        }
    },
    mobileSecureStorage:{
        id: 'about-mobile-secure-storage',
        type: 'button',
        label: 'Mobile Secure Storage',
        viewId: "row1",
        style:{
            backgroundColor:'white'
        }
    },
    mobileContentTransfer:{
        id: 'about-mobile-content-transfer',
        type: 'button',
        label: 'Mobile Content Transfer',
        viewId: "row1",
        style:{
            backgroundColor:'white'
        }
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
        case FIELDS.mobileAuthentication.id:
            history.push(config.paths.mobileAuthentication.path);
            break;
        case FIELDS.mobileInputControl.id:
            history.push(config.paths.mobileControl.path);
            break;
        case FIELDS.secondScreen.id:
            history.push(config.paths.secondScreen.path);
            break;
        case FIELDS.mobileEncryption.id:
            history.push(config.paths.aboutContentEncryption.path);
            break;
        case FIELDS.mobileSecureStorage.id:
            history.push(config.paths.mobilePersonalStorage.path);
            break;
        case FIELDS.mobileContentTransfer.id:
            history.push(config.paths.mobileContentTransfer.path);
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
