import styled from 'styled-components';
import decryptIconImage from './images/decrypt-icon.png';
import showIconImage from './images/show-icon.png';
import sendIconImage from './images/send-icon.png';
import qrCodeImage from './images/qr-code.png';
import encryptImage from './images/encrypt.png';
import decryptImage from './images/decrypt.png';


export const DecryptIcon = styled.img.attrs({
    src: decryptIconImage,
    alt: 'Decrypt'
})``;
export const ShowIcon = styled.img.attrs({
    src: showIconImage,
    alt: 'Encrypt'
})``;
export const SendIcon = styled.img.attrs({
    src: sendIconImage,
    alt: 'Send'
})``;


export const GenerateQRCodeImage = styled.img.attrs({
    src: qrCodeImage,
    alt: 'Generate QR Code'
})``;
export const EncryptImage = styled.img.attrs({
    src: encryptImage,
    alt: 'Encrypt'
})``;

export const DecryptImage = styled.img.attrs({
    src: decryptImage,
    alt: 'Decrypt'
})``;