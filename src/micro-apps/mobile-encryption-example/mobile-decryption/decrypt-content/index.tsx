import React, { useState } from 'react';
import styled from 'styled-components';
import { useMobile,ConnectWidget} from '../../mobile';
import {AppContainer,Error,Footer, DarkButton,Title,ConnectedInstruction} from '../../elements';

import decryptImage from './images/decrypt-icon.png';
import showImage from './images/show-icon.png';
import sendImage from './images/send-icon.png';




interface Props {
    content: string;
    contentOnComputer: (content: string) => void;
    showOnComputer: (content: string) => void;
    domain: string;
}

export const DecryptContent: React.FC<Props> = ({ domain, content, contentOnComputer, showOnComputer }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const initData = () => ({
        form: {
            title: "Mobile Decryption",
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
                    setErrorMessage("Failed to decrypt!");
                    mobile.sendValue(FIELDS.info.id, { style: { color: "red" }, content: "Failed to decrypt!" });
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
            <Title>Decrypting Content On your Mobile</Title>
            {errorMessage && (<Error>{errorMessage}</Error>)}
            <ConnectedInstruction mobile={mobile}>
                    The content is now sent to your mobile app for decryption.
                    On your mobile, you can press <ShowIcon/>
                    to inspect the content received. Then, press <DecryptIcon/> to start decrypting it.
                    In the next screen on your mobile, you will be presented with the decrypted content,
                    you can press <ShowIcon/> to inspect the decrypted content before pressing <SendIcon/> to send it to this application.
    </ConnectedInstruction>

            <Footer>
                <DarkButton onClick={back}>Back</DarkButton>
            </Footer>
        </AppContainer>
    );

};

const FIELDS = {
    content: {
        id: "decryptContent",
        label: "Content",
        type: 'decrypt',
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
const DecryptIcon = styled.img.attrs({
    src: decryptImage,
    alt: 'Decrypt'
})``;
const ShowIcon = styled.img.attrs({
    src: showImage,
    alt: 'Encrypt'
})``;
const SendIcon = styled.img.attrs({
    src: sendImage,
    alt: 'Send'
})``;
