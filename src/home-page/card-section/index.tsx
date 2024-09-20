import React from "react";
import { config } from "../../configs";
import {
  Title,
  Card,
  Content,
  Cards,
  CardsContent,
  More,
  Footer,
  AuthenticationIcon,
  ControlIcon,
  SecondScreenIcon,
  EncryptionIcon,
  StorageIcon,
  TransferIcon,
} from "./layout";

const textContent = {
  authentication: {
    title: "Authentication",
    content: [
      "Securely sign in, manage your data, and interact with applications using your phone—no need to hide your screen in public.",
    ],
  },
  mobileControl: {
    title: "Input and Control",
    content: [
      "Extends applications to let users securely transfer their data across devices.",
    ],
  },
  secondScreen: {
    title: "Second Screen",
    content: [
      "A simple yet innovative solution, introducing the Second Screen Experience across your phone and your TV.",
    ],
  },
  encryption: {
    title: "Encrypt",
    content: [
      "Allows applications to send content to your phone for encryption/decryption, so your encryption keys stay on your device.",
    ],
  },
  mobilePersonStorage: {
    title: "Personal Storage",
    content: [
      "There's no need for apps to store your personal info, when you can securely hold it yourself.",
    ],
  },
  mobileContentTransfer: {
    title: "Transfer Content",
    content: [
      "Securely move content from your phone to your PC, tablet, or TV - and vice versa.",
    ],
  },
};

const AuthenticationCard = () => (
  <Card to={config.paths.mobileAuthentication.path}>
    <AuthenticationIcon />
    <Title>{textContent.authentication.title}</Title>
    <Content>{textContent.authentication.content}</Content>
    <Footer>
      <More />
    </Footer>
  </Card>
);

const MobileControlCard = () => (
  <Card to={config.paths.mobileControl.path}>
    <ControlIcon />
    <Title>{textContent.mobileControl.title}</Title>
    <Content>{textContent.mobileControl.content}</Content>
    <Footer>
      <More />
    </Footer>
  </Card>
);
const SecondScreenCard = () => (
  <Card to={config.paths.secondScreen.path}>
    <SecondScreenIcon />
    <Title>{textContent.secondScreen.title}</Title>
    <Content>{textContent.secondScreen.content}</Content>
    <Footer>
      <More />
    </Footer>
  </Card>
);
const MobileEncryptionCard = () => (
  <Card to={config.paths.aboutContentEncryption.path}>
    <EncryptionIcon />
    <Title>{textContent.encryption.title}</Title>
    <Content>{textContent.encryption.content}</Content>
    <Footer>
      <More />
    </Footer>
  </Card>
);
const PersonalStorageCard = () => (
  <Card to={config.paths.mobilePersonalStorage.path}>
    <StorageIcon />
    <Title>{textContent.mobilePersonStorage.title}</Title>
    <Content>{textContent.mobilePersonStorage.content}</Content>
    <Footer>
      <More />
    </Footer>
  </Card>
);
const ContentTransferCard = () => (
  <Card to={config.paths.mobileContentTransfer.path}>
    <TransferIcon />
    <Title>{textContent.mobileContentTransfer.title}</Title>
    <Content>{textContent.mobileContentTransfer.content}</Content>
    <Footer>
      <More />
    </Footer>
  </Card>
);

export const CardSection = () => (
  <Cards>
    <CardsContent>
      <AuthenticationCard />
      <MobileControlCard />
      <SecondScreenCard />

      <MobileEncryptionCard />

      <PersonalStorageCard />
      <ContentTransferCard />
    </CardsContent>
  </Cards>
);
