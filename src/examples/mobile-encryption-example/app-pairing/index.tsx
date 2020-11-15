import React from 'react';
import { BasicLayout, FormFooter, TextButton, MessageContainer } from '../app-layout';

import { useMobile } from '../mobile';
interface Props {
    back: () => void;
}

const AppPairing: React.FC<Props> = ({ back }) => {

    const mobile = useMobile({
        action: "input",
        dataType: "form",
        form: {
            title: "Paring",
            fields: Object.values(FIELDS)
        }
    });
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.back.id:
                back();
                break;
            default:
        }
    });

    return (
        <BasicLayout title="Pairing">
            <MessageContainer>
                You need to pair your mobile app in order to be able to connect to your extension.
                </MessageContainer>
            {mobile.pairing}
            <FormFooter>
                <TextButton onClick={back} label='Done' />
            </FormFooter>

        </BasicLayout>
    )

};


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
export default AppPairing;