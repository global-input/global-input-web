import React, { useCallback, useState } from 'react';
import {useMobile} from '../../mobile';
import {AppContainer, Title,
    Footer,DarkButton, Field,TextArea, Label,Help} from '../../elements';

interface PROPS {
    initialContent: string;
    contentOnMobile: (content: string) => void;
    startDecrypt: (content: string) => void;
    cancel: () => void;
    domain: string;
}
export const ContentOnComputer: React.FC<PROPS> = ({ domain, initialContent, contentOnMobile, startDecrypt, cancel }) => {
    const [content, setContent] = useState(initialContent);
    const [expand,setExpand]=useState('');
    const initData = {
        form: {
            title: "Mobile Decryption",
            fields: Object.values(FIELDS)
        }
    }
    const mobile =useMobile (initData, true);

    const onContentChanged = useCallback((value: string) => {
        setContent(value);
    }, []);
    const onDecrypt = () => {
        if (content.trim().length) {
            startDecrypt(content.trim());
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
            case FIELDS.startDecrypt.id:
                onDecrypt();
                break;
            default:
        }
    });

    return (
        <AppContainer>
            <Title>Content To Decrypt</Title>
            <ContentToEncrypt content={content} onContentChanged={onContentChanged} expand={expand} setExpand={setExpand}/>
                <Footer>
                    <DarkButton onClick={cancel}>Cancel</DarkButton>
                    <DarkButton onClick={onDecrypt}>Decrypt</DarkButton>
                </Footer>
        </AppContainer>
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
const ContentToEncrypt=({content, onContentChanged,expand,setExpand})=>(
    <Field>
                        <TextArea id="contentToEncrypt" onChange={evt=>{
                          onContentChanged(evt.target.value);
                        }} value={content} placeholder="Place here the content you would like to encrypt."
                        onFocus={()=>setExpand('contentToEncrypt')}/>
                        <Label htmlFor="contentToEncrypt">Content to Encrypt</Label>
                        <Help expandId='contentToEncrypt' expand={expand} setExpand={setExpand}>
                        This content will be sent to your mobile app for encryption. Your mobile app then sends the encrypted
                        content back to this application.
                        </Help>

    </Field>
  );