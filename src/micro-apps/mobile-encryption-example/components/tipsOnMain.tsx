import React from 'react';

import { Tips, TipTitle, Tip, TipContent} from '../common-elements';
import {GenerateQRCodeImage,EncryptImage,DecryptImage} from './icons';


export const TipsOnButton = () => (
    <Tips>
        <TipTitle>
            Press the buttons on your mobile:
        </TipTitle>
        <Tip>
            <GenerateQRCodeImage />
            <TipContent>
                This button allows you to encrypt a short content using your mobile and then send the encrypted content to this application to create an Encrypt QR Code that only your mobile can scan to decrypt.
            </TipContent>
        </Tip>

        <Tip>
            <EncryptImage />
            <TipContent>
                This button allows you to encrypt content and send the encrypted content to this application so you can store it anywhere with a peace of mind that only your mobile can decrypt it.
                                                </TipContent>
        </Tip>
        <Tip>
            <DecryptImage />
            <TipContent>
                This button allow you use this application to sends an encrypted content to your mobile app for decryption.
                Your mobile app decrypts it and sends back the result to this application.
            </TipContent>
        </Tip>
    </Tips>
);
