import React, { useCallback, useState } from 'react';
import { useMobile } from '../mobile';
import {
    InputWithLabel, BasicLayout, FormContainer, DisplayErrorMessage,
    TextButton, FormFooter
} from '../app-layout'

interface PROPS {
    initialContent: string;
    contentOnMobile: (content: string) => void;
    startDecrypt: (content: string) => void;
    cancel: () => void;
    domain: string;
}
const ContentOnComputer: React.FC<PROPS> = ({ domain, initialContent, contentOnMobile, startDecrypt, cancel }) => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [content, setContent] = useState(initialContent);
    const initData = {
        form: {
            title: "Mobile Decryption",
            fields: Object.values(FIELDS)
        }
    }
    const mobile = useMobile(initData);

    const onContentChange = useCallback((value: string) => {
        setErrorMessage('');
        setContent(value);
    }, []);
    const onDecrypt = () => {
        if (content.trim().length) {
            startDecrypt(content.trim());
        }
        else {
            setErrorMessage('Content missing!');
            mobile.sendValue(FIELDS.info.id, 'The content (in the extension window) on your computer is empty. You can  press "Use Mobile" button to use your mobile to provide the content.')
        }
    };
    mobile.setOnFieldChange((field) => {
        switch (field.id) {
            case FIELDS.cancel.id:
                cancel();
                break;
            case FIELDS.contentOnMobile.id:
                contentOnMobile(content);
                break;
            case FIELDS.startDecrypt.id:
                onDecrypt();
                break;
            default:
        }
    });


    return (
        <BasicLayout title="Mobile Decryption">
            <FormContainer title="Provide Content to Decrypt">
                <InputWithLabel label="Content to decrypt" id="content"
                    onChange={onContentChange}
                    type="textarea"
                    value={content} />
                <DisplayErrorMessage errorMessage={errorMessage} />
                <FormFooter>
                    <TextButton onClick={cancel} label='Cancel' />
                    <TextButton onClick={onDecrypt} label='Decrypt' />
                </FormFooter>
            </FormContainer>
        </BasicLayout>
    );



};


const FIELDS = {
    info: {
        id: "info",
        type: 'info',
        value: ['You can now provide content for decryption on your computer (in the extension window).',
            'Or alternative, you can press the "Use Mobile" button to provide the content on your mobile.']
    },
    cancel: {
        id: "cancel",
        type: "button",
        label: "Cancel",
        viewId: "row1"
    },
    contentOnMobile: {
        id: "contentOnMobile",
        type: "button",
        label: "Use Mobile",
        viewId: "row1"
    },
    startDecrypt: {
        id: "startDecrypt",
        type: "button",
        label: "Decrypt",
        viewId: "row1"
    }
}


export default ContentOnComputer;