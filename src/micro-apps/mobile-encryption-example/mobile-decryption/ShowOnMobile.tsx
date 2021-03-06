import React from 'react';
import { useMobile, ConnectWidget } from '../mobile';
import { AppContainer, InputWithCopy, TextButton, FormContainer, FormFooter } from '../app-layout';


interface Props {
    content: string;
    finish: () => void;
    contentOnComputer: (content: string) => void;
    showOnComputer: (content: string) => void;
    domain: string;
}
const ShowOnMobile: React.FC<Props> = ({ content, contentOnComputer, showOnComputer, finish, domain }) => {
    const initData = {
        form: {
            title: "Decryption Completed",
            fields: [FIELDS.info, { ...FIELDS.content, value: content }, FIELDS.showOnComputer, FIELDS.restart, FIELDS.finish]
        }
    }

    const mobile = useMobile(initData, true);
    const restart = () => contentOnComputer('');
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.restart.id:
                restart();
                break;
            case FIELDS.showOnComputer.id:
                showOnComputer(content);
                break;
            case FIELDS.finish.id:
                finish();
                break;

            default:
        }
    });

    return (
        <AppContainer title="Mobile Decryption" domain={domain}>
            <ConnectWidget mobile={mobile}/>
            <FormContainer title="Decrypted Content">
                <InputWithCopy id="decryptedContent" readOnly={true}
                    label="Decrypted Content"
                    type={"textarea"}
                    value={content} />
                <FormFooter>
                    <TextButton onClick={restart} label='Restart' />
                    <TextButton onClick={finish} label='Finish' />
                </FormFooter>
            </FormContainer>
        </AppContainer>

    );


};


const FIELDS = {
    info: {
        type: "info",
        value: 'You can now copy the decrypted content into your clipboard.'
    },
    content: {
        id: "decryptedContent",
        label: "Decrypted Content",
        type: 'text',
        nLines: 5,
        value: ''
    },
    showOnComputer: {
        id: "showOnComputer",
        label: "Back",
        type: "button",
        viewId: "row1"
    },
    restart: {
        id: "restart",
        label: "Restart",
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

export default ShowOnMobile;