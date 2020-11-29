import React from 'react'


import BasicCardsContainer from '../basics-cards-container';
import IconHeaderCard from "../../../page-components/icon-header-card";

import { config } from '../../../configs';

import authenticationImage from './images/authentication.svg'
import mobileControlImage from './images/control.svg';
import secondScreenImage from './images/second-screen.svg';
import encryptionImage from './images/encryption.png';
import mobilePersonStorageImage from './images/personal-storage.png';
import mobileContentTransferImage from './images/transfer.png';

const textContent = {
    authentication: {
        title: "Mobile Authentication",
        content: ["Authentication on shared devices in public view, No need to hide screen, keyboard even mobile screen when signing in on a shared device"],
    },
    mobileControl: {
        title: "Mobile Input & Control",
        content: ["Extends applications to allows users to use smartphones to operate and transfer data securely."],
    },
    secondScreen: {
        title: "Second Screen",
        content: ["A simple and innovative solution to introduce the Second Screen Experience to the Smart TV applications"],
    },
    encryption: {
        title: "Mobile Encryption",
        content: ["Applications send content to your mobile device for encryption/decryption, so your encryption keys never leaves your device."],
    },
    mobilePersonStorage: {
        title: "Mobile Personal Storage",
        content: ["Applications does not have store personal in their databases, because they can request on-demand from the connected mobile app"],
    },
    mobileContentTransfer: {
        title: "Mobile Content Transfer",
        content: ["You can transfer content securely from your mobile device over to computers or other smart devices or vise versa"],
    }
};

const AuthenticationCard = ({ scWidth }) => (
    <IconHeaderCard titleIcon={authenticationImage}
        title={textContent.authentication.title}
        content={textContent.authentication.content}
        link={config.paths.mobileAuthentication.path}
        scWidth={scWidth}
    />
);

const MobileControlCard = ({ scWidth }) => (
    <IconHeaderCard titleIcon={mobileControlImage}
        title={textContent.mobileControl.title}
        content={textContent.mobileControl.content}
        link={config.paths.mobileControl.path}
        scWidth={scWidth}
    />

);
const SecondScreenCard = ({ scWidth }) => (
    <IconHeaderCard titleIcon={secondScreenImage}
        title={textContent.secondScreen.title}
        content={textContent.secondScreen.content}
        link={config.paths.secondScreen.path}
        scWidth={scWidth}
    />
);
const MobileEncryptionCard = ({ scWidth }) => (
    <IconHeaderCard titleIcon={encryptionImage}
        title={textContent.encryption.title}
        content={textContent.encryption.content}
        link={config.paths.aboutContentEncryption.path}
        scWidth={scWidth}
    />
);
const PersonalStorageCard = ({ scWidth }) => (
    <IconHeaderCard titleIcon={mobilePersonStorageImage}
        title={textContent.mobilePersonStorage.title}
        content={textContent.mobilePersonStorage.content}
        link={config.paths.mobilePersonalStorage.path}
        scWidth={scWidth}
    />
);
const ContentTransferCard = ({ scWidth }) => (
    <IconHeaderCard titleIcon={mobileContentTransferImage}
        title={textContent.mobileContentTransfer.title}
        content={textContent.mobileContentTransfer.content}
        link={config.paths.mobileContentTransfer.path}
        scWidth={scWidth}
    />
)


export const CardSection = ({ scWidth }) => {

    if (scWidth > 1340) {
        return (<>
            <BasicCardsContainer>
                <AuthenticationCard scWidth={scWidth} />
                <MobileControlCard scWidth={scWidth} />
                <SecondScreenCard scWidth={scWidth} />
            </BasicCardsContainer>
            <BasicCardsContainer>
                <MobileEncryptionCard scWidth={scWidth} />
                <PersonalStorageCard scWidth={scWidth} />
                <ContentTransferCard scWidth={scWidth} />
            </BasicCardsContainer></>
        );
    }
    else {
        return (
            <>
                <BasicCardsContainer>
                    <AuthenticationCard scWidth={scWidth} />
                    <MobileEncryptionCard scWidth={scWidth} />


                </BasicCardsContainer>
                <BasicCardsContainer>
                    <SecondScreenCard scWidth={scWidth} />
                    <MobileControlCard scWidth={scWidth} />

                </BasicCardsContainer>
                <BasicCardsContainer>
                    <PersonalStorageCard scWidth={scWidth} />
                    <ContentTransferCard scWidth={scWidth} />
                </BasicCardsContainer>
                <BasicCardsContainer>
                    <PersonalStorageCard scWidth={scWidth} />
                    <ContentTransferCard scWidth={scWidth} />
                </BasicCardsContainer>
            </>
        );
    }
};
