import React, { useState, useCallback } from 'react';
import { useMobile } from '../mobile';
import { InputWithLabel, TextButton, DisplayErrorMessage, FormContainer, FormFooter } from '../app-layout';

interface PROPS {
    initialContent: string;
    contentOnComputer: (content: string) => void;
    startEncrypt: (content: string) => void;
    cancel: () => void;
    domain: string;
}

const ContentOnMobile: React.FC<PROPS> = ({ initialContent, contentOnComputer, cancel, startEncrypt, domain }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [content, setContent] = useState<string>(initialContent);
    const mobile = useMobile({
        action: "input",
        dataType: "form",
        form: {
            title: "Content To Encrypt",
            fields: [FIELDS.info, { ...FIELDS.content, value: initialContent }, FIELDS.back, FIELDS.cancel, FIELDS.encrypt]
        }
    });

    const onEncrypt = () => {
        if (content.trim()) {
            startEncrypt(content.trim());
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
            case FIELDS.encrypt.id:
                onEncrypt();
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
        <mobile.ControlledContainer title="Mobile Encryption" domain={domain}>
            <FormContainer title="Provide Content on Mobile">
                <InputWithLabel label="Content to encrypt" id="content"
                    onChange={onContentChange}
                    type="textarea"
                    value={content} />
                <DisplayErrorMessage errorMessage={errorMessage} />
                <FormFooter>
                    <TextButton onClick={back} label='Back' />
                    <TextButton onClick={cancel} label='Cancel' />
                    <TextButton onClick={onEncrypt} label='Encrypt' />
                </FormFooter>
            </FormContainer>
        </mobile.ControlledContainer>
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

export default ContentOnMobile;