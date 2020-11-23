import { config } from '../../configs';

export const FIELDS = {
    encryption: {
        id: "mobile-encryption-example",
        type: "button",
        label: 'Encryption',
        icon: 'encrypt',
        viewId: "row8"
    },
    transferForm: {
        id: "transfer-form-example",
        type: 'button',
        label: 'Form Data',
        icon: 'send',
        viewId: "row8"
    },
    secondScreen: {
        id: 'second-screen-example',
        type: 'button',
        label: 'Second Screen',
        icon: 'play',
        viewId: "row8"
    },
    game: {
        id: 'game-control-example',
        type: 'button',
        label: 'Game',
        icon: 'play',
        viewId: "row8"
    },
    sendMessage: {
        id: 'send-message-example',
        type: 'button',
        label: 'Mobile Storage',
        icon: 'save',
        viewId: "row8"
    },
    contentTransfer: {
        id: 'content-transfer-example',
        type: 'button',
        label: 'Content Transfer',
        icon: 'right',
        viewId: "row8"
    }

};


export const onFieldChange = (field, history) => {
    switch (field.id) {
        case FIELDS.encryption.id:
            history.push(config.paths.examples.mobileEncryption.path);
            break;
        case FIELDS.transferForm.id:
            history.push(config.paths.examples.transferForm.path);
            break;
        case FIELDS.secondScreen.id:
            history.push(config.paths.examples.mediaPlayer.path);
            break;
        case FIELDS.game.id:
            history.push(config.paths.examples.gameControl.path);
            break;
        case FIELDS.sendMessage.id:
            history.push(config.paths.examples.sendMessage.path);
            break;
        case FIELDS.contentTransfer.id:
            history.push(config.paths.examples.contentTransfer.path);
            break;


        default:
            return false;
    }
    return true;
};