import React from "react";
import { useHistory } from 'react-router-dom'; ////website
import { useMobile } from './mobile';
import { PageContainer, Title, P, SelectionContainer, AppFooter, MessageButton, MessageLink } from './app-layout';
import DisplayApplicationInfo from './DisplayApplicationInfo';
import * as mobileUI from '../../pages/examples/mobile-ui'; ////website


interface Props {
    companyInfo: () => void;
    sendMessage: () => void;
    connectionSettings: () => void;
}

const Home: React.FC<Props> = ({ companyInfo, sendMessage, connectionSettings }) => {
    const history = useHistory();////website
    const initData = {
        id: 'mobile-secure-storage-example',
        form: {
            title: "Mobile Storage Example",
            fields: Object.values(FIELDS)
        }
    };
    const mobile = useMobile(initData);
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.contactInfo.id:
                companyInfo();
                break;
            case FIELDS.sendMessage.id:
                sendMessage();
                break;
            default:
            mobileUI.onFieldChange(field, history); ////website
        }
    });
    return (
        <PageContainer>
            <Title>Mobile Secure Storage Example</Title>
            <mobile.ConnectQR />
            {mobile.isConnected && (<>

                <SelectionContainer>
                    <P>You can now operate on your mobile.</P>
                    <P>If you click on the "{FIELDS.contactInfo.label}" button, the application sends our contact information to your mobile so you can save it into your mobile personal storage.
    If you click on the "{FIELDS.sendMessage.label}" button, you will be able to use your mobile to fill in a form for sending messages to us.
    You can save the content of the form into your mobile personal storage so that you can speed up the form operation by using the autofill feature.
    </P>
                    <DisplayApplicationInfo />
                </SelectionContainer>
            </>)}
            <AppFooter>
                <MessageButton label="Settings" onClick={connectionSettings} />
                <MessageLink href="https://github.com/global-input/send-message-example">Source Code</MessageLink>
            </AppFooter>
        </PageContainer>
    );
};



const FIELDS = {
    contactInfo: {
        id: 'contact-us',
        label: "Our Contact Information",
        type: "button",
    },
    sendMessage: {
        id: 'send-message',
        label: "Send Message To Us",
        type: "button"
    }
};
mobileUI.add(FIELDS);////website


export default Home;