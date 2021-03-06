import React from 'react';
import { config } from '../../configs';
import {Title,Card,Content,Cards,CardsContent,More, Footer,
    AuthenticationIcon, ControlIcon,SecondScreenIcon,EncryptionIcon,StorageIcon,TransferIcon
} from './layout';

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


const AuthenticationCard = () => (
    <Card to={config.paths.mobileAuthentication.path}>
        <AuthenticationIcon/>
        <Title>{textContent.authentication.title}</Title>
        <Content>{textContent.authentication.content}</Content>
        <Footer>
            <More/>
        </Footer>
    </Card>
);

const MobileControlCard = () => (
    <Card to={config.paths.mobileControl.path}>
            <ControlIcon/>
            <Title>{textContent.mobileControl.title}</Title>
            <Content>{textContent.mobileControl.content}</Content>
            <Footer>
                <More/>
            </Footer>
    </Card>
);
const SecondScreenCard = () => (
    <Card to={config.paths.secondScreen.path}>
            <SecondScreenIcon/>
            <Title>{textContent.secondScreen.title}</Title>
            <Content>{textContent.secondScreen.content}</Content>
            <Footer>
            <More/>
            </Footer>

    </Card>
);
const MobileEncryptionCard = () => (

    <Card to={config.paths.aboutContentEncryption.path}>
            <EncryptionIcon/>
            <Title>{textContent.encryption.title}</Title>
            <Content>{textContent.encryption.content}</Content>
            <Footer>
            <More />
            </Footer>
    </Card>
);
const PersonalStorageCard = () => (
    <Card to={config.paths.mobilePersonalStorage.path}>
            <StorageIcon/>
            <Title>{textContent.mobilePersonStorage.title}</Title>
            <Content>{textContent.mobilePersonStorage.content}</Content>
            <Footer>
            <More />
            </Footer>

    </Card>
);
const ContentTransferCard = () => (
    <Card to={config.paths.mobileContentTransfer.path}>
            <TransferIcon/>
            <Title>{textContent.mobileContentTransfer.title}</Title>
            <Content>{textContent.mobileContentTransfer.content}</Content>
            <Footer>
                <More />
            </Footer>

    </Card>
)

export const CardSection=()=>(
    <Cards>
        <CardsContent>
                <AuthenticationCard/>
                <MobileControlCard/>
                <SecondScreenCard />

                <MobileEncryptionCard />

                <PersonalStorageCard/>
                <ContentTransferCard/>
        </CardsContent>


    </Cards>

)
