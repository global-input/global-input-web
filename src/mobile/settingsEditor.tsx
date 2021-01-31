import React, {useState} from 'react';
import styled from 'styled-components';
import type {ConnectionSettings} from './storage';
import {Help} from './help';
const Button = styled.button`
    text-decoration: none;
    font-size: 11px;
    border-radius: 8px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;

    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color:#EEEEEE;
    display:flex;
    min-width:50px;

    max-width: 200px;
    margin-left:5px;
    margin-right:5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;

    &: hover {
        transform: translateY(-3px);
        box-shadow: 0 0 50px #ffff;
    }

`;

const Form = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding:10px;
    width:80vw;
    max-width:390px;
    background-color:white;
    overflow: scroll;
    height:65vh;
    @media screen and (min-height:370px){
        height:300px;
    }
    @media screen and (min-height:400px){
        height:320px;

    }
    @media screen and (min-height:450px){
        height:350px;

    }
    @media screen and (min-height:600px){
        height:425px;
    }



`;




const Field = styled.div`
    position: relative;
    width:100%;
    padding-top:15px;


`;
const Input = styled.input`
    display: block;
    line-height: 2em;
    border:1pxz solid red;
    margin: 0;
    padding-left: 10px;
    width: 100%;
    font-size: medium;
    border: 2px solid rgb(230,230,230);
    background-color: rgb(249,249,249);
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
        background-color:white;
    }
    width:100%;
`;
const Label = styled.label.attrs(props => ({
    className: "control-label"

}))`
    display: inline-block;
    opacity: 0;
    color:rgb(53,116,230);
    transition: 0.2s ease-in-out transform;
    font-size: 12px;
    width:auto;
    padding-left:5px;
    padding-right:5px;



`;



const WebSocketServer=styled.a.attrs({
    target:'_blank',
    rel: 'noopener noreferrer',
    href:'https://github.com/global-input/global-input-node',

})`
color: rgb(53,116,230);
text-decoration:none;
margin-left:5px;
`;


type setSettingsParams=ConnectionSettings| ((settings:ConnectionSettings)=>ConnectionSettings);

interface SettingsFieldProp{
    settings:ConnectionSettings;
    setSettings:(settings:setSettingsParams)=>void;
    expand:string;
    setExpand:(expand:string)=>void;
}
const ProxyField:React.FC<SettingsFieldProp>=({settings, setSettings,expand,setExpand})=>(
    <Field>
                        <Input id="url" onChange={evt=>{
                            const url=evt.target.value;
                          setSettings(setting => ({ ...setting, url}));
                        }} value={settings.url ? settings.url : ''} placeholder="Websocket Server URL"
                        onFocus={()=>setExpand('url')}/>
                        <Label htmlFor="url">
                        WebSocket Server URL
                        </Label>
                        <Help expandId='url' expand={expand} setExpand={setExpand}>
                        WebSocket Server URL specifies the <WebSocketServer>WebSocket server</WebSocketServer> that is routing (proxying) messages between your mobile app and this application.
                If you leave it blank, it uses the default value, which is provided by us. You can certainly install and
                use your own <WebSocketServer>WebSocket servers</WebSocketServer> that can even run in an insecure environment thanks to the end-to-end encryption that secures messages between your mobile app and this application.
                        </Help>
    </Field>
);



 const APIKeyField:React.FC<SettingsFieldProp>=({settings, setSettings,expand,setExpand}) =>(
    <Field>
                        <Input id="apiKey" onChange={evt=>{
                            const apikey=evt.target.value;
                            setSettings(setting => ({ ...setting, apikey}));
                        }} value={settings.apikey ? settings.apikey : ''} placeholder="API Key"
                        onFocus={()=>setExpand('apikey')}/>
                        <Label htmlFor="apiKey">
                            API Key
                        </Label>
                        <Help expandId='apikey' expand={expand} setExpand={setExpand}>
API Key is used by the <WebSocketServer>WebSocket server</WebSocketServer> (specified above) to identify the incoming connections.
There is no security implications for exposing this value except for
the possible impact on the performance of the WebSocket server due to its increased workload, since a WebSocket server does not hold any sensitive information and is only responsible for proxying encrypted messages (encrypted with end-to-end encryption) between your mobile app and this application.
If you leave it blank, it uses the default value set by our WebSocket server.
                        </Help>



    </Field>
);


const SecurityGroupField:React.FC<SettingsFieldProp>=({settings, setSettings,expand,setExpand})=>(
    <Field>
                        <Input id="securityGroup" onChange={evt=>{
                          const securityGroup=evt.target.value;
                          setSettings(setting => ({ ...setting, securityGroup}));
                        }} value={settings.securityGroup?settings.securityGroup:''} placeholder="Security Group Key"
                        onFocus={()=>setExpand('securityGroup')}/>
                        <Label htmlFor="securityGroup">Security Group Key</Label>
                        <Help expandId='securityGroup' expand={expand} setExpand={setExpand}>
                        Security Group Key is used by this client application to verify
                        the incoming connections coming from your mobile app
            in the same way that API Keys are used by server applications on the server side to identify (authenticate) incoming requests.
            Upon modifying it, you need to pair your mobile app on the "Pair" tab so you can connect to this application. If you leave it blank,
            it uses the default value that comes with the installation of Global Input App.
                        </Help>

    </Field>
);
const CodeKeyField:React.FC<SettingsFieldProp>=({settings, setSettings,expand,setExpand})=>(
                <Field>
                        <Input id="codeKey" onChange={evt=>{
                            const codeKey=evt.target.value;
                          setSettings(setting => ({ ...setting, codeKey}));
                        }} value={settings.codeKey?settings.codeKey:''} placeholder="Code Key"
                        onFocus={()=>setExpand('codeKey')}/>
                        <Label htmlFor="codeKey">Code Key</Label>
                        <Help expandId='codeKey' expand={expand} setExpand={setExpand}>
                        Code Key is used by this application to encrypt the content of the QR Code it displays.
                        Obviously, you need to pair your mobile app on the "Pair" tab when you have modified its value.
                        If you leave it blank,
            it uses the default value that comes with the installation of Global Input App.
                        </Help>

                </Field>
);

const Footer = styled.div`
        display: flex;
        margin:0;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding-bottom:50px;

`;

interface Props{
    loadSettings:()=>ConnectionSettings;
    saveSettings:(settings:ConnectionSettings)=>void;
}
export const SettingsEditor:React.FC<Props> = ({ loadSettings,saveSettings}) => {
    const [settings, setSettings] = useState(loadSettings);
    const [expand,setExpand]=useState('');
    const onSave = () => saveSettings(settings);
    return (
        <Form>
            <SecurityGroupField settings={settings} setSettings={setSettings} expand={expand} setExpand={setExpand}/>
            <CodeKeyField settings={settings} setSettings={setSettings} expand={expand} setExpand={setExpand}/>
            <ProxyField settings={settings} setSettings={setSettings}  expand={expand} setExpand={setExpand}/>
            <APIKeyField settings={settings} setSettings={setSettings} expand={expand} setExpand={setExpand}/>
            <Footer>
                <Button onClick={onSave}>Save</Button>
        </Footer>

        </Form>
);

};