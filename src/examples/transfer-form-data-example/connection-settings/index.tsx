import React, { useState, useCallback } from 'react';
import { BasicLayout, FormContainer, InputWithLabel, FormFooter, TextButton, MessageContainer, MessageLink } from '../app-layout';
import { loadConnectionSettings, saveConnectionSettings } from '../storage';

import { useMobile } from '../mobile';
interface Props {
    back: () => void;
    pairing: () => void;
}

const ConnectionSettings: React.FC<Props> = ({ back, pairing }) => {
    const [setting, setSettings] = useState(() => loadConnectionSettings());
    const setURL = (url: string) => setSettings(setting => ({ ...setting, url }));
    const setAPIKey = (apikey: string) => setSettings(setting => ({ ...setting, apikey }));
    const setSecurityGroup = (securityGroup: string) => setSettings(setting => ({ ...setting, securityGroup }));
    const setCodeKey = (codeKey: string) => setSettings(setting => ({ ...setting, codeKey }));

    const url = setting.url ? setting.url : '';
    const apikey = setting.apikey ? setting.apikey : '';
    const securityGroup = setting.securityGroup ? setting.securityGroup : '';
    const codeKey = setting.codeKey ? setting.codeKey : '';
    const initData = () => ({
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
    mobile.setOnFieldChange((field) => {
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
        if (saveConnectionSettings(setting)) {
            pairing();
        }
        else {
            back();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mobile.disconnect, back, setting]);

    const onURLChange = useCallback((url: string) => {
        setURL(url);
        mobile.sendValue(FIELDS.url.id, url);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mobile.sendValue]);

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
        <BasicLayout title="Connection Settings">
            <FormContainer>
                <InputWithLabel label="Proxy URL" id="url"
                    onChange={onURLChange}
                    value={url} />
                <InputWithLabel label="API Key" id="apikey"
                    onChange={onAPIKey}
                    value={apikey} />
                <InputWithLabel label="Security Group" id="securityGroup"
                    onChange={onSecurityGroupChanged}
                    value={securityGroup} />
                <InputWithLabel label="Code Key" id="codeKey"
                    onChange={onCodeKeyChanged}
                    value={codeKey} />
            </FormContainer>
            <FormFooter>
                <TextButton onClick={back} label='Cancel' />
                <TextButton onClick={onSave} label='Save' />
            </FormFooter>
            <MessageContainer>
                Proxy URL and the API Key are used when you use your own <MessageLink href="https://github.com/global-input/global-input-node">WebSocket Proxy Server</MessageLink>
    that provides connectivity between your mobile app and your browser extension, allowing them to exchange encrypted messages. The end-to-end encryption ensures that the messages are
    readable only to your mobile app and your browser extension. This means that you can install <MessageLink href="https://github.com/global-input/global-input-node">WebSocket Proxy Server</MessageLink> in an insecure environment.
    The Security Group is used for your applications to identify incoming connections in the same way that API Key is used for server applications to identify incoming connections. The Code Key is used to encrypt the content of the QR Code being displayed for mobile apps to scan to connect to your extension.
</MessageContainer>



        </BasicLayout>
    )

};


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
export default ConnectionSettings;