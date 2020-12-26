import React, { useCallback, useState } from 'react';
import { useMobile } from '../mobile';
import {AppContainer, Title,
    ContentEncryptionForm,Footer,DarkButton} from '../elements';

interface PROPS {
    initialContent: string;
    contentOnMobile: (content: string) => void;
    startEncrypt: (content: string) => void;
    cancel: () => void;
    domain: string;
}
export const ContentOnComputer: React.FC<PROPS> = ({ initialContent, contentOnMobile, startEncrypt, cancel, domain }) => {

    const [content, setContent] = useState(initialContent);
    const initData = {
        form: {
            title: "Mobile Encryption",
            fields: Object.values(FIELDS)
        }
    }
    const mobile = useMobile(initData, true);
    const onContentChanged = useCallback((value: string) => {

        setContent(value);
    }, []);
    const onEncrypt = () => {
        if (content.trim().length) {
            startEncrypt(content.trim());
        }
        else {
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
        <AppContainer>
            <Title>Content To Encrypt</Title>
            <ContentEncryptionForm content={content} onContentChanged={onContentChanged}/>
                <Footer>
                    <DarkButton onClick={cancel}>Cancel</DarkButton>
                    <DarkButton onClick={onEncrypt}>Encrypt</DarkButton>
                </Footer>
        </AppContainer>
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
