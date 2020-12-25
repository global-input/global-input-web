import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'; ////website

import { useMobile, ConnectWidget,DisConnectButton} from './mobile';



import * as mobileUI from '../../micro-apps/mobile-ui'; ////website
interface Props {
    domain: string;
    encryption: () => void;
    decryption: () => void;
    qrCodeGenerator: () => void;
}


export const MainPage: React.FC<Props> = ({ domain, encryption, decryption, qrCodeGenerator }) => {
    const history = useHistory();////website
    const mobile = useMobile(initData, true);
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.encryption.id:
                encryption();
                break;
            case FIELDS.decryption.id:
                decryption();
                break;
            case FIELDS.qrCodeGenerator.id:
                qrCodeGenerator();
                break;
            default:
            mobileUI.onFieldChange(field, history); ////website
        }
    });


    return (
        <Container>
        <Content>
            <AppTitle>Mobile Encryption</AppTitle>
            <SourceLink>Source Code</SourceLink>
            <ConnectWidget mobile={mobile}/>
            {mobile.isConnected && (
                <P>
                    You can now operate on your mobile.
                </P>
            )}
            <DisConnectButton mobile={mobile}/>
        </Content>
        </Container>
    );
}


const FIELDS = {
    qrCodeGenerator: {
        id: 'qr-code-generator',
        type: "button",
        label: "Encrypted QR Code",
        icon: "qrcode",
        viewId: "row1",
    },
    encryption: {
        id: 'mobile-encryption',
        type: 'button',
        label: 'Encryption',
        icon: "encrypt",
        viewId: "row2"
    },
    decryption: {
        id: 'mobile-decryption',
        type: 'button',
        icon: "decrypt",
        label: 'Decryption',
        viewId: "row2"
    }
};
mobileUI.add(FIELDS);////website
const initData = {
    id: "mobile-encryption-main",
    form: {
        title: "Please Select",
        fields: Object.values(FIELDS)
    }
};
const Container =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    height:100vh;
    backgroundColor: rgb(219,240,240);

`;

const Content=styled.div`
    width:95%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    align-items: center;
    padding:10px;

`;

const AppTitle=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-size: 1em;
    color: #445566;
    font-family: Georgia, Times, Serif;
    @media screen and (min-width:250px) and (min-height:250px){
        font-size:1.5em;
        margin-bottom:10px;
    }

    @media screen and (min-width:400px){
        font-size:2em;
    }
},`;

const SourceLink=styled.a.attrs({
    href:'https://github.com/global-input/mobile-encryption',
    rel:'noreferrer noopener',
    target:'_blank'})`
    color: #153E85;
    font-weight: 100;
    font-family: Georgia, Times, Serif;
    font-size: 0.8em;
    @media screen and (min-width:250px) and (min-height:250px){
        font-size:1em;
        margin-bottom:10px;
    }
    @media screen and (min-width:400px){
        font-size:1.5em;
    }

    `;


const P = styled.div`
    font-size: 16px;
    @media screen and (min-width:250px) and (min-height:250px){

        margin-bottom:10px;
    }
    @media screen and (min-height:400px){

        margin-bottom:60px;
        margin-top:60px;
    }


`;
