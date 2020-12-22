import React from "react";
import { useMobile, ConnectWidget } from './mobile';
import { P, PageContainer, } from './app-layout';
import DisplayApplicationInfo from './DisplayApplicationInfo';

interface Props {
    back: () => void;
}
const MessageSent: React.FC<Props> = ({ back }) => {
    const initData = {
        form: {
            id: "mymessage@company.com",
            title: "Sending a Message",
            label: "contacts",
            fields: Object.values(FIELDS)
        }
    }
    const mobile = useMobile(initData, true);
    mobile.setOnchange(({ field }) => {

        switch (field.id) {
            case FIELDS.back.id:
                back();
                break;
            default:
        }
    });
    return (
        <PageContainer>

            <ConnectWidget mobile={mobile}/>
            {mobile.isConnected && (<>

                <P>Send Message Complete</P>
                <DisplayApplicationInfo />

            </>)}
        </PageContainer>
    );


};


const FIELDS = {
    info: {
        value: "The message is sent, you may press the 'Back' button to back to the main menu",
        type: "info",
    },
    back: {
        id: "back",
        icon: "back",
        label: "Back",
        type: "button"
    }
}

export default MessageSent;