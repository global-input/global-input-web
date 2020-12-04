import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import * as globalInput from 'global-input-react';////global-input-react////
import * as storage from './storage';
import { useMobile } from './useMobile';

const FIELDS = {
    url: {
        id: "proxy-url",
        type: 'text',
        value: '',
    },
    apikey: {
        id: "apikey",
        type: 'text',
        value: '',
    },
    securityGroup: {
        id: "securityGroup",
        type: 'text',
        value: '',
    },
    codeKey: {
        id: "codeKey",
        type: 'text',
        value: '',
    },
    back: {
        id: 'back',
        type: 'button',
        label: 'Back',
        viewId: "row1"
    },
    save: {
        id: 'saveSettings',
        type: 'button',
        label: 'Save',
        viewId: "row1"
    },


}


export const SettingsEditor = ({ back, pairing }) => {

    const [setting, setSettings] = useState(() => storage.loadConnectionSettings());
    const setURL = (url: string) => setSettings(setting => ({ ...setting, url }));
    const setAPIKey = (apikey: string) => setSettings(setting => ({ ...setting, apikey }));
    const setSecurityGroup = (securityGroup: string) => setSettings(setting => ({ ...setting, securityGroup }));
    const setCodeKey = (codeKey: string) => setSettings(setting => ({ ...setting, codeKey }));

    const url = setting.url ? setting.url : '';
    const apikey = setting.apikey ? setting.apikey : '';
    const securityGroup = setting.securityGroup ? setting.securityGroup : '';
    const codeKey = setting.codeKey ? setting.codeKey : '';
    const initData = () => ({
        id: "connecting-settings",
        form: {
            title: "Connection Settings",
            fields: [{ ...FIELDS.url, value: url },
            { ...FIELDS.apikey, value: apikey },
            { ...FIELDS.securityGroup, value: securityGroup },
            { ...FIELDS.codeKey, value: codeKey },
            FIELDS.back,
            FIELDS.save]
        }
    });
    const mobile = useMobile(initData);
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.url.id:
                setURL(field.value as string);
                break;
            case FIELDS.apikey.id:
                setAPIKey(field.value as string);
                break;
            case FIELDS.securityGroup.id:
                setSecurityGroup(field.value as string);
                break;
            case FIELDS.back.id:
                back();
                break;
            case FIELDS.save.id:
                onSave();
        }
    });


    const onSave = useCallback(() => {
        mobile.disconnect();
        if (storage.saveConnectionSettings(setting)) {
            pairing();
        }
        else {
            back();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mobile.disconnect, back, setting]);


    const onAPIKey = useCallback((apikey: string) => {
        setAPIKey(apikey);
        mobile.sendValue(FIELDS.apikey.id, apikey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mobile.sendValue]);

    const onSecurityGroupChanged = useCallback((securityGroup: string) => {
        setSecurityGroup(securityGroup);
        mobile.sendValue(FIELDS.securityGroup.id, securityGroup);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mobile.sendValue]);

    const onCodeKeyChanged = useCallback((codeKey: string) => {
        setCodeKey(codeKey);
        mobile.sendValue(FIELDS.codeKey.id, codeKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mobile.sendValue]);
    return (
        <Form>
            <Field>
                <Input id="url"
                    onChange={evt => {
                        setURL(evt.target.value);
                        mobile.sendValue(FIELDS.url.id, evt.target.value);
                    }}
                    value={url} placeholder="Proxy URL" />
                <Label htmlFor="url">Proxy URL</Label>
            </Field>
            <Field>
                <Input id="apiKey"
                    onChange={evt => {
                        setAPIKey(evt.target.value);
                        mobile.sendValue(FIELDS.apikey.id, evt.target.value);
                    }}
                    value={apikey} placeholder="API Key" />
                <Label htmlFor="apiKey">API Key</Label>
            </Field>
            <Field>
                <Input id="securityGroup"
                    onChange={evt => {
                        setSecurityGroup(evt.target.value);
                        mobile.sendValue(FIELDS.securityGroup.id, evt.target.value);
                    }}
                    value={securityGroup} placeholder="Security Group Key" />
                <Label htmlFor="securityGroup">API Key</Label>
            </Field>
            <Field>
                <Input id="codeKey"
                    onChange={evt => {
                        setSecurityGroup(evt.target.value);
                        mobile.sendValue(FIELDS.codeKey.id, evt.target.value);
                    }}
                    value={codeKey} placeholder="Code Key" />
                <Label htmlFor="codeKey">API Key</Label>
            </Field>
            <Footer>
                <Button onClick={back}>Back</Button>
                <Button onClick={onSave}>Save</Button>
            </Footer>
        </Form>
    );
};

const Form = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:flex-start;
    align-items:flex-start;
    padding:10px;
`;

const Button = styled.button`
    text-decoration: none;
    font-size: 11px;
    border-radius: 4px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;
    padding: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color:#EEEEEE;
    margin-left:20px;
    display:flex;
`;



const Field = styled.div`
    position: relative;
    margin: 20px auto;
    width:100%;

`;
const Input = styled.input`
    display: block;
    line-height: 2em;
    margin: 0;
    padding-left: 10px;
    width: 100%;
    font-size: medium;
    border: 1px solid #f4f4f4;
    background-color: #f4f4f4;
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


const Footer = styled.div`
        display: flex;
        margin:0;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
`;