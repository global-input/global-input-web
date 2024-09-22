import React from 'react';

import { Tips, TipTitle, Tip, TipContent} from '../common-elements';
import {GenerateQRCodeImage,EncryptImage,DecryptImage} from './icons';


export const TipsOnButton = () => (
    <Tips>
        <TipTitle>
        Utilise the buttons displayed on your mobile screen to perform the following secure encryption and decryption operations:
        </TipTitle>
        <Tip>
            <GenerateQRCodeImage />
            <TipContent>
            Encrypt a short piece of content using your mobile device, then send it to this application to generate an Encrypted QR Code. This QR Code can only be decrypted by your mobile device, ensuring secure sharing.
            </TipContent>
        </Tip>

        <Tip>
            <EncryptImage />
            <TipContent>
            Encrypt content on your mobile and securely send it to this application for storage. This allows you to store sensitive information with the confidence that only your mobile can decrypt it.
                                                </TipContent>
        </Tip>
        <Tip>
            <DecryptImage />
            <TipContent>
            Use this application to send an encrypted piece of content to your mobile for decryption. Your mobile decrypts the content and securely sends the decrypted result back to this application.
            </TipContent>
        </Tip>
    </Tips>
);
