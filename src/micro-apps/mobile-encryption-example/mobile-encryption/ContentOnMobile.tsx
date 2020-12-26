import React, { useState, useCallback } from 'react';
import { useMobile,ConnectWidget, WhenConnected } from '../mobile';
import {AppContainer,ContentEncryptionForm,Footer,DarkButton, Form} from '../elements';

interface PROPS {
    initialContent: string;
    contentOnComputer: (content: string) => void;
    startEncrypt: (content: string) => void;
    cancel: () => void;
    domain: string;
}

export const ContentOnMobile: React.FC<PROPS> = ({ initialContent, contentOnComputer, cancel, startEncrypt, domain }) => {

    const [content, setContent] = useState<string>(initialContent);
    const initData = () => ({
        form: {
            title: "Content To Encrypt",
            fields: [FIELDS.info, { ...FIELDS.content, value: initialContent }, FIELDS.back, FIELDS.cancel, FIELDS.encrypt]
        }
    })
    const mobile = useMobile(initData, true);

    const onEncrypt = () => {
        if (content.trim()) {
            startEncrypt(content.trim());
        }
        else {
            mobile.sendValue(FIELDS.info.id, { style: { color: "red" }, content: "Content required!" });
        }
    };
    const back = () => {
        contentOnComputer(content);
    }
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.back.id:
                back();
                break;
            case FIELDS.content.id:
                setContent(field.value as string);
                break;
            case FIELDS.cancel.id:
                cancel();
                break;
            case FIELDS.encrypt.id:
                onEncrypt();
                break;
            default:
        }
    });
    const { sendValue } = mobile;
    const onContentChanged = useCallback((value: string) => {
        setContent(value);
        sendValue(FIELDS.content.id, value);
    }, [sendValue]);


    return (
        <AppContainer>
            <ConnectWidget mobile={mobile}/>
            <Form>
                <WhenConnected mobile={mobile}>
                    <ContentEncryptionForm content={content}
                            onContentChanged={onContentChanged}/>
                </WhenConnected>
                <Footer>
                    <DarkButton onClick={back}>Back</DarkButton>
                    <DarkButton onClick={cancel}>Cancel</DarkButton>
                    <WhenConnected mobile={mobile}>
                        <DarkButton onClick={onEncrypt}>Encrypt</DarkButton>
                    </WhenConnected>
                </Footer>
            </Form>
        </AppContainer>
    );

};

const FIELDS = {
    info: {
        id: "info",
        type: "info",
        value: 'Please type below to provide the content for encryption'
    },
    content: {
        id: "contentOnMobile",
        type: 'text',
        nLines: 5,
        value: '',
    },
    back: {
        id: 'backToComposeOnComputer',
        type: 'button',
        label: 'Back',
        viewId: "row1"
    },
    cancel: {
        id: 'cancel',
        type: 'button',
        label: 'Cancel',
        viewId: "row1"
    },
    encrypt: {
        id: "toEncrypt",
        type: "button",
        label: "Encrypt",
        viewId: "row1"
    }
}
