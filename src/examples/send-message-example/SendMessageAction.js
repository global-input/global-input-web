import React, { useState, useRef, useEffect } from "react";

import { Title, P, A, DisplayInputCopyField, InputWithLabel, TextButton, SelectableInput, SelectionContainer, RadioButton, CheckboxButton } from './app-layout';
export default ({ globalInputApp, backToMain, onSendMessage }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
        globalInputApp.setInitData(initData);
    }, []);
    useEffect(() => {
        const { field } = globalInputApp;
        if (!field) {
            return;
        }
        switch (field.id) {
            case initData.form.fields[0].id:
                setFirstName(field.value);
                break;
            case initData.form.fields[1].id:
                setLastName(field.value);
                break;
            case initData.form.fields[2].id:
                setEmail(field.value);
                break;
            case initData.form.fields[3].id:
                setPhone(field.value);
                break;
            case initData.form.fields[4].id:
                setMessage(field.value);
                break;
            case initData.form.fields[5].id:
                backToMain();
                break;
            case initData.form.fields[6].id:
                onSendMessage({ firstName, lastName, email, phone, message });
                break;
        }


    }, [globalInputApp.field]);

    const { setFieldValueById } = globalInputApp;

    return (
        <>
            <Title>Send Message</Title>
            <P>You may fill the form below both here or on your mobile and then press the "Send" button on your mobile.</P>
            <InputWithLabel label={initData.form.fields[0].label} id={initData.form.fields[0].id}
                onChange={value => {
                    setFirstName(value);
                    setFieldValueById('first_name', value);
                }}
                value={firstName} />
            <InputWithLabel label={initData.form.fields[1].label} id={initData.form.fields[1].id}
                onChange={value => {
                    setLastName(value);
                    setFieldValueById('last_name', value);
                }}
                value={lastName} />
            <InputWithLabel label={initData.form.fields[2].label} id={initData.form.fields[2].id}
                onChange={value => {
                    setEmail(value);
                    setFieldValueById('email', value);
                }}
                value={email} />
            <InputWithLabel label={initData.form.fields[3].label} id={initData.form.fields[3].id}
                onChange={value => {
                    setPhone(value);
                    setFieldValueById('phone', value);
                }}
                value={phone} />
            <InputWithLabel label={initData.form.fields[4].label} type="textarea"
                id={initData.form.fields[4].id}
                onChange={value => {
                    setMessage(value);
                    setFieldValueById('message', value);
                }}
                value={message} />
            <P>
                You may save the content of the form into your mobile app for later use so that the application can repeatedly request your personal data without centrally storing them beyond the lifetime of the current service workflow. 
            </P>
        </>
    );
};



const initData = {
    action: "input",
    dataType: "form",
    form: {
        id: "mymessage@company.com",
        title: "Sending a Message",
        label: "contacts",
        fields: [{
            id: "first_name",
            type: "text",
            label: "First Name",
            value: ""
        }, {
            id: "last_name",
            type: "text",
            label: "Last Name",
            value: ""
        }, {
            id: "email",
            type: "text",
            label: "Email",
            value: ""
        }, {
            id: "phone",
            type: "text",
            label: "Phone",
            value: ""
        }, {
            id: "message",
            type: "text",
            label: "Message",
            value: "",
            nLines: 5
        }, {
            id: "cancel",
            label: "Cancel",
            type: "button",
            viewId: "footer"
        }, {
            id: "send",
            label: "Send",
            type: "button",
            viewId: "footer"
        }]
    }
};




