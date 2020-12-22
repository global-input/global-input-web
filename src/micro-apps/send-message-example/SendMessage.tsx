import React, { useState } from "react";
import { useMobile, ConnectWidget } from './mobile';
import { Title, P, PageContainer, InputWithLabel } from './app-layout';

interface Props {
    back: () => void;
    onSendMessage: (firstName: string, lastName: string, email: string, phone: string, message: string) => void;
}
const SendMessage: React.FC<Props> = ({ back, onSendMessage }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
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
            case FIELDS.cancel.id:
                back();
                break;
            case FIELDS.send.id:
                onSendMessage(firstName, lastName, email, phone, message);
                break;
            case FIELDS.firstName.id:
                setFirstName(field.value as string);
                break;
            case FIELDS.lastName.id:
                setLastName(field.value as string);
                break;
            case FIELDS.email.id:
                setEmail(field.value as string);
                break;
            case FIELDS.phone.id:
                setPhone(field.value as string);
                break;
            case FIELDS.message.id:
                setMessage(field.value as string);
                break;
            default:
        }
    });
    return (
        <PageContainer>
            <ConnectWidget mobile={mobile}/>
            {mobile.isConnected && (<>

                <Title>Send Message</Title>
                <P>You may fill the form below both here or on your mobile and then press the "Send" button on your mobile.</P>
                <InputWithLabel label={FIELDS.firstName.label} id={FIELDS.firstName.id}
                    onChange={value => {
                        setFirstName(value);
                        mobile.sendValue(FIELDS.firstName.id, value);
                    }}
                    value={firstName} />
                <InputWithLabel label={FIELDS.lastName.label} id={FIELDS.lastName.id}
                    onChange={value => {
                        setLastName(value);
                        mobile.sendValue(FIELDS.lastName.id, value);
                    }}
                    value={lastName} />
                <InputWithLabel label={FIELDS.email.label} id={FIELDS.email.id}
                    onChange={value => {
                        setEmail(value);
                        mobile.sendValue(FIELDS.email.id, value);
                    }}
                    value={email} />
                <InputWithLabel label={FIELDS.phone.label} id={FIELDS.phone.id}
                    onChange={value => {
                        setPhone(value);
                        mobile.sendValue(FIELDS.phone.id, value);
                    }}
                    value={phone} />
                <InputWithLabel label={FIELDS.message.label} type="textarea"
                    id={FIELDS.message.id}
                    onChange={value => {
                        setMessage(value);
                        mobile.sendValue(FIELDS.message.id, value);
                    }}
                    value={message} />
                <P>
                    You may save the content of the form into your mobile app for later use so that the application can repeatedly request your personal data without centrally storing them beyond the lifetime of the current service workflow.
            </P>
            </>)}
        </PageContainer>
    );


};


const FIELDS = {
    firstName: {
        id: "first_name",
        type: "text",
        label: "First Name",
        value: ""
    },
    lastName: {
        id: "last_name",
        type: "text",
        label: "Last Name",
        value: ""
    },
    email: {
        id: "email",
        type: "text",
        label: "Email",
        value: ""
    },
    phone: {
        id: "phone",
        type: "text",
        label: "Phone",
        value: ""
    },
    message: {
        id: "message",
        type: "text",
        label: "Message",
        value: "",
        nLines: 5
    },
    cancel: {
        id: "cancel",
        label: "Cancel",
        type: "button",
        viewId: "footer"
    },
    send: {
        id: "send",
        label: "Send",
        type: "button",
        viewId: "footer"
    }
}

export default SendMessage;