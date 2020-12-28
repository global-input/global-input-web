import React from 'react';
import { useMobile } from '../../mobile';
import {AppContainer,DarkButton,Footer, Field,TextArea, Label,CopyToClipboardButton} from '../../elements';


interface Props {
    content: string;
    finish: () => void;
    contentOnComputer: (content: string) => void;
    showOnMobile: (content: string) => void;
    domain: string;
}
export const ShowOnComputer: React.FC<Props> = ({ content, contentOnComputer, showOnMobile, finish, domain }) => {
    const initData = {
        form: {
            title: "Decryption Completed",
            fields: Object.values(FIELDS)
        }
    }
    const mobile = useMobile(initData, true);
    const restart = () => contentOnComputer('');
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.restart.id:
                restart();
                break;
            case FIELDS.showOnMobile.id:
                showOnMobile(content);
                break;
            case FIELDS.finish.id:
                finish();
                break;
            default:
        }
    });

    return (
        <AppContainer>
            <ContentToCopy content={content}/>);
            <Footer>
                <DarkButton onClick={restart}>Restart</DarkButton>
                <DarkButton onClick={finish}>Finish</DarkButton>
            </Footer>
        </AppContainer>
    );


};


const FIELDS = {
    info: {
        type: "info",
        value: ['You can now copy the decrypted content into your clipboard on your computer (in the extension window).',
            'You can also load the decrypted content into your mobile by pressing the "Load into Mobile" button.']
    },
    restart: {
        id: "restart",
        label: "Restart",
        type: "button",
        viewId: "row1"
    },
    showOnMobile: {
        id: "showOnMobile",
        label: "Load into Mobile",
        type: "button",
        viewId: "row1"
    },
    finish: {
        id: "finish",
        label: "Finish",
        type: "button",
        viewId: "row1"
    },
};


const ContentToCopy=({content})=>(
    <Field>
                        <TextArea id="contentToEncrypt"  value={content} placeholder=""
                        onFocus={()=>()=>{}} readOnly={true}/>
                        <Label htmlFor="contentToCopy">Content to Copy</Label>
                        <CopyToClipboardButton value={content}>Copy</CopyToClipboardButton>
    </Field>
  );