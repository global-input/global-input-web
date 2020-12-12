import React, { useState } from 'react';
import VideoApp from './VideoApp';
import { ConnectionSettings } from './connection-settings';
import { AppPairing } from './app-pairing';

enum PAGES {
    VIDEO_APP,
    CONNECTION_SETTINGS,
    PAIRING
};

const App: React.FC = () => {
    const [page, setPage] = useState(PAGES.VIDEO_APP);
    const videoApp = () => setPage(PAGES.VIDEO_APP);
    const connectionSettings = () => setPage(PAGES.CONNECTION_SETTINGS);
    const pairing = () => setPage(PAGES.PAIRING);
    switch (page) {
        case PAGES.VIDEO_APP:
            return (<VideoApp connectionSettings={connectionSettings} />)
        case PAGES.CONNECTION_SETTINGS:
            return (<ConnectionSettings back={videoApp} pairing={pairing} />);
        case PAGES.PAIRING:
            return (<AppPairing back={videoApp} />);
        default:
            return null;
    }


};
export default App;