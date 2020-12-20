import React from 'react';
import styled from 'styled-components';
import {ProxyURLHelp,APIKeyHelp,SecurityGroupKeyHelp,CodeKeyHelp} from './help';

export const Button = styled.button`
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

    &: hover{


        transform: translateY(-3px);
        box-shadow: 0 0 50px #ffff;
    }

`;

export const Form = styled.div`
    display:flex;
    flex-direction:column;
    width:95%;
    justify-content:flex-start;
    align-items:flex-start;
    padding:10px;
    max-width:80vw;
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
        transform: translateY(-5px);
        transition: 0.2s ease-in-out transform;
    }
    width:100%;
`;
const Label = styled.label.attrs(props => ({
    className: "control-label"

}))`
    display: block;
    position: absolute;
    opacity: 0;
    bottom: 1.9rem;
    color: #5d5d5d;
    transition: 0.2s ease-in-out transform;
    font-size: 12px;
`;



export const ProxyField=({url,onChange})=>(
    <Field>
                        <Input id="url" onChange={onChange} value={url} placeholder="Proxy URL"/>
                        <Label htmlFor="url">Proxy URL</Label>
                        <ProxyURLHelp/>
    </Field>
);

export const APIKeyField=({apikey,onChange}) =>(
    <Field>
                        <Input id="apiKey" onChange={onChange} value={apikey} placeholder="API Key"/>
                        <Label htmlFor="apiKey">API Key</Label>
                        <APIKeyHelp/>
    </Field>
);

export const SecurityGroupField=({securityGroup,onChange})=>(
    <Field>
                        <Input id="securityGroup" onChange={onChange} value={securityGroup} placeholder="Security Group Key"/>
                        <Label htmlFor="securityGroup">Security Group Key</Label>
                        <SecurityGroupKeyHelp/>
    </Field>
);
export const CodeKeyField=({codeKey,onChange})=>(
                <Field>
                        <Input id="codeKey" onChange={onChange} value={codeKey} placeholder="Code Key"/>
                        <Label htmlFor="codeKey">Code Key</Label>
                        <CodeKeyHelp/>
                </Field>
);
