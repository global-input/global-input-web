import React, { useCallback, useState } from 'react';
import * as onComputer from './mobile-ui/onComputer';
import * as onMobile from './mobile-ui/onMobile';
import {AppContainer, Title,
    Footer,DarkButton, Field,TextArea, Label,Help} from '../../elements';

interface PROPS{
    initialContent: string;
    startEncrypt: (content: string) => void;
    cancel: () => void;
    domain: string;
}

export const ContentOnMobile: React.FC<PROPS> = ({ initialContent, cancel, startEncrypt, domain }) => {
    const [content, setContent] = useState<string>(initialContent);

    const onEncrypt = () => {
        processEncrypt(mobile,content,startEncrypt,onMobile.FIELDS.info.id);
    };
    const mobile = onMobile.useConnectMobile({initialContent,cancel,setContent,onEncrypt});
    const { sendValue } = mobile;
    const onContentChanged = useCallback((value: string) => {
        setContent(value);
        sendValue(onMobile.FIELDS.content.id, value);
    }, [sendValue]);
    return (
        <RenderContentForm content={content} onContentChanged={onContentChanged} cancel={cancel} onEncrypt={onEncrypt}/>
    );
};

interface PROPSForOnComputer extends PROPS{
    contentOnMobile: (content: string) => void;
}


export const ContentOnComputer: React.FC<PROPSForOnComputer> = ({ initialContent, contentOnMobile, startEncrypt, cancel, domain }) => {
    const [content, setContent] = useState(initialContent);
    const onEncrypt = () => {
        processEncrypt(mobile,content,startEncrypt,onComputer.FIELDS.info.id);
    };
    const onContentOnMobile=()=> contentOnMobile(content);

    const mobile = onComputer.useConnectMobile({cancel,onContentOnMobile,onEncrypt});
    const onContentChanged = useCallback((value: string) => {
            setContent(value);
    }, []);

    return (
        <RenderContentForm content={content} onContentChanged={onContentChanged} cancel={cancel} onEncrypt={onEncrypt}/>
        );
};






const processEncrypt=(mobile,content, startEncrypt, infoId) => {
    if (content.trim().length) {
        startEncrypt(content.trim());
    }
    else {
        mobile.sendValue(infoId, {
           content: 'Please provide the content to encrypt using the application connected to your mobile app.',
           style:{color:'red'}
        });
    }
};

const RenderContentForm=({content,onContentChanged,cancel,onEncrypt})=>{
    const [expand,setExpand]=useState('contentToEncrypt');
    return (<AppContainer>
            <Title>Content To Encrypt</Title>
            <Field>
                    <TextArea id="contentToEncrypt" onChange={evt=>{
                      onContentChanged(evt.target.value);
                    }} value={content} placeholder="Place here the content to encrypt."
                    onFocus={()=>setExpand('contentToEncrypt')}/>
                    <Label htmlFor="contentToEncrypt">Content to Encrypt</Label>
                    <Help expandId='contentToEncrypt' expand={expand} setExpand={setExpand}>
                    The content you have provided will be sent to your mobile app.
                    You mobile app will encrypt it and send back the result to this application.
                    </Help>

            </Field>
            <Footer>
                <DarkButton onClick={cancel}>Cancel</DarkButton>
                <DarkButton onClick={onEncrypt}>Encrypt</DarkButton>
            </Footer>
    </AppContainer>
);

}
