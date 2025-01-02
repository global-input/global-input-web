import React from "react";
import { config } from "../../web-config";
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
    title: "Zero-Change Authentication",
    content: [
      "Add mobile-based authentication to existing systems without modifying your authentication infrastructure. Users can securely sign in using their phones while maintaining your current security setup.",
    ],
  },
  mobileControl: {
    title: "Universal Mobile Control",
    content: [
      "Enable mobile input and control in any application with simple JSON-based UI definitions. Perfect for keyboard-intensive operations in streaming apps and IoT devices.",
    ],
  },
  secondScreen: {
    title: "Instant Second Screen Integration",
    content: [
      "Add mobile interaction to streaming apps and devices with just a few lines of code. No infrastructure changes needed - perfect for Smart TVs, gaming consoles, and streaming devices.",
    ],
  },
  encryption: {
    title: "Zero-Server Encryption",
    content: [
      "Enable end-to-end encrypted data handling without managing encryption infrastructure. Keys stay on users' devices, simplifying compliance and reducing server-side complexity.",
    ],
  },
  mobilePersonStorage: {
    title: "GDPR-Ready Data Handling",
    content: [
      "Minimize compliance overhead by letting users manage their personal data on their devices. Perfect for handling sensitive information without server-side storage requirements",
    ],
  },
  mobileContentTransfer: {
    title: "Secure Cross-Device Transfer",
    content: [
      "Enable direct, encrypted content sharing between devices without additional infrastructure. Perfect for streaming services and multi-device environments",
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
