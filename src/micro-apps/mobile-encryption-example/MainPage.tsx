import React from 'react';
import { useHistory } from 'react-router-dom'; ////website

import { useMobile, ConnectWidget} from './mobile';

import { AppContainer, AppFooter, TextButton, MessageContainer,  MessageLink } from './app-layout';

import * as mobileUI from '../../micro-apps/mobile-ui'; ////website
interface Props {
    domain: string;
    encryption: () => void;
    decryption: () => void;
    qrCodeGenerator: () => void;
}


const MainPage: React.FC<Props> = ({ domain, encryption, decryption, qrCodeGenerator }) => {
    const history = useHistory();////website
    const mobile = useMobile(initData, true);
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.encryption.id:
                encryption();
                break;
            case FIELDS.decryption.id:
                decryption();
                break;
            case FIELDS.qrCodeGenerator.id:
                qrCodeGenerator();
                break;
            default:
            mobileUI.onFieldChange(field, history); ////website
        }
    });

    const disconnect = () => {
        mobile.restart();

    }
    return (
        <AppContainer title="Mobile Encryption" domain={domain}>
            <ConnectWidget mobile={mobile}/>
            {mobile.isConnected && (<>
                <MessageContainer>
                    You can now operate on your mobile.
                </MessageContainer>
            </>
            )}
            {(mobile.isConnected || mobile.isConnectionDenied) && (<TextButton label="Disconnect" onClick={disconnect} />)}

        </AppContainer >
    );
}


const FIELDS = {
    qrCodeGenerator: {
        id: 'qr-code-generator',
        type: "button",
        label: "Encrypted QR Code",
        icon: "qrcode",
        viewId: "row1",
    },
    encryption: {
        id: 'mobile-encryption',
        type: 'button',
        label: 'Encryption',
        icon: "encrypt",
        viewId: "row2"
    },
    decryption: {
        id: 'mobile-decryption',
        type: 'button',
        icon: "decrypt",
        label: 'Decryption',
        viewId: "row2"
    }
};
mobileUI.add(FIELDS);////website
const initData = {
    id: "mobile-encryption-main",
    form: {
        title: "Please Select",
        fields: Object.values(FIELDS)
    }
};


export default MainPage;