import React from "react";

import { useConnectMobile, ConnectWindow, ConnectButton } from './mobile-ui';

import {AppContainer,DisplayCanvas} from './components';
import * as game from "./game";

const App: React.FC = () => {
    const {mobile,listeners} = useConnectMobile();

    const onCanvas = (canvas: any) => {
        game.initGame(canvas, listeners);
    };

    return (
        <AppContainer>
            <ConnectButton mobile={mobile}/>
            <ConnectWindow mobile={mobile}/>
                <DisplayCanvas onCanvas={onCanvas} />

        </AppContainer>
    );
}

export default App;