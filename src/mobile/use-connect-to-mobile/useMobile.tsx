import React, { useCallback } from 'react';
import styled from 'styled-components';

import * as globalInput from 'global-input-react';////global-input-react////

////main////
import * as storage from '../../storage';

export * from 'global-input-react';////global-input-react////


const QRCodeContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-center;
        align-items: flex-start;
        margin: 0;
        padding:0;
`;


const ErrorMessage = styled.div`
        color: red;
        font-size: 11;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        max-width:  350px;
        max-height: 100px;
        overflow: scroll;
`;




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
            <QRCodeContainer>
                <mobile.ConnectQR />
                <ErrorMessage>{errorMessage}</ErrorMessage>
            </QRCodeContainer>
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mobile.isError, mobile.isConnectionDenied, mobile.ConnectQR]);
    return { ...mobile, ConnectQR };
};
