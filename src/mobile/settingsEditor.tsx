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
    width:70vw;
    max-width:400px;
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
    @media screen and (min-height:700px){
        height:500px;
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




const ProxyField=({settings, setSettings,expand,setExpand})=>(
    <Field>
                        <Input id="url" onChange={evt=>{
                          setSettings(setting => ({ ...setting, url:evt.target.value}));
                        }} value={settings.url ? settings.url : ''} placeholder="Proxy URL"
                        onFocus={()=>setExpand('url')}/>
                        <Label htmlFor="url">
                        Proxy URL
                        </Label>
                        <Help expandId='url' expand={expand} setExpand={setExpand}>
                                Proxy URL identifies the <WebSocketServer>WebSocket server</WebSocketServer> responsible for proxying messages between your mobile app and this application.
            You can install and use your own <WebSocketServer>WebSocket servers</WebSocketServer> that can even run in insecure environments thanks to the end-to-end encryption that secures messages between your mobile app and this application.
                        </Help>
    </Field>
);



 const APIKeyField=({settings, setSettings,expand,setExpand}) =>(
    <Field>
                        <Input id="apiKey" onChange={evt=>{
                          setSettings(setting => ({ ...setting, apikey:evt.target.value}));
                        }} value={settings.apikey ? settings.apikey : ''} placeholder="API Key"
                        onFocus={()=>setExpand('apikey')}/>
                        <Label htmlFor="apiKey">
                            API Key
                        </Label>
                        <Help expandId='apikey' expand={expand} setExpand={setExpand}>
API Key is used by the <WebSocketServer>WebSocket servers</WebSocketServer> to identify the incoming connections.
There is no security implications for exposing this value except for
the possible impact on the performance of the WebSocket server due to its increased workload, since a WebSocket server does not hold any sensitive information and is only responsible for proxying encrypted messages (encrypted with end-to-end encryption) between your mobile app and this application,
                        </Help>



    </Field>
);


const SecurityGroupField=({settings, setSettings,expand,setExpand})=>(
    <Field>
                        <Input id="securityGroup" onChange={evt=>{
                          setSettings(setting => ({ ...setting, securityGroup:evt.target.value}));
                        }} value={settings.securityGroup?settings.securityGroup:''} placeholder="Security Group Key"
                        onFocus={()=>setExpand('securityGroup')}/>
                        <Label htmlFor="securityGroup">Security Group Key</Label>
                        <Help expandId='securityGroup' expand={expand} setExpand={setExpand}>
                        Security Group Key is used by this client application to verify
                        the incoming connections coming from your mobile app
            in the same way that API Keys are used by server applications to identify incoming requests on the server side.
            You need to pair your mobile app on the "Pair" tab every time after you have modified this value to be able connect to this application.
                        </Help>

    </Field>
);
const CodeKeyField=({settings, setSettings,expand,setExpand})=>(
                <Field>
                        <Input id="codeKey" onChange={evt=>{
                          setSettings(setting => ({ ...setting, codeKey:evt.target.value}));
                        }} value={settings.codeKey?settings.codeKey:''} placeholder="Code Key"
                        onFocus={()=>setExpand('codeKey')}/>
                        <Label htmlFor="codeKey">Code Key</Label>
                        <Help expandId='codeKey' expand={expand} setExpand={setExpand}>
                        Code Key is used by this application to encrypt the content of the QR Code it displays.
                        In order for your mobile app to be able to decrypt content of the QR code,
                        you need to pair your mobile app on the "Pair" tab every time after you have modified it.
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