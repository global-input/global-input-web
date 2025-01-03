import React, { useState } from "react";
import styled from "styled-components";
import type { ConnectionSettings } from "./storage";
import { Help } from "./help";
const Button = styled.button`
  text-decoration: none;
  font-size: 11px;
  border-radius: 8px;
  color: #4281bd;
  background-color: white;
  white-space: nowrap;

  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: #eeeeee;
  display: flex;
  min-width: 50px;

  max-width: 200px;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  font-family: "Roboto", sans-serif;

  &: hover {
    transform: translateY(-3px);
    box-shadow: 0 0 50px #ffff;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  width: 80vw;
  max-width: 390px;
  background-color: white;
  overflow: scroll;
  height: 65vh;
  @media screen and (min-height: 370px) {
    height: 300px;
  }
  @media screen and (min-height: 400px) {
    height: 320px;
  }
  @media screen and (min-height: 450px) {
    height: 350px;
  }
  @media screen and (min-height: 600px) {
    height: 425px;
  }
`;

const Field = styled.div`
  position: relative;
  width: 100%;
  padding-top: 15px;
`;
const Input = styled.input`
  display: block;
  line-height: 2em;
  border: 1pxz solid red;
  margin: 0;
  padding-left: 10px;
  width: 100%;
  font-size: medium;
  border: 2px solid rgb(230, 230, 230);
  background-color: rgb(249, 249, 249);
  border-radius: 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 500;
  &:focus {
    border: 1px solid #2c7ac9;
  }
  &:placeholder-shown + .control-label {
    visibility: hidden;
    z-index: -1;
    transition: 0.2s ease-in-out;
  }
  &:not(:placeholder-shown) + .control-label,
  .form-control:focus:not(:placeholder-shown) + .control-label {
    visibility: visible;
    z-index: 1;
    opacity: 1;
    transform: translateX(10px) translateY(-47px);
    transition: 0.2s ease-in-out transform;
    background-color: white;
  }
  width: 100%;
`;
const Label = styled.label.attrs((props) => ({
  className: "control-label",
}))`
  display: inline-block;
  opacity: 0;
  color: rgb(53, 116, 230);
  transition: 0.2s ease-in-out transform;
  font-size: 12px;
  width: auto;
  padding-left: 5px;
  padding-right: 5px;
`;

const WebSocketServer = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
  href: "https://github.com/global-input/global-input-node",
})`
  color: rgb(53, 116, 230);
  text-decoration: none;
  margin-left: 5px;
`;

type setSettingsParams =
  | ConnectionSettings
  | ((settings: ConnectionSettings) => ConnectionSettings);

interface SettingsFieldProp {
  settings: ConnectionSettings;
  setSettings: (settings: setSettingsParams) => void;
  expand: string;
  setExpand: (expand: string) => void;
}
const ProxyField: React.FC<SettingsFieldProp> = ({
  settings,
  setSettings,
  expand,
  setExpand,
}) => (
  <Field>
    <Input
      id="url"
      onChange={(evt) => {
        const url = evt.target.value;
        setSettings((setting) => ({ ...setting, url }));
      }}
      value={settings.url ? settings.url : ""}
      placeholder="Websocket Server URL"
      onFocus={() => setExpand("url")}
    />
    <Label htmlFor="url">WebSocket Server URL</Label>
    <Help expandId="url" expand={expand} setExpand={setExpand}>
    The WebSocket Server URL determines the WebSocket server that routes messages between your mobile app and this application. If left blank, the default server provided by us will be used. You can also set up your own WebSocket server, even in an insecure environment, as end-to-end encryption secures the messages exchanged between your mobile app and this application.
    </Help>
  </Field>
);

const APIKeyField: React.FC<SettingsFieldProp> = ({
  settings,
  setSettings,
  expand,
  setExpand,
}) => (
  <Field>
    <Input
      id="apiKey"
      onChange={(evt) => {
        const apikey = evt.target.value;
        setSettings((setting) => ({ ...setting, apikey }));
      }}
      value={settings.apikey ? settings.apikey : ""}
      placeholder="API Key"
      onFocus={() => setExpand("apikey")}
    />
    <Label htmlFor="apiKey">API Key</Label>
    <Help expandId="apikey" expand={expand} setExpand={setExpand}>
    The API Key is used by the WebSocket server (specified above) to identify incoming connections. While there are no security implications in exposing this value, it may affect the WebSocket server’s performance due to an increased workload. The WebSocket server does not store any sensitive information and only proxies encrypted messages between your mobile app and this application. If left blank, the default API Key set by our WebSocket server will be used.
    </Help>
  </Field>
);

const SecurityGroupField: React.FC<SettingsFieldProp> = ({
  settings,
  setSettings,
  expand,
  setExpand,
}) => (
  <Field>
    <Input
      id="securityGroup"
      onChange={(evt) => {
        const securityGroup = evt.target.value;
        setSettings((setting) => ({ ...setting, securityGroup }));
      }}
      value={settings.securityGroup ? settings.securityGroup : ""}
      placeholder="Security Group Key"
      onFocus={() => setExpand("securityGroup")}
    />
    <Label htmlFor="securityGroup">Security Group Key</Label>
    <Help expandId="securityGroup" expand={expand} setExpand={setExpand}>
    The Security Group Key functions similarly to an API key, allowing this client application to authenticate incoming connections from your mobile app. If you change this key, remember to re-pair your mobile app in the “Pair” tab to maintain connectivity. Leaving this field blank will use the default key provided with the Global Input App installation.
    </Help>
  </Field>
);
const CodeKeyField: React.FC<SettingsFieldProp> = ({
  settings,
  setSettings,
  expand,
  setExpand,
}) => (
  <Field>
    <Input
      id="codeKey"
      onChange={(evt) => {
        const codeKey = evt.target.value;
        setSettings((setting) => ({ ...setting, codeKey }));
      }}
      value={settings.codeKey ? settings.codeKey : ""}
      placeholder="Code Key"
      onFocus={() => setExpand("codeKey")}
    />
    <Label htmlFor="codeKey">Code Key</Label>
    <Help expandId="codeKey" expand={expand} setExpand={setExpand}>
    The Code Key encrypts the QR Code content displayed by this application. If you change this key, you’ll need to re-pair your mobile app in the “Pair” tab. Leaving this field blank will use the default value provided with the Global Input App installation.
    </Help>
  </Field>
);

const Footer = styled.div`
  display: flex;
  margin: 0;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-bottom: 50px;
`;

interface Props {
  loadSettings: () => ConnectionSettings;
  saveSettings: (settings: ConnectionSettings) => void;
}
export const SettingsEditor: React.FC<Props> = ({
  loadSettings,
  saveSettings,
}) => {
  const [settings, setSettings] = useState(loadSettings);
  const [expand, setExpand] = useState("");
  const onSave = () => saveSettings(settings);
  return (
    <Form>
      <SecurityGroupField
        settings={settings}
        setSettings={setSettings}
        expand={expand}
        setExpand={setExpand}
      />
      <CodeKeyField
        settings={settings}
        setSettings={setSettings}
        expand={expand}
        setExpand={setExpand}
      />
      <ProxyField
        settings={settings}
        setSettings={setSettings}
        expand={expand}
        setExpand={setExpand}
      />
      <APIKeyField
        settings={settings}
        setSettings={setSettings}
        expand={expand}
        setExpand={setExpand}
      />
      <Footer>
        <Button onClick={onSave}>Save</Button>
      </Footer>
    </Form>
  );
};
