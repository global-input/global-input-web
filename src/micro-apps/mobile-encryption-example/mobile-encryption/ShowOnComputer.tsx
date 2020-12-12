import React from 'react';
import { useMobile } from '../mobile';
import { InputWithCopy, TextButton, BasicLayout, FormContainer, FormFooter } from '../app-layout';


interface Props {
    content: string;
    finish: () => void;
    contentOnComputer: (content: string) => void;
    showOnMobile: (content: string) => void;
    domain: string;
}
const ShowOnComputer: React.FC<Props> = ({ content, contentOnComputer, showOnMobile, finish, domain }) => {
    const initData = {
        form: {
            title: "Encryption Completed",
            fields: Object.values(FIELDS)
        }
    }
    const mobile = useMobile(initData);
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
        <BasicLayout title="Mobile Encryption">
            <FormContainer title="Encrypted Content">
                <InputWithCopy id="encryptedContent" readOnly={true}
                    label="Encrypted Content"
                    type={"textarea"}
                    value={content} />
                <FormFooter>
                    <TextButton onClick={restart} label='Restart' />
                    <TextButton onClick={finish} label='Finish' />
                </FormFooter>
            </FormContainer>
        </BasicLayout>

    );


};


const FIELDS = {
    info: {
        type: "info",
        value: ['You can now copy the encrypted content into your clipboard on your computer (in the extension window).',
            'You can also load the encrypted content into your mobile by pressing the "Load into Mobile" button.']
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

export default ShowOnComputer;