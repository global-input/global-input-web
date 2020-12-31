import React from 'react';
import styled from 'styled-components';

import { Tips, TipTitle, Tip, TipContent,ConnectedInstruction } from '../../components';

import encryptOnMobileImage from './images/encrypt-on-mobile.png';
import keysOnMobileImage from './images/keys-on-mobile.png';
import settingsOnMobileImage from './images/settings-on-mobile.png';

const EncryptOnMobileIcon = styled.img.attrs({
    src: encryptOnMobileImage,
    alt: 'Encrypt'
})``;
const BackupKeysIcon = styled.img.attrs({
    src: keysOnMobileImage,
    alt: 'Backup Keys'
})``;

const BackupSettingsIcon = styled.img.attrs({
    src: settingsOnMobileImage,
    alt: 'Backup Settings'
})``;
export const GeneralTips = () => (
    <Tips>
        <TipTitle>
            Press the buttons on your mobile:
        </TipTitle>
        <Tip>
            <EncryptOnMobileIcon />
            <TipContent>
                This button provides you with an option of recording a disaster recovery root password. You can scan the encrypted QR code to decrypt it with your mobile when you need it.

                                        </TipContent>
        </Tip>

        <Tip>
            <BackupKeysIcon />
            <TipContent>
                This button allows you to export any one of your encryption keys in your mobile app as an encrypted QR Code.
                You can import back in your app by scanning it.
                The QR code will be protected with a phrase that you need to provide when you are exporting the encryption key.

                                                </TipContent>
        </Tip>
        <Tip>
            <BackupSettingsIcon />
            <TipContent>
                This button allows you to export your connection settings of your mobile app. This is useful if you have
                different applications with different connection settings.
            </TipContent>
        </Tip>
    </Tips>
);


export const FirstTip=({mobile})=>(
    <ConnectedInstruction mobile={mobile}>
        You can now press <EncryptOnMobileIcon/> button on your mobile to encrypt a short content.
    </ConnectedInstruction>
)