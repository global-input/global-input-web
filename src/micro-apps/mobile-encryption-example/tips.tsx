import React from 'react';
import styled from 'styled-components';

import { Tips, TipTitle, Tip, TipContent} from './elements';

import qrCodeImage from './images/qr-code.png';
import encryptImage from './images/encrypt.png';
import decryptImage from './images/decrypt-icon.png';

const GenerateQRCode = styled.img.attrs({
    src: qrCodeImage,
    alt: 'Generate QR Code'
})``;
const EncryptIcon = styled.img.attrs({
    src: encryptImage,
    alt: 'Encrypt'
})``;

const DecryptIcon = styled.img.attrs({
    src: decryptImage,
    alt: 'Decrypt'
})``;
export const TipsOnButton = () => (
    <Tips>
        <TipTitle>
            Press the buttons on your mobile:
        </TipTitle>
        <Tip>
            <GenerateQRCode />
            <TipContent>
                This button allows you to encrypt a short content using your mobile and then send the encrypted content to this application to create an Encrypt QR Code that only your mobile can scan to decrypt.
            </TipContent>
        </Tip>

        <Tip>
            <EncryptIcon />
            <TipContent>
                This button allows you to encrypt content and send the encrypted content to this application so you can store it anywhere with a peace of mind that only your mobile can decrypt it.
                                                </TipContent>
        </Tip>
        <Tip>
            <DecryptIcon />
            <TipContent>
                This button allow you use this application to sends an encrypted content to your mobile app for decryption.
                Your mobile app decrypts it and sends back the result to this application.
            </TipContent>
        </Tip>
    </Tips>
);
