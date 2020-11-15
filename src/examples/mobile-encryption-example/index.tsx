import React, { useCallback, useState } from 'react';
import * as storage from './storage';

import MobileEncryption from './mobile-encryption';
import MobileDecryption from './mobile-decryption';
import MainPage from './MainPage';
import ConnectionSettings from './connection-settings';
import AppPairing from './app-pairing'
import QRCodeGenerator from './qr-code-generator';

enum PAGES {
    MAIN_PAGE,
    ENCRYPTION,
    DECRYPTION,
    EDIT_CONNECTION_SETTINGS,
    PAIRING,
    QR_CODE_GENERATOR
}

const App = () => {
    const [page, setPage] = useState(PAGES.MAIN_PAGE);
    const [domain, setDomain] = useState<string>('');
    const [cacheKey, setCacheKey] = useState(null);

    const mainPage = useCallback(() => setPage(PAGES.MAIN_PAGE), []);
    const encryption = useCallback(() => setPage(PAGES.ENCRYPTION), []);
    const decryption = useCallback(() => setPage(PAGES.DECRYPTION), []);
    const pairing = useCallback(() => setPage(PAGES.PAIRING), []);
    const editConnectionSettings = useCallback(() => setPage(PAGES.EDIT_CONNECTION_SETTINGS), []);
    const qrCodeGenerator=useCallback(()=>setPage(PAGES.QR_CODE_GENERATOR),[]);
    switch (page) {
        case PAGES.ENCRYPTION:
            return (<MobileEncryption back={mainPage} domain={domain} />);
        case PAGES.DECRYPTION:
            return (<MobileDecryption back={mainPage} domain={domain} />);
        case PAGES.MAIN_PAGE:
            return (<MainPage domain={domain} encryption={encryption}
                decryption={decryption}
                editConnectionSettings={editConnectionSettings} qrCodeGenerator={qrCodeGenerator}/>);
        case PAGES.EDIT_CONNECTION_SETTINGS:
            return (<ConnectionSettings back={mainPage} pairing={pairing} />);
        case PAGES.PAIRING:
            return (<AppPairing back={mainPage} />);
        case PAGES.QR_CODE_GENERATOR:
            return (<QRCodeGenerator back={mainPage}/>);
        default:
            return null;
    }
};
export default App;
