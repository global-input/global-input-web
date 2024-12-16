import React, { useEffect } from "react";
import styled from "styled-components";
import { ConnectQR, PairingQR } from 'global-input-react'; ////global-input-react////

import { WidgetState, MobileData } from "./commons";

import settingsImage from "./images/settings.png";
import connectImage from "./images/connect.png";
import disconnectImage from "./images/disconnect.png";
import pairingImage from "./images/pairing.png";

import { SettingsEditor } from "./settingsEditor";
import { LinkButton } from "../home-page/layout";

const Button = styled.button`
  text-decoration: none;
  font-size: 15px;
  border-radius: 8px;
  color: #4281bd;
  background-color: white;
  white-space: nowrap;

  padding: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  display: flex;
  min-width: 50px;

  max-width: 300px;
  margin-left: 5px;
  margin-right: 5px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  font-weight: 700;

  &: hover {
    background-color: #e3e3e3;
  }
`;

const BigButton = styled(Button)`
  border-width: 0;
  font-size: 15px;
`;
const DarkButton = styled(BigButton)`
  background-color: rgb(208, 226, 247);
  &: hover {
    background-color: rgb(188, 206, 217);
  }
`;

const Container = styled.div`
  flex-direction: column;
  justify-content: flex-center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 12px 12px 0 0;

  @media screen and (min-width: 800px) {
    border-radius: 12px;
  }
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`;
const Content = styled.div`
  flex-direction: column;
  justify-content: flex-center;
  align-items: center;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  overflow: scroll;
`;
const PopupGlass = styled.div`
  background-color: #0009;
  display: flex;
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  top: 0;
  left: 0;
  animation: fadeIn 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000);

  @media screen and (min-width: 800px) {
    justify-content: center;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(1.25);
      -webkit-transform: scale(1.25);
    }
    100% {
      opacity: 1;
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
 }
`;

const ErrorMessage = styled.div`
  color: white;
  font-size: 11;
  padding: 6px;
  margin: 10px;
  border-radius: 12px;
  background-color: #ff8786;
  max-width: 350px;
  max-height: 100px;
  overflow: scroll;
`;

const BlueLink = styled.a.attrs(() => ({}))`
  color: #0984e3;
  cursor: pointer;
  text-decoration: underline;
`

const PopUpWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
export const CloseIcon = styled.button`
  position: absolute;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 50%;
  background-color: #ff6b6b;
  font-size: 40px;
  line-height: 0;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  width: 45px;
  height: 45px;
  top: -60px;
  right: 15px;

  &:before {
    content: "×";
  }
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom: 12px;
`;
const TabBase = styled.div`
  border-radius: 30px;
  border-width: 0px;
  margin-right: 7px;
  margin-left: 7px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 110px;
  height: 60px;
  align-items: center;
  cursor: pointer;
  &: hover {
    background-color: #efefef;
  }
`;
const ActiveTab = styled(TabBase).attrs({
  as: `button`,
})`
  background-color: #eeeeee;
`;
const Tab = styled(TabBase).attrs({
  as: `button`,
})`
  background-color: #dedede;
`;

const TabText = styled.div`
  color: #4872d3;
  font-size: 12px;
  font-weight: 600;
`;

const SettingsIcon = styled.img.attrs({
  src: settingsImage,
  alt: "Settings",
})`
  display: none;
  @media screen and (min-height: 530px) {
    display: block;
  }
`;
const PairingIcon = styled.img.attrs({
  src: pairingImage,
  alt: "Pair",
})`
  display: none;
  @media screen and (min-height: 530px) {
    display: block;
  }
`;

const ConnectIcon = styled.img.attrs({
  src: connectImage,
  alt: "Connect",
})`
  display: block;
  width: 22px;
  height: auto;
`;

const DisconnectIcon = styled.img.attrs({
  src: disconnectImage,
  alt: "Disconnect",
})`
  display: block;
  width: 22px;
  height: auto;
`;

interface TabProps {
  widgetState: WidgetState;
  setWidgetState: (widgetState: WidgetState) => void;
}
const SettingsTab: React.FC<TabProps> = ({ widgetState, setWidgetState }) => {
  if (widgetState === WidgetState.SETTINGS) {
    return (
      <ActiveTab>
        <SettingsIcon />
        <TabText>Settings</TabText>
      </ActiveTab>
    );
  } else {
    return (
      <Tab onClick={() => setWidgetState(WidgetState.SETTINGS)}>
        <SettingsIcon />
        <TabText>Settings</TabText>
      </Tab>
    );
  }
};

const ConnectTab: React.FC<TabProps> = ({ widgetState, setWidgetState }) => {
  if (widgetState === WidgetState.CONNECT_QR) {
    return (
      <ActiveTab>
        <ConnectIcon />
        <TabText>Connect</TabText>
      </ActiveTab>
    );
  } else {
    return (
      <Tab onClick={() => setWidgetState(WidgetState.CONNECT_QR)}>
        <ConnectIcon />
        <TabText>Connect</TabText>
      </Tab>
    );
  }
};

