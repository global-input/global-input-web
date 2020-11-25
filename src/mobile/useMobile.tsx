
import { useCallback } from 'react';

import * as globalInput from 'global-input-react';////global-input-react////
////main////
import * as storage from '../storage';
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

    const setOnFieldChange = useCallback((onFieldChange: (field: globalInput.FormField) => void) => {
        mobile.setOnchange(({ field }) => {
            onFieldChange(field);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mobile.setOnchange]);
    ////dev-test codeData
    return { ...mobile, setOnFieldChange };
};
