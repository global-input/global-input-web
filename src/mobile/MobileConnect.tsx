import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as globalInput from 'global-input-react';////global-input-react////
import useMobile from './useMobile';
import DisplayQRCode from './DisplayQRCode';
import ConnectButton from './connect-button';
import ConnectionError from './ConnectionError';

interface MobileConnectProps {
    initData: globalInput.InitData;
    onNotConnected?: React.ReactNode;
    silent?: boolean;
    notEnabled?: React.ReactNode;
    editConnectionSettings?: () => void;
    onFieldChange?: (field: globalInput.FormField, history) => void;
}

export const MobileConnect: React.FC<MobileConnectProps> = ({ initData, silent = true, editConnectionSettings, onFieldChange }) => {
    const [connect, setConnect] = useState(false);
    const mobile = useMobile(initData, connect);
    const history = useHistory();

    mobile.setOnFieldChange(field => {
        onFieldChange && onFieldChange(field, history);
    });
    const enableConnect = useCallback(() => setConnect(true), []);
    const disableConnect = useCallback(() => setConnect(false), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const restart = useCallback(() => mobile.restart(), [mobile.restart]);
    if (silent) {
        return null;
    }
    if (mobile.isConnected) {
        return null;
    }
    if (!connect) {
        return (<ConnectButton onClick={enableConnect} />);
    }
    if (mobile.isError) {
        return (<ConnectionError errorMessage={mobile.errorMessage} editConnectionSettings={editConnectionSettings} />);
    }
    return (
        <DisplayQRCode
            ConnectQR={mobile.ConnectQR}
            editConnectionSettings={editConnectionSettings}
            onClose={disableConnect}
            restart={restart}
            errorMessage={mobile.isConnectionDenied && "You can only use one mobile app per session. Disconnect to start a new session."} />
    );
};
