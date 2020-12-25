
import React, { useState } from 'react';
import styled from 'styled-components';


import { useMobile,ConnectWidget} from '../mobile';
import encryptOnMobileImage from './images/encrypt-on-mobile.png';
import keysOnMobileImage from './images/keys-on-mobile.png';
import settingsOnMobileImage from './images/settings-on-mobile.png';

import {ContentLabelForm, Footer, DarkButton,Form} from './forms';
import {SourceLink,AppTitle, Title} from '../commons';


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
                <Container>
                        <AppTitle>Mobile Encryption</AppTitle>
                <SourceLink>Source Code</SourceLink>
                <Content>
                        <Title>Encrypting Content for QR Code</Title>
                        <ConnectWidget mobile={mobile}/>
                        {mobile.isConnected &&(
                        <ConnectedInstruction>
                                You can now press <EncryptOnMobileIcon/> button on your mobile to encrypt a piece of information.
                        </ConnectedInstruction>)}
                        <Form>

                                {mobile.isConnected &&(<>
                                <ContentLabelForm content={content} label={label} onContentChanged={onContentChanged} onLabelChanged={onLabelChanged}/>
                                        <MoreInfo>The mobile app sends
                                        the encrypted content generated on your mobile to this application, which displays the received content in the text box above.
                                        </MoreInfo>
                                </>)}
                                <Footer>
                                        <DarkButton onClick={back}>Back</DarkButton>
                                        {mobile.isConnected && (<DarkButton onClick={onNext}>Next</DarkButton>)}
                                </Footer>
                                <Tips>

                                      <TipTitle>
                                        To create an encrypted QR Code, press the buttons on your mobile as shown below:
                                      </TipTitle>
                                      <Tip>
                                        <EncryptOnMobileIcon/>
                                        <TipContent>
                                        Create a backup of a disaster recovery password in the form of an encrypted QR Code so you can scan to decrypt it with your mobile when you need it.

                                        </TipContent>
                                      </Tip>

                                      <Tip>
                                                <BackupKeysIcon/>
                                                <TipContent>
                                                        Export your encryption keys in your mobile as encrypted QR Code that you can easily import back in your new mobile any time in the future.
                                                </TipContent>
                                      </Tip>
                                      <Tip>
                                                <BackupSettingsIcon/>
                                                <TipContent>
                                                        Exports your connection settings of your mobile app.
                                                </TipContent>
                                      </Tip>




                                </Tips>

                        </Form>
                </Content>






                </Container>


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


const Container =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100vw;

    backgroundColor: rgb(219,240,240);
    @media screen and (min-height:1000px){
        padding-top:30px;
        height:100vh;
   }
`;


const MoreInfo = styled.div`
    font-size: 16px;
    align-self:flex-start;
    @media screen and (min-height:310px){
         margin-bottom:10px;

    }
`;

const ConnectedInstruction=styled.div`
    font-size: 10px;
    align-self:flex-start;
    @media screen and (min-height:250px){
        font-size: 16px;
    }
    @media screen and (min-height:380px){
        font-size: 16px;
        margin-bottom:10px;
    }

`;







const Content=styled.div`
    width:95%;
    max-height:90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    overflow:scrolls;

`;

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
