
import React, { useState } from 'react';
import styled from 'styled-components';


import { useMobile,ConnectWidget, WhenConnected} from '../mobile';
import encryptOnMobileImage from './images/encrypt-on-mobile.png';
import keysOnMobileImage from './images/keys-on-mobile.png';
import settingsOnMobileImage from './images/settings-on-mobile.png';


import {AppContainer, Title,ConnectedInstruction,MoreInfo,
        ContentLabelForm, Footer, DarkButton,Form} from '../elements';


interface Props {
        back: () => void;
        next: (content: string, label: string) => void;
}
export const ContentLabel: React.FC<Props> = ({ back, next }) => {
        const [content, setContent] = useState('');
        const [label, setLabel] = useState('');


        const initData = {
                dataType: "qrcode",
                form: {
                        title: "QR Code Content",
                        fields: Object.values(FIELDS)
                }
        }
        const mobile = useMobile(initData, true);

        const onLabelChanged = (label: string) => {
                setLabel(label);
                mobile.sendValue(FIELDS.label.id, label);
        }
        const onContentChanged=(content:string)=>{
                setContent(content);
                mobile.sendValue(FIELDS.content.id, content);
        }
        const onNext = () => {
                if (content.trim().length) {
                        next(content, label);
                }
        }
        mobile.setOnchange(({ field }) => {
                switch (field.id) {
                        case FIELDS.content.id:
                                setContent(field.value as string);
                                break;
                        case FIELDS.label.id:
                                setLabel(field.value as string);
                                break;
                        case FIELDS.back.id:
                                back();
                                break;
                        case FIELDS.next.id:
                                onNext();
                                break;
                        default:

                                break;
                }
        });
        return (
                <AppContainer>
                        <Title>Creating an Encrypted QR Code</Title>
                        <ConnectWidget mobile={mobile}/>
                        <ConnectedInstruction mobile={mobile}>
                                        You can now press <EncryptOnMobileIcon/> button on your mobile to encrypt a piece of information.
                        </ConnectedInstruction>
                        <Form>

                                <WhenConnected mobile={mobile}>
                                        <ContentLabelForm content={content} label={label} onContentChanged={onContentChanged} onLabelChanged={onLabelChanged}/>
                                        <MoreInfo>The mobile app sends
                                        the encrypted content generated on your mobile to this application, which displays the received content in the text box above.
                                        </MoreInfo>

                                </WhenConnected>
                                <Footer>
                                        <DarkButton onClick={back}>Back</DarkButton>
                                        {mobile.isConnected && (<DarkButton onClick={onNext}>Next</DarkButton>)}
                                </Footer>
                                <Tips>

                                      <TipTitle>
                                        To create an encrypted QR Code, press the corresponding buttons on your mobile:
                                      </TipTitle>
                                      <Tip>
                                        <EncryptOnMobileIcon/>
                                        <TipContent>
                                        This button provides you with an option of recording a disaster recovery root password. You can scan the encrypted QR code to decrypt it with your mobile when you need it.

                                        </TipContent>
                                      </Tip>

                                      <Tip>
                                                <BackupKeysIcon/>
                                                <TipContent>
                                                      This button allows you to export any one of your encryption keys in your mobile app as an encrypted QR Code.
                                                      You can import back in your app by scanning it.
                                                      The QR code will be protected with a phrase that you need to provide when you are exporting the encryption key.

                                                </TipContent>
                                      </Tip>
                                      <Tip>
                                                <BackupSettingsIcon/>
                                                <TipContent>
                                                      This button allows you to export your connection settings of your mobile app. This is useful if you have
                                                      different applications with different connection settings.
                                                </TipContent>
                                      </Tip>




                                </Tips>

                        </Form>
                </AppContainer>
        );
};

const FIELDS = {
        content: {
                id: "content",
                label: "Content for the QR Code",
                value: ""
        },
        label: {
                id: "label",
                label: "Label for the QR Code",
                value: ""
        },
        back: {
                id: "back",
                label: "Back",
                type: "button",
                icon: "back",
                viewId: "foot"
        },
        next: {
                id: "next",
                label: "Next",
                type: "button",
                icon: "continue",
                viewId: "foot"
        },
        info: {
                type: 'info',
                value: 'You may press the "Encrypt" icon below to generate an encrypted content',
                viewId: 'info'
        }
};









const EncryptOnMobileIcon=styled.img.attrs({
    src:encryptOnMobileImage,
    alt:'Encrypt'
})``;
const BackupKeysIcon=styled.img.attrs({
        src:keysOnMobileImage,
        alt:'Backup Keys'
})``;

const BackupSettingsIcon=styled.img.attrs({
        src:settingsOnMobileImage,
        alt:'Backup Settings'
})``;


const Tips = styled.div`
    display:flex;
    flex-direction:column;


`;
const Tip=styled.div`
        display: flex;
        flex-direction:row;
        justify-content: flex-start;
        align-items: center;
        padding-top:5px;
        padding-bottom:5px;

`;
const TipTitle=styled.div`
        font-size: 12px;
`;

const TipContent=styled.div`
    font-size: 12px;
    padding-left:5px;
`;
