import React from "react";
import { config } from "../../mobile-app/configs";
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
      "Use your phone to securely control applications and devices, transferring data seamlessly with end-to-end encryption—one app for all your needs.",
    ],
  },
  secondScreen: {
    title: "Screen Experience",
    content: [
      "Effortlessly synchronise content and interactions between your phone and TV, all without changing your existing setup—no additional apps or infrastructure needed.",
    ],
  },
  encryption: {
    title: "Secure Encryption",
    content: [
      "Keep your encryption keys safe on your device and secure sensitive data with robust mobile encryption—no server access needed.",
    ],
  },
  mobilePersonStorage: {
    title: "Personal Data Vault",
    content: [
      "Keep your personal information secure and private on your device, under your control, with encrypted storage and GDPR compliance—no third-party storage needed.",
    ],
  },
  mobileContentTransfer: {
    title: "Content Transfer",
    content: [
      "Seamlessly move content across devices with end-to-end encryption—no intermediaries, just secure, direct transfer from your phone to your PC, tablet, or TV.",
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
