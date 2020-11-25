import React, { useState } from 'react';
import { useMobile } from '../mobile';
import { AppContainer, FormFooter, TextButton, DisplayErrorMessage, MessageContainer, FormContainer } from '../app-layout';

interface Props {
    content: string;
    contentOnComputer: (content: string) => void;
    showOnComputer: (content: string) => void;
    domain: string;
}

const EncryptContent: React.FC<Props> = ({ domain, content, contentOnComputer, showOnComputer }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const initData = () => ({
        form: {
            title: "Mobile Encryption",
            fields: [{ ...FIELDS.content, value: content }, FIELDS.info, FIELDS.back]
        }
    });
    const mobile = useMobile(initData);
    const back = () => {
        contentOnComputer(content);
    }
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.content.id:
                if (field.value) {
                    showOnComputer(field.value as string)
                }
                else {
                    setErrorMessage("Failed to encrypt!");
                    mobile.sendValue(FIELDS.info.id, { style: { color: "red" }, content: "Failed to encrypt!" });
                }
                break;
            case FIELDS.back.id:
                back();
                break;
        }
    });
    return (
        <AppContainer title="Mobile Encryption" domain={domain}>
            {<mobile.ConnectQR />}
            <FormContainer>
                <DisplayErrorMessage errorMessage={errorMessage} />
                {mobile.isConnected && (<MessageContainer title="Encrypting Content">
                    Follow the instruction on your mobile to encrypt content.
                </MessageContainer>)}
            </FormContainer>
            <FormFooter>
                <TextButton onClick={back} label='Back' />
            </FormFooter>
        </AppContainer>
    );

};

const FIELDS = {
    content: {
        id: "encryptContent",
        label: "Content",
        type: 'encrypt',
        value: ''
    },
    info: {
        id: "info",
        type: "info",
        value: "",
    },
    back: {
        id: "backToContent",
        label: "Back",
        type: "button",
        viewId: "row1"
    }
};

export default EncryptContent;
