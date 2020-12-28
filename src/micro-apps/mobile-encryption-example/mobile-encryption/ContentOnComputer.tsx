import React, { useCallback, useState } from 'react';
import { useMobile } from '../mobile';
import {AppContainer, Title,
    Footer,DarkButton, Field,TextArea, Label,Help} from '../elements';

interface PROPS {
    initialContent: string;
    contentOnMobile: (content: string) => void;
    startEncrypt: (content: string) => void;
    cancel: () => void;
    domain: string;
}
export const ContentOnComputer: React.FC<PROPS> = ({ initialContent, contentOnMobile, startEncrypt, cancel, domain }) => {

    const [content, setContent] = useState(initialContent);
    const [expand,setExpand]=useState('');
    const initData = {
        form: {
            title: "Mobile Encryption",
            views: {
                viewIds: {
                    info: {
                        style: {

                            marginBottom:20,
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center'


                        }
                    },
                    row1:{
                        style:{
                            display:'flex',
                            justifyContent:'space-between',

                            width:'100%',


                        }


                    }
                                    }
            },

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
            mobile.sendValue(FIELDS.info.id, {
               content: 'Please provide the content to encrypt using the application connected to your mobile app.',
               style:{color:'red'}
            });
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
            <ContentToEncrypt content={content} onContentChanged={onContentChanged} expand={expand} setExpand={setExpand}/>
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
        value: ['Waiting for content from the application.'],
        viewId:'info'
    },
    cancel: {
        id: "cancel",
        type: "button",
        label: "Cancel",
        viewId: "row1",
        icon:'cancel'
    },
    contentOnMobile: {
        id: "contentOnMobile",
        type: "button",
        label: "Press here if you would like to use your mobile to input content",
        viewId: "row2",
        style:{
            maxWidth:180,
            padding:20,
            backgroundColor:'#EEEEEE'
        },

    },
    startEncrypt: {
        id: "startEncrypt",
        type: "button",
        icon:'encrypt',
        label: "Encrypt",
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
