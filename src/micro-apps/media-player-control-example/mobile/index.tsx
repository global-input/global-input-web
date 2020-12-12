import React, { useCallback } from 'react';
import * as globalInput from 'global-input-react';////global-input-react////

////main////
import * as storage from '../storage';

export * from 'global-input-react';////global-input-react////

export const useMobile = (initData: globalInput.InitData | (() => globalInput.InitData), connect: boolean = true) => {
    const connectionSettings = storage.loadConnectionSettings();
    const options: globalInput.ConnectOptions = {
        url: connectionSettings.url,////use your own server"
        apikey: connectionSettings.apikey,
        securityGroup: connectionSettings.securityGroup
    };
    const mobile = globalInput.useGlobalInputApp({
        initData, options, codeAES: connectionSettings.codeKey
    }, connect);
    ////dev-test codeData
    const ConnectQR = useCallback((props: globalInput.ConnectQRProps) => {
        let errorMessage = mobile.isConnectionDenied && "You can only use one mobile app per session. Disconnect to start a new session.";
        if (mobile.isError) {
            errorMessage = mobile.errorMessage;
        }
        return (
            <div style={styles.container}>
                <div style={styles.content}>
                    <mobile.ConnectQR {...props} />
                    {errorMessage && (<div style={styles.errorMessage}>{errorMessage}</div>)}
                </div>
            </div>
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mobile.isError, mobile.isConnectionDenied, mobile.ConnectQR]);
    return { ...mobile, ConnectQR };
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        margin: 0,
        padding: 0
    } as React.CSSProperties,
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-center',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        margin: 0,
        padding: 0
    } as React.CSSProperties,
    errorMessage: {
        color: 'red',
        fontSize: 11
    }
};

export const userWithDomainAsFormId = (initData: globalInput.InitData) => {
    if (initData?.form?.domain && initData?.form?.fields?.length) {
        const textFields = initData.form.fields.filter(f => {
            if ((!f.type) || f.type === 'text') {
                if (f.nLines && f.nLines > 1) {
                    return false;
                }
                return true;
            }
            return false;
        });
        if (!textFields.length) {
            return null;
        }
        initData.form.id = `###${textFields[0].id}###@${initData.form.domain}`;
    }
};
