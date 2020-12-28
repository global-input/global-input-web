import React, { useState, useCallback } from 'react';
import { useMobile,ConnectWidget, WhenConnected } from '../mobile';
import {AppContainer,Footer,DarkButton, Form,Field,TextArea, Label,Help} from '../elements';

interface PROPS {
    initialContent: string;
    contentOnComputer: (content: string) => void;
    startEncrypt: (content: string) => void;
    cancel: () => void;
    domain: string;
}

export const ContentOnMobile: React.FC<PROPS> = ({ initialContent, contentOnComputer, cancel, startEncrypt, domain }) => {
    const [expand,setExpand]=useState('');
    const [content, setContent] = useState<string>(initialContent);
    const initData = () => ({
        form: {
            title: "Content To Encrypt",
            views: {
                viewIds: {
                    row1:{
                        style:{
                            display:'flex',
                            justifyContent:'space-between',

                            width:'100%',


                        }


                    }
                                    }
            },
            fields: [{ ...FIELDS.content, value: initialContent }, FIELDS.info,FIELDS.back, FIELDS.cancel, FIELDS.encrypt]
        }
    })
    const mobile = useMobile(initData, true);

    const onEncrypt = () => {
        if (content.trim()) {
            startEncrypt(content.trim());
        }
        else {
            mobile.sendValue(FIELDS.info.id, {
                content: 'Please provide the content to encrypt using the application connected to your mobile app.',
                style:{color:'red'}
             });
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
                <ContentToEncrypt content={content} onContentChanged={onContentChanged} expand={expand} setExpand={setExpand}/>

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
        value: ''
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
        viewId: "row1",
        icon:'back'
    },
    cancel: {
        id: 'cancel',
        type: 'button',
        label: 'Cancel',
        viewId: "row1",
        icon:'cancel'
    },

    encrypt: {
        id: "toEncrypt",
        type: "button",
        label: "Encrypt",
        viewId: "row1",
        icon:'encrypt'
    },

}
const ContentToEncrypt=({content, onContentChanged,expand,setExpand})=>(
    <Field>
                        <TextArea id="contentToEncrypt" onChange={evt=>{
                          onContentChanged(evt.target.value);
                        }} value={content} placeholder="Content you typed on your mobile will be displayed here"
                        onFocus={()=>setExpand('contentToEncrypt')}/>
                        <Label htmlFor="contentToEncrypt">Content to Encrypt</Label>
                        <Help expandId='contentToEncrypt' expand={expand} setExpand={setExpand}>
                        You can type the content your want to encrypt on your mobile, while this application receives the content
                        and place it in the text box above. You can also type inn the above text box.
                        </Help>

    </Field>
  );