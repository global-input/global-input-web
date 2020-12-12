import React, { useState } from 'react';
import GameApp from './GameApp';
import { ConnectionSettings } from './connection-settings';
import { AppPairing } from './app-pairing';

enum PAGES {
    GAME_APP,
    CONNECTION_SETTINGS,
    PAIRING
};

const App: React.FC = () => {
    const [page, setPage] = useState(PAGES.GAME_APP);
    const gameApp = () => setPage(PAGES.GAME_APP);
    const connectionSettings = () => setPage(PAGES.CONNECTION_SETTINGS);
    const pairing = () => setPage(PAGES.PAIRING);
    switch (page) {
        case PAGES.GAME_APP:
            return (<GameApp connectionSettings={connectionSettings} />)
        case PAGES.CONNECTION_SETTINGS:
            return (<ConnectionSettings back={gameApp} pairing={pairing} />);
        case PAGES.PAIRING:
            return (<AppPairing back={gameApp} />);
        default:
            return null;
    }


};
export default App;