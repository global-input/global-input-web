import React, { useState } from 'react';
import { useMobile,ConnectWidget} from '../mobile';
import {AppContainer,Error,Footer, DarkButton,Title,ConnectedInstruction} from '../elements';



interface Props {
    content: string;
    contentOnComputer: (content: string) => void;
    showOnComputer: (content: string) => void;
    domain: string;
}

export const EncryptContent: React.FC<Props> = ({ domain, content, contentOnComputer, showOnComputer }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const initData = () => ({
        form: {
            title: "Mobile Encryption",
            fields: [{ ...FIELDS.content, value: content }, FIELDS.info, FIELDS.back]
        }
    });
    const mobile = useMobile(initData, true);
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
        <AppContainer>
            <ConnectWidget mobile={mobile}/>
            <Title>Encrypting Content On your Mobile</Title>
            {errorMessage && (<Error>{errorMessage}</Error>)}
            <ConnectedInstruction mobile={mobile}>

            Follow the instruction on your mobile to encrypt content.



            </ConnectedInstruction>
            <Footer>
                <DarkButton onClick={back}>Back</DarkButton>
            </Footer>
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
