import React, { useCallback, useState } from 'react';
import { useMobile } from '../mobile';
import {
    InputWithLabel, BasicLayout, FormContainer, DisplayErrorMessage,
    TextButton, FormFooter
} from '../app-layout'

interface PROPS {
    initialContent: string;
    contentOnMobile: (content: string) => void;
    startEncrypt: (content: string) => void;
    cancel: () => void;
    domain: string;
}
const ContentOnComputer: React.FC<PROPS> = ({ initialContent, contentOnMobile, startEncrypt, cancel, domain }) => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [content, setContent] = useState(initialContent);
    const mobile = useMobile({
        action: "input",
        dataType: "form",
        form: {
            title: "Mobile Encryption",
            fields: Object.values(FIELDS)
        }
    });
    const onContentChange = useCallback((value: string) => {
        setErrorMessage('');
        setContent(value);
    }, []);
    const onEncrypt = () => {
        if (content.trim().length) {
            startEncrypt(content.trim());
        }
        else {
            setErrorMessage('Content missing!');
            mobile.sendValue(FIELDS.info.id, 'The content (in the extension window) on your computer is empty. You can  press "Use Mobile" button to use your mobile to provide the content.')
        }
    };
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.cancel.id:
                cancel();
                break;
            case FIELDS.contentOnMobile.id:
                contentOnMobile(content);
                break;
            case FIELDS.startEncrypt.id:
                onEncrypt();
                break;
            default:
        }
    });


    return (
        <BasicLayout title="Mobile Encryption">
            <FormContainer title="Provide Content to Encrypt">
                <InputWithLabel label="Content to encrypt" id="content"
                    onChange={onContentChange}
                    type="textarea"
                    value={content} />
                <DisplayErrorMessage errorMessage={errorMessage} />
                <FormFooter>
                    <TextButton onClick={cancel} label='Cancel' />
                    <TextButton onClick={onEncrypt} label='Encrypt' />
                </FormFooter>
            </FormContainer>
        </BasicLayout>
    );



};


const FIELDS = {
    info: {
        id: "info",
        type: 'info',
        value: ['You can now provide content for encryption on your computer (in the extension window).',
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
    startEncrypt: {
        id: "startEncrypt",
        type: "button",
        label: "Encrypt",
        viewId: "row1"
    }
}


export default ContentOnComputer;