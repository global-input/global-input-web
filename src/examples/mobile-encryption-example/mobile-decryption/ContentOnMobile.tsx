import React, { useState, useCallback } from 'react';
import { useMobile } from '../mobile';
import { AppContainer, InputWithLabel, TextButton, DisplayErrorMessage, FormContainer, FormFooter } from '../app-layout';

interface PROPS {
    initialContent: string;
    contentOnComputer: (content: string) => void;
    startDecrypt: (content: string) => void;
    cancel: () => void;
    domain: string;
}

const ContentOnMobile: React.FC<PROPS> = ({ initialContent, contentOnComputer, cancel, startDecrypt, domain }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [content, setContent] = useState<string>(initialContent);
    const initData = () => ({
        form: {
            title: "Content To Decrypt",
            fields: [FIELDS.info, { ...FIELDS.content, value: initialContent }, FIELDS.back, FIELDS.cancel, FIELDS.decrypt]
        }
    });
    const mobile = useMobile(initData);


    const onDecrypt = () => {
        if (content.trim()) {
            startDecrypt(content.trim());
        }
        else {
            setErrorMessage('Content missing!');
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
                setErrorMessage('');
                setContent(field.value as string);
                break;
            case FIELDS.cancel.id:
                cancel();
                break;
            case FIELDS.decrypt.id:
                onDecrypt();
                break;
            default:
        }
    });
    const { sendValue } = mobile;
    const onContentChange = useCallback((value: string) => {
        setErrorMessage('');
        setContent(value);
        sendValue(FIELDS.content.id, value);
    }, [sendValue]);


    return (
        <AppContainer title="Mobile Decryption" domain={domain}>
            <mobile.ConnectQR />
            <FormContainer title="Provide Content on Mobile">
                {mobile.isConnected && (
                    <InputWithLabel label="Content to decrypt" id="content"
                        onChange={onContentChange}
                        type="textarea"
                        value={content} />
                )}
                <DisplayErrorMessage errorMessage={errorMessage} />
                <FormFooter>
                    <TextButton onClick={back} label='Back' />
                    <TextButton onClick={cancel} label='Cancel' />
                    {mobile.isConnected && (
                        <TextButton onClick={onDecrypt} label='Decrypt' />
                    )}
                </FormFooter>
            </FormContainer>
        </AppContainer>
    );

};

const FIELDS = {
    info: {
        id: "info",
        type: "info",
        value: 'Please type below to provide the content for decryption'
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
    decrypt: {
        id: "toDecrypt",
        type: "button",
        label: "Decrypt",
        viewId: "row1"
    }
}

export default ContentOnMobile;