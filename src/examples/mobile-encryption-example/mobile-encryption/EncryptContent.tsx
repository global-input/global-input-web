import React, { useState } from 'react';
import { useMobile } from '../mobile';
import { MessageContainer, FormContainer } from '../app-layout';

interface Props {
    content: string;
    contentOnComputer: (content: string) => void;
    showOnComputer: (content: string) => void;
    domain: string;
}

const EncryptContent: React.FC<Props> = ({ domain, content, contentOnComputer, showOnComputer }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const mobile = useMobile({
        action: "input",
        dataType: "form",
        form: {
            title: "Mobile Encryption",
            fields: [{ ...FIELDS.content, value: content }, FIELDS.info, FIELDS.back]
        }
    });

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
                contentOnComputer(content);
                break;
        }
    });
    return (
        <mobile.ControlledContainer title="Mobile Encryption" domain={domain} errorMessage={errorMessage}>
            <FormContainer>
                <MessageContainer title="Encrypting Content">
                    Follow the instruction on your mobile to encrypt content.
            </MessageContainer>
            </FormContainer>

        </mobile.ControlledContainer>
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