const PairingTab: React.FC<TabProps> = ({ widgetState, setWidgetState }) => {
  if (widgetState === WidgetState.PAIRING) {
    return (
      <ActiveTab>
        <PairingIcon />
        <TabText>Pair</TabText>
      </ActiveTab>
    );
  } else {
    return (
      <Tab onClick={() => setWidgetState(WidgetState.PAIRING)}>
        <PairingIcon />
        <TabText>Pair</TabText>
      </Tab>
    );
  }
};

const Tabs: React.FC<TabProps> = (props) => (
  <TabContainer>
    <ConnectTab {...props} />
    <SettingsTab {...props} />
    <PairingTab {...props} />
  </TabContainer>
);

interface ConnectWidgetProps {
  mobile: MobileData;
}
export const ConnectWidget: React.FC<ConnectWidgetProps> = ({ mobile }) => {
  const {
    widgetState,
    setWidgetState,
    errorMessage,
    onSaveSettings,
    loadSettings,
    restart,
    isConnected,
    isShowWidget,
    isConnectionDenied,
    isError,
  } = mobile;
  if (isConnected) {
    return null;
  }
  if (!isShowWidget) {
    return null;
  }

  let message =
    isConnectionDenied && <ErrorMessage>You can only use one mobile app per session. <BlueLink onClick={() => restart()}>Click here</BlueLink> to start a new session.</ErrorMessage>
  if (isError) {
    message = <ErrorMessage>errorMessage</ErrorMessage>;
  }

  return (
    <Container>
      <TopBar>
        <Tabs widgetState={widgetState} setWidgetState={setWidgetState} />
      </TopBar>
      <Content>
        {widgetState === WidgetState.CONNECT_QR && (
          <ConnectQR mobile={mobile} hspace={100}/>
        )}
        {widgetState === WidgetState.PAIRING && <PairingQR mobile={mobile} hspace={100}/>}
        {widgetState === WidgetState.SETTINGS && (
          <SettingsEditor
            saveSettings={onSaveSettings}
            loadSettings={loadSettings}
          />
        )}
        {message && <ErrorMessage>{message}</ErrorMessage>}
      </Content>
    </Container>
  );
};

export const ConnectWindow: React.FC<ConnectWidgetProps> = ({ mobile }) => {
  const { isConnected, isShowWidget } = mobile;
  useEffect(() => {
    let scrollDisabled = false;
    if (isShowWidget && !isConnected) {
      document.body.style.overflow = "hidden";
      scrollDisabled = true;
    }
    return () => {
      if (scrollDisabled) {
        scrollDisabled = false;
        document.body.style.overflow = "unset";
      }
    };
  }, [isConnected, isShowWidget]);
  if (!isShowWidget || isConnected) {
    return null;
  }

  return (
    <PopupGlass
      onClick={(e) => mobile.setShowWidget(e.target !== e.currentTarget)}
    >
      <PopUpWindow>
        <ConnectWidget mobile={mobile} />
      </PopUpWindow>
    </PopupGlass>
  );
};
const ConnectLabel = styled.div`
  padding-left: 6px;
  font-size: 15px;
`;

interface ButtonProps {
  label?: string;
  skin?: string;
  mobile: MobileData;
}
export const ConnectButton: React.FC<ButtonProps> = ({
  mobile,
  label = "Connect",
  skin,
}) => {
  const { setShowWidget, isConnected, isShowWidget } = mobile;
  if (isConnected || isShowWidget) {
    return null;
  }
  if (skin === "white") {
    return <BigButton onClick={() => setShowWidget(true)}>{label}</BigButton>;
  }
  return (
    <DarkButton onClick={() => setShowWidget(true)}>
      <ConnectIcon />
      <ConnectLabel>{label}</ConnectLabel>
    </DarkButton>
  );
};

export const DisconnectButton: React.FC<ButtonProps> = ({
  mobile,
  label = "Disconnect",
  skin,
}) => {
  const { isConnected, isConnectionDenied, isDisconnected, restart } = mobile;
  if (isConnected || isConnectionDenied || isDisconnected) {
    if (skin === "white") {
      return <BigButton onClick={() => restart()}>{label}</BigButton>;
    } else {
      return (
        <DarkButton onClick={() => restart()}>
          <DisconnectIcon />
          <ConnectLabel>{label}</ConnectLabel>
        </DarkButton>
      );
    }
  } else {
    return null;
  }
};

interface WhenProps {
  mobile: MobileData;
  children: React.ReactNode;
}
export const WhenConnected: React.FC<WhenProps> = ({ mobile, children }) => {
  if (mobile.isConnected) {
    return <>{children}</>;
  } else {
    return null;
  }
};
