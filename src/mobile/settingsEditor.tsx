import React, { useState, useCallback } from 'react';
import * as storage from './storage';
import { useMobile } from './useMobile';
import { Form, InputField, Footer, BackButton, SaveButton } from './layout';
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
            case FIELDS.codeKey.id:
                setCodeKey(field.value as string);
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




    return (
        <Form>
            <InputField id="url" label="Proxy URL" value={url} onChange={(value) => {
                setURL(value);
                mobile.sendValue(FIELDS.url.id, value);
            }} />
            <InputField id="apiKey" label="API Key" value={apikey} onChange={(value) => {
                setAPIKey(value);
                mobile.sendValue(FIELDS.apikey.id, value);
            }} />
            <InputField id="securityGroup" label="Security Group Key" value={securityGroup} onChange={(value) => {
                setSecurityGroup(value);
                mobile.sendValue(FIELDS.securityGroup.id, value);
            }} />
            <InputField id="codeKey" label="Code Key" value={codeKey} onChange={(value) => {
                setCodeKey(value);
                mobile.sendValue(FIELDS.codeKey.id, value);
            }} />
            <Footer>
                <BackButton onClick={back} />
                <SaveButton onClick={onSave} />
            </Footer>
        </Form>
    );
};
