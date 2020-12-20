import React, {useState} from 'react';
import styled from 'styled-components';
import {ProxyURLHelp,APIKeyHelp,SecurityGroupKeyHelp,CodeKeyHelp} from './help';

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
    max-width:400px;
    height:80vh;
    max-height:400px;
`;




const Field = styled.div`
    position: relative;
    width:100%;
    padding-top:15px;

`;
const Input = styled.input`
    display: block;
    line-height: 2em;
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





const ProxyField=({settings, setSettings})=>(
    <Field>
                        <Input id="url" onChange={evt=>{
                          setSettings(setting => ({ ...setting, url:evt.target.value}));
                        }} value={settings.url ? settings.url : ''} placeholder="Proxy URL"/>
                        <Label htmlFor="url">Proxy URL</Label>
                        <ProxyURLHelp/>
    </Field>
);


 const APIKeyField=({settings, setSettings}) =>(
    <Field>
                        <Input id="apiKey" onChange={evt=>{
                          setSettings(setting => ({ ...setting, apikey:evt.target.value}));
                        }} value={settings.apikey ? settings.apikey : ''} placeholder="API Key"/>
                        <Label htmlFor="apiKey">API Key</Label>
                        <APIKeyHelp/>
    </Field>
);


const SecurityGroupField=({settings, setSettings})=>(
    <Field>
                        <Input id="securityGroup" onChange={evt=>{
                          setSettings(setting => ({ ...setting, securityGroup:evt.target.value}));
                        }} value={settings.securityGroup?settings.securityGroup:''} placeholder="Security Group Key"/>
                        <Label htmlFor="securityGroup">Security Group Key</Label>
                        <SecurityGroupKeyHelp/>
    </Field>
);
const CodeKeyField=({settings, setSettings})=>(
                <Field>
                        <Input id="codeKey" onChange={evt=>{
                          setSettings(setting => ({ ...setting, codeKey:evt.target.value}));
                        }} value={settings.codeKey?settings.codeKey:''} placeholder="Code Key"/>
                        <Label htmlFor="codeKey">Code Key</Label>
                        <CodeKeyHelp/>
                </Field>
);

const Footer = styled.div`
        display: flex;
        margin:0;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
`;


export const SettingsEditor = ({ loadSettings,saveSettings}) => {
    const [settings, setSettings] = useState(loadSettings);
    const [help,setHelp]=useState(null);
    const onSave = () => saveSettings(settings);
    return (
        <Form>
            <SecurityGroupField settings={settings} setSettings={setSettings}/>
            <CodeKeyField settings={settings} setSettings={setSettings}/>
            <ProxyField settings={settings} setSettings={setSettings}/>
            <APIKeyField settings={settings} setSettings={setSettings}/>
            <Footer>
                <Button onClick={onSave}>Save</Button>
        </Footer>

        </Form>
);

};