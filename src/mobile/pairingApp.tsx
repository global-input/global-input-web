import React from 'react';
import { useMobile } from './useMobile';
import { BackButton, Form, Footer } from './layout';
interface Props {
    back: () => void;
}
export const ParingApp: React.FC<Props> = ({ back }) => {
    const mobile = useMobile(initData);
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.back.id:
                back();
                break;
            default:
        }
    });
    return (
        <Form>
            <mobile.PairingQR label="" />;
            <Footer>
                <BackButton onClick={back} />
            </Footer>
        </Form>)

}



const FIELDS = {
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
    },



}

const initData = {
    form: {
        title: "Pairing",
        fields: Object.values(FIELDS)
    }
}
